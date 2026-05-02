# Logo Usage

## Anatomy

The Hierarchy logo is a **lockup** of three elements:

1. **The H mark** — geometric "H" with four circular node terminals (top-left, top-right, bottom-left, bottom-right) connected by vertical pin-rails. Reads as a circuit motif.
2. **A vertical separator** — 3px-wide rule, full height of the wordmark.
3. **The wordmark** — *HIERARCHY* (ink) over *TECHNOLOGIES* (gradient), set in geometric sans with wide tracking.

When the brand is used at small sizes, lockup pieces are dropped in this order: separator → wordmark → leaving the H mark alone.

## Variants & when to use which

| File | When to use |
|------|-------------|
| [`logos/hierarchy-primary.svg`](./logos/hierarchy-primary.svg) | Default. Light surfaces ≥ #FAFAFA. Marketing pages, doc headers, first-party UI. |
| [`logos/hierarchy-primary-reversed.svg`](./logos/hierarchy-primary-reversed.svg) | Dark surfaces (≤ #27272A). Wordmark goes white; mark keeps gradient. |
| [`logos/hierarchy-primary-mono-dark.svg`](./logos/hierarchy-primary-mono-dark.svg) | Single-color reproduction (print, fax, embossing, laser-etch). Stationery on light card. |
| [`logos/hierarchy-primary-mono-light.svg`](./logos/hierarchy-primary-mono-light.svg) | Knockout on photography or solid colored backgrounds where the gradient would clash. |
| [`logos/hierarchy-mark.svg`](./logos/hierarchy-mark.svg) | App icon, avatar, watermark, social profile pic. Anywhere ≤ 200 px wide. |
| [`logos/hierarchy-mark-mono-dark.svg`](./logos/hierarchy-mark-mono-dark.svg) | Mark in single-color contexts (print, embossing). |
| [`logos/hierarchy-mark-mono-light.svg`](./logos/hierarchy-mark-mono-light.svg) | Mark on dark or photographic backgrounds. |
| [`logos/hierarchy-wordmark.svg`](./logos/hierarchy-wordmark.svg) | Where the H mark already appears nearby (e.g., footer of a page that has a hero with the mark). |
| [`logos/favicon.svg`](./logos/favicon.svg) | Browser favicon, OS app tile. Tighter square viewBox. |

## Clear space

Maintain clear space around the logo of **≥ 1× the height of the H counter** (the open inner space inside the H). At 1900 px artboard width, that's **~80 px** of clear margin — scale proportionally.

```
   ┌─────────────────────────────────────────┐
   │           ↑                             │
   │           │  ≥ H-counter height         │
   │           ↓                             │
   │        [   H | H I E R A R C H Y   ]    │
   │           ↑                             │
   │           │  ≥ H-counter height         │
   │           ↓                             │
   └─────────────────────────────────────────┘
```

Nothing — text, imagery, UI chrome — may enter the clear-space zone.

## Minimum sizes

| Variant | Minimum width | Notes |
|---------|---------------|-------|
| Primary lockup | **120 px** screen / **30 mm** print | Below this, switch to mark-only. |
| Mark only | **24 px** screen / **8 mm** print | Below this, drop to favicon. |
| Favicon | **16 px** | Designed for this size. |

## Color treatment

Use the gradient version (`hierarchy-primary.svg` / `-reversed.svg` / `mark.svg`) by default. Drop to mono only when:

- Reproduction technology can't render the gradient (1-color print, embossing).
- The background contains imagery that would compete with the gradient.
- Compliance / accessibility constraints require a known single hex.

The gradient stops are token-controlled (`color.brand.azure.500`, `color.brand.indigo.500`, `color.brand.violet.500`). Don't sample alternative hexes.

## Dark surface treatment (important)

The canonical brand gradient (`-500` stops) is **only legible on light surfaces**. On dark surfaces (≤ `neutral-700`), the indigo and violet stops have ~2:1 contrast against ink — the mark and the gradient "TECHNOLOGIES" become illegible.

**Policy: on dark surfaces, the entire lockup is solid white.** This matches industry standard (Stripe, Linear, GitHub, Vercel — all reversed marks are solid white). The brand gradient is a hero-on-light element; transferring it to dark gains nothing and costs legibility.

| Surface | Use |
|---------|-----|
| Any dark solid (`neutral-700` to `neutral-900`) | `hierarchy-primary-reversed.svg` — solid white, identical to `hierarchy-primary-mono-light.svg`. |
| Photographic / busy / very dark | `hierarchy-primary-mono-light.svg` — solid white. |
| Dark surface where you want a gradient *adjacent* to the logo (e.g. a button next to it) | Use `--ht-gradient-brand-reversed` token (lifted `-300` ramp) for that adjacent element only — never on the logo itself. |

**Don't** use the canonical (`-500`) gradient or the lifted (`-300`) gradient inside the logo on dark surfaces. The logo on dark is white. Period.

## Misuse — don't

- ❌ Don't recolor the wordmark or change its weight.
- ❌ Don't apply effects (drop-shadow, glow, bevel, outline-stroke).
- ❌ Don't rotate, skew, or stretch.
- ❌ Don't separate the gradient mark from the wordmark unless using the dedicated `hierarchy-mark.svg` variant.
- ❌ Don't place the gradient version on backgrounds in the `azure-200..violet-200` range — contrast collapses.
- ❌ Don't crop the H mark; it relies on the four nodes being visible.
- ❌ Don't outline or fill the inner counter of the H.
- ❌ Don't use the wordmark without the mark on hero surfaces (use the lockup).

## File-format picker

| Need | Use |
|------|-----|
| Web, app UI, docs | SVG — `logos/*.svg` |
| Editable vector | `HT LOGO.ai` (Illustrator) |
| High-res print | `HT LOGO.pdf` |
| Raster (legacy / email) | `1x/Artboard 1.png` — generate higher resolutions on demand from the AI master |
| Browser favicon | `logos/favicon.svg` plus generated `.ico`/`.png` set (out of scope here) |

## Authorisation

External use of the Hierarchy logo (partner site, press, conference badge) requires written approval from the Hierarchy brand owner. The logo is a registered identifier — do not redraw it.
