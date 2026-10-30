(() => {
  'use strict';

  const DATA = window.SEVENGOLDEN_DATA || {};
  const BRAND = DATA.brand || '7Golden';
  const COMPANY = DATA.company || {};
  const CONTACT = COMPANY.contacts || {};
  const products = Array.isArray(DATA.products) ? DATA.products : [];
  const categories = Array.isArray(DATA.categories) ? DATA.categories : [];
  const gallery = [
    'https://raw.githubusercontent.com/nimarahimloo/7golden/main/public/gallery/AQ8A1499AQ8A1499.webp',
    'https://raw.githubusercontent.com/nimarahimloo/7golden/main/public/gallery/AQ8A1505AQ8A1505.webp',
    'https://raw.githubusercontent.com/nimarahimloo/7golden/main/public/gallery/AQ8A1520AQ8A1520.webp',
    'https://raw.githubusercontent.com/nimarahimloo/7golden/main/public/gallery/AQ8A1640AQ8A1640.webp',
    'https://raw.githubusercontent.com/nimarahimloo/7golden/main/public/gallery/AQ8A1579AQ8A1579.webp',
    'https://raw.githubusercontent.com/nimarahimloo/7golden/main/public/gallery/AQ8A1742AQ8A1742.webp'
  ];

  const text = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
    return node;
  };
  const image = (node, src, alt) => {
    if (!node || !src) return;
    node.src = src;
    node.alt = alt || '';
    node.loading = 'lazy';
    node.decoding = 'async';
  };
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  const setHTML = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.innerHTML = value;
    return node;
  };

  function addStyles() {
    if (document.getElementById('seven-golden-brand-styles')) return;
    const style = el('style');
    style.id = 'seven-golden-brand-styles';
    style.textContent = `
      :root { --sg-green:#526b43; --sg-green-dark:#26372b; --sg-gold:#c3a15b; --sg-cream:#f3eddf; --sg-ink:#201e18; }
      body { background-color:var(--sg-ink); }
      #hero { background:radial-gradient(circle at 76% 38%,rgba(195,161,91,.22),transparent 34%),linear-gradient(130deg,#171b15 0%,#252b20 55%,#4c5e3d 120%) !important; }
      #hero-video-wrapper { overflow:hidden; border:1px solid rgba(243,237,223,.34) !important; }
      #hero-video-thumbnail { object-fit:cover !important; object-position:center !important; filter:saturate(.96) contrast(1.04); }
      #wearable-main-canvas { opacity:0 !important; pointer-events:none !important; }
      .wearable-gallery-item-inner { background-size:cover !important; background-position:center !important; background-repeat:no-repeat !important; }
      #features-item-elevate .features-item-icon, #features-item-temperature .features-item-icon, #features-item-curve .features-item-icon { color:var(--sg-gold); }
      #product-compare { display:none !important; }
      #product-details-extra { display:none !important; }
      #product-catalogue { position:relative; z-index:2; margin:clamp(36px,6vw,88px) 0 0; }
      #product-catalogue .sg-catalogue-head { display:flex; justify-content:space-between; align-items:end; gap:24px; margin-bottom:28px; }
      #product-catalogue .sg-eyebrow { color:var(--sg-gold); letter-spacing:.16em; text-transform:uppercase; font-size:11px; }
      #product-catalogue .sg-catalogue-title { color:var(--sg-cream); font-size:clamp(28px,4vw,56px); line-height:1.02; margin:12px 0 0; }
      #product-catalogue .sg-filters { display:flex; flex-wrap:wrap; gap:8px; margin:0 0 24px; }
      #product-catalogue .sg-filter { appearance:none; border:1px solid rgba(243,237,223,.28); background:transparent; color:var(--sg-cream); padding:10px 16px; border-radius:99px; cursor:pointer; font:inherit; font-size:12px; }
      #product-catalogue .sg-filter[aria-pressed="true"] { background:var(--sg-green); border-color:var(--sg-green); }
      #product-catalogue .sg-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; }
      #product-catalogue .sg-card { min-width:0; background:rgba(243,237,223,.055); border:1px solid rgba(243,237,223,.12); }
      #product-catalogue .sg-card-image { display:block; width:100%; aspect-ratio:1/1; object-fit:cover; background:#30362a; }
      #product-catalogue .sg-card-copy { padding:16px; }
      #product-catalogue .sg-card-category { color:var(--sg-gold); text-transform:uppercase; letter-spacing:.12em; font-size:9px; }
      #product-catalogue .sg-card-title { color:var(--sg-cream); font-size:16px; line-height:1.2; margin:8px 0; }
      #product-catalogue .sg-card-desc { color:rgba(243,237,223,.72); font-size:12px; line-height:1.6; }
      #product-catalogue .sg-card-origin { color:rgba(243,237,223,.55); font-size:10px; margin-top:12px; }
      #product-catalogue .sg-empty { color:var(--sg-cream); padding:24px 0; }
      #encryption-field-flip-btn { display:none !important; }
      #encryption-field-input { width:100%; max-width:520px; text-transform:none !important; }
      #testimonies-table { display:none !important; }
      #testimonies-hero { max-width:900px; }
      #sg-history { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; margin-top:48px; }
      #sg-history .sg-history-item { border-top:1px solid rgba(243,237,223,.34); padding-top:18px; }
      #sg-history strong { display:block; color:var(--sg-gold); font-size:clamp(34px,5vw,64px); font-weight:400; }
      #sg-history span { display:block; color:var(--sg-cream); font-size:14px; margin-top:8px; }
      #footer { background:#171b15 !important; }
      #footer-caption { max-width:760px; }
      #footer-social-wrapper { display:none !important; }
      @media (max-width:900px) { #product-catalogue .sg-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
      @media (max-width:560px) {
        #product-catalogue .sg-catalogue-head { display:block; }
        #product-catalogue .sg-grid { grid-template-columns:1fr 1fr; gap:8px; }
        #product-catalogue .sg-card-copy { padding:10px; }
        #product-catalogue .sg-card-title { font-size:13px; }
        #product-catalogue .sg-card-desc { font-size:10px; }
        #sg-history { grid-template-columns:1fr; gap:24px; }
      }
    `;
    document.head.appendChild(style);
  }

  function buildCatalogue() {
    const host = document.querySelector('#product-details');
    if (!host || !products.length || document.getElementById('product-catalogue')) return;
    const catalogue = el('section', '');
    catalogue.id = 'product-catalogue';
    const head = el('div', 'sg-catalogue-head');
    const titleWrap = el('div');
    titleWrap.append(el('div', 'sg-eyebrow', '7Golden · Ingredient range'));
    titleWrap.append(el('h2', 'sg-catalogue-title', 'Find the right form for your recipe'));
    head.append(titleWrap);
    const filters = el('div', 'sg-filters');
    const grid = el('div', 'sg-grid');
    const search = document.querySelector('#encryption-field-input');
    const state = { category: 'all', query: '' };

    function render() {
      filters.querySelectorAll('button').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.category === state.category));
      });
      grid.replaceChildren();
      const shown = products.filter(product => {
        const categoryMatch = state.category === 'all' || product.category === state.category;
        const haystack = [product.name, product.description, product.origin, ...(product.formats || [])].join(' ').toLowerCase();
        return categoryMatch && haystack.includes(state.query);
      });
      if (!shown.length) {
        grid.append(el('p', 'sg-empty', 'No ingredients match your search. Try another term.'));
        return;
      }
      shown.forEach(product => {
        const card = el('article', 'sg-card');
        const img = el('img', 'sg-card-image');
        image(img, product.image, product.name);
        img.onerror = () => { img.style.visibility = 'hidden'; };
        const copy = el('div', 'sg-card-copy');
        const category = categories.find(item => item.id === product.category);
        copy.append(el('div', 'sg-card-category', category ? category.name : product.category));
        copy.append(el('h3', 'sg-card-title', product.name));
        copy.append(el('p', 'sg-card-desc', product.description || 'Contact 7Golden for product details and availability.'));
        copy.append(el('div', 'sg-card-origin', product.origin ? 'Origin: ' + product.origin : 'Contact us for specifications'));
        card.append(img, copy);
        grid.append(card);
      });
    }

    [['all','All ingredients'], ...categories.map(category => [category.id, category.name])].forEach(([id,label]) => {
      const button = el('button', 'sg-filter', label);
      button.type = 'button';
      button.dataset.category = id;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => { state.category = id; render(); });
      filters.append(button);
    });
    if (search) {
      search.value = '';
      search.placeholder = 'Search hazelnut, pistachio, almond…';
      search.setAttribute('aria-label', 'Search 7Golden ingredients');
      search.addEventListener('input', () => { state.query = search.value.trim().toLowerCase(); render(); });
    }
    catalogue.append(head, filters, grid);
    host.append(catalogue);
    render();

    const categoryButtons = document.querySelectorAll('#product-hero-options .product-hero-option-item');
    categoryButtons.forEach(button => {
      const index = Number(button.dataset.id);
      const category = categories[index];
      if (!category) return;
      button.textContent = category.name;
      button.addEventListener('click', () => {
        state.category = category.id;
        render();
        const target = document.getElementById('product-catalogue');
        if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
      });
    });
    const productTitles = document.querySelectorAll('#product-details-title-wrapper span');
    productTitles.forEach((node,index) => { if (categories[index]) node.textContent = categories[index].name; });
    const productDescriptions = document.querySelectorAll('#product-details-desc-wrapper > div');
    productDescriptions.forEach((node,index) => { if (categories[index]) node.textContent = categories[index].description; });
    text('#product-hero-caption', 'Explore our ingredients');
  }

  function apply() {
    addStyles();

    text('#hero-top-tagline', 'Processed nuts. Made for food makers.');
    text('#hero-copy', 'From selected hazelnuts, pistachios and almonds to versatile food ingredients, 7Golden helps manufacturers find the right form for their recipes and production needs.');
    setHTML('#hero-card-header', 'From Qazvin,<br>to food manufacturers.');
    text('#hero-card-desc', 'Premium hazelnut, pistachio & almond ingredients.');
    const heroImage = document.querySelector('#hero-video-thumbnail');
    image(heroImage, 'https://raw.githubusercontent.com/nimarahimloo/7golden/main/public/banner/hero-nuts-bowl.webp', '7Golden premium nut ingredients');
    text('#hero-video-play', 'EXPLORE RANGE');

    setHTML('#ai-pre h2', 'A family legacy<br>in every ingredient.');
    const aiBody = document.querySelector('#ai-pre .body1');
    if (aiBody) aiBody.textContent = 'From Qazvin’s nut trade to carefully processed ingredients for food makers.';
    text('#ai-title', 'A heritage of quality');
    text('#ai-tagline', 'Family roots · Since 1956');
    text('#ai-instruction-text', 'Discover our story');
    const aiDesc = document.querySelector('#ai-desc');
    if (aiDesc) aiDesc.innerHTML = '<span>Processing began in 1998.</span><span> The company was registered in 2017.</span><span> Our roots go back to 1956.</span>';
    const disclaimer = document.querySelector('#ai-disclaimer');
    if (disclaimer) disclaimer.textContent = 'Qazvin · Iran';

    setHTML('#wearable-title', '<span>From whole nuts,</span> <span>to versatile ingredients</span>');
    const wearItems = document.querySelectorAll('.wearable-gallery-item');
    wearItems.forEach((item,index) => {
      const inner = item.querySelector('.wearable-gallery-item-inner');
      if (!inner) return;
      const src = gallery[index % gallery.length];
      inner.style.setProperty('background-image', 'url("' + src + '")', 'important');
      inner.style.setProperty('background-size', 'cover', 'important');
      inner.style.setProperty('background-position', 'center', 'important');
      item.dataset.sevenGoldenVisual = 'true';
    });
    text('#wearable-gallery-warning-message', 'Selected ingredients. Carefully processed. Ready for food production.');
    text('#wearable-gallery-bikini-prompt', 'Explore 7Golden’s product range');
    const magazineTitle = document.querySelector('#wearable-magazine-issue');
    if (magazineTitle) magazineTitle.textContent = '7GOLDEN · SINCE 1956';
    text('#wearable-magazine-idea-txt', 'NUT\nINGREDIENTS\nFOR INDUSTRY');
    text('#wearable-magazine-main-title-1', 'From Qazvin');
    text('#wearable-magazine-main-title-2', 'To the world');
    const magazineDesc = document.querySelector('#wearable-magazine-main-desc');
    if (magazineDesc) magazineDesc.textContent = 'Hazelnut, pistachio and almond ingredients for food makers.';
    text('#wearable-magazine-corner-title', '7GOLDEN');
    const cornerDesc = document.querySelector('#wearable-magazine-corner-desc');
    if (cornerDesc) cornerDesc.textContent = 'Processed nut ingredients from Qazvin, Iran.';

    text('#features-item-elevate .features-item-tagline', 'For food manufacturers');
    text('#features-item-elevate .features-item-desc', 'A versatile range of nut ingredients for confectionery, chocolate, bakery, ice cream and other food applications.');
    text('#features-item-elevate .features-item-title', 'Made for production');
    text('#features-item-temperature .features-item-tagline', 'Three core ingredient groups');
    text('#features-item-temperature .features-item-desc', 'Hazelnut, pistachio and almond products sourced and processed for different recipes and manufacturing requirements.');
    text('#features-item-temperature .features-item-title', 'Hazelnut · Pistachio · Almond');
    text('#features-item-curve .features-item-tagline', 'Multiple processed formats');
    text('#features-item-curve .features-item-desc', 'Explore kernels, slivers, flakes, powder, granules and pastes across the product range.');
    text('#features-item-curve .features-item-title', 'The right form for your recipe');

    text('#encryption-tagline', 'A product range built around your needs');
    setHTML('#encryption-title', 'Find your<br>ingredient');
    text('#encryption-desc', 'Search the 7Golden range by ingredient, format or application. Contact our team for current specifications and availability.');
    const searchInput = document.querySelector('#encryption-field-input');
    if (searchInput) { searchInput.value = ''; searchInput.placeholder = 'Search ingredients…'; searchInput.setAttribute('aria-label','Search ingredients'); }
    const flip = document.querySelector('#encryption-field-flip-btn');
    if (flip) flip.style.display = 'none';

    text('#grip-tagline', 'Focused on quality and consistency');
    setHTML('#grip-title', 'Nut processing<br>with experience');
    text('#grip-desc', 'With roots in Qazvin’s nut trade, 7Golden has developed its processing business around hazelnut, pistachio and almond ingredients for food producers.');
    const gripImage = document.querySelector('#grip-zoom-box__image');
    if (gripImage) gripImage.style.backgroundImage = 'url("' + gallery[1] + '")';
    text('#grip-zoom-box__content-label', 'Based in');
    text('#grip-zoom-box__content-coeff', 'QAZVIN');

    text('#sustainability-tagline', 'A family business');
    text('#sustainability-title-pre', 'Rooted in');
    text('#sustainability-title-main', 'Qazvin, Iran');
    text('#sustainability-desc', 'A family history in the nut trade, carried forward through modern processing of hazelnut, pistachio and almond ingredients.');
    const sustainabilityItems = document.querySelectorAll('.sustainability-item');
    const milestones = [
      ['Family roots', 'The family business has roots in Qazvin’s nut trade.', '1956'],
      ['Processing begins', 'Nut processing operations began in Qazvin.', '1998'],
      ['Company registration', '7Golden was formally registered as a company.', '2017']
    ];
    sustainabilityItems.forEach((item,index) => {
      const milestone = milestones[index];
      if (!milestone) return;
      const title = item.querySelector('.sustainability-item-title');
      const desc = item.querySelector('.sustainability-item-desc');
      const num = item.querySelector('.sustainability-item-num');
      if (title) title.textContent = milestone[0];
      if (desc) desc.textContent = milestone[1];
      if (num) num.textContent = milestone[2];
      const canvas = item.querySelector('canvas');
      if (canvas) canvas.style.display = 'none';
    });

    text('#testimonies-hero-title', 'A story built over generations');
    text('#testimonies-hero-desc', 'From a family history in Qazvin’s nut trade to a dedicated processing business serving food manufacturers.');
    const testimony = document.querySelector('#testimonies .section__inner');
    if (testimony && !document.getElementById('sg-history')) {
      const history = el('div');
      history.id = 'sg-history';
      [['1956','Roots in Qazvin’s nut trade'],['1998','Nut processing begins'],['2017','7Golden formally registered']].forEach(([year,label]) => {
        const item = el('div','sg-history-item');
        item.append(el('strong','',year),el('span','',label));
        history.append(item);
      });
      testimony.append(history);
    }

    const socialItems = document.querySelectorAll('.social-content-item');
    socialItems.forEach((item,index) => {
      const img = item.querySelector('img');
      if (img) image(img, gallery[index % gallery.length], '7Golden nut processing and ingredients');
      const source = item.querySelector('source');
      if (source) source.srcset = gallery[index % gallery.length];
    });
    const socialTitles = document.querySelectorAll('.social-content-item-title');
    const socialNotes = document.querySelectorAll('.social-content-item-note');
    const socialCopy = [
      ['From Qazvin','A family story in the nut trade.'],
      ['Carefully selected','Hazelnut, pistachio and almond.'],
      ['Processing experience','Since 1998.'],
      ['Made for food makers','Ingredients for real production.'],
      ['A growing range','Different forms for different applications.'],
      ['7Golden','Rooted in Qazvin, Iran.']
    ];
    socialTitles.forEach((node,index) => { if (socialCopy[index]) node.textContent = socialCopy[index][0]; });
    socialNotes.forEach((node,index) => { if (socialCopy[index]) node.textContent = socialCopy[index][1]; });
    text('#social-content-title', 'The 7Golden story');
    text('#social-content-desc', 'A family business with a long history in the nut trade and a focus on processed ingredients.');

    buildCatalogue();

    const openWeight = document.querySelector('#open-weight');
    if (openWeight) openWeight.style.display = 'none';

    setHTML('#footer-title', '<span>Looking for a reliable nut ingredient partner?</span><span>Let’s discuss what your production needs.</span>');
    const footerLink = document.querySelector('#footer-lusion-link');
    if (footerLink) { footerLink.href = 'https://7golden.co/'; footerLink.textContent = '7golden.co'; }
    const footerLove = document.querySelector('#footer-love');
    if (footerLove) footerLove.innerHTML = '<div>7Golden<br>From Qazvin, Iran</div><div>Hazelnut · Pistachio · Almond</div>';
    const newsletterForm = document.querySelector('#footer-newsletter-form');
    if (newsletterForm) newsletterForm.style.display = 'none';
    text('#footer-newsletter-label', 'Contact 7Golden');
    const footerContact = document.querySelector('#footer-contact-wrapper');
    if (footerContact) {
      footerContact.replaceChildren();
      const links = [
        ['Office: ' + (CONTACT.office || '+98 28 3323 4004'), 'tel:+982833234004'],
        ['Mobile / WhatsApp: ' + (CONTACT.mobile || '+98 912 182 3438'), 'https://wa.me/989121823438'],
        [CONTACT.email || 'info@7golden.co', 'mailto:' + (CONTACT.email || 'info@7golden.co')]
      ];
      links.forEach(([label,href]) => {
        const wrap = el('div','footer-item');
        wrap.append(el('div','footer-item-caption sub2',label));
        const link = el('a','footer-item-link is-flipper',href.startsWith('https:') ? 'WhatsApp' : label);
        link.href = href;
        if (href.startsWith('https:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
        wrap.append(link);
        footerContact.append(wrap);
      });
    }
    const caption = document.querySelector('#footer-caption');
    if (caption) caption.textContent = '7Golden is a nut-processing business based in Qazvin, Iran. Product specifications and availability may vary. Contact our team for current information.';
    text('#footer-email', 'Contact our team');
    const footerLogo = document.querySelector('#footer-lusion-logo');
    if (footerLogo) footerLogo.textContent = BRAND;

    document.title = '7Golden | Hazelnut, Pistachio & Almond Processing';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = '7Golden processes hazelnut, pistachio and almond ingredients in Qazvin, Iran, for confectionery, bakery and food manufacturers.';
  }

  function start() {
    apply();
    window.addEventListener('load', apply, { once:true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once:true });
  else start();
})();