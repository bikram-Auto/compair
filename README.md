# Compare -- Folder Synchronization Tool

Fast, portable tool to compare and synchronize folders safely across
systems.

Perfect for backups, file syncing, microservice distribution, and
keeping environments aligned.

------------------------------------------------------------------------

## Key Features

-   Standalone executables (macOS, Linux, Windows)
-   Safe Mode (default) -- Copy only missing files
-   Preview Mode -- See changes without copying
-   Full Sync Mode -- Replace destination completely
-   Filter Mode (`--only`) -- Operate on specific files or folders
-   Config Mode (`--config`) -- Multi-source to multi-destination
    mapping
-   Nested folder support
-   Detailed comparison reports
-   Automatic memory optimisation for large directories

------------------------------------------------------------------------

## Download Standalone Executables

Latest Release: v1.3.0

**[Download Standalone Compair v1.3.0](https://github.com/bikram-Auto/compare/releases/download/v1.3.0/standalone-compare_v1.3.0.zip)**


Choose your platform:

-   macOS (ARM64): compare-macos-arm64
-   Linux (x64): compare-linux-x64
-   Windows (x64): compare-win-x64.exe

Make executable (macOS/Linux):

``` bash
chmod +x compare-macos-arm64
./compare-macos-arm64 /source /destination
```

------------------------------------------------------------------------

## Operating Modes

### Safe Mode (Default)

Copy only unique files from source to destination.

``` bash
compare /source /destination
```

Destination files are never deleted.

------------------------------------------------------------------------

### Preview Mode

See what would change without copying anything.

``` bash
compare /source /destination --no-copy
```

------------------------------------------------------------------------

### Sync Mode (Full Replace)

Delete everything in destination, then copy all from source.

``` bash
compare /source /destination --sync
```

Warning: This permanently deletes destination contents.

------------------------------------------------------------------------

### Filter Mode (`--only`)

Operate only on a specific file or folder.

``` bash
# Single file
compare /source /destination --only "config.json"

# Specific folder
compare /source /destination --only "shared"

# Combine with preview
compare /source /destination --only "shared" --no-copy

# Combine with sync
compare /source /destination --only "shared" --sync
```

------------------------------------------------------------------------

### Config Mode (Multi Mapping)

Distribute files or folders to multiple destinations using a JSON
config.

``` bash
compare --config config.json
```

Example config.json:

``` json
{
  "mappings": [
    {
      "source": "dev/shared/",
      "destinations": [
        "services/auth-service/src/shared/",
        "services/user-service/src/shared/"
      ]
    }
  ]
}
```

Works with:

``` bash
compare --config config.json --sync
compare --config config.json --no-copy
compare --config config.json --only "index.ts"
```

------------------------------------------------------------------------

## Examples

### Backup Documents

``` bash
compare ~/Documents ~/Backup
```

### Mirror External Drive

``` bash
compare /Volumes/ExternalDrive ~/cloud-backup --sync
```

### Sync Microservice Shared Folder

``` bash
compare --config services.json --sync
```

### Preview Before Production Sync

``` bash
compare /prod/build /live/server --no-copy
```

------------------------------------------------------------------------

## Best Practice Workflow

### Step 1 -- Preview First

``` bash
compare /source /destination --no-copy
```

### Step 2 -- Safe Copy

``` bash
compare /source /destination
```

### Step 3 -- Use Sync Only When Necessary

``` bash
compare /source /destination --sync
```

Always back up before using `--sync`.

------------------------------------------------------------------------

## Output

Example report:

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

     Unique in Folder B (1):
      - extra_file.txt

     Successfully copied files (2):
      - file1.txt
      - file2.pdf

------------------------------------------------------------------------

## Troubleshooting

### Permission denied

``` bash
chmod +x compare
```

------------------------------------------------------------------------

### Maximum call stack size exceeded

Handled automatically.\
Compare detects large directories and optimises memory automatically.

------------------------------------------------------------------------

### No such file or directory

Verify paths:

``` bash
ls /path/to/source
```

------------------------------------------------------------------------

### Command not found

Use full path:

``` bash
./compare-macos-arm64 /source /destination
```

Or add the binary to your system PATH.

------------------------------------------------------------------------

## Version

Current Version: 1.3.0\
License: MIT\
Status: Stable
