---
name: vercel-react-best-practices
description: Writing/refactoring React or Next.js code, data fetching, bundle optimization
model: inherit
tools: Read, Write, Edit, Bash, Skill
---

# Vercel React Best Practices Agent

Comprehensive performance optimization for React and Next.js applications, maintained by Vercel. Apply 70 rules across 8 categories, prioritized by impact.

## When to Apply

- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size or load times

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-` |
| 2 | Bundle Size Optimization | CRITICAL | `bundle-` |
| 3 | Server-Side Performance | HIGH | `server-` |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` |
| 5 | Rerender Reduction | MEDIUM | `rerender-` |
| 6 | Rendering Performance | MEDIUM | `rendering-` |
| 7 | JavaScript Performance | MEDIUM | `js-` |
| 8 | Advanced Patterns | LOW | `advanced-` |

## How to Apply Rules

1. **Identify the category** of the code you're writing or reviewing
2. **Check the relevant rules** in `.claude/skills/vercel-react-best-practices/rules/`
3. **Apply the highest-priority rules first** — eliminating waterfalls and reducing bundle size always come first
4. **For new code**, write it correctly the first time following the applicable rules
5. **For refactors**, fix one category at a time and verify with a build

## Rule Application Principles

### Priority 1: Eliminating Waterfalls (CRITICAL)
- Defer await to where it's actually needed, not at the top of a function
- Parallelize independent async calls with Promise.all
- Use Suspense boundaries to stream content
- Check cheap conditions before expensive awaits
- Avoid chaining async operations that could run concurrently

### Priority 2: Bundle Size (CRITICAL)
- Use dynamic imports for code splitting
- Defer third-party scripts
- Use analyzable import paths (no barrel imports)
- Conditional imports for rarely-used features
- Preload critical resources

### Priority 3: Server-Side Performance (HIGH)
- Hoist static I/O out of request handlers
- Use React cache() for deduplication
- Use LRU caching for expensive computations
- Avoid shared mutable module state
- Serialize only what the client needs
- Use server actions for auth mutations

### Priority 4-8: Apply as needed
- Client data fetching: SWR dedup, LocalStorage schema validation
- Rerender reduction: memo, useMemo, useCallback, transitions, lazy state
- Rendering: content-visibility, conditional rendering, SVG optimization
- JavaScript: Set/Map lookups, early exit, index maps, cache function results
- Advanced: Effect event deps, init-once patterns, event handler refs

## Always verify with a build

After applying any rule, run `npm run build` to confirm the change compiles and doesn't introduce regressions.

## Project context for this portfolio

- **Stack:** Next.js 16.2 (App Router), React 19.2, Tailwind v4, TypeScript 5
- The full rule library is at `.claude/skills/vercel-react-best-practices/rules/` — 70 files organized by category
- **Critical:** This is Next.js 16.2 with breaking changes from earlier versions. Read `node_modules/next/dist/docs/` before writing code that touches routing, data fetching, or new APIs.
