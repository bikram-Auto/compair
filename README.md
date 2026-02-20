# Folder Compair Script

A TypeScript script that compares two folders and copies unique files from the source folder to the destination folder.

## Features

-  Compares files in two folders
-  Identifies unique files in each folder
-  Identifies common files
-  Automatically copies unique files from source to destination
-  Detailed comparison report
-  Error handling with clear messages

## Installation

```bash
npm install
```

## Usage

### Basic Usage (with automatic copying)

```bash
npm start -- ./folderA ./folderB
```

Or using ts-node directly:

```bash
npx ts-node index.ts ./folderA ./folderB
```

### Comparison Only (without copying)

If you want to compare folders without copying files, use the `--no-copy` flag:

```bash
npx ts-node index.ts ./folderA ./folderB --no-copy
```

## Examples

**Example 1: Compare and copy from source to destination**
```bash
npx ts-node index.ts ./source ./backup
```

This will:
1. Compare all files in `./source` and `./backup`
2. Show which files are unique in each folder
3. Show common files
4. Copy unique files from `./source` to `./backup`

**Example 2: Test comparison without making changes**
```bash
npx ts-node index.ts ./folderA ./folderB --no-copy
```

This will only show the comparison report without copying any files.

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

- Only files are compared and copied (subdirectories are ignored)
- If a file with the same name exists in both folders, it's considered a common file and not copied
- The script uses file names for comparison. Files with identical names but different content are considered the same
- Make sure you have read permissions on Folder A and write permissions on Folder B
