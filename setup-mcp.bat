@echo off
REM MCP Paper Installation Script for VSCode Copilot (Windows)
REM Setup Paper MCP server connection

echo.
echo ==========================================
echo   MCP Paper Setup for VSCode Copilot
echo ==========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% NEQ 0 (
    echo [ERROR] Node.js tidak ditemukan.
    echo Silakan install Node.js dari: https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i

echo [OK] Node.js ditemukan: %NODE_VERSION%
echo.

echo [1/2] Installing Paper MCP client...
npm install -g @modelcontextprotocol/server-paper

if %errorlevel% NEQ 0 (
    echo [ERROR] Failed to install Paper MCP
    pause
    exit /b 1
)

echo [OK] Paper MCP client installed
echo.

echo [2/2] Verifying .vscode/mcp.json configuration...
if exist ".vscode\mcp.json" (
    echo [OK] mcp.json ditemukan
) else (
    echo [ERROR] mcp.json tidak ditemukan
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   Setup Selesai!
echo ==========================================
echo.
echo Next Steps:
echo.
echo 1. Download Paper Desktop App:
echo    https://usepaper.ai/downloads
echo.
echo 2. Install dan jalankan Paper app
echo    (atau gunakan: paper server --port 29979)
echo.
echo 3. Restart VSCode sepenuhnya
echo.
echo 4. Buka Copilot Chat dan ketik: @paper search machine learning
echo.
echo Untuk bantuan lebih lanjut, baca: MCP_PAPER_SETUP.md
echo.
pause
echo 5. Restart VSCode
echo.
echo Setup complete! Read MCP_PAPER_SETUP.md for detailed instructions.
echo.
pause
