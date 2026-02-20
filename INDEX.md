# 🎯 Folder Compair - Complete Package

Professional folder comparison and sync tool with multiple distribution options.

---

## 📋 Start Here

**New user?** Choose your path:

- 🚀 **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete setup instructions (START HERE!)
- ⚡ **[STANDALONE_README.md](STANDALONE_README.md)** - Using the executable
- 📚 **[README.md](README.md)** - General documentation
- 🔄 **[DISTRIBUTION_OPTIONS.md](DISTRIBUTION_OPTIONS.md)** - Compare all options

---

## ⚡ 30-Second Start

```bash
cd compair
chmod +x bin/compair-standalone
./bin/compair-standalone /source /destination
```

**Done!** ✅

---

## 📦 What's Included

### 🔧 Three Ways to Run

1. **Standalone Executable** (Recommended)
   ```bash
   ./bin/compair-standalone /source /destination
   ```
   - No npm install needed
   - Pre-compiled & ready
   - Requires: Node.js 20+ only

2. **npm Scripts**
   ```bash
   npm install
   npm start -- /source /destination
   ```
   - Full npm integration
   - Can customize easily
   - Requires: Node.js 20+, npm

3. **Source Code**
   ```bash
   npm install
   npm run build
   npm start -- /source /destination
   ```
   - Full source control
   - Modify as needed
   - Requires: Node.js 20+, npm

### 📄 Documentation (5 files)

| File | Purpose | Read First | When |
|------|---------|-----------|------|
| **SETUP_GUIDE.md** | Complete setup | ✅ YES | First time setup |
| **README.md** | General overview | ✅ YES | Want to learn features |
| **STANDALONE_README.md** | Executable guide | 📖 Optional | Using the executable |
| **DISTRIBUTION_OPTIONS.md** | All options | 📖 Optional | Comparing methods |
| **DISTRIBUTION.md** | Wrapper scripts | 📖 Optional | Using wrappers |

### 🎁 Executables

```
bin/
├── compair-standalone    ⭐ Main executable (macOS/Linux)
├── compair              Shell wrapper (macOS/Linux)
└── compair.bat          Windows batch file
```

---

## 🎯 Common Scenarios

### Scenario 1: "I want to use it now"
1. Read: **SETUP_GUIDE.md** (2 mins)
2. Run: `./bin/compair-standalone /source /dest`
3. Done! ✅

### Scenario 2: "I want to understand how it works"
1. Read: **README.md**
2. Read: **STANDALONE_README.md**
3. Try: `./bin/compair-standalone /source /dest --no-copy`
4. Done! ✅

### Scenario 3: "I want to modify the code"
1. Read: **SETUP_GUIDE.md** → Source Code section
2. Run: `npm install && npm run build`
3. Edit: `index.ts`
4. Test: `npm start -- /source /dest`
5. Done! ✅

### Scenario 4: "I need system-wide access"
1. Read: **SETUP_GUIDE.md** → System Setup section
2. Run the setup commands
3. Use from anywhere: `compair /source /dest`
4. Done! ✅

---

## ✨ Features

| Feature | Status |
|---------|--------|
| Compare nested folders | ✅ Full support |
| Identify unique files | ✅ Both directions |
| Find common files | ✅ Yes |
| Auto-copy files | ✅ Default mode |
| Preview before copy | ✅ `--no-copy` flag |
| Full sync mode | ✅ `--sync` flag |
| Cross-platform | ✅ macOS, Windows, Linux |
| Pre-built executable | ✅ Ready to use |
| No dependencies | ✅ Just Node.js |

---

## 📊 Quick Facts

| Item | Value |
|------|-------|
| **Setup Time** | 30 seconds |
| **Executable Size** | ~110 bytes (wrapper) |
| **Runtime Size** | ~50 KB (bundled) |
| **Languages** | TypeScript → JavaScript |
| **Node.js Version** | 20+ required |
| **Platforms** | macOS, Windows, Linux |
| **License** | MIT |
| **Version** | 1.0.0 |

---

## 🚀 Quick Commands

```bash
# View help
./bin/compair-standalone

# Compare and show diff (don't copy)
./bin/compair-standalone /source /dest --no-copy

# Compare and copy unique files (default)
./bin/compair-standalone /source /dest

# Full sync (DELETE dest, copy source)
./bin/compair-standalone /source /dest --sync

# From npm
npm start -- /source /dest
npm start -- /source /dest --sync
```

---

## 📋 Checklist: First Time Setup

Use this checklist to ensure everything is ready:

- [ ] **Download/Clone** the project
- [ ] **Check Node.js** → `node --version` (should be v20+)
- [ ] **Read** SETUP_GUIDE.md (5 mins)
- [ ] **Make executable** → `chmod +x bin/compair-standalone`
- [ ] **Test** → `./bin/compair-standalone` (shows help)
- [ ] **Try it** → `./bin/compair-standalone /source /dest --no-copy`
- [ ] **Read** STANDALONE_README.md for detailed guide
- [ ] **Optional**: Add to PATH for system-wide access

✅ **All done!**

---

## 🎓 Learning Path

**Complete | Duration | Resource**
--- | --- | ---
Beginner | 5 min | SETUP_GUIDE.md
Intermediate | 10 min | README.md + STANDALONE_README.md
Advanced | 15 min | DISTRIBUTION_OPTIONS.md + source code

---

## 💡 Pro Tips

1. **Always preview first**
   ```bash
   ./bin/compair-standalone /source /dest --no-copy
   ```

2. **Use --sync carefully** (it deletes files!)
   ```bash
   # Preview first
   ./bin/compair-standalone /source /dest --no-copy
   # Then sync if looks good
   ./bin/compair-standalone /source /dest --sync
   ```

3. **Add to PATH for convenience**
   ```bash
   # macOS/Linux
   sudo cp bin/compair-standalone /usr/local/bin/compair
   compair /any/source /any/dest
   ```

4. **Create backup scripts**
   ```bash
   #!/bin/bash
   ~/compair/bin/compair-standalone ~/docs ~/backup --sync
   ```

5. **Schedule automated backups** (macOS/Linux)
   ```bash
   # Add to crontab
   0 2 * * * ~/.local/bin/compair ~/docs ~/backup --sync
   ```

---

## 🐛 Need Help?

1. **Read** the appropriate documentation file
2. **Check** [SETUP_GUIDE.md](SETUP_GUIDE.md) → Troubleshooting section
3. **Try** with `--no-copy` flag first
4. **Verify** Node.js is installed: `node --version`

---

## 📄 File Structure

```
compair/
│
├── 📖 SETUP_GUIDE.md              ← START HERE (complete setup)
├── 📖 README.md                   ← General features & usage
├── 📖 STANDALONE_README.md        ← Detailed executable guide
├── 📖 DISTRIBUTION.md             ← Wrapper scripts guide
├── 📖 DISTRIBUTION_OPTIONS.md     ← Compare all options
├── 📖 INDEX.md                    ← This file (overview)
│
├── 🔧 bin/
│   ├── compair-standalone         ← ⭐ MAIN EXECUTABLE
│   ├── compair                    ← macOS/Linux wrapper
│   └── compair.bat                ← Windows wrapper
│
├── 📦 dist/
│   ├── index.js                   ← Compiled code
│   └── bundled/
│       └── index.js               ← Bundled version
│
├── 📄 package.json                ← Project config
└── 🔧 tsconfig.json               ← TypeScript config
```

---

## 🎯 Next Steps

**Choose ONE:**

1. **I just want to use it** 
   → Go to [SETUP_GUIDE.md](SETUP_GUIDE.md)

2. **I want to understand all options** 
   → Go to [DISTRIBUTION_OPTIONS.md](DISTRIBUTION_OPTIONS.md)

3. **I want to modify the code** 
   → Read [SETUP_GUIDE.md](SETUP_GUIDE.md) → Source Code section

4. **I want full details** 
   → Read [README.md](README.md)

---

## 📞 Support

All documentation is included in the repository:

1. **SETUP_GUIDE.md** - Complete step-by-step setup
2. **README.md** - Features and general usage
3. **STANDALONE_README.md** - Detailed executable guide
4. **DISTRIBUTION_OPTIONS.md** - Compare all distribution methods

---

## 🎉 You're Ready!

Everything you need is here. Choose your path above and get started!

**Happy comparing! 🚀**

---

*Version 1.0.0 | MIT License | Node.js 20+ required*
