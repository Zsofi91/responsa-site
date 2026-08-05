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
`impresszum.html` (imprint). Planned: `guide-insta.html` — keep it UNLINKED
from nav/footer until the add-on launches.

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
- The approval channel is WhatsApp — every connection with the customer runs
  through it. Name it plainly ("WhatsAppon, a telefonodon"); don't fall back to
  the old generic "chatben" wording, and never name any other messenger.
- Pricing shown on this site is the source of truth for the site — don't
  import numbers from anywhere else without Zsófi's say-so.
- The canonical site URL for the MVP is
  `https://responsa.responsa-site.workers.dev` — use it for every absolute
  URL (og:url, canonical, share links) until a custom domain replaces it.

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
