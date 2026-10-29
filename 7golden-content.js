(() => {
  const BRAND = '7Golden';

  const replaceText = () => {
    const root = document.body;
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (const node of nodes) {
      if (/oryzo/i.test(node.nodeValue)) {
        node.nodeValue = node.nodeValue.replace(/oryzo/gi, BRAND);
      }
    }

    document.title = BRAND;
  };

  const replaceHeroLogo = () => {
    const host = document.querySelector('#hero-logo-ref');
    if (!host) return;

    // The original ORYZO wordmark is an SVG path, not text, so text-node
    // replacement cannot change it. Keep the original DOM intact and replace
    // only the visible wordmark inside this dedicated logo host.
    const original = host.querySelector('svg');
    if (!original) return;
    if (host.querySelector('[data-7golden-logo="true"]')) return;

    const logo = document.createElement('div');
    logo.dataset['7goldenLogo'] = 'true';
    logo.textContent = BRAND;
    logo.setAttribute('aria-label', BRAND);

    const rect = original.getBoundingClientRect();
    const computed = getComputedStyle(original);
    logo.style.cssText = [
      'display:block',
      'width:100%',
      'height:100%',
      'font-family:inherit',
      'font-size:' + (rect.height > 0 ? Math.max(24, rect.height * 0.72) : 72) + 'px',
      'font-weight:700',
      'line-height:1',
      'letter-spacing:-0.06em',
      'white-space:nowrap',
      'color:' + computed.color,
      'text-align:center',
      'box-sizing:border-box'
    ].join(';');

    original.style.display = 'none';
    host.appendChild(logo);
  };

  const apply = () => {
    replaceText();
    replaceHeroLogo();
  };

  const start = () => {
    apply();
    setTimeout(apply, 250);
    setTimeout(apply, 750);
    setTimeout(apply, 1500);
    setTimeout(apply, 3000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  window.addEventListener('load', apply, { once: true });

  const observer = new MutationObserver(() => {
    replaceText();
    replaceHeroLogo();
  });

  const observe = () => {
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe, { once: true });
  } else {
    observe();
  }
})();
