# MCP (Model Context Protocol) Paper Setup Guide

## Apa itu MCP Paper?

MCP Paper adalah server protokol yang menghubungkan VSCode Copilot dengan database paper penelitian. Ini memungkinkan Anda untuk:

- 🔍 Mencari paper penelitian
- 📚 Mendapatkan referensi akademis
- 🔗 Mengakses citations
- 📖 Membaca abstracts dan summaries

## Installation Steps

### Step 1: Install MCP Paper Server

```bash
# Dari terminal di VSCode atau CMD
npm install -g @modelcontextprotocol/server-paper

# Atau install lokal dalam project
npm install @modelcontextprotocol/server-paper
```

### Step 2: Configure VSCode Settings

1. Buka folder `.vscode` di project root
2. Edit file `mcp.json` (sudah ada di project)
3. Pastikan konfigurasi sudah benar:

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

**File path:** `.vscode/mcp.json`

### Step 3: Jalankan Paper Server Lokal

Paper MCP berjalan sebagai local HTTP server. Ada 2 cara:

**Opsi A: Menggunakan Paper Desktop App (Recommended)**

1. Download Paper dari https://usepaper.ai/downloads
2. Install dan jalankan aplikasi
3. Paper akan otomatis listen di `http://127.0.0.1:29979/mcp`

**Opsi B: Menggunakan NPM CLI**

```bash
npm install -g @modelcontextprotocol/server-paper
paper server --port 29979
```

### Step 4: Restart VSCode

- Close VSCode completely
- Reopen VSCode
- Tunggu sampai Copilot initialize
- Paper MCP akan connect otomatis

### Step 5: Verify MCP Connection

1. Pastikan Paper server sedang running
2. Open Copilot chat (Ctrl + Shift + I atau Cmd + Shift + I)
3. Type: `@paper` - jika berhasil, akan muncul MCP Paper suggestion
4. Coba query: `@paper search for machine learning papers`

**Status Indicator di VSCode:**

- File Explorer > .vscode → Lihat status Paper connection
- Atau check Activity bar untuk MCP status

## Menggunakan MCP Paper dengan Copilot

### Syntax Dasar

```
@paper [COMMAND] [QUERY]
```

### Available Commands

| Command        | Syntax                 | Contoh                              |
| -------------- | ---------------------- | ----------------------------------- |
| Search         | `search [query]`       | `@paper search neural networks`     |
| Get Details    | `details [paper_id]`   | `@paper details arxiv:2401.12345`   |
| Get Citations  | `citations [paper_id]` | `@paper citations arxiv:2401.12345` |
| Similar Papers | `similar [paper_id]`   | `@paper similar arxiv:2401.12345`   |

### Contoh Penggunaan Praktis

**1. Research untuk Product Financing System:**

```
@paper search "microfinance management system design"
@paper search "user authentication best practices"
@paper search "role-based access control implementation"
```

**2. Mencari Best Practices untuk UI:**

```
@paper search "dashboard design patterns"
@paper search "data table component best practices"
@paper search "form validation techniques"
```

**3. Mendapatkan Paper Details:**

```
@paper details arxiv:2310.15234
@paper citations arxiv:2310.15234
```

## Troubleshooting

### MCP Paper tidak muncul di Copilot

**Solusi:**

1. Check: Apakah `@modelcontextprotocol/server-paper` sudah install?

   ```bash
   npm list @modelcontextprotocol/server-paper
   ```

2. Restart VSCode dan Copilot extension

3. Check VSCode Output panel (View > Output) untuk error messages

### API Rate Limiting

Jika mendapat error "Rate limit exceeded":

- Tunggu beberapa menit
- Set API key di settings untuk akses prioritas
- Gunakan query yang lebih spesifik

### No Results Found

- Gunakan query yang lebih umum
- Periksa spelling/grammar
- Coba dengan kata kunci berbeda

## Supported Paper Databases

| Database             | Coverage         | Fokus             |
| -------------------- | ---------------- | ----------------- |
| **arXiv**            | +2.4 juta papers | CS, Math, Physics |
| **PapersWithCode**   | +60k papers      | ML + Code         |
| **OpenAlex**         | +200 juta papers | Multidisiplin     |
| **Semantic Scholar** | +200 juta papers | Citation analysis |

## Integration dengan Project

Dalam project ini, Anda bisa menggunakan MCP Paper untuk:

### 1. Research Fitur Baru

```
@paper Saat akan implement fitur financing calculator:
"search for papers on financial calculation algorithms"
```

### 2. Improve Architecture

```
@paper Sebelum refactor:
"search for scalable dashboard architecture patterns"
```

### 3. Security Best Practices

```
@paper Saat implement role-based access:
"search for RBAC security best practices"
```

## Advanced Configuration

### Custom API Keys

Jika ingin akses unlimited ke beberapa database:

1. Dapatkan API keys dari:
   - arXiv: Public (tidak perlu key)
   - Semantic Scholar: https://www.semanticscholar.org/api
   - OpenAlex: https://openalex.org/

2. Set environment variables di `.env`:

   ```
   ARXIV_API_KEY=your_key
   OPENALES_API_KEY=your_key
   SEMANTIC_SCHOLAR_API_KEY=your_key
   ```

3. Update VSCode settings dengan env vars

### Custom Query Filters

Dalam chat dengan Copilot, Anda bisa filter:

```
@paper search "machine learning" filter:year>2023 filter:citations>100
```

## Tips & Tricks

1. **Combine dengan Copilot:**

   ```
   @paper search "form validation"
   Now implement this in the users page based on the papers you found
   ```

2. **Get Citations untuk Reference:**

   ```
   @paper citations [paper_id]
   Add these publications to my research notes
   ```

3. **Export Results:**
   - Copilot akan format results sebagai Markdown
   - Copy ke docs atau notes
   - Copilot bisa membantu create bibliography

## Next Steps

1. ✅ Install MCP Paper server
2. ✅ Configure VSCode settings
3. ✅ Test dengan simple query
4. ✅ Integrate dengan development workflow
5. ✅ Create project-specific paperlists

## Resources

- [MCP Documentation](https://modelcontextprotocol.io)
- [VSCode Copilot Docs](https://github.com/github/copilot-docs)
- [arXiv API](https://arxiv.org/help/api)
- [Semantic Scholar API](https://www.semanticscholar.org/api)

---

**Last Updated**: March 31, 2026

**Status**: Ready for use

**Questions?** Gunakan Copilot chat dengan query: `help with MCP Paper setup`
