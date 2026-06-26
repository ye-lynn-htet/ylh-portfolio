## Methodology
I worked in short steps — build, test, commit, then push. Each feature got its own commit. The project moved from a simple single page to a full site with 8 routes. All changes went through a branch, PR review, and merge to main.

## Evidence — Claude Code usage

### MCP
- path: .mcp.json
- what: 3 servers — Puppeteer for checking the site in a browser, Filesystem for reading project files, GitHub for making PRs and merging

### Skill
- path: .claude/skills/frontend-design/SKILL.md
- what: A design skill that picks colors, fonts, and layout. It made sure the portfolio looks unique and not like a template.

- path: .claude/skills/frontend-ui-engineering/SKILL.md
- what: A UI skill that builds clean components. It checks for accessibility, mobile view, and loading states.

- path: .claude/skills/vercel-react-best-practices/SKILL.md
- what: A performance skill with 70 rules. It keeps React code fast and the bundle size small.

### Agent
- path: .claude/agents/frontend-design.md
- what: An AI agent that acts as a design lead. It plans the look and feel of each section.

- path: .claude/agents/frontend-ui-engineering.md
- what: An AI agent for building production UI. It writes components, handles state, and checks accessibility.

- path: .claude/agents/vercel-react-best-practices.md
- what: An AI agent for performance. It reviews code against Vercel's 70 rules before changes go live.
