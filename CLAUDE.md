# ylh-portfolio

Senior mobile developer (iOS + Flutter) portfolio for Ye Lynn Htet — based in Kobe, Japan.

**Stack:** Next.js 16.2 (App Router), React 19.2, Tailwind v4, TypeScript 5, Geist fonts.
**Theme:** slate-950 dark, indigo primary accent, 5 secondary accents (sky, emerald, amber, violet, rose).
**Structure:** single-page — 6 `<section>` blocks (Header → Hero → Skills → Experience → Projects → Contact).
**Data:** static `const` arrays in `page.tsx` — no API, no DB.
**Sig nature:** orbiting logo ring in hero (8 tech icons, CSS rotate, speeds up on hover).

@AGENTS.md

## Future: API Binding

The portfolio will eventually migrate from static `const` arrays to API-driven content. The full preparation guide lives in `instructions.md`. Key points:

- **Types**: extract to `src/types/portfolio.ts` before adding any fetch calls
- **Client**: use native `fetch` with ISR revalidation — no extra npm deps
- **Fallback**: the current static data remains in the bundle; API failures fall back gracefully
- **Routes**: prefixed at `/api/portfolio`, `/api/projects`, `/api/experiences`, etc.
- **No premature abstraction**: keep `"use client"` only where interactivity demands it

## Future: Detail Screens

Each section (Skills, Experience, Projects) will have dedicated detail pages:

| Route | Content | Trigger |
|-------|---------|---------|
| `/skills` | Full skill breakdown with per-skill detail cards | "Explore More" from home |
| `/experience` | Complete work history with expanded timelines | "Explore More" from home |
| `/projects` | Full project catalog with filter/search | "Explore More" from home |
| `/projects/[slug]` | Individual project detail with screenshots | Clicking a project card |

Each detail screen reuses the same data types, accent tokens, and card styles from the home page.

## Home Screen Pattern: 3 Items + Explore More

The home page will show a **3-item preview** for Skills, Experience, and Projects sections, with an **"Explore More →"** button at the bottom of each section that links to the corresponding detail route. This keeps the landing page scannable while providing depth for interested visitors.

- Skills: show first 3 groups (of 4), link to `/skills`
- Experience: show first 3 roles (of 4), link to `/experience`
- Projects: show first 3 projects (of 5), link to `/projects`
- Contact: remains full-width footer, no detail page needed
