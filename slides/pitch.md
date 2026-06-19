---
marp: true
paginate: true
transition: fade
# PechaKucha: 6 slides, 20s auto-advance. Do not change the count.
auto-advance: 20
---

<!-- slide 1 -->
# Who is my person?
<!-- 20s -->

**Ye Lynn Htet** — Senior Mobile Developer in Kobe, Japan.

- Builds iOS apps with **Swift (UIKit + SwiftUI)** and cross-platform apps with **Flutter**.
- 4 years of experience across 4 companies.
- 5 real apps on the App Store — sports streaming, education, writing, shopping, POS.
- Currently leading Flutter projects at **Telaaxon**, a med-tech company.
- Looking for remote opportunities worldwide.

---

<!-- slide 2 -->
# Their problem
<!-- 20s -->

Ye Lynn needs a portfolio that **stands out from templates**.

| Problem | Why it hurts |
|---------|--------------|
| Generic portfolios | Recruiters skip AI-looking designs |
| No detail pages | Can't show the full story of each project |
| Static-only code | Hard to add a CMS or API later |
| No AI tooling | Wasting time on manual code reviews |
| Skills hidden | 4 roles, 5 apps — no way to browse them |

The portfolio must be **distinctive**, **expandable**, and built with **AI assistance** from day one.

---

<!-- slide 3 -->
# What I built
<!-- 20s -->

A **dark-themed single-page portfolio** with detail screens — built for a senior mobile developer.

**8 routes, all static-generated:**

| Page | What it shows |
|------|---------------|
| `/` Home | Hero + 3 items each for Skills, Experience, Projects |
| `/skills` | All 4 skill groups with technology tags |
| `/experience` | Full timeline of 4 job roles |
| `/projects` | 5 production apps with App Store links |
| `/projects/[slug]` | Individual project detail (5 pages) |

**Signature element:** orbiting tech ring in the hero — 8 logos rotating with hover speed-up.

---

<!-- slide 4 -->
# How I built it
<!-- 20s -->

**Stack:** Next.js 16.2 · React 19 · Tailwind v4 · TypeScript · Geist fonts

**AI Tooling (3 layers):**

| Layer | What | Count |
|-------|------|-------|
| **MCP** | `.mcp.json` — Puppeteer, Filesystem, GitHub | 3 servers |
| **Skills** | `.claude/skills/` — design, UI engineering, React best practices | 3 skills |
| **Agents** | `.claude/agents/` — specialized AI assistants per domain | 3 agents |

**Architecture:**
- `src/types/portfolio.ts` — shared TypeScript interfaces
- `src/app/fallback-data.ts` — single source of truth for all data
- `src/app/components.tsx` — reusable cards, tags, labels
- `src/lib/slug.ts` — URL slug utility for project detail pages

**Design:** slate-950 dark canvas · 6 accent colors · mobile-first responsive · WCAG 2.1 AA accessible.

---

<!-- slide 5 -->
# Why it matters
<!-- 20s -->

**For Ye Lynn:**
- Ready to **deploy today** — full static build, 12 pages, zero API dependencies.
- Ready to **grow tomorrow** — `instructions.md` has the complete API binding guide.
- Every project card links to the **real App Store page**.
- **3-item preview** on home keeps it scannable. "Explore More →" goes deep.

**For the code quality:**
- **926 lines of TypeScript** across 11 source files.
- **Zero npm dependencies added** — uses native fetch, no bloated libraries.
- **No `"use client"`** except where interactivity demands it.
- **Every component is reusable** — shared between home and detail pages.

**For the process:**
- Built with AI agents for design, engineering, and performance review.
- MCP servers provide browser testing (Puppeteer) and GitHub integration.

---

<!-- slide 6 -->
# Done checklist
<!-- 20s -->

- [x] **Repo public** — [github.com/ye-lynn-htet/ylh-portfolio](https://github.com/ye-lynn-htet/ylh-portfolio)
- [x] **MCP + Skill + Agent used**
  - MCP: 3 servers in `.mcp.json` (puppeteer, filesystem, github)
  - Skills: 3 project skills (frontend-design, frontend-ui-engineering, vercel-react-best-practices)
  - Agents: 3 agent definitions (frontend-design, frontend-ui-engineering, vercel-react-best-practices)
- [x] **`slides/pitch.md`** — this file
- [x] **`instructions.md`** — complete API binding and future planning guide
- [x] **`CLAUDE.md` + `AGENTS.md`** — project instructions and agent registry
