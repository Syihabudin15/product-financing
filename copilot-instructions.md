# Copilot MCP Configuration

## MCP Paper Setup (Official Paper Documentation)

Konfigurasi ini menghubungkan VSCode Copilot dengan Paper MCP server lokal untuk mengakses dan mencari paper penelitian.

### MCP Connection Configuration

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

**Connection Type**: HTTP to local server  
**Server URL**: `http://127.0.0.1:29979/mcp`  
**Port**: `29979`

### Available MCP Paper Tools

#### 1. **Search Papers**

- Search across multiple paper databases (arXiv, Semantic Scholar, OpenAlex, Papers with Code)
- Usage: `@paper search [query]`
- Returns: Title, authors, abstract, year, URL

#### 2. **Get Paper Details**

- Fetch detailed information about a specific paper
- Usage: `@paper details [paper_id]`
- Returns: Full abstract, citations count, keywords, affiliation

#### 3. **Get Related Papers**

- Find similar papers based on a paper
- Usage: `@paper similar [paper_id]`
- Returns: List of related papers ranked by relevance

#### 4. **Extract Citations**

- Get citations from a paper in various formats
- Usage: `@paper citations [paper_id]`
- Returns: Formatted citations (APA, Chicago, BibTeX, etc.)

### Installation & Setup Steps

1. **Download Paper Desktop App**
   - Go to: https://usepaper.ai/downloads
   - Download for your OS (Windows/Mac/Linux)
   - Install the application

2. **Install MCP Paper Client**

   ```bash
   npm install -g @modelcontextprotocol/server-paper
   ```

3. **Run Paper Desktop App**
   - Launch Paper application
   - Paper will automatically listen on `http://127.0.0.1:29979/mcp`

4. **Verify Configuration**
   - Open `.vscode/settings.json` atau user settings
   - Tambahkan MCP configuration:

   ```json
   {
     "github.copilot.advanced": {
       "mcpServers": {
         "paper": {
           "command": "node",
           "args": [
             "${workspaceFolder}/node_modules/@modelcontextprotocol/server-paper/dist/index.js"
           ]
         }
       }
     }
   }
   ```

5. **Restart VSCode**
   - Close and reopen VSCode
   - Check Copilot status bar for MCP server connection

### Using MCP Paper in Copilot

Dalam Copilot chat, Anda bisa menggunakan:

```
@paper Cari paper tentang machine learning dengan React
@paper Dapatkan detail paper dengan ID: arxiv:2401.12345
@paper Rekomendasi paper serupa dengan machine learning
```

### Example Queries

1. **Search Research Paper**

   ```
   Search for papers about "neural networks in finance"
   ```

2. **Get Paper Citations**

   ```
   Get citations for arxiv:2310.12345
   ```

3. **Find Related Papers**
   ```
   Find papers related to "product recommendation systems"
   ```

### Supported Paper Sources

- **arXiv** - Technical papers
- **Papers With Code** - Implemented papers
- **Semantics Scholar** - Academic papers
- **OpenAlex** - Open research database

### Environment Variables

```bash
PAPER_API_KEY=your_api_key_here
PAPER_LOG_LEVEL=debug
```

### Troubleshooting

**Issue**: MCP Server tidak terkoneksi

- Check: `npm list @modelcontextprotocol/server-paper`
- Restart VSCode
- Check Output panel untuk error messages

**Issue**: Copilot tidak bisa mengakses Paper tools

- Verify: MCP configuration di settings.json
- Check: API keys sudah benar
- Restart: Copilot extension

### Documentation References

- [Model Context Protocol Docs](https://modelcontextprotocol.io)
- [VSCode Copilot Settings](https://github.com/github/copilot-docs/blob/main/docs/copilot-vscode.md)
- [MCP Paper Implementation](https://github.com/modelcontextprotocol/servers/tree/main/src/paper)
