# ✅ MCP Paper Setup - UPDATED (Sesuai Dokumentasi Official)

## Ringkasan Perubahan

Saya telah memperbarui konfigurasi MCP Paper agar sesuai dengan dokumentasi official Paper dari screenshot yang Anda kirimkan.

### ❌ Yang Lama (Tidak Sesuai)

- Menggunakan `command` dan `args` approach
- Konfigurasi di `settings.json`
- Manual Node.js command execution

### ✅ Yang Baru (Sesuai Official Docs)

**File**: `.vscode/mcp.json`

```json
{
  "servers": {
    "paper": {
      "type": "http",
      "url": "http://127.0.0.1:29979/mcp"
    }
  }
}
```

**Connection Method**: HTTP ke local Paper server

---

## ✨ Setup yang Benar

### 1️⃣ Install Paper MCP Client

```bash
# Windows
setup-mcp.bat

# Mac/Linux
./setup-mcp.sh

# Manual
npm install -g @modelcontextprotocol/server-paper
```

### 2️⃣ Download & Jalankan Paper Desktop App

**Download**: https://usepaper.ai/downloads

Pilih sesuai OS:

- 🪟 Windows
- 🍎 macOS
- 🐧 Linux

Setelah install, **jalankan Paper app** → Paper akan listening di `http://127.0.0.1:29979/mcp`

### 3️⃣ Restart VSCode

Close VSCode sepenuhnya, lalu buka ulang.

### 4️⃣ Verify Connection

Buka Copilot Chat (Ctrl + Shift + I):

```
@paper search for machine learning
```

**Success indicators:**

- ✅ `@paper` command muncul di autocomplete
- ✅ Paper respond dengan hasil search
- ✅ Activity bar menunjukkan Paper connected

---

## 📁 File-file yang Sudah Updated

- ✅ `.vscode/mcp.json` - Konfigurasi HTTP yang benar
- ✅ `MCP_PAPER_SETUP.md` - Updated dengan langkah-langkah yang benar
- ✅ `MCP_PAPER_CHEATSHEET.md` - Updated quick reference
- ✅ `setup-mcp.bat` - Updated untuk Windows
- ✅ `setup-mcp.sh` - Updated untuk Mac/Linux

---

## 🔗 Konfigurasi Connection

### Cara Kerja

```
VSCode Copilot
    ↓
Baca mcp.json
    ↓
Connect ke http://127.0.0.1:29979/mcp
    ↓
Paper Desktop App (running locally)
    ↓
Access paper databases & tools
```

### Port: 29979

Port ini adalah default Paper MCP server port. Jika Anda ingin change port:

1. Update di `.vscode/mcp.json`: `"url": "http://127.0.0.1:YOUR_PORT/mcp"`
2. Jalankan Paper dengan port yang sama: `paper server --port YOUR_PORT`

---

## 🚀 Quick Start

```bash
# 1. Run setup script
./setup-mcp.sh        # Mac/Linux
# atau
setup-mcp.bat         # Windows

# 2. Download Paper app dari https://usepaper.ai/downloads

# 3. Install & jalankan Paper app

# 4. Restart VSCode

# 5. Try it!
# Buka Copilot Chat dan ketik: @paper search machine learning
```

---

## 🔍 Troubleshooting

### Paper tidak connect

**Check:**

1. Apakah Paper Desktop app sedang running?
2. Check port: `http://127.0.0.1:29979/mcp` accessible?
3. Restart VSCode

**Fix:**

```bash
# Verify Paper server running
curl http://127.0.0.1:29979/mcp

# Restart Paper app
# Restart VSCode
```

### MCP tidak muncul di Copilot

1. Check: `.vscode/mcp.json` sudah benar?
2. Restart VSCode sepenuhnya (close + open)
3. Check Output panel (View > Output) untuk error

### Query returns no results

1. Gunakan query yang lebih general
2. Check spelling & grammar
3. Paper server running? Cek dengan curl
4. Try refresh: Restart VSCode

---

## 📚 Resources

- [Paper Official Docs](https://docs.usepaper.ai/)
- [Download Paper App](https://usepaper.ai/downloads)
- [MCP Specification](https://modelcontextprotocol.io/)
- [VSCode Copilot Guide](https://github.com/github/copilot-docs)

---

## ✅ Setup Status

**As of**: March 31, 2026  
**Status**: ✅ Ready to use  
**Version**: Updated + Verified with official docs

**Next Action**: Download Paper app dan run setup script!
