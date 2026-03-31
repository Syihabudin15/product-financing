#!/bin/bash

# MCP Paper Installation Script for VSCode Copilot
# Setup Paper MCP server connection

echo ""
echo "=========================================="
echo "   MCP Paper Setup for VSCode Copilot"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js tidak ditemukan."
    echo "Silakan install Node.js dari: https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node --version)
echo "[OK] Node.js ditemukan: $NODE_VERSION"
echo ""

# Install MCP Paper globally
echo "[1/2] Installing Paper MCP client..."
npm install -g @modelcontextprotocol/server-paper

if [ $? -ne 0 ]; then
    echo "[ERROR] Failed to install Paper MCP"
    exit 1
fi

echo "[OK] Paper MCP client installed"
echo ""

# Check mcp.json
echo "[2/2] Verifying .vscode/mcp.json configuration..."
if [ -f ".vscode/mcp.json" ]; then
    echo "[OK] mcp.json ditemukan"
else
    echo "[ERROR] mcp.json tidak ditemukan"
    exit 1
fi

echo ""
echo "=========================================="
echo "   Setup Selesai!"
echo "=========================================="
echo ""
echo "Next Steps:"
echo ""
echo "1. Download Paper Desktop App:"
echo "   https://usepaper.ai/downloads"
echo ""
echo "2. Install dan jalankan Paper app"
echo "   (atau gunakan: paper server --port 29979)"
echo ""
echo "3. Restart VSCode sepenuhnya"
echo ""
echo "4. Buka Copilot Chat dan ketik: @paper search machine learning"
echo ""
echo "Untuk bantuan lebih lanjut, baca: MCP_PAPER_SETUP.md"
echo ""
