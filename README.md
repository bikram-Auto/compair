# Folder Compair Script

A TypeScript script that compares two folders and copies unique files from the source folder to the destination folder.

## Features

-  Compares files in two folders (including nested files)
-  Identifies unique files in each folder
-  Identifies common files
-  Automatically copies unique files from source to destination
-  **Sync mode**: Delete all contents from destination and copy entire source folder
-  Handles nested folders and subdirectories
-  Detailed comparison report
-  Error handling with clear messages

## Installation

```bash
npm install
npm run build
```

## Quick Start (Using Pre-built Executables)

Pre-built executable wrappers are available for all operating systems in the `./bin` directory.

### macOS / Linux
```bash
./bin/compair /path/to/folderA /path/to/folderB
```

### Windows
```bash
bin\compair.bat C:\path\to\folderA C:\path\to\folderB
```

### Or use with npm
```bash
npm start -- ./folderA ./folderB
```

## Usage

### Basic Usage (with automatic copying)

**Using executable:**
```bash
./bin/compair ./folderA ./folderB
```

**Using npm:**
```bash
npm start -- ./folderA ./folderB
```

**Using ts-node directly:**
```bash
npx ts-node index.ts ./folderA ./folderB
```

### Comparison Only (without copying)

If you want to compare folders without copying files, use the `--no-copy` flag:

**Using executable:**
```bash
./bin/compair ./folderA ./folderB --no-copy
```

**Using npm:**
```bash
npm start -- ./folderA ./folderB --no-copy
```

### Sync Mode (Full Replace)

To delete all contents from folder B and replace it with an exact copy of folder A, use the `--sync` flag:

**Using executable:**
```bash
./bin/compair ./folderA ./folderB --sync
```

**Using npm:**
```bash
npm start -- ./folderA ./folderB --sync
```

This will:
1. Delete all files and folders from folder B
2. Copy all files and folders from folder A to folder B
3. Result: folder B becomes an exact copy of folder A

**Warning**: Use `--sync` with caution as it permanently deletes all contents from the destination folder.

## Examples

**Example 1: Compare and copy from source to destination**
```bash
npx ts-node index.ts ./source ./backup
```

This will:
1. Compare all files in `./source` and `./backup` (including nested folders)
2. Show which files are unique in each folder
3. Show common files
4. Copy unique files from `./source` to `./backup`

**Example 2: Test comparison without making changes**
```bash
npx ts-node index.ts ./folderA ./folderB --no-copy
```

This will only show the comparison report without copying any files.

**Example 3: Full sync - replace destination with source**
```bash
npx ts-node index.ts /Users/bikram/Desktop/IP-Jmeter-report /Users/bikram/Desktop/backup --sync
```

This will:
1. Delete all existing files and folders from `/Users/bikram/Desktop/backup`
2. Copy all files and folders from `/Users/bikram/Desktop/IP-Jmeter-report` to the backup
3. Both folders will be identical after sync completes

## Output

The script generates a detailed report showing:

-  **Unique in Folder A**: Files that exist only in the source folder
-  **Common files**: Files that exist in both folders
-  **Unique in Folder B**: Files that exist only in the destination folder
-  **Successfully copied files**: Files that were copied from A to B
-  **Errors**: Any errors that occurred during the process

## Example Output

```
============================================================
FOLDER COMPARISON REPORT
============================================================
Folder A (Source): ./source
Folder B (Destination): ./backup
============================================================

 Unique in Folder A (2):
  - file1.txt
  - file2.pdf

 Common files (3):
  - readme.md
  - config.json
  - data.csv

 Unique in Folder B (1):
  - extra_file.txt

 Successfully copied files (2):
  - file1.txt
  - file2.pdf

============================================================
```

## Notes

- Compares and copies all files, including those in nested folders and subdirectories
- Maintains folder structure when copying (nested files are copied with their relative paths)
- If a file with the same name exists in both folders, it's considered a common file and not copied (unless using `--sync`)
- The script uses file names and paths for comparison. Files with identical names but different content are considered the same
- In sync mode, deleted files cannot be recovered, so use with caution
- Make sure you have read permissions on Folder A and write permissions on Folder B
