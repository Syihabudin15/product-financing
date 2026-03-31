# MCP Paper Quick Reference

## Installation (Quick)

### For Windows:

```bash
setup-mcp.bat
```

### For Mac/Linux:

```bash
./setup-mcp.sh
```

### Manual:

```bash
npm install -g @modelcontextprotocol/server-paper
```

## Configuration

### Step 1: mcp.json Setup

File `.vscode/mcp.json` sudah ada di project dengan konfigurasi:

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

### Step 2: Run Paper Server

Download Paper Desktop App dari: https://usepaper.ai/downloads

- Install dan jalankan aplikasi
- Paper akan otomatis listening di port 29979

### Step 3: Restart VSCode

## Usage in Copilot Chat

### Search Papers

```
@paper search machine learning finance
@paper search React best practices
@paper search microfinance systems
```

### Get Paper Details

```
@paper details arxiv:2401.12345
@paper citations arxiv:2401.12345
@paper similar arxiv:2401.12345
```

## Common Queries for This Project

| Need          | Query                                                |
| ------------- | ---------------------------------------------------- |
| Dashboard UI  | `@paper search "admin dashboard design patterns"`    |
| Auth System   | `@paper search "role-based access control"`          |
| Data Tables   | `@paper search "interactive data table design"`      |
| Finance App   | `@paper search "financial management system"`        |
| Microfinance  | `@paper search "microfinance platform architecture"` |
| Mobile Design | `@paper search "responsive web design"`              |
| API Design    | `@paper search "REST API best practices"`            |

## Quick Troubleshooting

**MCP not showing?**

- Restart VSCode
- Check npm: `npm list -g @modelcontextprotocol/server-paper`

**No results?**

- Try simpler query
- Check spelling
- Use different keywords

**Rate limited?**

- Wait a few minutes
- Use specific paper IDs
- Add API key to settings

## Copilot + MCP Workflow

```
1. Ask Copilot: "How do I build a role-based access system?"
2. @paper search "role-based access control implementation"
3. Copilot combines both: theory + implementation tips
4. Ask Copilot: "Implement this in my app"
5. Get code based on research papers
```

## Key Files

- `MCP_PAPER_SETUP.md` - Detailed setup guide
- `copilot-instructions.md` - Copilot configuration
- `.vscode/settings.json` - Project settings
- `.instructions.md` - Workspace instructions

## Support

- Read: `MCP_PAPER_SETUP.md`
- Check: `copilot-instructions.md`
- Ask Copilot: "help with MCP Paper"

---

**Version**: 1.0
**Updated**: March 31, 2026
