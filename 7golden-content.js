(() => {
  'use strict';

  const BRAND = '7Golden';
  const CONTACT = {
    office: '+98 28 3323 4004',
    mobile: '+98 912 182 3438',
    email: 'info@7golden.co'
  };

  // Content is sourced from the 7Golden company repository. Keep this layer
  // separate from Lusion's original runtime so the WebGL/GSAP experience stays intact.
  const copy = {
    '#hero-top-tagline': 'Processed Nuts. Made for Food Makers.',
    '#hero-copy': 'From selected hazelnuts, pistachios and almonds to versatile food ingredients, 7Golden helps manufacturers find the right form for their recipes and production needs.',
    '#hero-card-header': 'From Qazvin\nto food manufacturers.',
    '#ai-pre h2': 'More than\njust a nut.',
    '#ai-title': 'Ingredients, thoughtfully processed',
    '#ai-tagline': 'Hazelnut · Pistachio · Almond',
    '#ai-instruction-text': 'Explore our ingredients',
    '#wearable-title': 'From whole nuts,\nto versatile ingredients',
    '#features-item-elevate .features-item-tagline': 'A versatile ingredient range',
    '#features-item-elevate .features-item-desc': 'Choose from whole kernels and processed formats to suit different recipes, textures and manufacturing needs.',
    '#features-item-elevate .features-item-title': 'Made for food production',
    '#features-item-temperature .features-item-tagline': 'Options for different applications',
    '#features-item-temperature .features-item-desc': 'Hazelnut, pistachio and almond ingredients are available in different forms for confectionery, bakery and other food applications.',
    '#features-item-temperature .features-item-title': 'The right form for the recipe',
    '#features-item-curve .features-item-tagline': 'A range of useful formats',
    '#features-item-curve .features-item-desc': 'Explore kernels, slivers, flakes, powder, granules and pastes across our product range, depending on availability.',
    '#features-item-curve .features-item-title': 'More ways to use nuts',
    '#encryption-title': 'Product details, clearly presented',
    '#encryption-desc': 'Review product information and contact our team to discuss the format and quantity your business needs.',
    '#grip-title': 'Ingredients for your production needs',
    '#grip-desc': 'Our range includes hazelnut, pistachio and almond products in different processed forms for food manufacturers and confectionery businesses.',
    '#sustainability-title': 'Focused on nut processing',
    '#sustainability-desc': '7Golden processes hazelnut, pistachio and almond products in Qazvin, Iran, serving applications across confectionery, bakery and other food production.',
    '#social-content': 'For food makers\nIngredients for real production needs.',
    '#always_on': 'A family business\nRooted in Qazvin since 1956',
    '#3090': 'Processing experience\nNut processing since 1998',
    '#perfect': 'Officially established\nCompany registration in 2017',
    '#drop_test': 'Product formats\nKernels, slivers, flakes, powder, granules and pastes',
    '#legacy_support': 'Built on experience\nA family history in the nut trade',
    '#footer-title': 'Looking for a nut ingredient supplier?\nLet’s discuss what your production needs.',
    '#scroll-indicator__bar-text': '7Golden Ingredients'
  };

  const exactText = new Map([
    ['Made for mugs. Built for tables.', 'Processed Nuts. Made for Food Makers.'],
    ['Designed to lift, insulate, and grip in all the right ways. Oryzo makes the simplest moment feel considered.', copy['#hero-copy']],
    ['Designed', 'From Qazvin'],
    ['by Lusion,', 'to food'],
    ['the award-winning', 'manufacturers.'],
    ['design studio.', ''],
    ["The world's most", 'Processed hazelnut,'],
    [' unnecessarily', ' pistachio and'],
    [' sophisticated cork coaster.', ' almond ingredients.'],
    ['isn’t just ', 'More than '],
    ['a coaster.', 'just a nut.'],
    ['Oryzo isn’t just a ', '7Golden works with '],
    ['coaster. It’s the result ', 'hazelnut, pistachio '],
    ['of unprecedented AI* ', 'and almond ingredients '],
    ['breakthroughs.', 'for food production.'],
    ['Powered by AI', 'Ingredients, thoughtfully processed'],
    ['Oryzo-1', 'Hazelnut · Pistachio · Almond'],
    ['Try to hover hand', 'Explore our ingredients'],
    ['AI fills in the gaps.', 'Different forms for different needs.'],
    [' We said high five.', ' From kernels to pastes.'],
    [' It heard six.', ' Made for food applications.'],
    ['* Adobe', 'Product range:'],
    [' Illustrator', 'Hazelnut · Pistachio · Almond'],
    ["So portable,", 'From whole nuts,'],
    ["it's wearable", 'to versatile ingredients'],
    ['This stunt was performed by professionals.', 'Explore our range of processed nut ingredients.'],
    ['Do not attempt this at home.', 'Contact our team for product information.'],
    ['Hey ', 'Ask '],
    ['@', '7golden'],
    ['oryzo', '7golden'],
    [' can you put on a bikini?', ' about hazelnut, pistachio and almond products.'],
    ['Send', 'Contact'],
    ['ISSUE NO. 00124', '7GOLDEN · PRODUCT RANGE'],
    ['AI SLOP IDEAS', 'FOOD INGREDIENTS'],
    ['FOR THIS', 'FOR FOOD'],
    ['WINTER', 'PRODUCTION'],
    ['We Are So', 'Ingredients'],
    ['Cooked!', 'That Work'],
    ["Oryzo is taking everyone's jobs...", 'Hazelnut, pistachio and almond products'],
    ['and replacing them with AI!', 'for confectionery and food manufacturers.'],
    ['ORYZO-1', '7GOLDEN'],
    ['An open-weight model designed to be', 'Processed nut ingredients for'],
    ['lightweight and easy to carry.', 'food manufacturers and confectionery.'],
    ['Rise above mediocrity', 'Versatile nut ingredients'],
    ['With a precision-engineered lift (exactly one coaster thick), Oryzo doesn’t just hold your mug - it elevates it. Literally. Above every boring surface you’ve ever known.', 'Our range includes different forms of hazelnut, pistachio and almond ingredients to suit a variety of food applications.'],
    ['Elevate your coffee experience', 'Ingredients for food production'],
    ['Handles Extremes with Ease', 'Options for different applications'],
    ['From piping-hot mugs to ice-cold drinks - Oryzo stays perfectly stable. Your coffee table already tapped out three sips ago.', 'Processed nut ingredients can be used across confectionery, bakery, ice cream and other food applications. Confirm specifications and availability with our team.'],
    ['Thermodynamic stability', 'Versatile product formats'],
    ['Perfectly Round, Seriously', 'A range of useful formats'],
    ['Our engineers recalibrated its circumference with disturbing levels of attention to detail - just because we could.', 'Explore whole kernels and processed formats such as slivers, flakes, powder, granules and pastes, depending on the product.'],
    ['Now 37.9% More Circular', 'More ways to use nuts'],
    ['Constant lift via geometry', 'Processed nut ingredients'],
    ['Secure communications simplified', 'Product information made clear'],
    ['Write a message. Flip. Instantly secure - until someone flips it back. Genius.', 'Tell us which ingredient, format and quantity you are looking for. Our team can help discuss the next steps.'],
    ['Precision Grip, Zero Drama', 'Ingredients for food makers'],
    ['Micro-textured cork so grippy your drink files a restraining order against gravity. Spills? Consider them politely discouraged.', '7Golden focuses on hazelnut, pistachio and almond processing for food manufacturers and confectionery businesses.'],
    ['Friction coefficient (est):', 'Product groups:'],
    ['100% Plant-based', 'Nut ingredient range'],
    ['Pure cork sourced sustainably. Completely vegan - no cows were harmed, but it might be full of "bull"sh*t.', 'Explore hazelnut, pistachio and almond products in forms selected for different food production applications.'],
    ['Average age of first harvest', 'Company history'],
    ['Cork oaks are typically first harvested at around 25 years, once the bark is thick enough to remove safely.', 'The family business has roots in Qazvin’s nut trade dating to 1956. Processing began in 1998, and the company was formally registered in 2017.'],
    ['People all around the world love Oryzo', 'Explore the 7Golden product range'],
    ['Do not take our word for it, see what people say after living with Oryzo.', 'Browse our product groups or contact us to discuss your business requirements.'],
    ['Rating & Reviews', 'Product groups'],
    ['Custom reviews', 'Available product range'],
    ['ORYZO in use', 'Nut ingredients'],
    ['Runs on the edge', 'Family roots in Qazvin'],
    ['Refuses the cloud', 'Nut processing experience'],
    ['On-device.', 'For food production.'],
    ['Always On', 'Since 1956'],
    ['24/7 UPTIME. No power required', 'A family business with roots in the Qazvin nut trade.'],
    ['Runs on RTX 3090', 'Processing since 1998'],
    ['No More OOM on any consumer GPUs', 'Nut processing began in Qazvin in 1998.'],
    ['Perfect By Design', 'Officially registered in 2017'],
    ['Drop-Tested', 'Product formats'],
    ['Test conditions: hard surface', 'Product forms vary by ingredient and availability.'],
    ['DATE: 02/29/2026', 'HAZELNUT · PISTACHIO · ALMOND'],
    ['Damage: The Floor ;)', 'Contact us for current specifications.'],
    ['Legacy Support', 'Experience across generations'],
    ['Supporting backward compatibility since the 5th millennium BCE', 'From a family nut-trading history to modern nut processing.'],
    ['Choose you own', 'Explore our ingredients'],
    ['ORYZO', '7Golden'],
    ['ORYZO Pro', 'Pistachio'],
    ['ORYZO Pro Max', 'Almond'],
    ['The original. Refined until it feels inevitable. Lifts just enough, grips just right, and quietly disappears into your day like it was never there.', 'Explore hazelnut, pistachio and almond ingredients in different processed forms. Contact us for current product specifications and availability.'],
    ['Single layer lift', 'Processed product formats'],
    ['Our SOTA Open Weight model', 'Our nut ingredient range'],
    ['Paper', 'Product information'],
    ['MODEL (.OBJ)', 'PRODUCTS'],
    ['Code coming soon', 'Contact us for details'],
    ['We caught your attention with a non-existent product. If we can sell a coaster, imagine what we can do for your brand.', 'Need hazelnut, pistachio or almond ingredients for your production? Talk to 7Golden about product formats, availability and your requirements.'],
    ['lusion.co', '7golden.co'],
    ['Built by Lusion with love', '7Golden · Nut processing in Qazvin, Iran'],
    ["Subscribe to Lusion's Newsletter:", 'Contact 7Golden:'],
    ['New Business:', 'Sales enquiries:'],
    ['hello@lusion.co', CONTACT.email],
    ['general enquires:', 'Contact:'],
    ['Terms & Conditions', 'Product information'],
    ['Privacy Policy', 'Contact details'],
    ['Scroll to continue', 'Scroll to explore']
  ]);

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && el.children.length === 0 && el.textContent !== value) el.textContent = value;
  }

  function replaceTextNodes() {
    if (!document.body) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (const node of nodes) {
      const before = node.nodeValue;
      let after = before;
      if (exactText.has(after.trim())) {
        const leading = after.match(/^\s*/)?.[0] || '';
        const trailing = after.match(/\s*$/)?.[0] || '';
        after = leading + exactText.get(after.trim()) + trailing;
      }
      after = after
        .replace(/oryzo/gi, BRAND)
        .replace(/Lusion/gi, BRAND)
        .replace(/cork coaster/gi, 'nut ingredients')
        .replace(/coaster/gi, 'nut ingredient')
        .replace(/Powered by AI/gi, 'Processed for food production')
        .replace(/open-weight model/gi, 'nut ingredient range');
      if (after !== before) node.nodeValue = after;
    }
  }

  function replaceHeroLogo() {
    const host = document.querySelector('#hero-logo-ref');
    if (!host) return;
    const original = host.querySelector('svg');
    if (!original || host.querySelector('[data-7golden-logo="true"]')) return;

    const logo = document.createElement('div');
    logo.setAttribute('data-7golden-logo', 'true');
    logo.textContent = BRAND;
    logo.setAttribute('aria-label', BRAND);
    const rect = original.getBoundingClientRect();
    const style = getComputedStyle(original);
    logo.style.cssText = [
      'display:flex', 'align-items:center', 'justify-content:center',
      'width:100%', 'height:100%', 'font-family:inherit',
      'font-size:' + (rect.height > 0 ? Math.max(24, rect.height * 0.72) : 72) + 'px',
      'font-weight:700', 'line-height:1', 'letter-spacing:-0.06em',
      'white-space:nowrap', 'color:' + style.color, 'box-sizing:border-box'
    ].join(';');
    original.style.display = 'none';
    host.appendChild(logo);
  }

  function updateMetadata() {
    document.title = '7Golden | Processed Hazelnut, Pistachio & Almond Ingredients';
    const meta = {
      description: '7Golden processes hazelnut, pistachio and almond ingredients in Qazvin, Iran, for confectionery, bakery and food manufacturers. Family roots date to 1956; processing began in 1998.',
      'og:title': '7Golden | Nut Ingredients for Food Manufacturers',
      'og:description': 'Processed hazelnut, pistachio and almond ingredients for food production.',
      'og:site_name': '7Golden',
      'twitter:title': '7Golden | Nut Ingredients for Food Manufacturers',
      'twitter:description': 'Processed hazelnut, pistachio and almond ingredients for food production.'
    };
    for (const [key, content] of Object.entries(meta)) {
      const selector = key === 'description' ? 'meta[name="description"]' : 'meta[property="' + key + '"], meta[name="' + key + '"]';
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    }
    const appTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (appTitle) appTitle.setAttribute('content', BRAND);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && /oryzo\.ai/i.test(canonical.href)) canonical.remove();
  }

  function updateNavigationAndContact() {
    const headerText = document.querySelector('#site-header');
    if (headerText) {
      const walker = document.createTreeWalker(headerText, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const node of nodes) {
        const v = node.nodeValue;
        const next = v.replace(/\\bIntro\\b/g, 'Our story')
          .replace(/\\bFeatures\\b/g, 'Ingredients')
          .replace(/\\bProduct\\b/g, 'Products')
          .replace(/Contact/g, 'Contact')
          .replace(/hello@lusion\.co/gi, CONTACT.email)
          .replace(/general enquires:/gi, 'Sales enquiries:');
        if (next !== v) node.nodeValue = next;
      }
    }

    for (const link of document.querySelectorAll('a[href*="lusion.co"], a[href^="mailto:hello@"]')) {
      link.href = link.href.startsWith('mailto:') ? 'mailto:' + CONTACT.email : 'https://7golden.co/';
    }
  }

  function apply() {
    replaceTextNodes();
    for (const [selector, value] of Object.entries(copy)) setText(selector, value);
    // Preserve deliberate line breaks in selected display headings.
    const heroHeading = document.querySelector('#hero-card-header');
    if (heroHeading && heroHeading.innerHTML !== 'From Qazvin,<br>to food manufacturers.') heroHeading.innerHTML = 'From Qazvin,<br>to food manufacturers.';
    const aiPre = document.querySelector('#ai-pre h2');
    if (aiPre && aiPre.innerHTML !== 'More than<br>just a nut.') aiPre.innerHTML = 'More than<br>just a nut.';
    const wearableHeading = document.querySelector('#wearable-title');
    if (wearableHeading && !/From whole nuts/.test(wearableHeading.textContent)) wearableHeading.innerHTML = '<span>From whole nuts,</span> <span>to versatile ingredients</span>';
    const footerTitle = document.querySelector('#footer-title');
    if (footerTitle && footerTitle.textContent !== 'Looking for a nut ingredient supplier? Let’s discuss what your production needs.') footerTitle.textContent = 'Looking for a nut ingredient supplier? Let’s discuss what your production needs.';
    const productOptions = document.querySelectorAll('#product-hero-options > *');
    if (productOptions.length >= 3) {
      ['Hazelnut', 'Pistachio', 'Almond'].forEach((label, index) => {
        if (productOptions[index].textContent !== label) productOptions[index].textContent = label;
      });
    }
    updateMetadata();
    updateNavigationAndContact();
    replaceHeroLogo();
  }

  function start() {
    apply();
    [250, 750, 1500, 3000].forEach((ms) => setTimeout(apply, ms));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
  window.addEventListener('load', apply, { once: true });

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      apply();
    });
  });
  const observe = () => {
    if (document.body) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe, { once: true });
  } else {
    observe();
  }
})();