(() => {
  'use strict';

  const heroCopy = {
    tagline: 'Processed Nuts. Made for Food Makers.',
    copy: 'From selected hazelnuts, pistachios and almonds to versatile food ingredients, 7Golden helps manufacturers find the right form for their recipes and production needs.',
    cardTitle: 'From Qazvin',
    cardTitle2: 'to food manufacturers.',
    cardDesc: 'Premium hazelnut, pistachio & almond ingredients.',
    play: 'EXPLORE RANGE'
  };

  function applyHero() {
    const tagline = document.querySelector('#hero-top-tagline');
    const copy = document.querySelector('#hero-copy');
    const cardHeader = document.querySelector('#hero-card-header');
    const cardDesc = document.querySelector('#hero-card-desc');
    const thumbnail = document.querySelector('#hero-video-thumbnail');
    const play = document.querySelector('#hero-video-play');

    if (tagline) tagline.textContent = heroCopy.tagline;
    if (copy) copy.textContent = heroCopy.copy;
    if (cardHeader) cardHeader.innerHTML = `${heroCopy.cardTitle}<br>${heroCopy.cardTitle2}`;
    if (cardDesc) cardDesc.innerHTML = `<span>${heroCopy.cardDesc}</span>`;
    if (thumbnail) {
      thumbnail.src = '/images/7golden/pistachio-bowl-green.webp';
      thumbnail.alt = '7Golden pistachios';
    }
    if (play) play.textContent = heroCopy.play;

    const hero = document.querySelector('#hero');
    if (hero) hero.setAttribute('data-7golden-hero', 'true');
  }

  function boot() {
    applyHero();

    let attempts = 0;
    const timer = setInterval(() => {
      applyHero();
      if (++attempts >= 40) clearInterval(timer);
    }, 250);

    const observer = new MutationObserver(() => applyHero());
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    setTimeout(() => observer.disconnect(), 12000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
