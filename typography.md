# Typography

## Type families

| Role | Family | Why |
|------|--------|-----|
| **Display** | [Sora](https://fonts.google.com/specimen/Sora) | Geometric sans that pairs visually with the wordmark's character. Use for hero headlines, marketing display, large CTAs. |
| **Body / UI** | [Inter](https://fonts.google.com/specimen/Inter) | Industry-standard humanist sans, exceptional legibility from 12 to 72 px, full weight range. Use for everything that isn't display. |
| **Monospace** | [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Code blocks, terminal output, IDs, kbd. |

Both Sora and Inter are licensed under SIL Open Font License — free for commercial use, redistribution included.

### Fallback stacks (token values)

```css
--ht-font-family-display: 'Sora', 'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
--ht-font-family-body:    'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
--ht-font-family-mono:    'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace;
```

## Loading the fonts

### Web

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Self-host for production to avoid third-party dependency.

### Flutter

Add to `pubspec.yaml`:

```yaml
flutter:
  fonts:
    - family: Sora
      fonts:
        - asset: fonts/Sora-Regular.ttf
        - asset: fonts/Sora-SemiBold.ttf
          weight: 600
    - family: Inter
      fonts:
        - asset: fonts/Inter-Regular.ttf
        - asset: fonts/Inter-Medium.ttf
          weight: 500
        - asset: fonts/Inter-SemiBold.ttf
          weight: 600
```

## Weights

Use these only — don't introduce intermediate weights.

| Token | Value | Use |
|-------|-------|-----|
| `font.weight.regular` | 400 | Body |
| `font.weight.medium` | 500 | Emphasis within body, button labels |
| `font.weight.semibold` | 600 | Subheadings, key UI |
| `font.weight.bold` | 700 | Display headlines, strong emphasis |

Italic is reserved for citations and rare in-line emphasis. Don't use italic for headings.

## Type scale (1.250 — major third)

| Token | Size | Pixels | Use |
|-------|------|--------|-----|
| `font.size.xs` | `0.75rem` | 12px | Captions, fine print |
| `font.size.sm` | `0.875rem` | 14px | Helper text, table cells |
| `font.size.base` | `1rem` | 16px | **Body default** |
| `font.size.lg` | `1.125rem` | 18px | Lead paragraph |
| `font.size.xl` | `1.25rem` | 20px | Subheading (h6) |
| `font.size.2xl` | `1.563rem` | 25px | h5 |
| `font.size.3xl` | `1.953rem` | 31.25px | h4 |
| `font.size.4xl` | `2.441rem` | 39.06px | h3 |
| `font.size.5xl` | `3.052rem` | 48.83px | h2 / display |
| `font.size.6xl` | `3.815rem` | 61.04px | h1 / hero |

Mobile (Flutter) uses a tighter 1.200 (minor-third) implicit scale via Flutter's `TextTheme` defaults — the brand keeps the same role names.

## Line height

| Token | Value | Use |
|-------|-------|-----|
| `line-height.tight` | 1.1 | Display headlines (≥ 4xl) |
| `line-height.snug` | 1.25 | Subheads (xl–3xl) |
| `line-height.normal` | 1.5 | **Body default** |
| `line-height.relaxed` | 1.75 | Long-form articles, marketing copy |

## Letter spacing

| Token | Value | Use |
|-------|-------|-----|
| `letter-spacing.tight` | `-0.02em` | Display headlines (negative tracking tightens optical spacing) |
| `letter-spacing.normal` | `0` | Body |
| `letter-spacing.wide` | `0.05em` | All-caps labels, button text |
| `letter-spacing.wider` | `0.12em` | **Wordmark-style display** (matches the HIERARCHY tracking exactly) |

## Heading roles

```css
h1 { font: 700 var(--ht-font-size-6xl)/var(--ht-line-height-tight) var(--ht-font-family-display); letter-spacing: var(--ht-letter-spacing-tight); }
h2 { font: 700 var(--ht-font-size-5xl)/var(--ht-line-height-tight) var(--ht-font-family-display); letter-spacing: var(--ht-letter-spacing-tight); }
h3 { font: 600 var(--ht-font-size-4xl)/var(--ht-line-height-snug) var(--ht-font-family-display); }
h4 { font: 600 var(--ht-font-size-3xl)/var(--ht-line-height-snug) var(--ht-font-family-body); }
h5 { font: 600 var(--ht-font-size-2xl)/var(--ht-line-height-snug) var(--ht-font-family-body); }
h6 { font: 600 var(--ht-font-size-xl)/var(--ht-line-height-snug)  var(--ht-font-family-body); }
```

## Pairing rules

- **Display + body.** Sora paired with Inter. Don't mix Sora at body sizes — the geometry overpowers small text.
- **One display family per surface.** Don't combine Sora with another decorative face.
- **Mono only for code.** Never style prose in JetBrains Mono "for character". Reserve it.
- **Avoid all-caps for paragraphs.** All-caps + `letter-spacing.wide` is fine for tags/badges/eyebrows. Beyond that it's hostile to read.

## Microcopy & numerals

- Use **tabular figures** (`font-variant-numeric: tabular-nums`) anywhere numbers stack vertically (tables, dashboards, ledgers).
- Use **proportional figures** (default) in body prose.
