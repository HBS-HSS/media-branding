# Iconography

## Library

Default to **[Lucide](https://lucide.dev/)** (MIT-licensed fork of Feather). 1,400+ icons, consistent geometry, built-in Angular and Flutter packages.

| Stack | Package |
|-------|---------|
| Web (Angular) | `lucide-angular` |
| Web (raw) | `lucide-static` (SVG sprites) |
| Flutter | `lucide_icons` (community) or `lucide_flutter` |

Don't mix Lucide with Material Icons, Font Awesome, or Heroicons. If a needed icon isn't in Lucide, draw it to match Lucide's grid (see "Custom icons" below) — don't import a one-off from another set.

## Geometry rules

Lucide is built on a **24×24 grid**, **2 px stroke**, **rounded line caps and joins**, **1.5 px corner radius** on internal forms.

When drawing custom icons, match exactly:

- 24×24 viewBox.
- All paths drawn with `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`, `fill="none"`.
- Active stroke area inside a 22×22 inner area (1 px clear margin).
- Snap path coordinates to **0.5 px** increments minimum to keep alignment crisp at 1× scale.

## Sizing

Icons render at consistent display sizes:

| Token | Pixels | Use |
|-------|--------|-----|
| `icon-size-xs` | 12 | Inline with `font-size.xs` |
| `icon-size-sm` | 16 | Inline with `font-size.sm`–`base` |
| `icon-size-md` | 20 | Buttons, inline with `font-size.lg` |
| `icon-size-lg` | 24 | Toolbar, page actions |
| `icon-size-xl` | 32 | Empty states, feature lists |
| `icon-size-2xl` | 48 | Hero illustrations |

## Color rules

Icons inherit `currentColor` by default. Specific overrides:

| Context | Color |
|---------|-------|
| Inline with body text | `color.text.secondary` |
| Inline with link text | `color.text.link` |
| Decorative in hero | `color.brand.azure.500` or gradient via `mask-image` |
| Status icon next to message | matching `color.semantic.{role}.500` |

Do not apply the brand gradient to small icons (≤ 20 px) — the gradient is illegible at that size.

## Custom icons

If a custom icon is unavoidable:

1. Draw on a 24×24 grid in Figma or Illustrator.
2. Match Lucide's stroke + cap + join settings (see Geometry rules).
3. Test against neighbouring Lucide icons at 16, 20, and 24 px to confirm visual weight matches.
4. Save as optimised SVG (no `<title>`, no `id` attributes, single root path or `<g>`).
5. Drop into the project's icon directory and namespace it: `ht-…` (e.g. `ht-hierarchy-mark`).

## What not to do

- ❌ Don't use multi-colored icons — the brand uses single-stroke icons only.
- ❌ Don't use filled / solid icon variants alongside Lucide outlines (Lucide is outline-only).
- ❌ Don't add drop-shadows or glows to icons.
- ❌ Don't rotate or skew icons to make them "fit" — pick a different icon.
- ❌ Don't scale a 24-grid icon below 12 px — switch to a glyph or text label.

## App icon (favicon, OS tile)

The app icon is **not** a generic icon — it's the H mark inside a generous square. See [`logos/favicon.svg`](./logos/favicon.svg). Generate raster sizes (16, 32, 48, 192, 512) on demand from this SVG.
