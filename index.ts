#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

interface ComparisonResult {
  folderA: string;
  folderB: string;
  uniqueInA: string[];
  common: string[];
  uniqueInB: string[];
  copiedFiles: string[];
  deletedFiles: string[];
  errors: string[];
}

/**
 * Recursively delete all contents of a folder (files and subdirectories)
 */
function deleteFolderContentsRecursive(folderPath: string): string[] {
  const deleted: string[] = [];

  try {
    const entries = fs.readdirSync(folderPath);

    for (const entry of entries) {
      const fullPath = path.join(folderPath, entry);
      
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // Recursively delete subdirectories
          const nestedDeleted = deleteFolderContentsRecursive(fullPath);
          deleted.push(...nestedDeleted);
          fs.rmdirSync(fullPath);
        } else {
          // Delete file
          fs.unlinkSync(fullPath);
          deleted.push(entry);
        }
      } catch (error) {
        console.warn(`Warning: Could not delete ${entry}`);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${folderPath}`);
  }

  return deleted;
}

/**
 * Recursively get all files from a folder and its nested subfolders
 * Returns relative paths from the root folder (e.g., "subfolder/file.txt")
 */
function getAllFilesRecursive(folderPath: string, relativePath: string = ""): string[] {
  const files: string[] = [];

  try {
    const entries = fs.readdirSync(folderPath);

    for (const entry of entries) {
      const fullPath = path.join(folderPath, entry);
      const relPath = relativePath ? path.join(relativePath, entry) : entry;

      try {
        const stat = fs.statSync(fullPath);
        if (stat.isFile()) {
          files.push(relPath);
        } else if (stat.isDirectory()) {
          // Recursively get files from subdirectories
          const nestedFiles = getAllFilesRecursive(fullPath, relPath);
          files.push(...nestedFiles);
        }
      } catch (error) {
        // Skip entries that can't be accessed
        console.warn(`Warning: Could not access ${entry}`);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${folderPath}`);
  }

  return files;
}

async function compareFolders(
  folderA: string,
  folderB: string,
  shouldCopy: boolean = true,
  syncMode: boolean = false
): Promise<ComparisonResult> {
  const result: ComparisonResult = {
    folderA,
    folderB,
    uniqueInA: [],
    common: [],
    uniqueInB: [],
    copiedFiles: [],
    deletedFiles: [],
    errors: [],
  };

  try {
    // Validate folders exist
    if (!fs.existsSync(folderA)) {
      result.errors.push(`Folder A does not exist: ${folderA}`);
      return result;
    }

    if (!fs.existsSync(folderB)) {
      result.errors.push(`Folder B does not exist: ${folderB}`);
      return result;
    }

    // Get list of all files (including nested) from each folder
    const filesA = getAllFilesRecursive(folderA);
    let filesB = getAllFilesRecursive(folderB);

    const filesASet = new Set(filesA);
    const filesBSet = new Set(filesB);

    // In sync mode, delete all contents from B if folders are different
    if (syncMode && filesB.length > 0) {
      const isDifferent = filesA.length !== filesB.length || 
                          !filesA.every(f => filesBSet.has(f));
      
      if (isDifferent) {
        console.log(`Sync mode: Deleting all contents from ${folderB}...\n`);
        const deleted = deleteFolderContentsRecursive(folderB);
        result.deletedFiles = deleted;
        filesB = []; // Reset filesB after deletion
        deleted.forEach((file) => console.log(` Deleted: ${file}`));
      }
    }

    // Find unique and common files
    for (const file of filesA) {
      if (filesBSet.has(file)) {
        result.common.push(file);
      } else {
        result.uniqueInA.push(file);
      }
    }

    for (const file of filesB) {
      if (!filesASet.has(file)) {
        result.uniqueInB.push(file);
      }
    }

    // Copy files from A to B if requested
    // In sync mode: copy all files; otherwise: copy only unique files
    if (shouldCopy) {
      const filesToCopy = syncMode ? filesA : result.uniqueInA;
      if (filesToCopy.length > 0) {
        for (const file of filesToCopy) {
          try {
            const srcPath = path.join(folderA, file);
            const destPath = path.join(folderB, file);
            
            // Create parent directories if they don't exist
            const destDir = path.dirname(destPath);
            if (!fs.existsSync(destDir)) {
              fs.mkdirSync(destDir, { recursive: true });
            }
            
            fs.copyFileSync(srcPath, destPath);
            result.copiedFiles.push(file);
            console.log(`✓ Copied: ${file}`);
          } catch (error) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            result.errors.push(`Failed to copy ${file}: ${errorMsg}`);
          }
        }
      }
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    result.errors.push(`Comparison error: ${errorMsg}`);
  }

  return result;
}

function printResults(result: ComparisonResult): void {
  console.log("\n" + "=".repeat(60));
  console.log("FOLDER COMPARISON REPORT");
  console.log("=".repeat(60));
  console.log(`Folder A (Source): ${result.folderA}`);
  console.log(`Folder B (Destination): ${result.folderB}`);
  console.log("=".repeat(60));

  if (result.uniqueInA.length > 0) {
    console.log(`\n Unique in Folder A (${result.uniqueInA.length}):`);
    result.uniqueInA.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.common.length > 0) {
    console.log(`\n Common files (${result.common.length}):`);
    if(result.common.length < 5) result.common.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.uniqueInB.length > 0) {
    console.log(`\n Unique in Folder B (${result.uniqueInB.length}):`);
    result.uniqueInB.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.deletedFiles.length > 0) {
    console.log(`\n Deleted files (${result.deletedFiles.length}):`)
    result.deletedFiles.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.copiedFiles.length > 0) {
    console.log(`\n Successfully copied files (${result.copiedFiles.length}):`)
    result.copiedFiles.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.errors.length > 0) {
    console.log(`\n Errors (${result.errors.length}):`);
    result.errors.forEach((error) => console.log(`  - ${error}`));
  }

  console.log("\n" + "=".repeat(60) + "\n");
}

// Main execution
async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log("Usage: npx ts-node index.ts <folderA> <folderB> [options]");
    console.log("\nOptions:");
    console.log("  --no-copy    Only compare, don't copy files");
    console.log("  --sync       Delete all from B and copy all from A (full sync)");
    console.log(
      "\nExample: npx ts-node index.ts ./source ./destination"
    );
    console.log("Example: npx ts-node index.ts ./source ./destination --sync\n");
    process.exit(1);
  }

  const folderA = args[0];
  const folderB = args[1];
  const shouldCopy = !args.includes("--no-copy");
  const syncMode = args.includes("--sync");

  if (syncMode) {
    console.log(`SYNC MODE: Folder B will be replaced with exact copy of Folder A\n`);
  }
  console.log(`Comparing folders...\n`);
  const result = await compareFolders(folderA, folderB, shouldCopy, syncMode);
  printResults(result);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
