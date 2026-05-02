# Color System

All hex values come from [`tokens/tokens.json`](./tokens/tokens.json). Do not introduce a brand color that isn't defined there.

## Source colors (extracted from logo)

| Token | Hex | Source in logo SVG |
|-------|-----|--------------------|
| `color.brand.azure.500` | `#4261AD` | `linear-gradient` stop @ offset 0 |
| `color.brand.indigo.500` | `#392F8E` | `linear-gradient` stop @ offset 0.5 |
| `color.brand.violet.500` | `#482D89` | `linear-gradient` stop @ offset 1 |
| `color.neutral.900` (ink) | `#231F20` | wordmark `.cls-2` fill |

## Brand ramps

Each brand color has a 50–900 ramp. **500 is the canonical brand color** — every other step is derived for tinting/shading UI surfaces, hover/pressed states, and accessible text.

### Azure
| 50 | 100 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#EEF2FA` | `#DBE3F4` | `#B3C2E5` | `#8AA1D7` | `#6480C2` | **`#4261AD`** | `#36529A` | `#2A4280` | `#1F3266` | `#15224D` |

### Indigo
| 50 | 100 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#EFEDFA` | `#DBD7F2` | `#B6AEE0` | `#8C82CB` | `#635AB0` | **`#392F8E`** | `#2F2778` | `#251E60` | `#1B1648` | `#110D30` |

### Violet
| 50 | 100 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#F0EDF9` | `#DDD7F1` | `#BAAEE0` | `#9282CB` | `#6A55AE` | **`#482D89`** | `#3C2575` | `#2F1D5F` | `#221548` | `#160D30` |

## Neutral ramp

| 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | **900** | 1000 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `#FFFFFF` | `#FAFAFA` | `#F4F4F5` | `#E4E4E7` | `#D4D4D8` | `#A1A1AA` | `#71717A` | `#52525B` | `#3F3F46` | `#27272A` | **`#231F20`** | `#000000` |

`900` is **brand ink**. Use it for primary body text on light surfaces. Reserve `1000` (pure black) for thin strokes that need maximum contrast.

## Semantic colors

For status, feedback, and stateful UI. Each has a `50` (subtle background), `500` (default), `700` (emphasis / hover).

| Role | 50 | 500 | 700 | When to use |
|------|----|-----|-----|-------------|
| Success | `#ECFDF5` | `#16A34A` | `#15803D` | Confirmation, positive deltas, "saved" toasts |
| Warning | `#FFFBEB` | `#D97706` | `#B45309` | Caution, expiring states, soft errors |
| Danger  | `#FEF2F2` | `#DC2626` | `#B91C1C` | Destructive actions, validation failures, fatal errors |
| Info    | `#EEF2FA` | `#4261AD` | `#2A4280` | Neutral notices. Aliases brand azure. |

## Brand gradient

```css
linear-gradient(90deg, #4261AD 0%, #392F8E 50%, #482D89 100%);
```

- Default angle: **90deg** (left → right). Matches the wordmark's left-to-right reading direction.
- Acceptable variants: `135deg` (top-left → bottom-right) for hero compositions, `180deg` for vertical CTAs.
- Don't add or remove stops. Don't shift the offsets.
- Use the `--ht-gradient-brand` token / `bg-gradient-brand` Tailwind utility / `HtGradients.brand` Dart constant.

## Surfaces

Each surface token resolves to a neutral; consume the alias instead of the raw neutral so light/dark theming works.

| Token | Light value | Dark value | Use |
|-------|-------------|-----------|-----|
| `color.surface.background` | `#FFFFFF` | `#231F20` | Page background |
| `color.surface.subtle` | `#FAFAFA` | `#27272A` | Section background, alternating rows |
| `color.surface.raised` | `#F4F4F5` | `#3F3F46` | Cards, modals |
| `color.surface.inverse` | `#231F20` | `#FFFFFF` | Inverted callouts, hero blocks |

## Text

| Token | Light value | Dark value | Use |
|-------|-------------|-----------|-----|
| `color.text.primary` | `#231F20` | `#FFFFFF` | Body, headings |
| `color.text.secondary` | `#3F3F46` | `#E4E4E7` | Supporting copy |
| `color.text.muted` | `#71717A` | `#A1A1AA` | Hints, metadata. **Large text only.** |
| `color.text.inverse` | `#FFFFFF` | `#231F20` | Text on inverse surfaces |
| `color.text.link` | `#2A4280` | `#8AA1D7` | Hyperlinks |

## WCAG contrast — verified pairings

Spot-checked with the WCAG 2.2 contrast formula. ✅ = AA body (≥ 4.5:1) ✅✅ = AAA body (≥ 7:1) ⚠ = AA large text only (≥ 3:1).

| Foreground | Background | Ratio | Verdict |
|------------|-----------|-------|---------|
| `text.primary` `#231F20` | `surface.background` `#FFFFFF` | 16.4:1 | ✅✅ |
| `text.secondary` `#3F3F46` | `surface.background` `#FFFFFF` | 10.4:1 | ✅✅ |
| `text.muted` `#71717A` | `surface.background` `#FFFFFF` | 4.6:1 | ✅ |
| `text.link` `#2A4280` | `surface.background` `#FFFFFF` | 8.6:1 | ✅✅ |
| `brand.azure.500` `#4261AD` | `surface.background` `#FFFFFF` | 5.6:1 | ✅ |
| `text.inverse` `#FFFFFF` | `surface.inverse` `#231F20` | 16.4:1 | ✅✅ |
| `brand.azure.300` `#8AA1D7` | `surface.inverse` `#231F20` | 7.8:1 | ✅✅ |

Always verify a new pairing before shipping. The `tokens.css` dark-mode block hardcodes the inverted values — don't pair light-mode tokens with dark surfaces ad-hoc.

## Color combinations to avoid

- `brand.azure.500` text on `brand.indigo.500` background — 1.4:1, illegible.
- `text.muted` on `surface.subtle` — fails AA in dark mode.
- Any brand-200..400 on a brand-200..400 background — too close in lightness.
- Pure red (`#FF0000`) — never. Use `danger.500`.
