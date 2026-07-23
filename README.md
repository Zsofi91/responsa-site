# Responsa — landing site

The public website of [Responsa](https://responsa.responsa-site.workers.dev): every Google review of
your restaurant answered, in your voice — with an Instagram assistant on the
way. Hungarian-first, with an English toggle.

Plain static HTML/CSS/JS. No build step, no frameworks.

## Files

| Path | What |
|---|---|
| `index.html` | Landing page |
| `guide.html` | Setup guide (adding Responsa to a Google Business Profile) |
| `privacy.html` | Privacy policy |
| `aszf.html` | Terms of service (ÁSZF) |
| `impresszum.html` | Legal imprint |
| `i18n.js` | Language toggle + all English strings |
| `styles.css` | All styles |
| `assets/` | Logo SVGs |
| `wrangler.jsonc` | Cloudflare deployment config |

## How the two languages work

Hungarian is written directly in the HTML (it's what search engines index and
what renders with JavaScript off). English is applied on top: every
translatable element carries a `data-i18n` key, and `i18n.js` swaps in the
matching string from `STRINGS.en` when the visitor picks EN. Adding copy means
adding both halves — the Hungarian text in the HTML and the English entry in
`i18n.js` under the same key.

## Local preview

```
python3 -m http.server
```

then open http://localhost:8000 — or just open `index.html` in a browser.

## Contributing

Work happens on feature branches via pull requests; `main` is merge-only by
the owner.

© 2026 Responsa · Szeged
