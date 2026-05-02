# Brand Guidelines

## The brand

**Hierarchy Technologies (HT)** builds technology products with structure, clarity, and engineering rigour. The brand expression sits at the intersection of *order* (hierarchy) and *circuitry* (technology) — captured visually by the H mark whose terminal nodes evoke a circuit board.

## Personality

We use these adjectives to settle micro-decisions about copy, color, motion, and imagery.

| Trait | We are… | We are not… |
|-------|---------|-------------|
| **Structured** | Ordered, deliberate, well-named | Rigid, bureaucratic, formal-for-its-own-sake |
| **Engineered** | Precise, evidence-driven, opinionated | Cold, jargon-heavy, gatekeeping |
| **Modern** | Geometric, restrained, current | Trendy, ornamental, gimmicky |
| **Confident** | Direct, plainspoken, decisive | Brash, salesy, dismissive |
| **Human** | Helpful, calm, respectful of the reader | Cute, ironic, cloying |

## Audience

Engineers, technical leaders, and operators integrating Hierarchy products into mission-critical systems. Assume:

- They read fast and skim first.
- They prefer specifics (numbers, file paths, latencies) over adjectives.
- They are skeptical of marketing fluff.

## Visual signature

Three things should be *immediately* recognisable as HT, even when stripped of context:

1. **The H mark.** Geometric H with circular node terminals. See [`logo-usage.md`](./logo-usage.md).
2. **The brand gradient.** Azure → indigo → violet, left-to-right. See [`color-system.md`](./color-system.md).
3. **Wide-tracked display type.** Wordmark uses generous letter-spacing (`0.12em`); display headlines may borrow this. See [`typography.md`](./typography.md).

## Voice signature

In writing — UI, docs, marketing — we sound like:

> "Submit failed because the file exceeded 10 MB. Try compressing or splitting it, then resubmit."

We do *not* sound like:

> "Oops! Something went wrong 😅 Please try again later."

See [`voice-and-tone.md`](./voice-and-tone.md) for the full pattern library.

## Surface-level rules of thumb

- **One brand color per region.** Don't stack azure and violet next to each other unless using the canonical gradient.
- **Ink (`#231F20`) for body, never pure black.** Pure black is reserved for thin strokes that need maximum contrast.
- **Default to the gradient sparingly.** It's a hero element — buttons, headers, key illustrations. Not for paragraph text or chrome.
- **Whitespace is a brand asset.** Use the 4-pt spacing scale; do not custom-pad.
- **Round only what should feel soft.** Inputs and cards: `radius.md` (8px). Pills/chips: `radius.pill`. Hard surfaces (tables, system bars): `radius.none`.

## Where each rule lives

| Decision | Read |
|----------|------|
| Which logo to use | [`logo-usage.md`](./logo-usage.md) |
| Which color, what hex | [`color-system.md`](./color-system.md) |
| Which font, what size | [`typography.md`](./typography.md) |
| Spacing, radius, shadow | [`spacing-and-layout.md`](./spacing-and-layout.md) |
| Icon style and library | [`iconography.md`](./iconography.md) |
| Word choice, microcopy | [`voice-and-tone.md`](./voice-and-tone.md) |
| Token values to consume | [`tokens/tokens.json`](./tokens/tokens.json) and derived files |
