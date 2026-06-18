# API Binding — Preparation Guide

This document covers how to evolve the portfolio from fully-static `const` data toward API-driven content: types, client setup, loading states, environment config, error handling, and the Backend-for-Frontend pattern.

## 1. Current state (baseline)

All five data sources live as `const` arrays/objects in `src/app/page.tsx`:

| Source | Shape | Lines |
|--------|-------|-------|
| `navLinks` | `{ label, href }[]` | 2–8 |
| `skillGroups` | `{ label, accent, items[] }[]` | 9–33 |
| `experiences` | `{ company, role, period, accent, highlights[] }[]` | 35–80 |
| `projects` | `{ title, description, tags[], accent, appStore }[]` | 82–118 |
| `contact` | `{ email, phone, location, linkedin, github }` | 120–126 |

These render unconditionally — no loading, no error, no empty state.

## 2. Extract shared types

Create `src/types/portfolio.ts` with explicit interfaces matching the current data shape:

```ts
// src/types/portfolio.ts

export type Accent = "indigo" | "sky" | "emerald" | "amber" | "violet" | "rose";

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  label: string;
  accent: Accent;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  accent: Accent;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  appStore: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  navLinks: NavLink[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  contact: Contact;
}
```

Keep the existing `const` arrays as **default fallback values** — they ship with the bundle and render instantly.

## 3. Environment variables

Create `.env.example` (checked in) and `.env.local` (git-ignored):

```bash
# .env.example
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

Export them typed — add `src/lib/env.ts`:

```ts
// src/lib/env.ts
export const env = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
} as const;
```

## 4. API client

Create `src/lib/api.ts` — a thin fetch wrapper with error normalisation and response typing:

```ts
// src/lib/api.ts
import type { PortfolioData, Project, Experience, SkillGroup, Contact, NavLink } from "@/types/portfolio";
import { env } from "./env";

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${env.API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 3600 }, // ISR: revalidate every hour (remove for client fetch)
    ...init,
  });

  if (!res.ok) {
    throw new ApiError(res.status, `GET ${path} failed: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// Individual fetchers — use these instead of const arrays
export function fetchProjects(): Promise<Project[]> {
  return fetchJSON<Project[]>("/projects");
}

export function fetchExperiences(): Promise<Experience[]> {
  return fetchJSON<Experience[]>("/experiences");
}

export function fetchSkillGroups(): Promise<SkillGroup[]> {
  return fetchJSON<SkillGroup[]>("/skills");
}

export function fetchContact(): Promise<Contact> {
  return fetchJSON<Contact>("/contact");
}

export function fetchNavLinks(): Promise<NavLink[]> {
  return fetchJSON<NavLink[]>("/nav");
}

export function fetchPortfolioData(): Promise<PortfolioData> {
  return fetchJSON<PortfolioData>("/portfolio");
}
```

Key decisions in this module:
- `next: { revalidate }` enables ISR (Incremental Static Regeneration) for server components — no client fetch needed.
- Remove `revalidate` if you later move these calls to `"use client"`.
- The `ApiError` class lets error boundaries distinguish network failures from other errors.

## 5. Server-component data fetching pattern

The page is a server component by default. To fetch data at build time with ISR:

```tsx
// src/app/page.tsx (server component)
import { fetchPortfolioData } from "@/lib/api";
import { navLinks, skillGroups, experiences, projects, contact } from "./fallback-data";

export default async function HomePage() {
  let data;

  try {
    data = await fetchPortfolioData();
  } catch {
    // Fall back to static const data if the API is unreachable
    data = { navLinks, skillGroups, experiences, projects, contact };
  }

  return (
    <>
      <Header navLinks={data.navLinks} />
      <Hero />
      <SkillsSection groups={data.skillGroups} />
      <ExperienceSection experiences={data.experiences} />
      <ProjectsSection projects={data.projects} />
      <ContactSection contact={data.contact} />
    </>
  );
}
```

The build-time try/catch with fallback ensures the portfolio **always renders**, even if the API is down.

## 6. Component loading & error boundaries

For sections that fetch independently (if you switch to client-side):

```tsx
// Loading skeleton pattern
function ProjectsSkeleton() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-64 rounded-xl bg-slate-900/40 animate-pulse" />
      ))}
    </section>
  );
}

// Error boundary pattern
function ProjectsErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-center py-16" role="alert">
      <p className="text-slate-400 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-indigo-500"
      >
        Try again
      </button>
    </div>
  );
}

// Empty state
function ProjectsEmpty() {
  return (
    <div className="text-center py-16">
      <p className="text-slate-500">No projects listed yet.</p>
    </div>
  );
}
```

## 7. Next.js API routes as Backend-for-Frontend

If you need to aggregate, transform, or proxy external APIs, create API routes:

```
src/app/api/
  projects/route.ts     # GET /api/projects
  experiences/route.ts  # GET /api/experiences
  skills/route.ts       # GET /api/skills
  contact/route.ts      # GET /api/contact
  nav/route.ts          # GET /api/nav
  portfolio/route.ts    # GET /api/portfolio (aggregate)
```

Example route:

```ts
// src/app/api/portfolio/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // When backed by an external CMS or API:
  // const data = await externalService.fetchAll();
  // return NextResponse.json(data);

  return NextResponse.json({
    navLinks: [
      { label: "Skills", href: "#skills" },
      // ...
    ],
  });
}
```

Transition path:
1. Start with static `const` arrays returned directly from route handlers (zero external deps).
2. Swap out route handler internals to call external APIs later — the page fetcher signatures don't change.

## 8. Migration checklist

| Step | File(s) | Action |
|------|---------|--------|
| 1 | `src/types/portfolio.ts` | Create — extract type interfaces |
| 2 | `src/lib/env.ts` | Create — typed env access |
| 3 | `.env.example` | Create — shareable env template |
| 4 | `.env.local` | Ensure it's in `.gitignore` and create with real values |
| 5 | `src/lib/api.ts` | Create — fetch wrapper with ISR revalidation |
| 6 | `src/app/fallback-data.ts` | Move current `const` arrays here (rename exports) |
| 7 | `src/app/page.tsx` | Add `async`, wrap data reads in try/catch, pass data as props |
| 8 | Per-section components | Add skeleton + error + empty states |
| 9 | `src/app/api/*/route.ts` | Create BFF routes (optional, start with static returns) |
| 10 | `npm run build` | Verify no type errors, static generation still works |

## 9. Key design decisions already locked

- **No `"use client"` unless necessary** — prefer server components with `async await` data fetching.
- **No npm dependencies** without explicit approval — use native `fetch`, not axios.
- **Tailwind v4** — no config file, all configuration in CSS.
- **Single-page layout** — anchor-based navigation, no routing changes needed for API data.
- **Static fallback** — the current `const` data remains in the bundle as a build-time safety net.

## 10. Edge cases to handle

| Scenario | Strategy |
|----------|----------|
| API returns partial data (e.g. 4 of 5 projects) | Render what you have — don't hard-fail |
| API returns malformed JSON | Catch at `fetchJSON`, re-throw typed `ApiError` |
| API timeout | Set `AbortController` with `signal` in `fetchJSON`, default 8s |
| API changes shape | Validate with TypeScript types — if a field is missing, use `??` fallback |
| Network offline (client fetch) | Use SWR or React Query `stale-while-revalidate` + the static const fallback |
| Rapid navigation (client fetch) | Dedupe identical in-flight requests with `React.cache()` or SWR |

## 11. Detail screens — route & component architecture

Each section gets a dedicated route with its own page. The home screen shows only a 3-item preview.

| Route | Source file | Content |
|-------|-------------|---------|
| `/skills` | `src/app/skills/page.tsx` | All 4 skill groups with expanded detail cards, per-skill descriptions |
| `/experience` | `src/app/experience/page.tsx` | Full 4-role timeline with expanded highlights, company logos (future) |
| `/projects` | `src/app/projects/page.tsx` | All 5 projects in a filterable/searchable grid |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Single project detail — description, tech stack, app store link, screenshots (future) |

### Route scaffold pattern

Each detail page follows the same server-component pattern as the home page:

```tsx
// src/app/projects/page.tsx
import type { Metadata } from "next";
import { fetchProjects } from "@/lib/api";
import { projects as fallbackProjects } from "@/app/fallback-data";

export const metadata: Metadata = {
  title: "Projects — Ye Lynn Htet",
  description: "iOS and Flutter projects by Ye Lynn Htet — SPOTV NOW, SAYA, Kakely, and more.",
};

export default async function ProjectsPage() {
  let projects;

  try {
    projects = await fetchProjects();
  } catch {
    projects = fallbackProjects;
  }

  return (
    <main className="min-h-screen px-4 py-24 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
```

### Dynamic route: `[slug]`

Generate slugs from project titles using a slug utility:

```ts
// src/lib/slug.ts
export function toSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
```

Add `slug` fields to the project data during fetch/transform, or derive at build time with `generateStaticParams`:

```tsx
// src/app/projects/[slug]/page.tsx
import { fetchProjects } from "@/lib/api";
import { projects as fallbackProjects } from "@/app/fallback-data";
import { toSlug } from "@/lib/slug";
import type { Metadata } from "next";

export async function generateStaticParams() {
  try {
    return (await fetchProjects()).map((p) => ({ slug: toSlug(p.title) }));
  } catch {
    return fallbackProjects.map((p) => ({ slug: toSlug(p.title) }));
  }
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = (await fetchProjects().catch(() => fallbackProjects));
  const project = projects.find((p) => toSlug(p.title) === slug);
  return { title: project ? `${project.title} — Ye Lynn Htet` : "Project not found" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projects = (await fetchProjects().catch(() => fallbackProjects));
  const project = projects.find((p) => toSlug(p.title) === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="min-h-screen px-4 py-24 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <BackLink href="/projects" label="All Projects" />
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 mt-4">{project.title}</h1>
      <p className="text-slate-400 mt-4 text-lg">{project.description}</p>
      <TagList tags={project.tags} accent={project.accent} />
      <a href={project.appStore} className="inline-block mt-6 px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/30 transition-all">
        View on App Store
      </a>
    </main>
  );
}
```

## 12. Home screen: 3-item preview + Explore More

The home page becomes a curated summary — each section shows its first 3 items with an "Explore More →" link to the full detail route.

### Section component pattern

Wrap each section component to accept a `limit` prop:

```tsx
// Reusable preview pattern inside page.tsx
function ProjectsSection({ projects, limit }: { projects: Project[]; limit?: number }) {
  const displayed = limit ? projects.slice(0, limit) : projects;
  const hasMore = limit && projects.length > limit;

  return (
    <section id="projects" className="scroll-mt-20">
      <SectionLabel>Projects</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mt-2 mb-8">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-indigo-400 transition-all"
          >
            Explore More Projects
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </section>
  );
}
```

### Preview grid on home page

| Section | Home preview | Detail page | Show-on-home count |
|---------|-------------|-------------|---------------------|
| Skills | 3 of 4 groups | `/skills` — all 4 | 3 |
| Experience | 3 of 4 roles | `/experience` — all 4 | 3 |
| Projects | 3 of 5 projects | `/projects` — all 5 | 3 |
| Contact | Full (no preview) | No detail page | Full |
| Header & Hero | Full (no preview) | No detail page | Full |

### Navigation updates

The "Explore More" links use plain `<a href="...">` for server-side navigation. Add these routes to the nav if desired, or keep them as in-section CTAs only.

### Loading states for detail pages

Each detail page gets the same skeleton/error/empty state treatment as section 6, with one addition — the `NotFound` fallback for `[slug]`:

```tsx
function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-slate-50">Project not found</h1>
      <p className="text-slate-400 mt-2">The project you're looking for doesn't exist.</p>
      <a
        href="/projects"
        className="mt-6 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-indigo-500 transition-all"
      >
        ← Back to Projects
      </a>
    </main>
  );
}
```

## 13. Migration checklist (detail screens)

| Step | File(s) | Action |
|------|---------|--------|
| 11 | `src/lib/slug.ts` | Create `toSlug` utility |
| 12 | `src/app/skills/page.tsx` | Full skills detail page |
| 13 | `src/app/experience/page.tsx` | Full experience timeline page |
| 14 | `src/app/projects/page.tsx` | Full project catalog page |
| 15 | `src/app/projects/[slug]/page.tsx` | Individual project detail page |
| 16 | `src/app/page.tsx` | Add `limit={3}` to skills/experience/projects sections, add Explore More buttons |
| 17 | Reuse existing components | `ProjectCard`, `Tag`, `AccentBar`, `SectionLabel` — move to shared location if needed |
| 18 | `npm run build` | Verify all routes generate, slugs resolve, no broken links |
