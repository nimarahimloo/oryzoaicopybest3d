(() => {
  const replaceBrand = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    for (const node of nodes) {
      if (/oryzo/i.test(node.nodeValue)) {
        node.nodeValue = node.nodeValue.replace(/oryzo/gi, '7Golden');
      }
    }

    document.title = '7Golden';
  };

  const start = () => {
    replaceBrand();
    setTimeout(replaceBrand, 500);
    setTimeout(replaceBrand, 1500);
    setTimeout(replaceBrand, 3000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  window.addEventListener('load', replaceBrand, { once: true });

  const observer = new MutationObserver(() => replaceBrand());
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
