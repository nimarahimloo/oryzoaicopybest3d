(() => {
  const replacements = [
    ['Made for mugs. Built for tables.', 'Premium Iranian Nuts & Dried Fruits'],
    ['Designed to lift, insulate, and grip in all the right ways. Oryzo makes the simplest moment feel considered.', 'Carefully selected pistachios, hazelnuts, and almonds, bringing the natural richness of Iran to every table.'],
    ['Designed<br> by Lusion,<br> the award-winning<br> design studio.', 'Selected<br> with care.<br> Rooted in Iran.<br> Made for quality.'],
    ["<span>The world's most</span><span> unnecessarily</span><span> sophisticated cork coaster.</span>", '<span>Premium Iranian</span><span> nuts and</span><span> dried fruits.</span>'],
    ['isn’t just <br>a coaster.', 'isn’t just <br>a nut.'],
    ['<span>Oryzo isn’t just a </span><span>coaster. It’s the result </span><span>of unprecedented AI* </span><span>breakthroughs.</span>', '<span>7Golden brings together </span><span>careful selection, authentic </span><span>Iranian products, and </span><span>consistent quality.</span>'],
    ['Powered by AI<sup>*</sup>', 'Naturally Premium'],
    ['Oryzo-1', '7Golden'],
    ['Try to hover hand', 'Explore our products'],
    ['<span>AI fills in the gaps.</span><span> We said high five.</span><span> It heard six.</span>', '<span>From pistachios to hazelnuts.</span><span> From almonds to dried fruits.</span><span> Quality starts with selection.</span>'],
    ['<span>* Adobe</span><span> Illustrator</span>', '<span>Quality</span><span> starts at selection.</span>'],
    ["<span>So portable,</span> <span>it's wearable</span>", '<span>Rich in flavor,</span> <span>ready to share</span>'],
    ['This stunt was performed by professionals.<br>Do not attempt this at home.', 'Carefully selected products.<br>Enjoy naturally.'],
    ['Hey <span><span>@</span>oryzo</span>, can you put on a bikini?', 'Which 7Golden product would you choose?'],
    ['ISSUE NO. 00124', '7GOLDEN COLLECTION'],
    ['AI SLOP IDEAS<br>FOR THIS<br>WINTER', 'PREMIUM NUTS<br>FROM<br>IRAN'],
    ['We Are So', 'Naturally'],
    ['Cooked!', 'Premium!'],
    ["<span>Oryzo is taking everyone's jobs...</span><span>and replacing them with AI!</span>", '<span>Selected for authentic taste...</span><span>and made to be shared.</span>'],
    ['Rise above mediocrity', 'Selected with Care'],
    ["With a precision-engineered lift (exactly one coaster thick), Oryzo doesn’t just hold your mug - it elevates it. Literally. Above every boring surface you’ve ever known.", 'We carefully select premium nuts and dried fruits with attention to quality, freshness, and consistent taste.'],
    ['Elevate your coffee experience', 'Discover 7Golden quality'],
    ['Handles Extremes with Ease', 'Natural Richness'],
    ['Thermodynamic stability', 'Authentic Taste'],
    ['Perfectly Round, Seriously', 'Rooted in Iran'],
    ['Now 37.9% More Circular', 'Quality You Can Taste'],
    ['Secure communications simplified', 'Carefully Selected'],
    ['Smart flip <br>encryption', 'Quality from <br>selection'],
    ['Precision Grip, Zero Drama', 'Natural Quality, No Drama'],
    ['Grip-locked Antislip<br>technology', 'Carefully Selected<br>for Quality'],
    ['100% Plant-based', 'Naturally Selected'],
    ['Vegan-friendly', 'Premium Products'],
    ['sustainability', 'Natural Richness'],
    ['People all around the world love Oryzo', 'Discover the 7Golden Collection'],
    ['Do not take our word for it, see what people say after living with Oryzo.', 'Explore premium Iranian nuts and dried fruits selected with care.'],
    ['Rating & Reviews', '7Golden Quality'],
    ['ORYZO in use', '7Golden in every bite'],
    ['Choose you own', 'Choose your favorite'],
    ['ORYZO Pro', 'Hazelnut'],
    ['ORYZO Pro Max', 'Almond'],
    ['Single layer lift', 'Pistachio'],
    ['Double stack lift', 'Hazelnut'],
    ['Triple stack lift', 'Almond']
  ];

  const apply = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      let value = node.nodeValue;
      for (const [from, to] of replacements) value = value.replace(from, to);
      if (value !== node.nodeValue) node.nodeValue = value;
    }
    document.title = '7Golden | Premium Iranian Nuts & Dried Fruits';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = 'Premium Iranian nuts and dried fruits, carefully selected for quality, freshness, and authentic taste.';
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
})();
