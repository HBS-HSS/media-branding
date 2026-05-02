# Color — Print

For physical reproduction (business cards, stationery, signage, packaging, apparel). RGB/HEX values are screen-only — printers need CMYK or Pantone references.

> **Always proof on the actual stock and process before mass production.** Conversions below are mathematical approximations. Final colour matching depends on substrate, ink set, calibration, and viewing conditions. Ask your printer for a wet proof.

## Brand — primary

| Token | Hex | sRGB | CMYK (process) | Pantone Solid Coated | Pantone Solid Uncoated |
|-------|-----|------|----------------|----------------------|------------------------|
| `brand.azure.500` | `#4261AD` | 66, 97, 173 | C 78 / M 64 / Y 0 / K 0 | **2747 C** (closest match) | 2747 U |
| `brand.indigo.500` | `#392F8E` | 57, 47, 142 | C 90 / M 92 / Y 0 / K 12 | **2745 C** | 2745 U |
| `brand.violet.500` | `#482D89` | 72, 45, 137 | C 84 / M 95 / Y 0 / K 12 | **2685 C** | 2685 U |

> **Pantone alternatives that often match better on coated stock:** Azure → 2748 C, Indigo → 2746 C, Violet → 2098 C. Bring chips when proofing.

## Brand — ink

| Token | Hex | CMYK (rich black for body) | CMYK (process black, < 11pt) | Pantone |
|-------|-----|----------------------------|------------------------------|---------|
| `neutral.900` (ink) | `#231F20` | C 60 / M 40 / Y 40 / K 100 | C 0 / M 0 / Y 0 / K 100 | **Pantone Black 6 C** |

**Two recipes:**
- **Rich black** (large fills, headlines, photography overlays): `60/40/40/100`. Avoids muddy "warm grey" appearance of pure K on coated stock.
- **Process black** (body text < 11 pt, fine rules, fax): `0/0/0/100`. Single plate — sharper edges, no registration risk.

Don't use rich black for thin text. Mis-registration smears it.

## Tints to avoid in print

| Token | Why |
|-------|-----|
| `azure-50`, `indigo-50`, `violet-50` (≤ 5% screen) | Drop-out. Most offset processes can't reproduce < 5% reliably; they pixelate or print as paper-white. Use the `-100` step instead. |
| `neutral-50` (`#FAFAFA`) | Effectively paper-white on most uncoated stock. Use `neutral-100` if you need a visible tint. |

## Spot-color print (one or two plates)

When using only one or two plates (silkscreen, embossing, foil):

| Use | Pantone |
|-----|---------|
| Single brand plate (no gradient) | **Pantone 2745 C** (indigo — sits at the center of the gradient) |
| Two plates | Indigo 2745 C + Black 6 C |
| Foil — gold | Pantone 871 C (matches mid-violet warmth) |
| Foil — silver | Pantone 877 C (cool match for azure side) |
| Embossing only | Blind emboss preferred; if inked, use ink at 100% Black 6 C |

## Paper / substrate

- **Coated** (gloss / silk / matt) — use the `... C` Pantone references. Brand colours render at full vibrancy.
- **Uncoated** — use the `... U` Pantone references. Expect a 5–10% dot gain; colours appear slightly darker and warmer.
- **Recycled / kraft** — gradient prints poorly. Default to **mono-dark** (`hierarchy-primary-mono-dark.svg`) on these stocks.

## Logo usage in print

| Stock | Logo file | Notes |
|-------|-----------|-------|
| Coated white card, 4-color process | `hierarchy-primary.svg` (gradient) → exported to CMYK PDF/X-1a | Verify CMYK conversion matches screen with proof. |
| Coated dark card, 4-color process | `hierarchy-primary-reversed.svg` → CMYK PDF/X-1a | Use the reversed file (lifted gradient). |
| Single plate / silkscreen / embossing | `hierarchy-primary-mono-dark.svg` or `hierarchy-primary-mono-light.svg` | Set fill to the chosen Pantone or 100% black. |
| Foil-stamped | `hierarchy-mark.svg` mark only | Wordmark gets too thin under foil heat. |

## Colour matching for vendors

If a vendor asks for a single source-of-truth file:

- Send the relevant `.ai` master.
- Specify CMYK + Pantone from the table above.
- Provide a hex reference for screen-proofs.
- Request a wet proof for any quantity over 500 units.

## Summary card (paste into vendor briefs)

```
Hierarchy Technologies — Brand Colors

PRIMARY GRADIENT
  Azure   #4261AD  CMYK 78/64/0/0   PMS 2747 C
  Indigo  #392F8E  CMYK 90/92/0/12  PMS 2745 C   ← single-plate fallback
  Violet  #482D89  CMYK 84/95/0/12  PMS 2685 C

INK
  #231F20   Rich CMYK 60/40/40/100   PMS Black 6 C
            Process CMYK 0/0/0/100   (use for < 11pt text)

PAPER
  Default: 100% white coated, 350 gsm or stock equivalent.
  Always proof CMYK conversions before run.
```
