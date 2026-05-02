# Templates

Drop-in starting points for the most common branded artefacts. Each template uses brand-token values directly, so updating `tokens/tokens.json` will propagate.

| File | Purpose | Usage |
|------|---------|-------|
| [`business-card.svg`](./business-card.svg) | 85×55 mm card (front + back, 3 mm bleed) | Open in Illustrator / Affinity / Inkscape. Replace `[NAME]` / `[ROLE]` / `[EMAIL]` / `[PHONE]`. Export as PDF/X-1a in CMYK. Send to printer with `color-print.md`. |
| [`email-signature.html`](./email-signature.html) | HTML email signature (table layout for compatibility) | Replace `[BRACKETS]`. Copy the contents between the `<!-- start -->` markers. Paste as HTML into Gmail / Outlook / Apple Mail. Self-host the PNG mark before rolling out. |
| [`social-og.svg`](./social-og.svg) | 1200×630 social Open Graph image | Replace `[HEADLINE]`. Export PNG @ 2× (2400×1260) for retina; @1× for `<meta property="og:image">`. |
| [`slide-cover.svg`](./slide-cover.svg) | 16:9 (1920×1080) deck cover | Replace `[DECK TITLE]` / `[PRESENTER]` / `[YYYY-MM-DD]`. Export PNG and import into Keynote / Google Slides / PowerPoint as the title slide background. |

## How the logo is embedded in these templates

Each template defines the H mark **once** as an SVG `<symbol id="ht-mark">` in the `<defs>` block, then uses `<use href="#ht-mark" fill="..."/>` wherever the mark appears. This means:

- The path data appears **once per template file**, not duplicated.
- The fill colour is set at the use-site (`fill="url(#bc-gradient)"`, `fill="#FFFFFF"`, etc.), so the same path serves both gradient and mono uses.
- Templates render correctly **standalone** (browsers, image viewers, PDF tools, Illustrator) — no external file dependency. (We tried `<image href="../logos/...svg">` originally, but standalone SVG viewers block external SVG references for security.)

### When the canonical mark changes

If you ever update `logos/hierarchy-mark.svg`:

1. Open the canonical file, copy the contents of the `<path d="…"/>` element.
2. In each template, find the `<symbol id="ht-mark">` block in `<defs>`.
3. Replace the path's `d="…"` attribute with the new value.

That's the trade-off: the path lives in one place per template instead of one place across the whole system. We keep the duplication footprint small (only 4 templates) and avoid the standalone-SVG security issue. A future build step could automate this with Style Dictionary or a tiny script that bakes the canonical path into each template at build time.

## Editing rules

- **Don't change colors.** All colors here come from the brand tokens; if you need a new shade, add it to `tokens.json` first.
- **Don't change typefaces.** Sora for display, Inter for body. Both free, both Google Fonts.
- **Don't redraw or trace the H mark.** Always use `<image href="../logos/...svg">` so updates to the canonical SVG flow through.
- **Do localise.** The placeholder copy (`HIERARCHY · TECHNOLOGIES`, `ENGINEERED SYSTEMS FOR OPERATORS`) is English-default; replace per-locale as needed but keep tracking and weight consistent.

## Adding new templates

When a new artefact recurs (one-pager, trade show booth, t-shirt mock, README badge), add it here as a parameterised SVG/HTML using the same conventions:

1. Brand colors as inline hex, sourced from `color-system.md`.
2. `[BRACKET]` placeholders for variable copy.
3. A header comment naming size, target use, and export format.
4. Link from this README.

## What's deliberately not here

- Letterhead — request via design ops; locale and address vary per office.
- Apparel mocks — handled by merch vendor with the AI master logo.
- Trade-show / booth design — bespoke per event.
- App store screenshots — handled in the mobile/web stack repos.
