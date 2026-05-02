# Photography & Imagery

The brand has a single, coherent photographic voice: **engineered, human, architectural**. If a candidate image doesn't fit this voice, don't crop or filter it into compliance — find a different image.

## Three photographic modes

| Mode | When | Subject | Treatment |
|------|------|---------|-----------|
| **Operators** | Marketing hero, customer stories, "about" pages | People at work, real workspaces. Single subject preferred. | Natural light, calm composition, subject's hands or screen often in frame. No staged smiles. |
| **Architecture** | Section dividers, hero backgrounds, transitional moments | Built environments suggesting structure: bridges, beams, server racks, blueprints, geometric facades. | High contrast, deep shadows, no people. Often blue-violet hour. |
| **Object / detail** | Card backgrounds, supporting visuals | Close-ups of physical artefacts: keyboards, notebooks, instruments, desks. | Top-down or 3/4 angle, single subject, generous negative space. |

We do not use generic stock people, lifestyle "office laughter", abstract gradients/shapes pretending to be photos, or stylised illustrated humans.

## Treatment rules

- **Color cast.** Subtle cool cast acceptable (matches brand). Don't push warm/orange — clashes with the gradient.
- **Saturation.** −5 to −10 from camera default. Brand visuals around the photo are saturated; the photo should sit calmly behind them.
- **Contrast.** Real, deep shadows. Don't HDR-flatten.
- **Crop.** Subjects breathe. Avoid tight head-and-shoulders crops — favour 3/4 framing with environmental context.
- **Aspect.** Web hero: 16:9 or 21:9. Card: 4:3. Square only when the subject is genuinely square (an object).
- **Resolution.** Source at minimum 2× the largest display dimension. No upscaled images.

## When photography overlays the gradient

Three patterns; pick by the photo's tonal character.

| Photo type | Treatment | Why |
|------------|-----------|-----|
| Bright / mid-tone | 60% black overlay, then gradient at 25% multiply on top | Restores enough darkness for white text + keeps brand colour visible |
| Already dark | Skip black overlay, use gradient at 35% screen | Doesn't crush detail; gradient adds chromatic interest |
| Mixed / busy | Avoid overlay entirely — full-bleed photo, place text on a solid card pulled from the gradient (e.g. `indigo-700` block) | Overlays on busy photos look muddy |

The overlay direction matches the gradient direction: **left → right, azure → violet**. So image left side gets cooler tint; right side gets warmer-violet tint.

## Image placement in layout

- Photos sit at the natural section breaks. Don't sandwich a photo between two text blocks of similar weight.
- Use full-bleed for hero and customer-story photos. Use card-confined photos elsewhere.
- Captions sit *below* the photo in `text.muted` at `font-size.xs`. Never overlay captions on the photo itself.

## Diversity & representation

- Photograph real people. Avoid composites or AI-generated portraits — they read as inauthentic.
- Subjects across photos should reflect the actual diversity of the operator audience: gender, ethnicity, age, region, ability.
- Permission and model-release are non-negotiable. Document for every photo of an identifiable person.

## Don't list

- ❌ Generic "person on laptop in coffee shop" stock.
- ❌ Frosted-glass or duotone treatments imitating other tech brands.
- ❌ Heavy bokeh / shallow-depth-of-field portraits with empty backgrounds — feels like LinkedIn.
- ❌ Hand-drawn illustration overlaid on photos. Pick one or the other.
- ❌ Photographs of robots / "AI" abstractions. Even if the product uses AI, the photographic voice is *human-led*.
- ❌ Aspirational "team meeting around a glass table" photos.
- ❌ Photos of competitors' UIs, devices, or buildings.

## Asset sourcing

- **Custom shoots first.** A two-day commissioned shoot covers most needs and gives an authentic, owned library.
- **Stock is acceptable** if the image fits the three modes above and feels custom — no commonly-recognised stock photos. Suggested stock libraries: Unsplash+, Death to Stock, Stocksy. Avoid the top 100 stock images (anyone can spot them).
- **Maintain a library** with provenance, rights, alt-text, and approved crops in a single shared location.

## Alt-text & accessibility

Every photograph in product or marketing needs alt text describing **what is in the image**, not what it represents. ("A person typing at a keyboard, wide shot, with two monitors visible." — not "Productivity.") See `voice-and-tone.md` for tone of alt copy.
