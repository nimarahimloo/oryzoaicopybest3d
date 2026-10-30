(() => {
  'use strict';
  // Idempotent hero fallback. The content layer handles later DOM reconciliation.
  const heroCopy = {
    tagline: 'Processed Nuts. Made for Food Makers.',
    copy: 'From selected hazelnuts, pistachios and almonds to versatile food ingredients, 7Golden helps manufacturers find the right form for their recipes and production needs.',
    play: 'EXPLORE RANGE'
  };
  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && el.textContent !== value) el.textContent = value;
  }
  function applyHero() {
    setText('#hero-top-tagline', heroCopy.tagline);
    setText('#hero-copy', heroCopy.copy);
    const heading = document.querySelector('#hero-card-header');
    if (heading && heading.innerHTML !== 'From Qazvin<br>to food manufacturers.') heading.innerHTML = 'From Qazvin<br>to food manufacturers.';
    const desc = document.querySelector('#hero-card-desc');
    if (desc && desc.textContent.trim() !== 'Premium hazelnut, pistachio & almond ingredients.') desc.textContent = 'Premium hazelnut, pistachio & almond ingredients.';
    const thumb = document.querySelector('#hero-video-thumbnail');
    if (thumb && thumb.getAttribute('src') !== '/images/7golden/pistachio-bowl-green.webp') {
      thumb.src = '/images/7golden/pistachio-bowl-green.webp';
      thumb.alt = '7Golden pistachio ingredients';
    }
    setText('#hero-video-play', heroCopy.play);
    const hero = document.querySelector('#hero');
    if (hero) hero.setAttribute('data-7golden-hero', 'true');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyHero, { once: true });
  else applyHero();
  window.addEventListener('load', applyHero, { once: true });
})();
