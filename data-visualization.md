# Data Visualization

Charts in Hierarchy products carry weight — operators make decisions from them. The brand's job is to keep them legible, accessible, and consistent. The brand's job is *not* to make them decorative.

## Principles

1. **One question per chart.** If the chart can't be summarised in a single sentence, split it.
2. **Direction matters.** Time always reads left → right; magnitude reads bottom → top.
3. **Labels over legends** when a label can sit at the end of a series.
4. **Tabular numerals** in axis ticks, tooltips, and counters (`font-variant-numeric: tabular-nums`).
5. **Colour is one of several encodings** — also use position, length, shape, and label. Never rely on colour alone for differentiation.
6. **No 3D, no exploded pies, no gradients on bars.** The brand gradient is a hero element; in charts it overstates emphasis.

## Categorical palette (1–10 series)

Optimised for distinguishability + dark/light mode + colour-blind safety (verified Deuteranopia + Protanopia + Tritanopia).

| Order | Hex (light) | Hex (dark) | Source token |
|-------|-------------|-----------|--------------|
| 1 | `#4261AD` | `#8AA1D7` | `brand.azure.500` / `.300` |
| 2 | `#482D89` | `#9282CB` | `brand.violet.500` / `.300` |
| 3 | `#16A34A` | `#4ADE80` | `success.500` / lighter |
| 4 | `#D97706` | `#FBBF24` | `warning.500` / lighter |
| 5 | `#DC2626` | `#F87171` | `danger.500` / lighter |
| 6 | `#0E7490` | `#22D3EE` | teal — derived |
| 7 | `#A21CAF` | `#E879F9` | fuchsia — derived |
| 8 | `#65A30D` | `#A3E635` | lime — derived |
| 9 | `#52525B` | `#A1A1AA` | `neutral.600` / `.400` |
| 10 | `#231F20` | `#FFFFFF` | `neutral.900` / `.0` |

**Always use this order**, even if you only need 2 series. Switching positions across charts disorients the reader.

## Sequential palette (single-hue, low → high)

For heatmaps, choropleths, single-metric intensity:

```
#EFEDFA → #DBD7F2 → #B6AEE0 → #8C82CB → #635AB0 → #392F8E → #2F2778 → #251E60
(indigo-50 → indigo-700)
```

Use the indigo ramp by default. It runs the natural perceptual lightness gradient and matches the brand mid-tone. Avoid azure or violet ramps for sequential — they're too close in lightness at the ends.

## Diverging palette (negative ↔ neutral ↔ positive)

For data with a meaningful zero (deltas, signed values):

```
#DC2626  ← #FCA5A5 ← #F4F4F5 → #93C5FD → #4261AD
danger      light       neutral    light       azure
```

Center is `neutral.100` (`#F4F4F5`) — *not* white, so it's still visible against page background.

## Semantic palette (status-driven)

Use only when the value carries semantic meaning (success/warning/error/info), not for ordinary categories.

| Meaning | Color | Use |
|---------|-------|-----|
| Success / on-target | `success.500` `#16A34A` | "Within SLA", "passing", "above quota" |
| Warning / at-risk | `warning.500` `#D97706` | "Approaching threshold", "expiring soon" |
| Failure / breach | `danger.500` `#DC2626` | "Failed", "missed SLA", "out of spec" |
| Neutral / informational | `info.500` `#4261AD` | Default counts, baselines, predictions |

Never colour an entire data series red just to draw attention. Highlight the **specific data point** that breached.

## Chart-element styling

| Element | Spec |
|---------|------|
| Plot background | Transparent (inherits surface) |
| Axis lines | `neutral.200` `#E4E4E7`, 1px |
| Axis labels | `font.size.xs` `text.secondary` `#3F3F46` |
| Gridlines (horizontal only) | `neutral.100` `#F4F4F5`, 1px, dashed `2 2` |
| Gridlines (vertical) | Don't. Use ticks only on the x-axis. |
| Series stroke (line chart) | 2px |
| Bar inner padding | 30% of bar slot |
| Tooltip | `surface.inverse` background, `text.inverse` text, `radius.md`, `shadow.lg`, max 240px wide |
| Empty state | Center the chart frame, place a `text.muted` line: "No data in selected range." Do not draw axis lines for an empty chart. |

## Annotations

- Threshold lines: 1px dashed `neutral.400`, label sits to the right at the line's y-value.
- Range bands (e.g. SLA window): semi-transparent `info-50` `#EEF2FA` fill at 60% opacity, no border.
- Highlighted point: outer ring at `neutral.0` (3px), inner fill at series colour. Keeps the point visible against any background.

## Numerals & units

- Always show units. "1.2s" not "1.2".
- Use SI prefixes for large numbers: `1.2k`, `4.5M`. Use full digits when comparing.
- Currency: ISO 4217 code or symbol — pick one and stay consistent within the chart.
- Time: ISO 8601 for absolute (`2026-04-28T14:02Z`); relative for recency in tooltips (`2 minutes ago`).

## Accessibility

- **Colour-blind safety.** Verify every chart with [Stark](https://www.getstark.co/), [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/), or `prefers-contrast: more`. The categorical palette is verified — custom palettes must be retested.
- **Dual encoding.** For categorical data, also vary line dash pattern, bar texture, or shape. A reader should be able to tell series apart in greyscale.
- **Keyboard.** All interactive chart elements (legend toggles, hover, drill-down) must be keyboard-reachable and describe their state to a screen reader.
- **Patterns for print.** When charts are printed in greyscale, supply a SVG `<pattern>` overlay alternative for each series (lines, dots, hatch).

## Library recommendations

| Stack | Library | Notes |
|-------|---------|-------|
| Web (Angular) | [PrimeNG Charts](https://primeng.org/chart) (Chart.js) | Theme overrides for `data.labels`, `dataset.borderColor`, etc. |
| Web (raw) | [Apache ECharts](https://echarts.apache.org/) or [Chart.js](https://www.chartjs.org/) | Both expose deep theming; ECharts is better for dashboards. |
| Web (custom / interactive) | [D3](https://d3js.org/) + [visx](https://airbnb.io/visx/) | When the visualisation is the product. |
| Mobile (Flutter) | [`fl_chart`](https://pub.dev/packages/fl_chart) | Match colours from `tokens.dart`. |

Whichever library you pick, configure its theme **once** from `tokens.json` — don't pass hex values inline.

## Don'ts

- ❌ Don't use the brand gradient inside chart series. The gradient is a hero element; series need flat fills to compare honestly.
- ❌ Don't stack more than four series. Reach for small multiples instead.
- ❌ Don't truncate the y-axis to exaggerate magnitude. Always start at zero unless there's a documented reason.
- ❌ Don't use pie/donut for more than three categories.
- ❌ Don't rotate axis labels past 45°. If they don't fit, abbreviate.
- ❌ Don't show every data point as a marker on a long time series. Pick threshold points only.
