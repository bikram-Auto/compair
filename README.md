# Compair - Simple Folder Synchronization Tool

**Compare and sync folders instantly with a single tiny executable (7.8 KB).**

A fast, portable tool that compares two folders and manages file synchronization. Perfect for backups, file syncing, and keeping folders in sync across systems.

## Key Features

- **Super Tiny**: Just 7.8 KB - copy and run immediately
- **Portable**: Works on macOS, Linux, and Windows
- **Self-Contained**: No installation, no dependencies to manage
- **Three Safety Modes**: Preview, Safe Copy, or Full Sync
- **Nested Folders**: Handles files in subdirectories
- **Detailed Reports**: See exactly what's being compared and copied
- **Auto-Optimization**: Automatically detects large directories (100k+ files) and optimizes stack size

## Quick Start (30 Seconds)

### macOS / Linux
```bash
chmod +x ./bin/compair-single-file
./bin/compair-single-file /path/to/source /path/to/destination
```

### Windows
```bash
.\bin\compair-single.bat C:\path\to\source C:\path\to\destination
```

## Download Pre-Built Executables

### Download Standalone Files (v1.2.0)
**[Download Standalone Compair v1.2.0](https://github.com/bikram-Auto/compair/releases/download/v1.2.0/standalone-compair_v1.2.0.zip)**

Extract the ZIP file and choose your platform:
- **macOS (ARM64)**: `compair-macos-arm64` - For Apple Silicon Macs
- **Linux (x64)**: `compair-linux-x64` - For Linux systems
- **Windows (x64)**: `compair-win-x64.exe` - For Windows systems

For detailed setup instructions, see [GUIDE.txt](./standalone-compair/GUIDE.txt) included in the release.

### Local Files
All executables are in the `./bin` or `./COMPAIR` directory:

- **compair-single-file** (7.8 KB) - RECOMMENDED for macOS/Linux
- **compair-standalone-single.js** (7.8 KB) - JavaScript version
- **compair-single.bat** - Windows batch wrapper

Just copy the file you need and run it. No installation required!

## Three Operating Modes

### 1. **Safe Mode** (Default) - Recommended
Copy only unique files from source to destination. Your destination files are never deleted.
```bash
./bin/compair-single-file /source /destination
```

### 2. **Preview Mode** (Safest)
See what would be copied WITHOUT actually copying anything. Perfect for testing!
```bash
./bin/compair-single-file /source /destination --no-copy
```

### 3. **Sync Mode** (Full Replace)
Delete ALL files in destination, then copy everything from source. Use with caution!
```bash
./bin/compair-single-file /source /destination --sync
```

Warning: Sync mode permanently deletes all contents from the destination folder. Only use after backing up or when you're absolutely sure.

### 4. **Filter Mode** (NEW in v1.2.0)
Copy or sync only specific files or folders instead of everything.
```bash
# Copy only a single file
./bin/compair-single-file /source /destination --only "folder/file.txt"

# Copy only a folder
./bin/compair-single-file /source /destination --only "foldername"

# Combine with other modes
./bin/compair-single-file /source /destination --only "folder" --no-copy
./bin/compair-single-file /source /destination --only "folder" --sync
```

## Installation

### Option 1: Use Pre-Built Executable (Easiest)
Just download and run the executable from `./bin` or `./COMPAIR` folder.

### Option 2: Build from Source
```bash
npm install
npm run build
```

## Command-Line Options

| Flag | Description | Example |
|------|-------------|---------|
| `--no-copy` | Preview only, don't copy files | `./compair /src /dst --no-copy` |
| `--sync` | Full sync: delete all in dest and copy all from src | `./compair /src /dst --sync` |
| `--only <path>` | Copy/compare only specific file or folder | `./compair /src /dst --only "folder"` |

**Combine flags:**
```bash
# Preview + filter (no copy)
./bin/compair-single-file /source /destination --only "folder" --no-copy

# Sync + filter
./bin/compair-single-file /source /destination --only "folder" --sync
```

## Complete Usage Guide

### Show Help
```bash
./bin/compair-single-file
```

### Basic Usage Examples

**Compare and copy from source to destination:**
```bash
./bin/compair-single-file '/source' '/destination'
```

**Preview what would be copied (NO changes):**
```bash
./bin/compair-single-file '/source' '/destination' --no-copy
```

**Full sync - make destination identical to source:**
```bash
./bin/compair-single-file /Volumes/ExternalDrive ~/cloud-backup --sync
```

**Copy only specific files/folders:**
```bash
./bin/compair-single-file /source /destination --only "subfolder"
./bin/compair-single-file /source /destination --only "config.json"
```

## Real-World Examples

### Example 1: Daily Document Backup
```bash
./compair-single-file '/source' '/destination'
```

### Example 2: Mirror External Drive
```bash
./compair-single-file /Volumes/ExternalDrive ~/cloud-backup --sync
```

### Example 3: Sync Downloads
```bash
./compair-single-file ~/Downloads ~/Downloads-Archive
```

### Example 4: Scheduled Backup (macOS/Linux cron)
```bash
0 2 * * * ~/compair-single-file ~/documents ~/backup --sync
# Runs daily at 2 AM
```

### Example 5: Multiple Backups
```bash
./compair-single-file ~/data ~/backup1 --sync
./compair-single-file ~/data ~/backup2 --sync
./compair-single-file ~/data ~/backup3 --sync
```

### Example 6: Project Sync
```bash
./compair-single-file ~/projects/active ~/projects/archive
```

## Safety First - Best Practice

Always follow these steps:

**Step 1: Always preview first** (safest)
```bash
./compair-single-file /source /destination --no-copy
```

**Step 2: If it looks good, do the copy** (safe)
```bash
./compair-single-file /source /destination
```

**Step 3: Only use --sync if you backed up destination** (advanced)
```bash
./compair-single-file /source /destination --sync
```

## Output

The script generates a detailed report showing:

- **Unique in Source**: Files that exist only in the source folder
- **Common files**: Files that exist in both folders
- **Unique in Destination**: Files that exist only in the destination folder
- **Successfully copied files**: Files that were copied from source to destination
- **Errors**: Any errors that occurred during the process

### Example Output

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

## Deployment - How to Use on Other Machines

### Option 1: Use on Current Machine
```bash
chmod +x compair-single-file
./compair-single-file ~/Documents ~/Backup
```

### Option 2: Transfer to Another Machine via SSH
```bash
scp compair-single-file user@other-machine:~/
# On their machine:
chmod +x ~/compair-single-file
~/compair-single-file ~/source ~/destination
```

### Option 3: Compress for Email/Transfer
```bash
tar -czf compair.tar.gz compair-single-file
# Email/transfer the file
# On receiving machine:
tar -xzf compair.tar.gz
chmod +x compair-single-file
./compair-single-file /source /destination
```

### Option 4: Global Access (macOS/Linux)
```bash
sudo cp compair-single-file /usr/local/bin/compair
# Now use from anywhere:
compair /any/source /any/destination
```

### Option 5: Add to System PATH
**macOS/Linux:**
```bash
export PATH="$PATH:~/path/to/compair"
```

**Windows:**
Copy `compair-single.bat` and `compair-standalone-single.js` to `C:\tools\` and add `C:\tools\` to system PATH.

## Pro Tips

### Tip 1: Create an Alias
```bash
echo "alias compair='~/compair-single-file'" >> ~/.zshrc
source ~/.zshrc
compair /source /destination
```

### Tip 2: Create a Backup Script
```bash
#!/bin/bash
~/compair-single-file ~/documents ~/backup-$(date +%Y%m%d) --sync
```

### Tip 3: Use in Scripts
```bash
#!/bin/bash
if ~/compair-single-file /src /dst --no-copy; then
  ~/compair-single-file /src /dst
  echo "Sync complete!"
fi
```

## Troubleshooting

### Filter Specific Files (v1.2.0+)

**Copy only one file:**
```bash
./bin/compair-single-file /source /destination --only "path/to/file.txt"
```

**Copy only a folder and its contents:**
```bash
./bin/compair-single-file /source /destination --only "foldername"
```

**Preview filtered changes (no copy):**
```bash
./bin/compair-single-file /source /destination --only "folder" --no-copy
```

**Sync only specific subset:**
```bash
./bin/compair-single-file /source /destination --only "folder" --sync
```

### "Maximum call stack size exceeded" with very large directories
As of v1.1.0, this is handled **automatically**!

The tool now:
1. **Auto-detects** the number of files in both folders
2. **Calculates** the required stack size dynamically
3. **Restarts** with optimized stack automatically if needed

You don't need to do anything manually! The tool will detect large directories and optimize itself.

**Optional**: If you want to manually specify a stack size:
```bash
node --stack-size=2048 dist/index.js /source /destination --no-copy
```

### "command not found"
- Make sure you're in the right directory
- Try: `./compair-single-file` (with `./`)
- Or: `/full/path/to/compair-single-file`

### "Permission denied"
```bash
chmod +x compair-single-file
./compair-single-file /source /destination
```

### "node: command not found"
- Install Node.js from https://nodejs.org/
- Verify: `node --version` (should be v20+)

### "No such file or directory"
- Check paths exist: `ls /path/to/source`
- Use correct absolute or relative paths

### "Warning: Could not access [folder]"
- Check read permissions on source folder
- Check write permissions on destination folder
- The tool will skip inaccessible files

## Important Notes

- Compares all files, including those in nested folders and subdirectories
- Maintains folder structure when copying
- Files with the same name are considered "common" and not copied (unless using `--sync`)
- In sync mode, deleted files cannot be recovered
- Requires read permissions on source folder and write permissions on destination

## System Requirements

- **Node.js**: 20.0.0+
- **File Size**: 7.8 KB
- **Platforms**: macOS, Linux, Windows
- **Dependencies**: None (fully self-contained)

## Version & License

- **Version**: 1.2.0
- **License**: MIT
- **Status**: Stable and production-ready

## Release Notes

### v1.2.0 (February 2026)
**New Features:**
-  **`--only flag`**: Copy or sync only specific files/folders instead of everything
  - Copy single files: `--only "folder/file.txt"`
  - Copy entire folders: `--only "foldername"`
  - Works with all modes: `--no-copy`, `--sync`
  - Examples: `./compair /src /dst --only "folder" --sync`

**Improvements:**
- Enhanced path filtering with cross-platform support (Windows/macOS/Linux)
- Better console output for filtered operations
- Comprehensive error handling for edge cases

### v1.1.0 (Previous)
- Auto-detect and optimize stack size for large directories (100k+ files)
- Fixed "Maximum call stack size exceeded" errors
- Standalone executables for all platforms
