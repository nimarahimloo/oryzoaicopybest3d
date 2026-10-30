# 7Golden — Interactive WebGL Experience

An English-language 7Golden brand adaptation built on a locally captured WebGL / GSAP interactive-site study. The original scroll engine, baked 3D animation assets, WebGL rendering and layout are retained; the brand content, catalogue data, selected imagery, metadata and contact details are adapted for 7Golden.

## What this repository contains

- The captured interactive runtime and its local assets: _astro/, textures/, models/, splats/, rive/, fonts/ and images/.
- 7Golden content and product data in 7golden-data.js.
- DOM/content adaptation in 7golden-content.js.
- An idempotent hero fallback in 7golden-hero-fix.js.
- Local 7Golden brand images in images/7golden/.

## 7Golden content source

The catalogue and company facts were adapted from the separate nimarahimloo/7golden project, especially its Prisma seed data and site settings. The original 7golden repository is not modified by this work.

The current data model includes 3 featured groups (pistachio, hazelnut and almond) and 20 catalogue entries. Prices are intentionally quote-based: seed values of zero are not shown as retail prices. Product availability and specifications must be confirmed with 7Golden before publishing a firm offer.

Company facts used in the English copy:
- Location: Qazvin, Iran.
- Family-business roots in the Qazvin nut trade: 1956.
- Nut processing began: 1998.
- Company registration: 2017.
- Office: +98 28 3323 4004.
- Mobile / WhatsApp: +98 912 182 3438.
- Email: info@7golden.co.

## Run locally

No build step is required for this static captured site:

    python3 -m http.server 4173

Open http://localhost:4173. Use a local HTTP server; opening index.html with file:// can block WebAssembly, workers and asset requests.

## Important implementation notes

- Do not replace the original WebGL/GSAP engine or restructure its DOM as a shortcut; previous direct DOM changes have caused rendering failures.
- The 7Golden layer must remain idempotent. Avoid unbounded intervals or MutationObservers that rewrite the same text and trigger themselves.
- The original studio's authorship must not be misrepresented. This is an independent brand adaptation / study mirror, not an official Lusion project.
- Existing third-party runtime assets and original visual materials remain subject to their respective owners' terms. This repository is not an endorsement or an official Lusion release.

## Main files

| File | Purpose |
|---|---|
| index.html | Captured site DOM and script loading |
| 7golden-data.js | Company profile, categories and 20 product records |
| 7golden-content.js | Brand copy, metadata, navigation and contact adaptation |
| 7golden-hero-fix.js | Idempotent hero fallback |
| images/7golden/ | Local brand imagery |
| docs/SECTIONS.md | Interactive section map |
