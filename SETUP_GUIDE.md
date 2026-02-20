# 🎯 Folder Compair - Complete Setup & Usage Guide

Ready-to-use folder comparison and sync tool with standalone executables.

---

## ⚡ 30-Second Quick Start

```bash
# Download the project
cd compair

# Make executable (macOS/Linux)
chmod +x bin/compair-standalone

# Run it! 🚀
./bin/compair-standalone /path/to/source /path/to/destination
```

---

## 📋 Documentation Files

We've created comprehensive guides for different needs:

| Document | Purpose | Read If... |
|----------|---------|-----------|
| **README.md** | Main overview | You want general information |
| **STANDALONE_README.md** | Standalone usage | You're using the executable |
| **DISTRIBUTION.md** | Wrapper scripts | You want Node.js wrappers |
| **DISTRIBUTION_OPTIONS.md** | All options | You're choosing how to run it |
| **SETUP_GUIDE.md** (this file) | Complete setup | You're setting up for the first time |

---

## 🚀 Installation Methods

### Method 1: Standalone Executable (⭐ RECOMMENDED)

**Easiest and fastest way!**

```bash
cd compair

# macOS / Linux
chmod +x bin/compair-standalone
./bin/compair-standalone /source /destination

# Windows
bin\compair.bat C:\source C:\destination
```

**Requirements:** Node.js 20+ only  
**Time:** 30 seconds  
**Good for:** Most users

---

### Method 2: From Source Code

**For developers who want to modify it**

```bash
# Clone repository
git clone <repository-url>
cd compair

# Install dependencies
npm install

# Build
npm run build

# Run
npm start -- /source /destination
```

**Requirements:** Node.js 20+, npm  
**Time:** 5 minutes  
**Good for:** Developers, customization

---

### Method 3: npm Scripts

**Use npm directly**

```bash
cd compair
npm install
npm start -- /source /destination
```

**Requirements:** Node.js 20+, npm  
**Time:** 3 minutes  
**Good for:** npm users

---

## 🎓 Usage Examples

### Basic Comparison
```bash
./bin/compair-standalone /Users/john/Documents /Users/john/Documents-backup
```
**What it does:** Shows differences and copies unique files

### Preview Only (No Copy)
```bash
./bin/compair-standalone /Users/john/Documents /Users/john/Documents-backup --no-copy
```
**What it does:** Shows what would be copied without actually copying

### Full Sync (Dangerous!)
```bash
./bin/compair-standalone /Users/john/Documents /Users/john/Documents-backup --sync
```
**What it does:** Deletes everything in destination, then copies source

---

## 📁 Project Structure

```
compair/
├── 📄 README.md                    # Main documentation
├── 📄 STANDALONE_README.md         # Standalone guide
├── 📄 DISTRIBUTION.md              # Distribution guide
├── 📄 DISTRIBUTION_OPTIONS.md      # All options explained
├── 📄 SETUP_GUIDE.md               # This file
│
├── 📦 package.json                 # Project configuration
├── 🔧 tsconfig.json                # TypeScript settings
│
├── 📂 bin/                         # Executables
│   ├── compair                     # macOS/Linux wrapper
│   ├── compair-standalone          # ⭐ MAIN EXECUTABLE
│   └── compair.bat                 # Windows wrapper
│
├── 📂 dist/                        # Compiled code
│   ├── index.js                    # Compiled TypeScript
│   ├── index.d.ts                  # Type definitions
│   └── bundled/
│       └── index.js                # Bundled version
│
├── 📂 src/
│   └── index.ts                    # Source code
│
└── 📂 node_modules/                # Dependencies (generated)
```

---

## ✅ Verification Checklist

After installation, verify everything works:

### macOS / Linux
```bash
# 1. Check Node.js is installed
node --version    # Should be v20+

# 2. Check executable exists
ls -la bin/compair-standalone

# 3. Test execution
./bin/compair-standalone
# Should show usage help
```

### Windows
```bash
# 1. Check Node.js is installed
node --version    # Should be v20+

# 2. Check file exists
dir bin\compair.bat

# 3. Test execution
bin\compair.bat
# Should show usage help
```

---

## 🔧 System Setup

### macOS / Linux: Add to PATH

**Option 1: Copy to System**
```bash
sudo cp bin/compair-standalone /usr/local/bin/compair
sudo chmod +x /usr/local/bin/compair

# Use from anywhere
compair /source /destination
```

**Option 2: Create Alias**
```bash
# Add to ~/.zshrc (macOS) or ~/.bashrc (Linux)
echo "alias compair='~/compair/bin/compair-standalone'" >> ~/.zshrc
source ~/.zshrc

# Use from anywhere
compair /source /destination
```

**Option 3: Create Symbolic Link**
```bash
ln -s ~/compair/bin/compair-standalone /usr/local/bin/compair
compair /source /destination
```

### Windows: Add to PATH

1. **Copy executable**
   - Copy `bin\compair.bat` to `C:\tools\` (or any folder)

2. **Add to PATH**
   - Search for "Environment Variables" in Windows
   - Click "Edit environment variables for your account"
   - Click "Environment Variables" button
   - Click "New" under "User variables"
   - Variable name: `PATH`
   - Variable value: `C:\tools`
   - Click OK

3. **Test it**
   - Open Command Prompt / PowerShell
   - Run: `compair.bat C:\source C:\destination`

---

## 📚 Available Commands

```bash
# Basic comparison and copy
./bin/compair-standalone /source /destination

# Compare only (preview)
./bin/compair-standalone /source /destination --no-copy

# Full sync (DELETE destination and copy source)
./bin/compair-standalone /source /destination --sync

# See help
./bin/compair-standalone
```

---

## 🎯 Common Tasks

### Task 1: Daily Backup
```bash
# Create a backup without modifying original
./bin/compair-standalone ~/Documents ~/Documents-Daily-Backup
```

### Task 2: Preview Before Sync
```bash
# Always preview first!
./bin/compair-standalone ~/old ~/new --no-copy

# If it looks good, do the sync
./bin/compair-standalone ~/old ~/new --sync
```

### Task 3: Multiple Backups
```bash
# Backup to multiple locations
./bin/compair-standalone ~/documents ~/backup1 --sync
./bin/compair-standalone ~/documents ~/backup2 --sync
./bin/compair-standalone ~/documents ~/backup3 --sync
```

### Task 4: Automated Script
```bash
#!/bin/bash
# backup-script.sh

SOURCE="/Users/john/Documents"
DESTINATION="/Volumes/Backup/Documents"

echo "Starting backup..."
~/compair/bin/compair-standalone "$SOURCE" "$DESTINATION" --sync
echo "Backup complete!"
```

---

## 🐛 Troubleshooting

### Problem: "command not found"
**Solution:**
```bash
# Make sure you're in the correct directory
cd /path/to/compair

# Use full path
./bin/compair-standalone /source /destination
```

### Problem: "Permission denied"
**Solution (macOS/Linux):**
```bash
chmod +x bin/compair-standalone
./bin/compair-standalone /source /destination
```

### Problem: "node: command not found"
**Solution:**
```bash
# Install Node.js from https://nodejs.org/
# Then verify
node --version

# Try again
./bin/compair-standalone /source /destination
```

### Problem: "No such file or directory"
**Solution:**
```bash
# Check if paths exist
ls -la /path/to/source
ls -la /path/to/destination

# Use full/correct paths
./bin/compair-standalone /Users/john/source /Users/john/destination
```

### Problem: "Warning: Could not access [folder]"
**Solution:**
```bash
# Check permissions
ls -ld /path/to/folder

# Grant read permissions if needed
chmod +r /path/to/folder
chmod +rx /path/to/folder

# Try again
./bin/compair-standalone /source /destination
```

---

## 📊 What Each Command Does

### Default (Copy Mode)
```
Source              Destination        Result
├── a.txt     →     ├── a.txt       =   ├── a.txt (unchanged)
├── b.txt     →     └── x.txt       =   ├── b.txt (COPIED)
└── c.txt                           =   └── x.txt (unchanged)
```

### --no-copy (Preview)
```
Shows what WOULD be copied but doesn't actually copy anything
Useful for checking before making changes
```

### --sync (Full Replace)
```
DELETES all files in Destination, then copies Source

Before:
Source: a.txt, b.txt, c.txt
Destination: a.txt, x.txt, y.txt, z.txt

After:
Destination: a.txt, b.txt, c.txt  (identical to Source)
```

---

## 🔒 Safety Tips

1. **Always preview first**
   ```bash
   ./bin/compair-standalone /source /destination --no-copy
   ```

2. **Use --sync cautiously**
   ```bash
   # --sync DELETES files in destination!
   # Only use when you're sure
   ./bin/compair-standalone /source /destination --sync
   ```

3. **Keep backups**
   - Before using --sync, make a backup of your destination
   - Consider running to multiple backups

4. **Test on small folders**
   - Try the command on a test folder first
   - Verify the output matches your expectations

5. **Check permissions**
   - Ensure you have read access to source
   - Ensure you have write access to destination

---

## 🚀 Advanced Usage

### Script: Batch Sync Multiple Folders
```bash
#!/bin/bash
# sync-all.sh

COMPAIR="~/compair/bin/compair-standalone"

echo "Syncing projects..."
$COMPAIR ~/projects/project1 ~/backup/project1 --sync
$COMPAIR ~/projects/project2 ~/backup/project2 --sync
$COMPAIR ~/projects/project3 ~/backup/project3 --sync

echo "All synced!"
```

### Scheduled Backup (macOS/Linux)
```bash
# Add to crontab
crontab -e

# Add this line to run daily at 2 AM:
0 2 * * * ~/.local/bin/compair ~/documents ~/documents-backup --sync
```

### Scheduled Backup (Windows)
1. Open Task Scheduler
2. Create new task
3. Set action: `C:\tools\compair.bat C:\Users\John\Documents C:\Backup --sync`
4. Set schedule: Daily at 2 AM

---

## 📞 Getting Help

1. **Check documentation**
   - README.md - General info
   - STANDALONE_README.md - Detailed standalone guide

2. **Run with --no-copy first**
   - Always preview before making changes
   - See what would be modified

3. **Check file permissions**
   - Ensure readable source folder
   - Ensure writable destination folder

4. **Verify Node.js**
   - Run `node --version`
   - Should be v20 or higher

---

## ✨ Next Steps

1. ✅ Choose your installation method above
2. ✅ Run the quick start command
3. ✅ Test with `--no-copy` first
4. ✅ Read STANDALONE_README.md for detailed guide
5. ✅ Set up PATH variable for system-wide access (optional)

---

## 📄 Version Info

- **Version**: 1.0.0
- **Node.js Required**: 20.0.0 or higher
- **Platforms**: macOS, Windows, Linux
- **Architecture**: x64, arm64

---

**You're all set! Happy comparing! 🎉**

For detailed information on specific features, check the **STANDALONE_README.md** file.
