# Hierarchy Technologies — Brand Identity

This folder is the **single source of truth** for the Hierarchy Technologies (HT) visual brand. It is consumed by all three product stacks (`api/`, `web/`, `mobile/`).

If you change a color, font, or spacing value in any product, change it **here first**, then regenerate the per-stack derivative.

## Contents

### Documentation

| File | What's inside |
|------|---------------|
| [`brand-guidelines.md`](./brand-guidelines.md) | Mission, audience, personality. Read first. |
| [`logo-usage.md`](./logo-usage.md) | Logo anatomy, clear space, minimum sizes, do/don't, file picker, **dark-surface policy**. |
| [`color-system.md`](./color-system.md) | Full digital palette, gradients, semantic mapping, WCAG contrast tables. |
| [`color-print.md`](./color-print.md) | CMYK + Pantone references for physical reproduction. |
| [`typography.md`](./typography.md) | Type families, scale, weights, pairings. |
| [`spacing-and-layout.md`](./spacing-and-layout.md) | 4-pt spacing scale, radii, elevation, breakpoints. |
| [`iconography.md`](./iconography.md) | Icon library, stroke conventions, custom icon rules. |
| [`photography.md`](./photography.md) | Photographic voice, treatments, sourcing, what to avoid. |
| [`data-visualization.md`](./data-visualization.md) | Chart palettes, encoding rules, accessibility, library picks. |
| [`voice-and-tone.md`](./voice-and-tone.md) | Brand voice, microcopy patterns, do/don't phrases. |

### Logo assets — `logos/`

| File | Use |
|------|-----|
| [`logos/hierarchy-primary.svg`](./logos/hierarchy-primary.svg) | Default lockup. Light surfaces. |
| [`logos/hierarchy-primary-reversed.svg`](./logos/hierarchy-primary-reversed.svg) | Dark surfaces (white wordmark, gradient mark). |
| [`logos/hierarchy-primary-mono-dark.svg`](./logos/hierarchy-primary-mono-dark.svg) | Single-color dark — print, fax, embossing. |
| [`logos/hierarchy-primary-mono-light.svg`](./logos/hierarchy-primary-mono-light.svg) | Single-color white — knockout on photo/dark. |
| [`logos/hierarchy-mark.svg`](./logos/hierarchy-mark.svg) | "H" symbol only, gradient. App icon, avatar, watermark. |
| [`logos/hierarchy-mark-mono-dark.svg`](./logos/hierarchy-mark-mono-dark.svg) | "H" mark, solid dark. |
| [`logos/hierarchy-mark-mono-light.svg`](./logos/hierarchy-mark-mono-light.svg) | "H" mark, solid white. |
| [`logos/hierarchy-wordmark.svg`](./logos/hierarchy-wordmark.svg) | Wordmark only, no symbol. |
| [`logos/favicon.svg`](./logos/favicon.svg) | Square-cropped mark, optimised for 16–64 px. |

Source masters: [`HT LOGO.ai`](./HT%20LOGO.ai), [`HT LOGO.pdf`](./HT%20LOGO.pdf), [`SVG/Artboard 1.svg`](./SVG/Artboard%201.svg), [`1x/Artboard 1.png`](./1x/Artboard%201.png).

### Design tokens — `tokens/`

`tokens.json` is the authoritative source. The other files are derived. Keep them in sync.

| File | Format | Consumer |
|------|--------|----------|
| [`tokens/tokens.json`](./tokens/tokens.json) | W3C DTCG | **Source of truth.** |
| [`tokens/tokens.css`](./tokens/tokens.css) | CSS custom properties | `web/` (Angular global styles) |
| [`tokens/tokens.scss`](./tokens/tokens.scss) | SCSS variables + maps | `web/` (SCSS partials) |
| [`tokens/tokens.tailwind.cjs`](./tokens/tokens.tailwind.cjs) | Tailwind preset | Any Tailwind consumer |
| [`tokens/tokens.dart`](./tokens/tokens.dart) | Dart constants | `mobile/` (Flutter `ThemeData`) |
| [`tokens/tokens.ts`](./tokens/tokens.ts) | TypeScript constants | `web/` (typed access) |

### Templates — `templates/`

Drop-in starting points for the most common branded artefacts.

| File | Use |
|------|-----|
| [`templates/business-card.svg`](./templates/business-card.svg) | 85×55 mm card (front + back), CMYK-ready |
| [`templates/email-signature.html`](./templates/email-signature.html) | HTML email signature (table layout) |
| [`templates/social-og.svg`](./templates/social-og.svg) | 1200×630 social Open Graph image |
| [`templates/slide-cover.svg`](./templates/slide-cover.svg) | 1920×1080 deck cover |

See [`templates/README.md`](./templates/README.md) for editing rules.

### Examples — `examples/`

| File | Purpose |
|------|---------|
| [`examples/preview.html`](./examples/preview.html) | Token system showcase — palette, type scale, spacing, shadows, every logo variant. |
| [`examples/landing.html`](./examples/landing.html) | Marketing landing page demo. |
| [`examples/components.html`](./examples/components.html) | UI component library reference. |
| [`examples/brand-book.html`](./examples/brand-book.html) | Print-formatted brand book (source for the PDF below). |
| [`examples/dark-test.html`](./examples/dark-test.html) | Dark-surface logo legibility check. |

### Brand-book PDF

[`Hierarchy-Technologies-Brand-Identity.pdf`](./Hierarchy-Technologies-Brand-Identity.pdf) — 9-page printable bundle. Regenerate from `examples/brand-book.html` using Chrome headless after any token change:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --print-to-pdf-no-header \
  --print-to-pdf="branding/Hierarchy-Technologies-Brand-Identity.pdf" \
  "file://$(pwd)/branding/examples/brand-book.html"
```

## Quick start by stack

- **Web (Angular)** — import `tokens/tokens.css` in `styles.scss`, then reference `var(--ht-color-brand-azure-500)` etc.
- **Web (Tailwind)** — `presets: [require('../branding/tokens/tokens.tailwind.cjs')]` in `tailwind.config.js`.
- **Mobile (Flutter)** — `import 'package:hierarchy_brand/tokens.dart';` (or copy `tokens.dart` into `mobile/lib/theme/`).
- **Anything that needs the logo on screen** — pick the right SVG from `logos/` based on the surface (see `logo-usage.md`).

## Updating the brand

1. Edit `tokens/tokens.json` (or the relevant `.md`).
2. Manually mirror the change into `tokens.css`, `tokens.scss`, `tokens.tailwind.cjs`, `tokens.dart`, `tokens.ts`. (When time permits, wire up Style Dictionary to do this automatically.)
3. Open `examples/preview.html` to spot-check.
4. Bump references in each stack as needed.
# media-branding
