import * as fs from "fs";
import * as path from "path";

interface ComparisonResult {
  folderA: string;
  folderB: string;
  uniqueInA: string[];
  common: string[];
  uniqueInB: string[];
  copiedFiles: string[];
  errors: string[];
}

async function compareFolders(
  folderA: string,
  folderB: string,
  shouldCopy: boolean = true
): Promise<ComparisonResult> {
  const result: ComparisonResult = {
    folderA,
    folderB,
    uniqueInA: [],
    common: [],
    uniqueInB: [],
    copiedFiles: [],
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

    // Get list of files in each folder
    const filesA = fs
      .readdirSync(folderA)
      .filter(
        (file) => fs.statSync(path.join(folderA, file)).isFile()
      );
    const filesB = fs
      .readdirSync(folderB)
      .filter(
        (file) => fs.statSync(path.join(folderB, file)).isFile()
      );

    const filesASet = new Set(filesA);
    const filesBSet = new Set(filesB);

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

    // Copy unique files from A to B if requested
    if (shouldCopy && result.uniqueInA.length > 0) {
      for (const file of result.uniqueInA) {
        try {
          const srcPath = path.join(folderA, file);
          const destPath = path.join(folderB, file);
          fs.copyFileSync(srcPath, destPath);
          result.copiedFiles.push(file);
          console.log(`✓ Copied: ${file}`);
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          result.errors.push(`Failed to copy ${file}: ${errorMsg}`);
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
    console.log(`\n📁 Unique in Folder A (${result.uniqueInA.length}):`);
    result.uniqueInA.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.common.length > 0) {
    console.log(`\n✓ Common files (${result.common.length}):`);
    result.common.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.uniqueInB.length > 0) {
    console.log(`\n Unique in Folder B (${result.uniqueInB.length}):`);
    result.uniqueInB.forEach((file) => console.log(`  - ${file}`));
  }

  if (result.copiedFiles.length > 0) {
    console.log(`\n Successfully copied files (${result.copiedFiles.length}):`);
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
    console.log("Usage: npx ts-node index.ts <folderA> <folderB> [--no-copy]");
    console.log(
      "\nExample: npx ts-node index.ts ./source ./destination\n"
    );
    process.exit(1);
  }

  const folderA = args[0];
  const folderB = args[1];
  const shouldCopy = !args.includes("--no-copy");

  console.log(`Comparing folders...\n`);
  const result = await compareFolders(folderA, folderB, shouldCopy);
  printResults(result);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
