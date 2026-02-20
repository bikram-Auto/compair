@echo off
REM Folder Compair - Windows executable wrapper
REM This batch file runs the Folder Compair tool

setlocal enabledelayedexpansion

REM Get the directory where this batch file is located
set SCRIPT_DIR=%~dp0
REM Get the parent directory (project root)
for %%i in ("%SCRIPT_DIR:~0,-1%") do set PROJECT_DIR=%%~dpi

REM Run the compiled JavaScript with Node.js
node "%PROJECT_DIR%dist\index.js" %*

endlocal
