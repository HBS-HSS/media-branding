# Spacing & Layout

## Spacing scale (4-pt base)

All spacing values are multiples of **4 px**. This keeps vertical rhythm aligned with the type scale and lets web/mobile share the same grid mental model.

| Token | rem | px | Common use |
|-------|-----|----|-----------|
| `space.0` | `0` | 0 | Reset |
| `space.1` | `0.25rem` | 4 | Hairline gap, icon padding |
| `space.2` | `0.5rem` | 8 | Inline gap (icon ↔ label), tight stack |
| `space.3` | `0.75rem` | 12 | Form-row inner gap |
| `space.4` | `1rem` | 16 | **Default UI unit** — section padding, card inner |
| `space.5` | `1.25rem` | 20 | Block padding |
| `space.6` | `1.5rem` | 24 | Section vertical rhythm |
| `space.8` | `2rem` | 32 | Card padding (large), form section |
| `space.10` | `2.5rem` | 40 | Page margins (mobile) |
| `space.12` | `3rem` | 48 | Page margins (tablet), hero padding |
| `space.16` | `4rem` | 64 | Hero block, section break |
| `space.24` | `6rem` | 96 | Marketing hero |

Don't introduce `5px`, `7px`, `13px`. If a value isn't on the scale, the design needs revisiting.

## Container widths

| Breakpoint | Container max-width |
|------------|---------------------|
| `< sm` (640px) | 100% with `space.4` page padding |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Reading widths (long-form articles, docs): cap at **72ch** for body text.

## Grid

Default to a **12-column grid** with a `space.6` (24 px) gutter on `lg+`. Drop to 6-column at `md`, single-column below.

## Border radius

| Token | Value | When to use |
|-------|-------|-------------|
| `radius.none` | `0` | Tables, system bars, dense data |
| `radius.sm` | `4px` | Tags, chips, small inputs |
| `radius.md` | `8px` | **Default** — buttons, inputs, cards |
| `radius.lg` | `12px` | Modals, large cards |
| `radius.xl` | `16px` | Hero panels, marketing cards |
| `radius.pill` | `9999px` | Pills, badges, avatar wrapper |
| `radius.circle` | `50%` | Avatars, dots |

Don't mix radius values within the same component. A card with `radius.md` should have buttons inside it that use `radius.sm` (one step down) — not `radius.lg`.

## Elevation (shadows)

Five-step elevation scale, all using the brand ink as the shadow color (15-percent opacity max) for warmth. Light source is **top-down**.

| Token | Use |
|-------|-----|
| `shadow.xs` | Subtle hairline lift — input focus rings, dropdowns inline with content |
| `shadow.sm` | Default card resting state |
| `shadow.md` | Card hover, dropdown menus |
| `shadow.lg` | Modal dialogs, popovers |
| `shadow.xl` | Toast, fullscreen overlays |

Don't use coloured shadows. Don't use multiple shadows on the same element to fake "glow" — that's not part of the brand language.

## Breakpoints

| Token | Value | Maps to |
|-------|-------|---------|
| `breakpoint.sm` | 640px | Large phone landscape |
| `breakpoint.md` | 768px | Tablet portrait |
| `breakpoint.lg` | 1024px | Tablet landscape, small laptop |
| `breakpoint.xl` | 1280px | Desktop |
| `breakpoint.2xl` | 1536px | Wide desktop |

Mobile-first — write base styles for `< sm`, then override upward with `min-width` queries.

## Motion

| Token | Value | Use |
|-------|-------|-----|
| `motion.duration.fast` | `120ms` | Hover, focus, micro-feedback |
| `motion.duration.base` | `200ms` | **Default** — most state changes |
| `motion.duration.slow` | `320ms` | Modal enter/exit, route transitions |
| `motion.duration.slower` | `480ms` | Page-level transitions, hero reveals |

| Token | Curve | Use |
|-------|-------|-----|
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` | **Default** in/out — most transitions |
| `motion.easing.emphasis` | `cubic-bezier(0.3, 0, 0, 1)` | Attention-getting motion |
| `motion.easing.decelerate` | `cubic-bezier(0, 0, 0, 1)` | Things entering the screen |
| `motion.easing.accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | Things leaving the screen |

Respect `prefers-reduced-motion: reduce` — collapse all durations to `0ms` for those users.
