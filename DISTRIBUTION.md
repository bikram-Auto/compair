# Distribution Guide

This document explains how to use Folder Compair on different operating systems without needing Node.js installed.

## Pre-built Executables

The project includes ready-to-use executable wrappers in the `./bin` directory that work on all platforms.

### ✅ Requirements

**macOS / Linux:**
- Node.js 20+ installed (or any version)

**Windows:**
- Node.js 20+ installed (or any version)

### 🚀 Quick Start

Clone or download the repository and navigate to the project folder:

```bash
cd compair
npm install
npm run build
```

## Usage

### macOS / Linux

```bash
# Basic comparison
./bin/compair /path/to/folderA /path/to/folderB

# Comparison only (no copy)
./bin/compair /path/to/folderA /path/to/folderB --no-copy

# Full sync (delete B and copy A to B)
./bin/compair /path/to/folderA /path/to/folderB --sync
```

### Windows

```bat
# Basic comparison
bin\compair.bat C:\path\to\folderA C:\path\to\folderB

# Comparison only (no copy)
bin\compair.bat C:\path\to\folderA C:\path\to\folderB --no-copy

# Full sync (delete B and copy A to B)
bin\compair.bat C:\path\to\folderA C:\path\to\folderB --sync
```

## How It Works

The executables in `./bin/` are wrapper scripts that:

1. **macOS/Linux (`bin/compair`)**: A shell script that runs the compiled JavaScript with Node.js
2. **Windows (`bin/compair.bat`)**: A batch file that runs the compiled JavaScript with Node.js

Both wrappers locate the compiled code in the `./dist` directory and execute it using the system's Node.js installation.

## Standalone Distribution (Optional)

To create true standalone executables that don't require Node.js:

1. Use tools like `pkg`, `nexe`, or `esbuild` with bundling
2. Current limitation: Node.js 24 compatibility issues with pkg
3. Alternative: Use Docker for containerized distribution

## File Structure

```
compair/
├── bin/
│   ├── compair          # macOS/Linux executable
│   └── compair.bat      # Windows executable
├── dist/
│   └── index.js         # Compiled TypeScript
├── src/
│   └── index.ts         # TypeScript source
├── package.json
└── README.md
```

## Troubleshooting

### "compair: command not found"
- Make sure you're in the project directory
- Try: `./bin/compair` (with the `./` prefix)
- On Linux/macOS, ensure the script has execute permissions: `chmod +x bin/compair`

### "node: command not found"
- Install Node.js 20 or higher from https://nodejs.org/
- Verify installation: `node --version`

### Permission Denied (macOS/Linux)
```bash
chmod +x bin/compair
./bin/compair /path/to/folderA /path/to/folderB
```

## Adding to PATH (Optional)

### macOS / Linux
```bash
# Copy to a directory in your PATH
sudo cp bin/compair /usr/local/bin/

# Now you can run from anywhere
compair /path/to/folderA /path/to/folderB
```

### Windows
1. Copy `bin\compair.bat` to a folder (e.g., `C:\tools`)
2. Add that folder to your system PATH
3. Restart PowerShell/Command Prompt
4. Run: `compair.bat C:\path\to\folderA C:\path\to\folderB`
