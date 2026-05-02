# Voice & Tone

## Voice — what we always sound like

Hierarchy's voice is **direct, technical, calm, and respectful of the reader's time.** It applies everywhere we write words: UI strings, marketing copy, docs, errors, support replies, release notes.

| Trait | Means | Doesn't mean |
|-------|-------|--------------|
| **Direct** | Lead with the point. Use plain verbs. Cut hedges ("just", "kind of"). | Brusque, dismissive, blunt-for-effect. |
| **Technical** | Use the correct term. Cite numbers and paths when they exist. | Acronym soup, gatekeeping, jargon worship. |
| **Calm** | Steady tone whether confirming or apologising. Don't panic; don't celebrate. | Cold, robotic, indifferent. |
| **Respectful** | Address the reader as a peer. Acknowledge their time and effort. | Sycophantic, apologetic past the point of useful. |

## Tone — how we adjust

Voice stays constant; tone shifts with context.

| Context | Tone | Example |
|---------|------|---------|
| Confirmation | Matter-of-fact | "Saved." |
| Recoverable error | Specific, action-oriented | "File exceeds 10 MB. Compress or split, then retry." |
| Fatal error | Direct, accountable, route to help | "Upload failed: server returned 503. Retry, or contact support with request ID `req_8aJk3`." |
| Empty state | Useful, not cute | "No agents yet. Create your first one to start delegating." |
| Marketing hero | Confident, evidence-based | "Ship faster. Your tail-end backlog, finally addressable." |
| Release notes | Plainspoken, prioritised | "Smartwatch sync now reconciles offline check-ins. Runs every 4 minutes (was 30)." |

## Microcopy patterns

### Buttons

- Use **action verbs** in title case. ("Submit application", not "Click here").
- Avoid the word "please" in buttons.
- Destructive buttons name the destruction. ("Delete agent" — not "Confirm".)

### Empty states

Three lines max. Headline (what's missing), one supporting sentence (why it matters), call-to-action.

> **No agents assigned**
> Agents handle the long tail of tasks no human will get to today.
> [Create agent]

### Errors

Format: **what failed** → **why** → **what to try**. Never just "Error".

| ❌ Avoid | ✅ Prefer |
|---------|---------|
| "Something went wrong." | "Couldn't load tasks: network timeout. Retry, or check your connection." |
| "Invalid input." | "Email is missing the `@` symbol." |
| "Oops!" | (delete this entire line) |

### Form labels and helpers

Label: noun in title case. ("Display name")
Helper: instructive sentence, ends with a period. ("Visible to your team. Up to 60 characters.")
Error helper: starts with the field name. ("Display name can't be empty.")

### Confirmation modals

Title: imperative phrasing the action. ("Delete agent?")
Body: explain consequences in 1–2 sentences. Include what is irreversible.
Buttons: cancel on the left ("Cancel"), destructive on the right ("Delete agent").

## Banned phrases

| ❌ Don't say | ✅ Say instead |
|-------------|---------------|
| "Oops!" | (just describe what happened) |
| "Whoops!" | (same) |
| "Magic" / "magical" | (the actual mechanism, e.g. "automated", "scheduled") |
| "Simply" | (delete the word — if it were simple, you wouldn't need to say it) |
| "Just" (filler) | (delete) |
| "Please wait" | "Loading…" or a progress indicator |
| "Invalid" (alone) | (be specific about what's invalid and how to fix) |
| Exclamation marks | (one is fine in marketing; never in errors) |
| Emojis in product UI | (allowed sparingly in marketing) |

## Capitalisation

- **Title case** for buttons, page titles, section headings, navigation labels.
- **Sentence case** for body text, descriptions, helper text, tooltips, list items.
- **Acronyms** stay capitalised (API, URL, JSON), even mid-sentence.
- **Brand names** capitalise as the brand does (Hierarchy Technologies, Flutter, Angular, PrimeNG).

## Numbers & units

- Spell out **zero through nine** in prose; use numerals from 10 onwards.
- In UI counters, dashboards, tables: always use numerals ("5 tasks", "1 agent").
- Use thousand separators (`1,200`), not spaces.
- ISO 8601 for absolute dates (`2026-04-28`); relative for recency (`2 minutes ago`).
- File sizes in IEC: `KiB`, `MiB`, `GiB`, where the audience is technical. `KB`/`MB`/`GB` is fine in marketing.

## Inclusivity

- Use second person (**you**) and singular **they**. Avoid gendered pronouns.
- "Allowlist / blocklist" — never "whitelist / blacklist".
- "Primary / replica" — never "master / slave".
- Avoid metaphors that don't translate (sports references, cultural idioms).
- Write at roughly 8th-grade reading level for marketing; technical depth is fine in docs.
