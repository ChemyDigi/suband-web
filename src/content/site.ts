/**
 * Single source of truth for all site copy and data.
 * Everything marked PLACEHOLDER should be confirmed with the client.
 */

export const site = {
  name: "Sugathadasa Bandara & Sons",
  legalName: "Sugathadasa Bandara & Sons (Pvt) Ltd",
  shortName: "SB & Sons",
  tagline: "Crafting excellence, celebrating achievements.",
  description:
    "Designers and manufacturers of brass trophies, souvenirs, presentation plaques, acrylic awards, medals and anodised aluminium labels — Nugegoda, Sri Lanka.",
  established: "1968", // PLACEHOLDER — confirm founding year with client
  address: {
    line1: "No. 124, Old Kesbewa Road",
    line2: "Delkanda, Nugegoda",
    country: "Sri Lanka",
    mapsQuery: "No 124, Old Kesbewa Road, Delkanda, Nugegoda, Sri Lanka",
  },
  phone: "0112 810 468",
  phoneAlt: "0112 812 206",
  phoneIntl: "+94112810468",
  email: "suband@sltnet.lk",
  hours: [
    { days: "Monday – Friday", time: "8.30 am – 5.30 pm" },
    { days: "Saturday", time: "8.30 am – 1.00 pm" },
    { days: "Sunday & Poya", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/sugathadasabandara",
    instagram: "https://www.instagram.com/sugathadasa.bandara/",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collection", href: "/collection" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 50, suffix: "+", label: "Years of craft" },
  { value: 3, suffix: "", label: "Generations" },
  { value: 120, suffix: "k+", label: "Awards made" },
  { value: 900, suffix: "+", label: "Institutions served" },
];

export const clients = [
  "SLIIT",
  "Sri Lanka Cricket",
  "Royal College",
  "University of Colombo",
  "Dialog Axiata",
  "Ceylon Tea Board",
  "Sri Lanka Rugby",
  "Trinity College",
  "Hayleys",
  "John Keells",
]; // PLACEHOLDER — replace with confirmed client list

export const collection = [
  {
    slug: "brass-trophies",
    numeral: "01",
    title: "Brass Trophies",
    short: "Cast, turned and hand-polished cups.",
    body: "Our signature. Solid brass cups and figures cast in-house, turned on the lathe and polished by hand to a mirror finish that deepens with age.",
    image: "/images/Collection/Brass-trophies.jpg",
    alt: "Three brass trophy cups on dark wooden bases",
  },
  {
    slug: "plaques",
    numeral: "02",
    title: "Presentation Plaques",
    short: "Teak, mahogany and engraved brass.",
    body: "Hardwood plaques with engraved brass plates — the quiet, permanent form of recognition favoured by universities and boardrooms.",
    image: "/images/Collection/plaques.jpg",
    alt: "Teak presentation plaque with an engraved brass plate",
  },
  {
    slug: "acrylic-awards",
    numeral: "03",
    title: "Acrylic & Crystal Awards",
    short: "Light, cut and gold-accented.",
    body: "Modern forms in optically clear acrylic and crystal, laser-engraved and finished with brass or gold-leaf detailing.",
    image: "/images/acrylic.jpg",
    alt: "Clear acrylic award with a gold base",
  },
  {
    slug: "medals",
    numeral: "04",
    title: "Medals & Medallions",
    short: "Die-struck, enamelled, ribboned.",
    body: "Gold, silver and bronze medals die-struck to your artwork, with enamel fill and custom-woven ribbons for schools, federations and marathons.",
    image: "/images/Collection/Medals.jpg",
    alt: "Gold, silver and bronze medals with maroon ribbons on velvet",
  },
  {
    slug: "souvenirs",
    numeral: "05",
    title: "Souvenirs & Mementos",
    short: "Small objects, lasting memory.",
    body: "Corporate and ceremonial souvenirs — miniature cups, desk pieces, keepsakes — produced in brass, wood and anodised aluminium.",
    image: "/images/gallery.jpg",
    alt: "Gallery of brass awards on backlit shelves",
  },
  {
    slug: "labels",
    numeral: "06",
    title: "Anodised Aluminium Labels",
    short: "Nameplates, badges and signage.",
    body: "Precision-etched and anodised aluminium nameplates, name badges and machine labels, durable enough for a lifetime of handling.",
    image: "/images/Collection/Aluminum-labels.jpg",
    alt: "Engraving tool cutting into a brass plate",
  },
];

export const services = [
  {
    numeral: "01",
    title: "Custom Design",
    body: "Bring a sketch, a crest or a single sentence. Our designers draft the form, proportion and finish with you before anything is cast.",
    image: "/images/plaque.jpg",
  },
  {
    numeral: "02",
    title: "Casting & Turning",
    body: "Brass is poured, turned and polished in our own Nugegoda workshop — the same floor the business has stood on for three generations.",
    image: "/images/workshop.jpg",
  },
  {
    numeral: "03",
    title: "Engraving",
    body: "Hand, rotary and laser engraving on brass, acrylic, aluminium and hardwood. Crests, signatures and long citation texts rendered cleanly.",
    image: "/images/engraving.jpg",
  },
  {
    numeral: "04",
    title: "Bulk & Institutional Orders",
    body: "Prize-giving seasons, tournaments and corporate programmes: hundreds of matched pieces delivered on schedule, with per-item personalisation.",
    image: "/images/gallery.jpg",
  },
  {
    numeral: "05",
    title: "Restoration",
    body: "Heirloom cups re-polished, re-plated and re-engraved. Many of the trophies we restore were first made by us decades ago.",
    image: "/images/Collection/Brass-trophies.jpg",
  },
];

export const process = [
  {
    step: "01",
    title: "Brief",
    body: "Tell us the occasion, the recipients, the quantity and the date. We'll advise on form and material within a day.",
  },
  {
    step: "02",
    title: "Design",
    body: "A dimensioned drawing and finish sample for your approval. Nothing is cast until the proportions are right.",
  },
  {
    step: "03",
    title: "Make",
    body: "Casting, turning, assembly and engraving — all under one roof in Nugegoda, by craftsmen who have done this for decades.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Each piece inspected, polished and boxed. Collected from the workshop or delivered island-wide.",
  },
];

export const timeline = [
  // PLACEHOLDER — confirm dates and milestones with client
  {
    year: "1968",
    title: "A small workshop in Nugegoda",
    body: "Sugathadasa Bandara begins casting brass cups for local schools and sports clubs from a single-room workshop.",
  },
  {
    year: "1982",
    title: "The sons join",
    body: "The second generation enters the business. Hand engraving and plaque-making are added to the workshop's repertoire.",
  },
  {
    year: "1995",
    title: "Incorporation",
    body: "The family firm becomes Sugathadasa Bandara & Sons (Pvt) Ltd and moves to its present home at Old Kesbewa Road.",
  },
  {
    year: "2008",
    title: "National tournaments",
    body: "The workshop becomes a trusted supplier to national sporting bodies, universities and corporate award programmes.",
  },
  {
    year: "2019",
    title: "New materials, same hands",
    body: "Acrylic, crystal and laser engraving join brass and teak. The third generation begins its apprenticeship.",
  },
  {
    year: "Today",
    title: "Crafting excellence",
    body: "Over nine thousand followers, thousands of institutions served, and a workshop still polishing every cup by hand.",
  },
];

export const values = [
  {
    title: "Permanence",
    body: "A trophy is kept for a lifetime. We build for the shelf it will stand on in forty years, not the ceremony next week.",
  },
  {
    title: "Proportion",
    body: "The difference between a fine cup and an ordinary one is a few millimetres. We fuss over them.",
  },
  {
    title: "Honesty of material",
    body: "Solid brass, real teak, true crystal. Nothing plated to look like something it is not.",
  },
  {
    title: "Family",
    body: "Three generations on the same workshop floor. Our name is on the base of every piece.",
  },
];

export const testimonials = [
  {
    quote:
      "The custom teak and brass awards were exactly what the occasion deserved. Beautifully made, delivered on time.",
    name: "Awards Committee",
    org: "SLIIT Sri Lanka",
  },
  {
    quote:
      "We have ordered our prize-giving trophies from Sugathadasa Bandara for over twenty years. Nobody else comes close.",
    name: "Prefect of Games",
    org: "Leading Colombo School",
  },
  {
    quote:
      "They restored our 1960s championship cup to better than new. Remarkable craftsmanship.",
    name: "Club Secretary",
    org: "Sports Club, Colombo",
  },
]; // PLACEHOLDER — replace with real testimonials

export const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "There is none. We make single commemorative pieces as happily as a thousand matched medals.",
  },
  {
    q: "How long does an order take?",
    a: "Stock designs with engraving: 3–5 working days. Custom cast pieces: typically 3–4 weeks from approved drawing. Bulk institutional orders are scheduled in advance of prize-giving seasons.",
  },
  {
    q: "Can you reproduce our crest or logo?",
    a: "Yes. Send vector artwork where possible; our designers can redraw from a photograph if needed.",
  },
  {
    q: "Do you deliver outside Colombo?",
    a: "Island-wide delivery is available. Many clients also collect from the workshop in Nugegoda.",
  },
  {
    q: "Can you restore an old trophy?",
    a: "Re-polishing, re-plating, replacement of bases and lids, and re-engraving are all done in-house.",
  },
];
