# Typography System

This document describes the typography system used across the site, aligned with the designer's style guide.

- Hero Title → Bebas Neue
- Section Headings / Hashtags → Montserrat SemiBold
- Body & Long Text → Inter

## Goals

- Consistency across pages and components
- Accessibility and readability for long-form content
- Performance by limiting font weights
- Internationalization: graceful fallback for FR/ES accents

## Font Sourcing

We use `@fontsource` packages to self-host fonts for privacy and stability.

Installed packages:
- `@fontsource/bebas-neue` (display / hero)
- `@fontsource/montserrat` (headlines)
- `@fontsource/inter` (body)

Only the following weights are imported (see `src/styles/fonts.css`):
- Bebas Neue: regular (single)
- Montserrat: 600 (Semibold)
- Inter: 400 (Regular), 500 (Medium)

Add more weights only if design requires them to keep the bundle lean.

## Tailwind Setup

Tailwind font families (`tailwind.config.mjs`):
- `font-body` → Inter stack
- `font-headline` → Montserrat stack
- `font-display` → Bebas Neue stack

Example mapping (conceptual):
- Body: `font-body`
- Headings: `font-headline font-semibold`
- Display (hero): `font-display` or the composite `.hero-title`

## Role-Based Classes

We rely primarily on Tailwind utilities. A single composite class is defined to reduce repetition:

- `.hero-title` → display font + responsive sizes + tight leading
  - Mobile: `text-5xl`
  - Tablet (md): `text-6xl`
  - Desktop (lg): `text-7xl`
  - Line-height: `leading-tight`
  - Tracking: `tracking-wide`

Other role classes use Tailwind utilities directly in markup:
- Headline: `font-headline font-semibold` with responsive sizes
- Body: `font-body` with responsive sizes

## Responsive Type Scale

From the design brief:

| Breakpoint | Title (Hero) | Headline/Hashtag | Body |
|------------|---------------|------------------|------|
| Mobile     | 5xl           | lg               | base |
| Tablet     | 6xl           | xl               | lg   |
| Desktop    | 7xl           | 2xl              | xl   |

Usage examples (abbreviated):
- Hero: `class="hero-title"`
- Headline: `class="font-headline font-semibold text-lg md:text-xl lg:text-2xl"`
- Body text: `class="font-body text-base md:text-lg lg:text-xl"`

## Global CSS

- `src/styles/fonts.css` centralizes font imports.
- `src/styles/global.css` defines CSS variables for font stacks and the `.hero-title` class; it removes blanket heading overrides so typography is role-based.

## Spacing Rhythm

To keep vertical rhythm consistent across pages, global vertical padding is applied in `MainLayout.astro` on the `<main>` element:

- `py-12 md:py-20 lg:py-24`
- Safe-area insets remain at the layout level: `pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]`

Page wrappers should not add extra top/bottom padding. The shared `.page-card-dark` component now provides only horizontal margins and internal padding:

- Margins: `mx-4 md:mx-8 lg:mx-12` (no vertical margins)
- Padding: `p-6 md:p-8 lg:p-10`

When creating new pages, rely on the layout for outer spacing and on the card for inner comfort. If a future page needs a compact or edge-to-edge layout, introduce a boolean prop on `MainLayout` to adjust the global `py-*` classes rather than adding ad‑hoc overrides.

## Internationalization (FR/ES accents)

- Montserrat and Inter include Latin Extended glyphs.
- Bebas Neue may not include all accented glyphs; if a glyph is missing, the fallback chain will render that character using Montserrat.
- Current policy: Accept fallback behavior for accented hero characters. If visual consistency becomes an issue, we can:
  - Adjust copy to avoid accented characters in hero text, or
  - Use Montserrat for hero in specific locales/phrases.

## Performance Considerations

- Limit imported weights as above. Avoid variable fonts initially.
- Font display behavior: default swap via @fontsource.
- Preloading Bebas Neue is deferred until a performance assessment.

## Where It’s Used

- Hero titles: `.hero-title` on page-level H1s in components like `HomePage`, `DonatePage`, `OurProgressPage`, etc.
- Section headings, hashtags, card titles: `font-headline font-semibold`.
- Body copy, markdown output, and descriptive text: `font-body`.

## Maintenance

- To change scale, adjust `.hero-title` in `global.css` and update responsive sizes in components.
- To add a new role (e.g., stats or monospace), extend Tailwind `fontFamily` and use a semantic class.
- Keep `fonts.css` weights minimal and audited.
