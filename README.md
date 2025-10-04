# Riding4GBS Website (Astro + Tailwind + React Islands)

Multilingual campaign site for The Slow Road Back / #RIDING4GBS. Built with Astro 5, Tailwind CSS, and a few React islands for interactive UI (carousels, countdowns). Deployed on Vercel.

## Updating content (quick guide)

Homepage copy (en/es/fr)
- File: `src/data/home.i18n.ts`
- What to edit: localized strings and HTML for the homepage card.
- Keys per locale:
	- `metaTitle`, `heroTitle`
	- `introParagraphsHtml`: array of paragraph strings (you can use <strong> for emphasis)
	- `hometownPartnerHeading`, `hometownPartnerDescriptionHtml`, `partnerLinkTitle`
	- `supportersHeading`, `ctaLabel` (applies to all three supporter cards)
- Where it’s rendered: `src/components/HomePage.astro` (used by `src/pages/{en,es,fr}/index.astro`).

Sidebar strings and countdown
- Strings: `src/data/sidebar.json` (per-locale labels for the sidebar UI)
- Countdown date and totals: `src/data/progress.json` (`targetDate`, funds in GBP/EUR)
- Rendering: `src/components/Sidebar.astro` uses both files.

Journal posts (Markdown)
- Location: `src/content/posts/{en,es,fr}/*.md`
- Schema: see `src/content/config.ts` (title, pubDate, image, etc.)
- Add a post: create a new `.md` in the right locale folder with frontmatter; it appears automatically in the locale’s Journal Hub and routes under `/{locale}/posts/{slug}/`.

Partners and supporters
- Partners carousel data: `src/data/partners.json`
- Supporters carousel data: `src/data/supporters.json`
- Images: put under `public/` for external assets or `src/assets/` for processed assets.

Add a new locale
- Add the locale key and strings to `src/data/home.i18n.ts`
- Create `src/pages/<locale>/index.astro` with:
	- `import HomePage from "../../components/HomePage.astro";`
	- `import { homeContent } from "../../data/home.i18n";`
	- Render `<HomePage lang="<locale>" t={homeContent.<locale>} />`
- Add localized sidebar strings to `src/data/sidebar.json`
- Create a posts folder: `src/content/posts/<locale>/`

Tips
- Keep CTA labels consistent per locale (current behavior). If you need per-card CTA text, we can split the single `ctaLabel` into three fields.
- For fully localized a11y, you can add per-locale alt/title for the Cycla logo and wire them in `HomePage.astro`.

## Tech Stack
- Astro 5 (view transitions enabled)
- Tailwind CSS (custom fonts/colors/animations)
- React islands (Carousel, Logo/Supporters carousels, Countdown)
- Content Collections for markdown posts
- Image optimization via `astro:assets`

## Getting Started

Prerequisites
- Node 18+
- pnpm 8+

Install and run locally
- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev` (default: http://localhost:4321)
- Build for production: `pnpm build`
- Preview the build: `pnpm preview`

Scripts (from `package.json`)
- `pnpm dev` — start local dev server
- `pnpm build` — static build to `dist/`
- `pnpm preview` — serve `dist/` locally

## Project Structure

```
/
├── public/                 # Static assets (served at root)
├── src/
│   ├── assets/images/      # Local images used by posts and pages
│   ├── components/         # Islands: Carousel, Countdown, Carousels, etc.
│   ├── content/            # Content collections (markdown posts)
│   │   ├── config.ts       # Post schema (title, pubDate, image, featured, ...)
│   │   └── posts/{en,es,fr}/*.md
│   ├── data/               # Data (TS/JSON): home.i18n, progress, sidebar i18n, partners, supporters
│   ├── layouts/            # Main layout with sidebar and hamburger
│   ├── pages/              # Astro pages and localized routes
│   │   ├── index.astro     # Landing language selector (+countdown)
│   │   ├── en|es|fr/       # Localized sections
│   │   │   ├── journal-hub.astro
│   │   │   └── posts/[...slug].astro  # Dynamic post routes per locale
│   └── styles/global.css   # Tailwind layers + utilities
├── astro.config.mjs        # Integrations: Tailwind, React; viewTransitions=true
├── tailwind.config.mjs     # Theme and animations
├── postcss.config.js       # Tailwind/PostCSS
├── vercel.json             # Vercel rewrites (see Deploy)
└── package.json
```

## Content Authoring (Markdown)

Content lives in `src/content/posts/` by locale (en/es/fr). The schema is defined in `src/content/config.ts`:

- `title` (string)
- `tagline` (optional string)
- `pubDate` (date)
- `image` (optional { src, alt })
- `tags` (optional string[])
- `featured` (optional boolean)

Add a new post
1) Create a file under the right locale, e.g. `src/content/posts/es/day-04-mountains.md`.
2) Add frontmatter matching the schema:

```
---
title: "Día 4 — Montañas sin fin"
tagline: "Subidas, paisajes y determinación"
pubDate: 2026-10-03
image:
	src: ../../assets/images/es/morning-view.jpg
	alt: "Amanecer en los Pirineos"
featured: false
---

Contenido del diario...
```

3) The post will appear automatically in the locale’s Journal Hub and route under `/{locale}/posts/{slug}/`.

## Internationalization

- Locale is inferred by route prefix: `/en`, `/es`, `/fr`.
- `<html lang>` is set dynamically in `src/layouts/MainLayout.astro`.
- Sidebar copy and countdown labels come from `src/data/sidebar.json`.
- Journal hubs fetch posts per locale and list featured/latest.
- Dynamic routes exist for all three locales: `en`, `es`, and `fr`.

## UI/Islands

- Countdown (Sidebar & Landing): `src/components/Countdown.jsx`
	- Reads target date from `src/data/progress.json`.
	- Localized labels via `src/data/sidebar.json`.
- Carousels: `LogoCarousel.jsx`, `SupportersCarousel.jsx`
	- Infinite scroll with Tailwind keyframes.
	- Reduced-motion friendly and pause-on-hover.
- View Transitions: enabled globally in `astro.config.mjs`.

## Styling

- Tailwind CSS included via `@astrojs/tailwind` integration.
- Custom fonts via `@fontsource/lato` and `@fontsource/montserrat` in `MainLayout`.
- Global utilities in `src/styles/global.css` (reduced-motion, pause-on-hover).

## Deployment (Vercel)

This site is designed for static output and deployed on Vercel.

- Build command: `pnpm build`
- Output directory: `dist/`
- `vercel.json` rewrites:
	- Preserve the splash page at `/` and serve localized routes under `/en`, `/es`, `/fr`.

Environment variables
- None required for basic operation. Add as needed for future integrations.

## Troubleshooting

- Dev server won’t start:
	- Ensure Node 18+ and pnpm 8+.
	- Delete `.astro/` and `node_modules/`, then reinstall.
- Tailwind classes not applied:
	- Check `content` paths in `tailwind.config.mjs` include all file types used.
- Images not rendering:
	- Ensure `image.src` in frontmatter points to an actual file under `src/assets`.

## License

© 2025 Riding4GBS. All rights reserved.
