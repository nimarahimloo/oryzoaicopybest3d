# Interactive Section Map — 7Golden Adaptation

The underlying layout and animation sequence are inherited from the captured Lusion / Oryzo study. The 7Golden layer changes the editorial meaning and selected media while preserving the original WebGL canvas, scroll progression, baked camera paths and GSAP timelines.

| # | Interactive section | 7Golden adaptation |
|---|---|---|
| 1 | Hero / opening scene | 7Golden wordmark, food-ingredient headline, Qazvin-to-manufacturers copy and pistachio hero image |
| 2 | Interactive hand / AI transition | Reframed as an ingredient discovery transition; avoid AI/product claims |
| 3 | Wearable gallery | Reframed as a visual ingredient gallery using local pistachio, hazelnut and almond images |
| 4 | Main product transition | Nut ingredient range rather than the fictional coaster |
| 5 | Feature panels | Product formats, food applications and processing capabilities |
| 6 | Macro texture transition | Retained as a visual transition; do not describe cork-specific material claims |
| 7 | Editorial / proof panels | Company timeline: family-trade roots (1956), processing (1998), registration (2017), plus product formats |
| 8 | Product selector | Pistachio, hazelnut and almond groups; detailed records are in 7golden-data.js |
| 9 | Contact / footer | 7Golden contact details and quote-request call to action |

## Technology retained

- Captured static Astro output and local compiled runtime.
- Custom WebGL rendering and pre-baked animation assets.
- GSAP / ScrollTrigger / SplitText-style scroll choreography.
- Gaussian splat scenes, custom mesh buffers, Rive and local font assets.

## Data and content

7golden-data.js is the structured source for company details, categories, applications and 20 catalogue entries. Product records are based on the separate nimarahimloo/7golden repository's seed catalogue. Seed prices are zero placeholders and are not displayed as prices. Product specifications, stock and supply status should be confirmed with the company.

## Stability constraints

- Preserve the original DOM hierarchy and runtime script.
- Content scripts must be idempotent and avoid self-triggering mutation loops.
- Never use global text replacement to overwrite the original studio attribution.
- Keep original Lusion links as attribution; only the explicit brand CTA should point to 7Golden.
