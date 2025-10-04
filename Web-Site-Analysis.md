# Website Technical Assessment – Riding4GBS

Date: 2025-10-04

## Summary
This document captures a comprehensive review of the current Astro (v5.x) project for performance, SEO, and accessibility. It also lists prioritized, step-by-step actions to address issues. No code changes were made as part of this assessment.

## Scope and method
- Reviewed configuration and build: `astro.config.mjs`, `package.json`, Tailwind & PostCSS configs, `vercel.json`.
- Inspected layout and representative pages/components: `src/layouts/MainLayout.astro`, landing page (`src/pages/index.astro`), localized home wrappers, section pages (`Challenge`, `About GBS`, `Our Progress`, `Partners`, `Support Me`, `Journal Hub`), and dynamic posts.
- Examined interactive islands: `Carousel.jsx`, `LogoCarousel.jsx`, `SupportersCarousel.jsx`, `Countdown.jsx`, `Hamburger.astro`.
- Checked content pipeline and assets usage: `src/content/config.ts`, posts, and common images.

Build status at time of review: `pnpm build` completed successfully.

---

## Findings

### 1) Build, dependencies, and structure hygiene
- Unused/odd dependencies:
  - `@tailwindcss/vite` and `@tailwindcss/postcss` are listed but not used; Astro’s Tailwind integration is already handling PostCSS.
  - `motion` is installed and only referenced by `AnimatedCard.jsx`, which doesn’t appear to be used anywhere.
- Mixed font loading strategies:
  - `@fontsource` is imported in `MainLayout.astro`, but the root landing page (`src/pages/index.astro`) also injects a Google Fonts stylesheet. This duplicates work and risks layout shifts.
- View transitions:
  - Global `viewTransitions: true` with custom `::view-transition-*` animations present; no explicit reduced‑motion fallback mentioned for them.

Impact: Slightly larger bundle/confusion around Tailwind; redundant font loading; minor perf regressions and potential motion issues.

### 2) Performance
- Full-page fixed background:
  - `MainLayout.astro` uses a full-screen `bg-fixed` image for every page; this can increase paint cost, especially on mobile.
- Image optimization gaps:
  - Many large images are served via plain `<img>` from `public/` without responsive `srcset/sizes` or `loading="lazy"` (e.g., landing map, Our Progress map, partner logos, home cards). Only select areas (posts and some Journal Hub images) use `astro:assets` `<Image>`.
- Potential layout shifts (CLS):
  - Images generally don’t reserve layout space (no width/height or aspect ratio); overlay elements and grid cards can shift during load.
- Continuous animations:
  - Carousels use infinite CSS translations. There’s a reduced‑motion utility class, but it isn’t universally applied and doesn’t provide a keyboard-accessible pause.
- Scrolling/layout constraints:
  - `main` uses `h-screen` with `overflow-y-auto`, which can cause double scroll or awkward viewport behavior on mobile.

Impact: Slower LCP on image-heavy views, jank on low-end/mobile devices, and minor CLS penalties.

### 3) SEO
- Meta descriptions:
  - `MainLayout.astro` includes a generic `"Astro description"` across pages; localized and page‑specific meta descriptions are missing.
- Social meta:
  - No Open Graph/Twitter Card tags (title, description, image) for richer link previews.
- Internationalization SEO:
  - No `hreflang` alternates linking `/en`, `/es`, `/fr` equivalents.
  - Root splash page contains multi‑language content without per‑block `lang` attributes.
- Canonicalization/sitemap/robots:
  - No canonical tags; no configured `site` in `astro.config.mjs` (needed for canonical/sitemap). No sitemap or `robots.txt` generation.
- Structured data:
  - No JSON‑LD for posts (Article/BlogPosting), Organization, or Website.

Impact: Reduced discoverability, weaker snippets/previews, and missed international signals.

### 4) Accessibility (a11y)
- Hamburger menu:
  - Missing `aria-label`, `aria-controls`, and `aria-expanded` state management. Focus management on open/close is absent; Escape to close isn’t handled.
- Navigation and skip links:
  - No skip link to jump to `main` content.
- Carousels:
  - Lack `role="region"`/`aria-roledescription="carousel"`, slide labeling, and keyboard controls for next/previous. Duplicated items for infinite scroll aren’t `aria-hidden`.
- Motion:
  - Reduced-motion is partially addressed for an animation utility but not consistently for view transitions and other effects.
- Social links placeholders:
  - Anchors with `href="#"` are present, which are non-functional and confusing for keyboard users and screen readers.
- Multilingual content on splash page:
  - Non-English paragraphs are missing `lang` attributes; screen readers may mispronounce.
- Image alt text:
  - Most images include alt, but partner/supporter logos should be audited to ensure meaningful alt text or empty alt if purely decorative.
- Hover-only overlays:
  - Hover overlays on cards don’t replicate affordances for keyboard focus.

Impact: Keyboard/SR users face friction; motion can be distracting; multilingual content may be misread.

### 5) Content pipeline and routing
- Content collections for posts are set up well.
- `vercel.json` rewrites work for localized routes, but there is no single canonical trailing‑slash policy defined in Astro (`trailingSlash`).
- Some CTAs depend on environment variables (good), but placeholder social links remain visible.

Impact: Functional, but can be more consistent (canonicals) and more polished (avoid placeholder links).

---

## Action plan (prioritized, no code)

### A) Quick wins (1–2 hours)
1. Remove unused deps:
   - Uninstall `@tailwindcss/vite`, `@tailwindcss/postcss` if unused.
   - Remove `motion` and the unused `AnimatedCard.jsx` if not needed.
2. Unify font loading:
   - Remove the Google Fonts import from `src/pages/index.astro`; rely on `@fontsource` only.
3. Hamburger semantics:
   - Add `aria-label`, `aria-controls="sidebar"`, toggle `aria-expanded` on click.
4. Replace dummy social links:
   - Remove or disable anchors with `href="#"` until real URLs exist.
5. Add a skip link:
   - Provide a visible focusable skip link to jump to `<main>`.

### B) SEO foundation (half day)
6. Page meta descriptions:
   - Add localized `metaDescription` to i18n per page and wire into `MainLayout`.
7. Social meta:
   - Add OG/Twitter tags for title, description, and a locale‑appropriate image.
8. Internationalization SEO:
   - Emit `link rel="alternate" hreflang="en|es|fr"` across localized equivalents.
9. Root language markup:
   - Add `lang="es"` / `lang="fr"` to Spanish/French paragraphs on `/`.
10. Canonicals and sitemap:
   - Set `site` in `astro.config.mjs`, add sitemap generation, `robots.txt`, and canonical links.

### C) Performance and UX (0.5–1 day)
11. Image optimization sweep:
   - Prefer `astro:assets` `<Image>` for static content where possible.
   - Add width/height or aspect ratio, responsive sizes, and `loading="lazy"` for non-critical images.
   - Convert large PNG/JPEG to WebP/AVIF with sensible fallbacks.
12. Background image strategy:
   - Remove or conditionally disable `bg-fixed`; consider `min-h-screen` instead of strict `h-screen` to avoid scroll issues.
13. CLS hardening:
   - Ensure all images reserve space and avoid layout-shifting overlays.
14. Motion preferences:
   - Respect `prefers-reduced-motion` for view transitions and major animations.

### D) Accessibility upgrades (≈1 day)
15. Sidebar toggle + focus management:
   - Toggle `aria-expanded`, focus the first focusable element on open, support Escape to close, return focus to toggle on close.
16. Carousels:
   - Add roles/labels, keyboard Left/Right navigation, and `aria-hidden` for duplicated items; provide a pause control; respect reduced motion.
17. Focus-visible parity:
   - Mirror hover overlays on keyboard focus or provide equivalent info.
18. Logo alt text audit:
   - Decide between descriptive alt text vs `alt=""` for decorative logos.
19. Language attributes:
   - Set `lang` on any inline non‑page language strings (esp. splash page).

### E) Internationalization & content polish (0.5 day)
20. Trailing slash policy:
   - Decide and configure `trailingSlash` (always/never) and align rewrites.
21. Structured data:
   - Add JSON‑LD for posts (Article/BlogPosting), Organization, and Website.
22. Localized 404/500 pages:
   - Provide friendly, localized error pages with nav.

### F) Developer experience & guardrails (optional, 0.5 day)
23. Linting and a11y checks:
   - ESLint (Astro + React), Prettier, and a basic Lighthouse/a11y check in CI.
24. Type and content checks:
   - Run `astro check` in CI; consider stricter Zod schemas for page meta and content.
25. Performance budget:
   - Add a Lighthouse CI run with thresholds for LCP, CLS, and Best Practices.

---

## Quality gates snapshot
- Build: PASS (`pnpm build`).
- Lint/Typecheck: Not configured; recommend ESLint + `astro check`.
- Tests: None present; optional smoke tests could be added.
- Perf/a11y: Not measured here; run Lighthouse on `/`, `/{en,es,fr}`, Journal Hub, and Our Progress after quick wins.

## Requirements coverage
- Failings/issues: Identified across build hygiene, performance, SEO, accessibility, routing/content.
- Performance issues: Large/fixed BG, non-optimized images, CLS risks, continuous animations, scroll/layout patterns.
- SEO issues: Missing meta descriptions, OG/Twitter, hreflang, canonical/sitemap/robots, structured data.
- Accessibility issues: Hamburger semantics/focus, carousel roles/controls, reduced motion, language attributes, overlays/focus, placeholder links, alt text audit.
- Action plan, no code: Provided with priorities and estimated effort.

## Next steps
- Approve the “Quick wins” and “SEO foundation” steps to implement in a small, focused PR.
- After merge, run Lighthouse to baseline metrics, then iterate on Performance and Accessibility sections.
