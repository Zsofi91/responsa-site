# CLAUDE.md — responsa-site rules

## What this is
The public marketing site for Responsa (Google-review replies for Hungarian
restaurants, plus an upcoming Instagram add-on). Plain static HTML/CSS/JS —
no build step, no frameworks, no new external dependencies (fonts are already
loaded). This repo is PUBLIC: never commit internal strategy, credentials, or
customer data.

## The #1 rule: bilingual architecture
Hungarian is the source language, inline in the HTML (`lang="hu"`,
`SOURCE_LANG = "hu"` in i18n.js). English overlays it via `data-i18n` keys
from `STRINGS.en` in i18n.js.

- EVERY new `data-i18n` key needs BOTH sides: Hungarian text in the HTML
  element AND an English entry in `STRINGS.en`. No orphans in either
  direction — grep-verify parity before every PR.
- Strings are injected with innerHTML (some carry `<strong>`/`<a>` markup).
  That is safe only because every string is authored in this repo — never
  route user input through the i18n layer.

## Pages
`index.html` (landing), `guide.html` (Google manager-invite setup),
`privacy.html` (draft — keep its lawyer-review banner), `aszf.html` (terms),
`dpa.html` (data processing agreement — the ÁSZF's annex; Hungarian-only BY
DESIGN: no `data-i18n` keys, no i18n.js, not in the nav — don't "fix" that),
`kapcsolat.html` (contact — embedded Tally form). Planned: `guide-insta.html`
— keep it UNLINKED from nav/footer until the add-on launches.

The privacy notice carries retention/rights/controller sections since
2026-08-23 (added on Zsófi's instruction). The controller block uses marked
placeholders ("[Név] egyéni vállalkozó (nyilvántartási szám: [•••])") — Zsófi
operates as an egyéni vállalkozó and fills the real details after registering;
never invent them, and keep `teamresponsa@gmail.com` as the contact.

## Conventions
- Reuse existing CSS patterns before writing new ones: `.section`, `.eyebrow`,
  `.steps` (4-column; use `.steps-3` for 3 items), `.chips-row`, `.chip`,
  `.btn-grad`, `.price-tiers`/`.tier`, `.callout` (`.callout-lead` for a
  section's opening claim), and the shared segmented control
  (`.langtoggle`/`.pertoggle`).
- Accessibility: keep aria labels, heading order, and the skip link intact.
  Mobile-first; breakpoints at 1000px and 560px like the existing rules.
- Tone: warm, honest, no hype. Hungarian audience first; the English must
  still read naturally.

## Content rules (don't contradict the product)
- The Instagram add-on is "coming soon" — never present it as live.
- The approval channel is **Telegram only** (Zsófi's MVP decision, 2026-09-02;
  WhatsApp is parked and may return later). Name it plainly ("Telegramon, a
  telefonodon"); don't fall back to the old generic "chatben" wording, and
  never name any other messenger — not WhatsApp either.
- Pricing shown on this site is the source of truth for the site — don't
  import numbers from anywhere else without Zsófi's say-so.
- The canonical site URL is `https://responsa.hu` (live since 2026-08) — use
  it for every absolute URL (og:url, canonical, share links). The
  responsa-site.workers.dev subdomain is only the underlying worker; never
  put it in page URLs.

## Workflow
- NEVER commit or push to `main`. Feature branches + PRs only; Zsófi reviews
  and merges everything herself.
- Overnight work: issues labeled `night-shift` are the ticket queue; when
  branches share files, stack PRs (base each branch on the previous ticket's
  branch, PR targets that base, merge bottom-up).

## Verify before any PR
```
node --check i18n.js
```
plus i18n key parity (both directions) and well-formed HTML — review your own
diff before pushing.
