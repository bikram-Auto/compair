# Folder Compair - Standalone Executable

Complete guide for using the standalone executable version of Folder Compair without needing to install dependencies.

## ✨ Features

- **Recursively compare** nested folders and files
- **Identify unique files** in each folder
- **Find common files** across both folders
- **Auto-copy** unique files from source to destination
- **Sync mode** - delete all from destination and copy entire source
- **Works on all OS** - macOS, Windows, Linux
- **No dependencies** - just download and run!

## 📦 Distribution Files

You have two standalone executable options:

### Option 1: Shell Script Wrapper (Recommended for most users)
- **macOS/Linux**: `bin/compair-standalone`
- **Windows**: `bin/compair.bat` (batch file wrapper)
- **Requirement**: Node.js 20+ must be installed
- **Size**: ~50 KB (very lightweight)

### Option 2: Original Wrapper Scripts
- **macOS/Linux**: `bin/compair`
- **Windows**: `bin/compair.bat`
- **Requirement**: Node.js 20+ must be installed
- **Size**: ~50 KB

## 🚀 Quick Start

### macOS / Linux

```bash
# Download or clone the repository
cd compair

# Make the executable
chmod +x bin/compair-standalone

# Run it
./bin/compair-standalone /path/to/source /path/to/destination

# With options
./bin/compair-standalone /path/to/source /path/to/destination --sync
```

### Windows

```bash
cd compair

# Run it
bin\compair.bat C:\path\to\source C:\path\to\destination

# With options
bin\compair.bat C:\path\to\source C:\path\to\destination --sync
```

## 📖 Usage Guide

### Basic Comparison (Copy unique files)

```bash
./bin/compair-standalone /path/to/source /path/to/destination
```

**What it does:**
- Compares both folders recursively
- Shows unique files in each folder
- Copies files from source to destination (that don't exist in destination)
- Displays a detailed report

### Comparison Only (No copy)

```bash
./bin/compair-standalone /path/to/source /path/to/destination --no-copy
```

**What it does:**
- Only compares folders
- Shows what would be copied
- Does NOT copy any files
- Good for reviewing before making changes

### Full Sync (Replace destination)

```bash
./bin/compair-standalone /path/to/source /path/to/destination --sync
```

**⚠️ WARNING**: This mode deletes all files from destination!

**What it does:**
1. **Deletes** all files and folders from destination
2. **Copies** everything from source to destination
3. Result: destination becomes exact copy of source
4. Useful for complete backup/sync operations

## 📊 Sample Output

```
============================================================
FOLDER COMPARISON REPORT
============================================================
Folder A (Source): /Users/bikram/Desktop/documents
Folder B (Destination): /Users/bikram/Desktop/backup
============================================================

 Unique in Folder A (5):
  - new-report.pdf
  - project/file1.txt
  - project/file2.txt
  - archive/data.csv
  - readme.md

 Common files (45):
  - config.json
  - settings.xml
  - [... 43 more files ...]

 Unique in Folder B (2):
  - old-file.txt
  - temp-data.bak

 Successfully copied files (5):
  - new-report.pdf
  - project/file1.txt
  - project/file2.txt
  - archive/data.csv
  - readme.md

============================================================
```

## 🔧 Requirements

### Required
- **Node.js 20 or higher** - [Download here](https://nodejs.org/)

### Recommended
- **Permissions**: Read access to source folder, write access to destination folder
- **Disk space**: Enough space for copying files (in copy mode)

## ⚙️ Installation

### From GitHub/Repository

```bash
# Clone the repository
git clone <repo-url>
cd compair

# Optional: Build from source
npm install
npm run build

# The executable is ready in bin/compair-standalone
chmod +x bin/compair-standalone
```

## 🖥️ Adding to System PATH (Optional)

### macOS / Linux

Make it available from anywhere:

```bash
# Option 1: Copy to a system path
sudo cp bin/compair-standalone /usr/local/bin/compair
sudo chmod +x /usr/local/bin/compair

# Now use from anywhere:
compair /path/to/source /path/to/destination
```

### Windows

Make it available from anywhere:

1. Copy `bin\compair.bat` to a folder (e.g., `C:\tools\`)
2. Add `C:\tools\` to your system PATH:
   - Search for "Environment Variables"
   - Click "Edit environment variables for your account"
   - Click "New" and add the path
   - Restart Command Prompt / PowerShell

3. Now use from anywhere:
```bash
compair.bat C:\source C:\destination
```

## 🐛 Troubleshooting

### Error: "command not found"
**macOS/Linux Solution:**
```bash
# Make sure you're in the correct directory
cd /path/to/compair
./bin/compair-standalone /path/to/source /path/to/destination

# Or use full path
/path/to/compair/bin/compair-standalone /path/to/source /path/to/destination
```

### Error: "Permission denied"
**macOS/Linux Solution:**
```bash
chmod +x bin/compair-standalone
./bin/compair-standalone /path/to/source /path/to/destination
```

### Error: "node: command not found"
**Solution:** Install Node.js from https://nodejs.org/
```bash
node --version  # Verify installation
```

### Warning: "Could not access [folder-name]"
This means the tool doesn't have permission to access that folder/file. It will skip it and continue.

**Solution:** Check folder permissions
```bash
ls -ld /path/to/folder  # macOS/Linux
```

## 📝 Examples

### Backup Documents
```bash
./bin/compair-standalone ~/Documents ~/DocumentsBackup --sync
```

### Sync Downloads
```bash
./bin/compair-standalone ~/Downloads ~/DownloadsArchive
```

### Preview Changes
```bash
./bin/compair-standalone /source /destination --no-copy
```

### Update Project Files
```bash
./bin/compair-standalone ./new-version ./current-version
```

## 🔒 Safety Tips

1. **Always use `--no-copy` first** to preview what will be done
2. **Use `--sync` carefully** - it deletes all files from destination
3. **Test on small folders** before running on large directories
4. **Keep backups** of important data

## 📋 What Happens During Operations

### Copy Mode (Default)
```
Source Folder A         Destination Folder B
├── file1.txt      →   ├── file1.txt (same - SKIPPED)
├── file2.pdf      →   └── file3.doc
└── file3.doc      
             
Result: file2.pdf is COPIED to Folder B
```

### Sync Mode
```
Source Folder A       Original Folder B     Result Folder B
├── file1.txt        ├── file1.txt       →  ├── file1.txt
└── file2.pdf        ├── file2.pdf       →  └── file2.pdf
                     └── file3.doc  [DELETED]
                     
Result: Folder B becomes exact copy of Folder A
```

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify Node.js is installed: `node --version`
3. Try with `--no-copy` to see what would happen
4. Check file/folder permissions

## 📄 License

MIT License - See LICENSE file in repository

## 🎯 Version Info

- **Current Version**: 1.0.0
- **Node.js Requirement**: 20.0.0+
- **Platforms**: macOS, Windows, Linux
- **Architecture**: x64, arm64

---

**Happy comparing! 🚀**
