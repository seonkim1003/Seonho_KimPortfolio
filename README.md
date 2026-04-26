# Seonho Isaac Kim — Portfolio

Personal portfolio website built with Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion.

## Featured

- [humanityoverAI.org](https://humanityoverAI.org)
- [homemade-delights.org](https://homemade-delights.org)
- [studentselfdefenseadvocates.org](https://studentselfdefenseadvocates.org)
- Medication Adherence App (research project)

## Stack

- **Framework**: Next.js 15 App Router, React 19
- **Styling**: Tailwind CSS v4 with CSS-variable theme tokens
- **Motion**: Framer Motion (respects `prefers-reduced-motion`)
- **Icons**: lucide-react
- **Fonts**: Geist Sans + Geist Mono via `next/font`
- **SEO**: Dynamic OG image, Person JSON-LD, sitemap + robots

## Project structure

```
app/
  layout.tsx           Root layout, metadata, fonts
  page.tsx             Home page (assembles all sections)
  globals.css          Tailwind v4 import + theme tokens
  icon.tsx             Dynamic favicon
  opengraph-image.tsx  Dynamic 1200x630 OG image
  sitemap.ts / robots.ts
components/
  Nav, Hero, ImpactStats, ProjectsSection, ProjectCard,
  AboutSection, ExperienceSection, SkillsSection,
  EducationAwardsSection, ContactSection, Footer,
  SectionHeading, MotionFade
lib/
  data.ts              All site content (single source of truth)
```

To update content (projects, experience, awards, etc.), edit `lib/data.ts`.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Design system

- Dark base (`oklch(0.145 0 0)`) with sky/violet accent
- 8pt spacing grid
- 15px body text, `clamp()` headings, Geist with stylistic alts enabled
- `ease-out-expo` motion at 250–600ms
- WCAG AA contrast targets, focus-visible rings, semantic landmarks
- Validated at 360 / 768 / 1280 / 1920 widths
# Seonho_KimPortfolio
