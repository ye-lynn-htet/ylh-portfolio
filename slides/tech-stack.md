---
marp: true
paginate: true
transition: fade
theme: default
---

<!-- slide 1 -->
# Tech Stack
### Building a modern portfolio

**YLH Portfolio** — Senior mobile developer portfolio

---

<!-- slide 2 -->
# Core Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js (App Router) | 16.2.9 |
| UI | React | 19.2.4 |
| Styling | Tailwind CSS | v4 |
| Language | TypeScript | 5.x |
| Fonts | Geist Sans + Geist Mono | — |
| Lint | ESLint | 9.x |

**Zero extra npm dependencies** — native fetch, no UI libraries.

---

<!-- slide 3 -->
# Why Next.js 16?

| Feature | Benefit |
|---------|---------|
| App Router | File-based routing, layouts, loading states |
| Server Components | Default rendering, reduced client JS |
| Static Generation | Pre-rendered pages, instant load |
| API Routes | Future-ready for data binding |
| Image Optimization | Automatic optimization, lazy loading |

**Decision:** Server Components by default, `"use client"` only when needed.

---

<!-- slide 4 -->
# Styling: Tailwind v4

| Approach | Implementation |
|----------|----------------|
| Config | CSS-based (`@import "tailwindcss"`) |
| Theming | Dark mode via `bg-slate-950` |
| Accents | 6-color token system |
| Responsive | Mobile-first breakpoints |
| Animations | CSS keyframes in `globals.css` |

**No `tailwind.config.ts`** — Tailwind v4 uses CSS for configuration.

---

<!-- slide 5 -->
# Design Token System

```typescript
type Accent = "indigo" | "sky" | "emerald" | "amber" | "violet" | "rose";

const accentTokens: Record<Accent, { bar: string; tag: string; glow: string }> = {
  indigo:  { bar: "bg-indigo-500",  tag: "text-indigo-400  border-indigo-500/20",  glow: "bg-indigo-500/10" },
  sky:     { bar: "bg-sky-500",     tag: "text-sky-400     border-sky-500/20",     glow: "bg-sky-500/10" },
  emerald: { bar: "bg-emerald-500", tag: "text-emerald-400 border-emerald-500/20", glow: "bg-emerald-500/10" },
  amber:   { bar: "bg-amber-500",   tag: "text-amber-400   border-amber-500/20",   glow: "bg-amber-500/10" },
  violet:  { bar: "bg-violet-500",  tag: "text-violet-400  border-violet-500/20",  glow: "bg-violet-500/10" },
  rose:    { bar: "bg-rose-500",    tag: "text-rose-400    border-rose-500/20",    glow: "bg-rose-500/10" },
};
```

**6 accents** — each with bar, tag, and glow variants.

---

<!-- slide 6 -->
# AI Agents & Skills

| Type | Name | Purpose |
|------|------|---------|
| Skill | `frontend-ui-engineering` | Production-quality UI building |
| Skill | `frontend-design` | Visual design and aesthetics |
| Skill | `vercel-react-best-practices` | React/Next.js patterns |
| Skill | `code-review` | Comprehensive code review |
| Agent | `frontend-ui-engineering` | UI component specialist |
| Agent | `frontend-design` | Design lead perspective |
| Agent | `vercel-react-best-practices` | Performance optimization |
| Agent | `code-review` | Quality assurance |

**4 skills + 4 agents** — specialized AI assistance.

---

<!-- slide 7 -->
# Trigger & Commands

### Code Review Skill

**Trigger:** `/review`

**Command:**
```bash
/review

# Or review specific files:
/review src/components/Hero.tsx src/app/page.tsx
```

**What it does:**
- Analyzes code quality
- Checks accessibility (WCAG 2.1 AA)
- Reviews performance
- Verifies project conventions
- Provides structured feedback

---

<!-- slide 8 -->
# Methodology

### 1. Design-First Approach
- Accent token system before code
- Mobile-first responsive design
- Accessibility built-in, not bolted on

### 2. Server Components Default
- Static data as `const` arrays
- `"use client"` only for interactivity
- No unnecessary client-side rendering

### 3. Production Quality
- Real App Store/GitHub links
- Proper error handling
- Loading and empty states

### 4. AI-Assisted Development
- Skills for domain expertise
- Agents for specialized tasks
- Code review for quality assurance

---

<!-- slide 9 -->
# Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Single-page layout | Scannable, fast, anchor navigation |
| 3-item preview + "Explore More" | Balance overview vs. depth |
| Static `const` arrays | Zero API cost, instant load |
| Co-located components | Everything in `page.tsx` |
| CSS-only animations | No JS overhead, smooth performance |
| No extra dependencies | Minimal bundle, fewer vulnerabilities |

---

<!-- slide 10 -->
# Deployment

| Aspect | Implementation |
|--------|----------------|
| Platform | Vercel |
| Trigger | Auto-deploy on push |
| Build | Static generation |
| Performance | Edge caching |
| Domain | Custom domain ready |

**One command deployment:** `git push` → live in seconds.

---

<!-- slide 11 -->
# Summary

### Tech Stack
Next.js 16 + React 19 + Tailwind v4 + TypeScript 5

### AI Tools
4 skills + 4 agents for specialized assistance

### Methodology
Design-first, server components, production quality

### Trigger
`/review` for comprehensive code review

### Result
A portfolio that showcases both design sensibility and technical expertise.

---

<!-- slide 12 -->
# Links

- **Repo:** github.com/ye-lynn-htet/ylh-portfolio
- **Live:** ye-lynn-htet.vercel.app
- **Slides:** slides/tech-stack.md

Built by **Ye Lynn Htet** · 2026
