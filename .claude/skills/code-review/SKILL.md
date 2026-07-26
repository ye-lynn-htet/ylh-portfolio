---
name: code-review
description: Reviews code changes for quality, accessibility, and best practices. Use when you want a comprehensive review of modified files.
---

# Code Review Skill

## Overview

Perform a comprehensive code review of recently changed files, checking for quality, accessibility, performance, and adherence to project conventions.

## When to Use

- After making significant code changes
- Before committing to ensure quality
- When you want feedback on your implementation
- To verify accessibility and best practices

## What It Does

This skill analyzes your code changes and provides feedback on:

### 1. Code Quality
- Component structure and organization
- Naming conventions and clarity
- DRY principles and code reuse
- Error handling completeness

### 2. Accessibility (WCAG 2.1 AA)
- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Color contrast and visual indicators

### 3. Performance
- Unnecessary re-renders
- Bundle size considerations
- Animation performance
- Image and asset optimization

### 4. Project Conventions
- Mobile-first responsive design
- Design system adherence
- TypeScript usage
- Next.js App Router patterns

### 5. Security
- XSS prevention
- Secure data handling
- Authentication patterns (if applicable)

## Usage

To trigger this skill, use the command:

```
/review
```

Or invoke it explicitly:

```
Skill(code-review)
```

## Output Format

The review provides structured feedback with:

- **Strengths**: What's done well
- **Improvements**: Suggested enhancements
- **Issues**: Critical problems to fix
- **Summary**: Overall assessment

## Example

```bash
/review

# Or when you want to review specific files:
/review src/components/Hero.tsx src/app/page.tsx
```

## Integration

This skill works best with:
- `frontend-ui-engineering` skill for implementation details
- `frontend-design` skill for visual design feedback
- `vercel-react-best-practices` skill for React/Next.js patterns

## Verification Checklist

After review, ensure:
- [ ] No console errors
- [ ] All interactive elements keyboard accessible
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] Follows project's accent token system
- [ ] No accessibility warnings in dev tools
