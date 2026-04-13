# CLAUDE.md — Sundram Portfolio

## Project Overview

Personal portfolio SPA for **Sundram Gupta**, Full-Stack Software Engineer. Built with React 18 + TypeScript + Vite + Tailwind CSS v3. Deployed on Vercel.

## Commands

```bash
npm run dev      # Dev server on http://localhost:5179
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint (zero warnings policy — fix all before committing)
```

## Architecture

### File Structure

```
src/
  App.tsx                   # Root component — initializes theme, renders all sections in order
  main.tsx                  # Entry point
  globals.css               # ALL styles: tokens, component classes, utilities, animations
  components/
    AppShell.tsx            # Layout: sticky header, nav, dark mode toggle, footer + IntersectionObserver reveal
  sections/
    Hero.tsx                # Name, tagline, View Projects + Download Resume CTAs
    Project.tsx             # VittNest featured case study
    Experience.tsx          # Timeline: Edgeverve (Jun 2022–Present), Xoriant (Sep 2021–May 2022)
    Skills.tsx              # Tech skills by category (Languages, Frontend, Backend, Database, DevOps)
    About.tsx               # Engineering philosophy + core values
    Contact.tsx             # Email, phone, GitHub, LinkedIn, LeetCode
  lib/
    theme.ts                # Dark mode + palette switching (localStorage-based)
    utils.ts                # cn() helper — clsx + tailwind-merge
public/
  logos/                    # Company logos (EdgeverveLogo.png, XoriantLogo.png, image.png/favicon)
  Sundram_Gupta_Resume.pdf  # Downloadable resume
index.html                  # Entry HTML with OG/Twitter meta tags
```

### Path Alias

`@` maps to `src/` — use `@/lib/utils`, `@/components/AppShell`, etc.

## Design System

All design tokens live in **`src/globals.css`** as CSS custom properties (HSL format).

### Color Tokens (semantic, not literal)
`--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--muted-foreground`, `--accent`, `--border`, `--ring`, `--destructive`

Dark mode applies via `.dark` class on `<html>`. System preference is the default; user override persists in `localStorage` (`portfolio-dark-mode` key). Toggle button lives in the header.

### Fonts
- **Sans (body)**: Sora — loaded from Google Fonts
- **Serif**: Spectral — loaded from Google Fonts
- **Mono**: Geist Mono (fallback to system mono)

### Custom Utility Classes (defined in globals.css)
| Class | Purpose |
|---|---|
| `.btn-solid` | Primary filled button |
| `.btn-ghost` | Secondary outlined button |
| `.card-glow` | Card with hover blue glow shadow |
| `.hover-elevate` | Subtle translateY on hover |
| `.reveal` | Scroll-reveal base (starts hidden) |
| `.reveal-delay-1/2/3/4` | Staggered reveal delays |
| `.section` | Consistent vertical padding for sections |
| `.section-alt` | Alternating muted background (every other section) |
| `.hero-pattern` | Hero dot-grid + noise background (light + dark variants) |
| `.container` | Centered max-w-7xl with responsive horizontal padding |
| `.link-underline` | Animated underline on hover |

### Section Pattern
Sections alternate between plain (`.section`) and tinted (`.section.section-alt`):
- Hero → plain
- Project → alt
- Experience → plain
- Skills → alt
- About → plain
- Contact → alt

### Scroll Reveal
`AppShell.tsx` wires an `IntersectionObserver` that adds `.js-visible` to any `.reveal` element when it enters the viewport. Elements start at `opacity: 0, translateY(22px)` and transition to visible. Use `.reveal` + `.reveal-delay-N` on elements within sections.

## Tailwind Config

Colors, border-radius, and fonts are extended via CSS variables — do not hardcode raw color values; use semantic tokens (`bg-primary`, `text-muted-foreground`, etc.). Dark mode uses the `class` strategy.

## Adding / Modifying Content

### To update personal info
Edit the relevant section file in `src/sections/`. All content is co-located with its component — no separate data layer.

### To add a new section
1. Create `src/sections/NewSection.tsx` with `id="new-section"` on the `<section>` tag
2. Import and render it in `src/App.tsx`
3. Add a nav link in `src/components/AppShell.tsx`
4. Apply `.section` (and optionally `.section-alt`) following the alternating pattern

### To update the resume
Replace `public/Sundram_Gupta_Resume.pdf`.

### To update logos/favicon
Replace files in `public/logos/`. Favicon has a cache-bust query string in `index.html` — update it when replacing the image.

### To add a new theme palette
1. Add CSS variables under `:root[data-theme="palette-name"]` in `globals.css`
2. Add the key to `AVAILABLE_THEMES` in `src/lib/theme.ts`
3. No component changes needed — they consume semantic tokens

## Deployment

Vercel. Config is in `vercel.json`:
- Build: `npm run build`
- Output: `dist/`
- SPA rewrites: all routes → `index.html`

Push to `main` triggers automatic deployment.

## Key Dependencies

| Package | Purpose |
|---|---|
| `react` / `react-dom` | UI framework |
| `react-icons` | Tech/brand icons (Si* from simple-icons, Fa* from font-awesome) |
| `tailwind-merge` + `clsx` | Safe Tailwind class merging via `cn()` |
| `vite` | Build tool + dev server |
| `typescript` | Type safety |
| `tailwindcss` v3 | Utility-first CSS |
