# Folder Compair - All Distribution Options

This document explains all the ways to get and use Folder Compair.

## Overview

```
┌─────────────────────────────────────────┐
│      FOLDER COMPAIR DISTRIBUTION        │
├─────────────────────────────────────────┤
│                                         │
│  1️⃣  SOURCE CODE (Recommended)          │
│     └─ Full control, modify code        │
│     └─ Requires: Node.js, npm           │
│                                         │
│  2️⃣  COMPILED EXECUTABLE                │
│     └─ bin/compair-standalone           │
│     └─ Quick, no npm install needed     │
│     └─ Requires: Node.js only           │
│                                         │
│  3️⃣  SHELL SCRIPT WRAPPERS              │
│     └─ bin/compair (macOS/Linux)        │
│     └─ bin/compair.bat (Windows)        │
│     └─ Lightweight convenience scripts  │
│                                         │
└─────────────────────────────────────────┘
```

## 🎯 Choose Your Setup

### Option 1: Source Code (Full Development)

**Best for:** Developers who want to modify the code

**Requirements:**
- Node.js 20+
- npm or yarn

**Setup:**
```bash
git clone <repo>
cd compair
npm install
npm run build
npm start -- /source /destination
```

**Pros:**
- Full source code access
- Can modify and customize
- Easy to understand what it does

**Cons:**
- Requires npm install
- Need to rebuild after changes

---

### Option 2: Standalone Executable (Easiest) ⭐

**Best for:** Users who just want to run the tool

**Requirements:**
- Node.js 20+ (that's it!)
- No npm install needed

**Setup:**
```bash
# Download the project
cd compair

# Make executable (macOS/Linux only)
chmod +x bin/compair-standalone

# Run immediately
./bin/compair-standalone /source /destination
```

**Pros:**
- Super fast - no npm install!
- Just download and run
- Pre-compiled and ready

**Cons:**
- Can't easily modify code
- Slightly larger executable

---

### Option 3: Shell Script Wrappers

**Best for:** Quick access with npm

**Requirements:**
- Node.js 20+

**Setup:**
```bash
cd compair
./bin/compair /source /destination
```

**Pros:**
- Very lightweight
- Simple to use

**Cons:**
- Need npm on system
- Extra step to install dependencies

---

## 📊 Comparison Table

| Feature | Source Code | Standalone | Wrapper Scripts |
|---------|------------|-----------|-----------------|
| Speed | Medium | Fast ⚡ | Medium |
| Setup Time | 5 mins | 30 secs ⚡ | 2 mins |
| File Size | - | ~50 KB | ~1 KB |
| Dependencies | npm | Node.js only ⚡ | Node.js |
| Customizable | Yes ⚡ | No | No |
| Requires npm | Yes | No ⚡ | Yes |
| Learning Curve | Medium | None ⚡ | Low |

---

## 🚀 Quick Access Guide

### "I just want to run it NOW"
```bash
# Go to project root
cd compair
chmod +x bin/compair-standalone
./bin/compair-standalone /source /destination
```
**👉 Use: Standalone Executable**

### "I want to understand how it works"
```bash
git clone <repo>
cd compair
npm install
npm run build
npm start -- /source /destination
```
**👉 Use: Source Code**

### "I want to modify it for my needs"
```bash
git clone <repo>
cd compair
npm install
# Edit index.ts
npm run build
npm start -- /source /destination
```
**👉 Use: Source Code**

### "I want system-wide access"
```bash
# Option A: Add to PATH
sudo cp bin/compair-standalone /usr/local/bin/compair
compair /source /destination

# Option B: Create alias
echo "alias compair='~/compair/bin/compair-standalone'" >> ~/.zshrc
source ~/.zshrc
compair /source /destination
```
**👉 Use: Standalone Executable**

---

## 📦 Files in Each Distribution

### Source Code Directory
```
compair/
├── index.ts                 # TypeScript source
├── package.json             # npm configuration
├── README.md                # Main documentation
├── STANDALONE_README.md     # Standalone guide
├── DISTRIBUTION.md          # Distribution guide
├── dist/
│   ├── index.js            # Compiled JS
│   └── bundled/
│       └── index.js        # Bundled version
├── bin/
│   ├── compair             # Shell wrapper
│   ├── compair-standalone  # Pre-compiled executable
│   └── compair.bat         # Windows wrapper
└── node_modules/           # Dependencies
```

### Standalone Distribution (Minimal)
```
compair/
├── bin/
│   ├── compair-standalone  # ⭐ Main executable
│   └── compair.bat         # Windows version
├── dist/
│   └── bundled/
│       └── index.js        # Bundled code
├── package.json            # Runtime info
└── STANDALONE_README.md    # Usage guide
```

---

## 🔄 Workflow Examples

### Example 1: Daily Backup
```bash
# Use standalone - fast!
./bin/compair-standalone ~/downloads ~/downloads-backup --sync
```

### Example 2: Development Sync
```bash
# Use source code - can modify
npm start -- ./src ./backup
```

### Example 3: Server Deployment
```bash
# Use standalone - no npm needed on server
./bin/compair-standalone /old-version /new-version --sync
```

### Example 4: Batch Operations
```bash
#!/bin/bash
# Pre-check with --no-copy
./bin/compair-standalone /source /dest --no-copy

# If looks good, do full sync
./bin/compair-standalone /source /dest --sync
```

---

## 💡 Tips & Tricks

### Make it Global (macOS/Linux)
```bash
# Add to your shell PATH
ln -s $(pwd)/bin/compair-standalone /usr/local/bin/compair

# Use from anywhere
compair /any/source /any/destination
```

### Create Batch Scripts

**macOS/Linux** (`sync-backup.sh`):
```bash
#!/bin/bash
~/compair/bin/compair-standalone ~/documents ~/documents-backup --sync
echo "Backup complete!"
```

**Windows** (`sync-backup.bat`):
```batch
@echo off
"%USERPROFILE%\compair\bin\compair.bat" %USERPROFILE%\Documents %USERPROFILE%\Documents-Backup --sync
echo Backup complete!
```

### Schedule Regular Syncs

**macOS/Linux (cron)**:
```bash
# Run daily at 2 AM
0 2 * * * ~/compair/bin/compair-standalone ~/source ~/destination --sync
```

**Windows (Task Scheduler)**:
- Create task → Set action to run `sync-backup.bat`
- Schedule for desired time

---

## ❓ FAQ

**Q: Which one should I use?**
A: For most people → **Standalone Executable**. It's the simplest!

**Q: Do I need npm for the standalone?**
A: No, just Node.js runtime. But if you have npm, that's fine too.

**Q: Can I distribute the standalone executable?**
A: Yes! It's self-contained and works on any machine with Node.js 20+

**Q: How do I update?**
A: Download the latest version from the repository

**Q: Can I use it in CI/CD pipelines?**
A: Yes! All versions work perfectly in GitHub Actions, GitLab CI, etc.

**Q: Is it safe for production use?**
A: Yes, but always test with `--no-copy` first!

---

## 🆘 Still Confused?

1. **I want the simplest option** → Use `bin/compair-standalone`
2. **I'm a developer** → Clone the repo, use source code
3. **I want to automate it** → Use `bin/compair-standalone` in scripts
4. **I need multiple versions** → Keep multiple copies or use different folders

---

**Choose your path above and get started! 🚀**
