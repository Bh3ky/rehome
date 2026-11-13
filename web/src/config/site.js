export const SITE = {
  name: "ReHome",
  tagline: "Giving unwanted things a place that matters.",
  description:
    "ReHome rehomes unused art, decor, furniture and cultural pieces into youth and community hubs across Zimbabwe.",

  // wa.me format: country code + number, no "+" or spaces
  whatsappNumber: "263770000000",
  whatsappMessage: "Hi! I'd like to know more about ReHome.",

  cities: ["Harare", "Bulawayo", "Mutare"],

  copyrightYear: 2026,
  email: "hello@rehome.example",
  phoneDisplay: "+263 77 000 0000",
  location: "Harare, Zimbabwe",
};

export const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Transformations", href: "/transformations" },
  { label: "How It Works", href: "/#how-it-works" },
];

export const FOOTER_INVOLVED = [
  { label: "Rehome an item", href: "/offer" },
  { label: "Apply as a hub", href: "/for-hubs" },
  { label: "Cultural & safety guidelines", href: "/guidelines" },
];

export const whatsappLink = (message = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const REHOME_CTA = { label: "ReHome", href: "/offer" };

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Campaigns", href: "/campaigns", dropdown: "campaigns" },
  { label: "Transformations", href: "/transformations" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Hubs", href: "/for-hubs" },
];
