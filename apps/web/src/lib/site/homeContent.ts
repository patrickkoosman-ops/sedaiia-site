export type HeroLinePart =
  | { kind: "text"; text: string; muted?: boolean }
  | { kind: "icon"; name: string };

/** Bewerk regels + icon-namen (Material Symbols) voor de statement-hero. */
export const HOME_HERO_LINES: HeroLinePart[][] = [
  [
    { kind: "text", text: "Digitale producten" },
    { kind: "icon", name: "auto_awesome" },
    { kind: "text", text: " webdesign studio", muted: true }
  ],
  [
    { kind: "icon", name: "diamond" },
    { kind: "text", text: " voor esthetiek & creative studios" }
  ],
  [
    { kind: "text", text: "die schalen" },
    { kind: "icon", name: "fiber_manual_record" },
    { kind: "text", text: " gedurfde ideeën", muted: true }
  ]
];

export const HOME_FEATURED_IMAGES = [
  {
    src: "https://picsum.photos/seed/sedaiia-hero-1/900/1200",
    alt: "Placeholder beeld 1 — vervangen door eigen art direction"
  },
  {
    src: "https://picsum.photos/seed/sedaiia-hero-2/900/1200",
    alt: "Placeholder beeld 2 — vervangen door eigen art direction"
  },
  {
    src: "https://picsum.photos/seed/sedaiia-hero-3/900/1200",
    alt: "Placeholder beeld 3 — vervangen door eigen art direction"
  }
] as const;

export const HOME_LOGO_STRIP_TITLE = "Startups & merken";

export const HOME_LOGO_LABELS = ["Studio A", "Kliniek B", "Brand C", "Atelier D", "Lab E", "Collectief F"] as const;

export type HomeBlogCard = {
  date: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  href: string;
};

export const HOME_BLOG_CARDS: HomeBlogCard[] = [
  {
    date: "15 mrt 2026",
    title: "In de studio: hoe we een merk laten opvallen zonder te schreeuwen",
    excerpt:
      "Van strategie tot launch — een compact beeld van samenwerking, iteraties en wat je wél en niet op de homepage zet.",
    imageSrc: "https://picsum.photos/seed/sedaiia-post1/900/700",
    href: "/over"
  },
  {
    date: "2 mrt 2026",
    title: "Van schets naar scherm: ideeën die blijven hangen",
    excerpt:
      "Waarom hiërarchie, tempo en beeldkeuze samen de conversie bepalen — vooral in esthetische en creative niches.",
    imageSrc: "https://picsum.photos/seed/sedaiia-post2/900/700",
    href: "/diensten"
  },
  {
    date: "18 feb 2026",
    title: "Snelheid, SEO en vertrouwen: drie pijlers voor groei",
    excerpt:
      "Techniek als onzichtbare kwaliteit: wat we standaard meenemen in elk project en hoe je dat merkt in metrics.",
    imageSrc: "https://picsum.photos/seed/sedaiia-post3/900/700",
    href: "/portfolio"
  }
];

export type HomeFaqItem = { question: string; answer: string };

export const HOME_FAQ: HomeFaqItem[] = [
  {
    question: "Wat valt er onder een typisch traject?",
    answer:
      "Strategie en structuur, vormgeving, bouw in Next.js, koppelingen (CMS, mail, analytics) en launch — afgestemd op jouw niche."
  },
  {
    question: "Hoe lang duurt een project gemiddeld?",
    answer:
      "Een eerste versie staat vaak binnen enkele weken; grotere trajecten met maatwerk en content nemen langer. We plannen vooraf met mijlpalen."
  },
  {
    question: "Bied je nazorg na livegang?",
    answer: "Ja: updates, kleine iteraties en advies op basis van data kunnen in een vast maandelijks blok of ad hoc."
  },
  {
    question: "Werken jullie voor één branche?",
    answer:
      "We focussen op esthetische klinieken (AestheticLeads) en creative studios (CreativeLeads) — dezelfde kwaliteit, andere strategie per sector."
  },
  {
    question: "Hoe verlopen betalingen?",
    answer: "Meestal een aanbetaling bij start en afronding bij oplevering; bij langere trajecten in termijnen volgens planning."
  }
];

export const HOME_ABOUT_PORTRAIT = {
  src: "https://picsum.photos/seed/sedaiia-portrait/800/1000",
  alt: "Portret placeholder — vervangen door team- of studiofoto"
} as const;
