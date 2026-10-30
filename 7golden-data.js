/* Structured 7Golden content and catalogue data.
 * Source: nimarahimloo/7golden seed catalogue and site settings.
 * Seed prices are placeholders; never render zero as a retail price.
 */
window.SEVENGOLDEN_DATA = Object.freeze({
  brand: "7Golden",
  locale: "en",
  company: {
    name: "7Golden",
    location: "Qazvin, Iran",
    story: "A family business with roots in the Qazvin nut trade dating to 1956. Nut processing began in 1998; the company was formally registered in 2017.",
    contacts: {
      office: "+98 28 3323 4004",
      mobile: "+98 912 182 3438",
      email: "info@7golden.co",
      website: "https://7golden.co/"
    }
  },
  applications: ["Chocolate", "Confectionery", "Bakery", "Ice cream", "Food manufacturing"],
  categories: [
    { id: "pistachio", name: "Pistachio", image: "/images/7golden/pistachio-category.webp", description: "Pistachio kernels, peeled kernels, slivers and powder for chocolate, confectionery, ice cream and other food applications." },
    { id: "hazelnut", name: "Hazelnut", image: "/images/7golden/hazelnut-category.webp", description: "Raw and roasted hazelnut kernels, paste, granules and powder for chocolate, spreads, bakery and confectionery." },
    { id: "almond", name: "Almond", image: "/images/7golden/almond-category.webp", description: "Almond kernels, slivers, flakes and powder for bakery, chocolate, confectionery and other food applications." }
  ],
  products: [
    { slug: "qazvin-peeled-pistachio", name: "Qazvin Peeled Pistachio Kernels", category: "pistachio", origin: "Qazvin", formats: ["Peeled kernels"], image: "/images/7golden/pistachio-category.webp", description: "Peeled Qazvin pistachio kernels for chocolate, confectionery, ice cream and other food products." },
    { slug: "qazvin-pistachio-kernels", name: "Qazvin Pistachio Kernels", category: "pistachio", origin: "Qazvin", formats: ["Kernels"], image: "/images/7golden/pistachio-category.webp", description: "Qazvin pistachio kernels for baklava, halva, chocolate, ice cream and related food products." },
    { slug: "raw-pistachio", name: "Raw Pistachio", category: "pistachio", origin: "Qazvin", formats: ["Whole nuts"], image: "/images/7golden/pistachio-category.webp", description: "Raw pistachios as a base ingredient for further processing into kernels, slivers and powder." },
    { slug: "kerman-pistachio-slices", name: "Kerman Pistachio Slivers", category: "pistachio", origin: "Kerman", formats: ["Slivers"], image: "/images/7golden/pistachio-category.webp", description: "Uniformly cut pistachio slivers for bakery, chocolate, confectionery and product decoration." },
    { slug: "pistachio-powder", name: "Pistachio Powder", category: "pistachio", origin: "Iran", formats: ["Powder"], image: "/images/7golden/pistachio-category.webp", description: "Pistachio powder for confectionery, ice cream, chocolate and related food products." },
    { slug: "qazvin-pistachio-slices", name: "Qazvin Pistachio Slivers", category: "pistachio", origin: "Qazvin", formats: ["Slivers"], image: "/images/7golden/pistachio-category.webp", description: "Qazvin pistachio slivers for ice cream, chocolate, confectionery and halva." },
    { slug: "pistachio-shells", name: "Pistachio Shells", category: "pistachio", origin: "Iran", formats: ["By-product"], image: "/images/7golden/pistachio-category.webp", description: "A by-product of pistachio processing for potential industrial and agricultural uses." },
    { slug: "openshell-hazelnut", name: "Open-shell Hazelnuts", category: "hazelnut", origin: "Qazvin", formats: ["Raw", "Roasted"], image: "/images/7golden/hazelnut-category.webp", description: "Naturally split hazelnuts supplied raw or roasted. Source regions listed in the catalogue include Oshnavieh, Alamut in Qazvin and Ashkorat." },
    { slug: "roasted-hazelnut-kernels", name: "Roasted Hazelnut Kernels", category: "hazelnut", origin: "Qazvin", formats: ["Roasted kernels"], image: "/images/7golden/hazelnut-category.webp", description: "Roasted hazelnut kernels for chocolate and confectionery production." },
    { slug: "raw-hazelnut-kernels", name: "Raw Hazelnut Kernels", category: "hazelnut", origin: "Qazvin", formats: ["Raw kernels"], image: "/images/7golden/hazelnut-category.webp", description: "Raw hazelnut kernels for chocolate, hazelnut spreads, bakery and other food products." },
    { slug: "hazelnut-paste", name: "Hazelnut Paste", category: "hazelnut", origin: "Iran", formats: ["Paste"], image: "/images/7golden/hazelnut-category.webp", description: "Hazelnut paste for chocolate, spreads and confectionery applications." },
    { slug: "hazelnut-powder", name: "Hazelnut Powder", category: "hazelnut", origin: "Iran", formats: ["Powder"], image: "/images/7golden/hazelnut-category.webp", description: "Ground hazelnut powder for cakes, pastries, chocolate and flour-based products." },
    { slug: "hazelnut-granules", name: "Hazelnut Granules", category: "hazelnut", origin: "Iran", formats: ["Granules"], image: "/images/7golden/hazelnut-category.webp", description: "Hazelnut granules for inclusion and decoration in chocolate, ice cream and confectionery." },
    { slug: "hazelnut-shells", name: "Hazelnut Shells", category: "hazelnut", origin: "Iran", formats: ["By-product"], image: "/images/7golden/hazelnut-category.webp", description: "A by-product of hazelnut processing for industrial uses." },
    { slug: "almond-flakes", name: "Almond Flakes", category: "almond", origin: "Iran", formats: ["Flakes"], image: "/images/7golden/almond-category.webp", description: "Almond flakes for chocolate, halva, sohan, ice cream and confectionery." },
    { slug: "almond-slices", name: "Almond Slivers", category: "almond", origin: "Iran", formats: ["Slivers"], image: "/images/7golden/almond-category.webp", description: "Almond slivers for decoration and industrial use in pastries, cakes and chocolate." },
    { slug: "almond-kernels", name: "Almond Kernels", category: "almond", origin: "Iran", formats: ["Kernels"], image: "/images/7golden/almond-category.webp", description: "Whole almond kernels for further processing into slivers, flakes and powder, or use in food manufacturing." },
    { slug: "peanut-kernels", name: "Peanut Kernels", category: "almond", origin: "Iran", formats: ["Kernels"], image: "/images/7golden/almond-category.webp", description: "Shelled peanut kernels for slicing, confectionery, chocolate and snack production." },
    { slug: "peanut-slices", name: "Peanut Slivers", category: "almond", origin: "Iran", formats: ["Slivers"], image: "/images/7golden/almond-category.webp", description: "Peanut slivers for confectionery, chocolate, cakes and sohan." },
    { slug: "almond-powder", name: "Almond Powder", category: "almond", origin: "Iran", formats: ["Powder"], image: "/images/7golden/almond-category.webp", description: "Fine almond powder for pastries, cakes and chocolate production." }
  ]
});
