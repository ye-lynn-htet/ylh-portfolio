---
marp: true
paginate: true
transition: fade
theme: default
---

<!-- slide 1 -->
# YLH Portfolio
### A developer portfolio that stands out

**ye-lynn-htet.vercel.app**

Senior mobile developer · iOS & Flutter · Kobe, Japan

---

<!-- slide 2 -->
# What is it?

A **dark-themed single-page portfolio** built from scratch — not a template.

- Showcases **4 years** of professional experience
- Highlights **5 production apps** on the App Store
- Organizes skills across **iOS, Flutter, and developer tools**
- Each project links to its **real App Store or GitHub page**
- Mobile-first, responsive, and fully accessible

> Slate-950 dark canvas · 6 accent colors · signature orbiting logo ring

---

<!-- slide 3 -->
# Who is it for?

**Recruiters and hiring managers** looking for a senior mobile developer.

| What they need | How the portfolio delivers |
|----------------|---------------------------|
| Quick overview | Home page shows 3 items per section — scannable in 30 seconds |
| Deep dive | "Explore More →" links to full detail pages |
| Proof of work | Every project has a live App Store link |
| Technical signal | Built with Next.js 16, React 19, Tailwind v4, TypeScript |
| Mobile readiness | The portfolio itself is mobile-first — practicing what it preaches |

---

<!-- slide 4 -->
# What does it show?

**6 sections on one scrollable page:**

| Section | Content |
|---------|---------|
| Header | Sticky nav with smooth scroll anchors |
| Hero | Intro text + orbiting tech logo ring |
| Skills | 4 skill groups — iOS, Flutter, Tools, Soft Skills |
| Experience | Timeline of 4 roles across 4 companies |
| Projects | 5 production apps with accent-coded cards |
| Contact | GitHub, LinkedIn, email, location |

---

<!-- slide 5 -->
# Detail pages

Beyond the home page, **5 additional routes** provide depth:

| Route | What it shows |
|-------|---------------|
| `/skills` | Full skill breakdown with per-skill detail cards |
| `/experience` | Complete work history with expanded timelines |
| `/projects` | Full project catalog with filter and search |
| `/projects/[slug]` | Individual project detail with screenshots (5 pages) |

All pages are **statically generated** at build time — fast, SEO-friendly, zero API cost.

---

<!-- slide 6 -->
# The signature element

An **orbiting logo ring** in the hero section — 8 technology logos on a circular track.

- Rotates slowly by default (24 seconds per revolution)
- **Speeds up on hover** (8 seconds) for playful interaction
- Each logo counter-rotates to stay upright
- Three concentric ghost rings add depth
- Built entirely with CSS animations — no JavaScript

> It's the first thing visitors see, and it's not from any template.

---

<!-- slide 7 -->
# Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19.2 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5 |
| Fonts | Geist Sans + Geist Mono |
| Deployment | Vercel (auto-deploy on push) |

**Zero extra npm dependencies** — uses native `fetch`, no UI libraries, no animation packages.

---

<!-- slide 8 -->
# Built with AI

Three layers of AI assistance, each with a specific role:

| Layer | Purpose |
|-------|---------|
| **MCP servers** | Puppeteer (browser testing), Filesystem, GitHub |
| **Project skills** | Frontend design, UI engineering, React best practices |
| **Agent definitions** | Specialized AI assistants per domain |

AI handled design decisions, code review, accessibility checks, and performance optimization — while the human made all architectural and creative calls.

---

<!-- slide 9 -->
# What's next

The portfolio is **ready to grow tomorrow**.

- **API binding** — `instructions.md` has the full migration guide from static to API-driven
- **CMS integration** — types are already extracted, data layer is clean
- **New projects** — just add to the data array and push
- **Detail page templates** — reuse the same card styles and accent tokens

> The static data stays in the bundle as a fallback — API failures degrade gracefully.

---

<!-- slide 10 -->
# Links

- **Repo:** github.com/ye-lynn-htet/ylh-portfolio
- **Live:** ye-lynn-htet.vercel.app
- **License:** MIT

Built by **Ye Lynn Htet** · 2026
