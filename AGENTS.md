# Ye Lynn Htet — Portfolio

Personal portfolio for a senior mobile developer (iOS + Flutter) based in Tokyo. Single-page site with six sections: Header, Hero, Skills, Experience, Projects, Contact.

## Tech Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js (App Router) | 16.2.9 |
| UI | React | 19.2.4 |
| Styling | Tailwind CSS | v4 (no tailwind.config) |
| Language | TypeScript | 5.x |
| Fonts | Geist Sans + Geist Mono (next/font/google) | — |
| Lint | ESLint with eslint-config-next | 9.x |

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Architecture

- **App Router only** — no Pages Router. All routes live under `src/app/`.
- **Single-page layout** — sections scroll on the same route (`/`). Navigation uses anchor IDs (`#work`, `#contact`).
- **Server Components by default** — add `"use client"` only when you need interactivity (state, effects, event handlers).
- **No API routes yet** — the site is static. Data lives in `const` arrays at the top of `page.tsx`. No database, no fetch.
- **Mobile-first responsive** — all Tailwind classes start at the smallest breakpoint and scale up (`sm:`, `md:`, `lg:`).

## Design System

### Colors
| Token | Class | Usage |
|-------|-------|-------|
| Background | `bg-slate-950` (#020617) | Full-page canvas |
| Card surface | `bg-slate-900/60` | Cards, sections |
| Body text | `text-slate-400` (#94a3b8) | Descriptions, secondary |
| Headings | `text-slate-50` (#f8fafc) | h1, h2, h3 titles |
| Primary accent | `indigo-400/500` | Hero, section labels, CTA |
| iOS accent | `sky-400/500` | UIKit/SwiftUI skill groups, SPOTV |
| Growth accent | `emerald-400/500` | Tools group, Binary Lab exp |
| Warm accent | `amber-400/500` | Flutter/Dart skills, Kakely |
| Streaming accent | `violet-400/500` | SAYA project |
| POS accent | `rose-400/500` | Flash Mall EPOS |
| Borders | `border-slate-700/800` | Cards, tags, sections

### Typography
- **Display/headings**: Geist Sans (`--font-geist-sans`), bold, tight tracking
- **Body**: Geist Sans, regular weight, relaxed leading
- **Utility/mono**: Geist Mono (`--font-geist-mono`), uppercase tracking-widest, used for section labels ("FULL-STACK DEVELOPER", "SELECTED WORK")

### Accent token system
All accents are defined in the `accentTokens` record at the top of `page.tsx`. Each accent has three slots:

```ts
type Accent = "indigo" | "sky" | "emerald" | "amber" | "violet" | "rose";

const accentTokens: Record<Accent, { bar: string; tag: string; glow: string }> = {
  indigo:  { bar: "bg-indigo-500",  tag: "text-indigo-400  border-indigo-500/20",  glow: "bg-indigo-500/10" },
  // ...etc
};
```

To add a new accent: add an entry to `Accent` union + `accentTokens`. Tag classes use `border-<color>-500/20` for a muted border that matches the accent.

### Reusable micro-components
- `<SectionLabel>` — mono eyebrow label with indigo code-line decoration
- `<AccentBar accent>` — small colored bar (`h-1 w-8`)
- `<Tag accent>` — rounded pill badge with accent border + text
- `<ProfilePlaceholder />` — inline SVG geometric portrait placeholder

### Card patterns
**Skill group card**: `rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6` with `<AccentBar>` + `<h3>` + `<Tag>` list.

**Experience timeline**: Ordered list with vertical line (`w-px bg-slate-800`), timeline dots (`h-3 w-3 rounded-full` + accent bar fill), card content with highlights as `<ul>` with dot bullets.

**Project card**: Grid card with accent bar, title, description, `<Tag>` list, and App Store / GitHub link buttons. Hover: `hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl` + optional glow overlay.

### Responsive breakpoints
| Breakpoint | Width | What changes |
|-----------|-------|-------------|
| Base (mobile) | <640px | 1-col grid, `text-4xl` h1, reduced padding/gap |
| `sm:` | ≥640px | 2-col grid, `text-5xl` h1, normal spacing |
| `md:` | ≥768px | `text-7xl` h1 |
| `lg:` | ≥1024px | 3-col project grid |

## Conventions

- **Mobile-first**: every Tailwind utility scales from base → `sm:` → `md:` → `lg:`
- **Static data as `const`**: `colorMap` and `projects` live at module scope, typed with `as const`
- **No import of Link unless navigated** — anchor links use `<a href="#id">`
- **Sections** use `<section>` with `id` for scroll targets
- **`text-balance`** on hero paragraph for clean line breaks on narrow screens
- **`scroll-smooth`** set once on `<html>` in `layout.tsx`
- **`transition-all`** on interactive elements — consistent 150ms feel
- **Don't import Tailwind** — v4 uses `@import "tailwindcss"` in `globals.css`, no config file

## Commands

```bash
npm run dev        # Start dev server on port 3000
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Constraints — DO NOT

- Add npm dependencies without asking first
- Use Pages Router patterns or `pages/` directory
- Convert to `"use client"` unless the component genuinely needs interactivity
- Break the dark theme — the project is zinc-950 based, no light mode
- Remove or restructure `colorMap` — it's the design token pattern
- Use `tailwind.config.ts` — Tailwind v4 config lives in CSS
- Create separate component files without confirming — the site is small and co-location may be simpler

## Installed Agents

| Agent | File | Use when |
|-------|------|----------|
| `frontend-ui-engineering` | `.agents/skills/frontend-ui-engineering/SKILL.md` | Building/modifying UI components, implementing layouts, managing state, production-quality output |
| `frontend-design` | `.agents/skills/frontend-design/SKILL.md` | Designing new sections, choosing visuals, typography, palette decisions |
| `vercel-react-best-practices` | `.agents/skills/vercel-react-best-practices/SKILL.md` | Writing/refactoring React or Next.js code, data fetching, bundle optimization |

All three are registered as project skills in `.claude/skills/`. Invoke them with `/frontend-ui-engineering`, `/frontend-design`, or `/vercel-react-best-practices` when their domain applies.
