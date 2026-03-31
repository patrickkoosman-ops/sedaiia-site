/** Placeholder portfolio-items — later via Supabase of CMS. */
export type PortfolioItem = {
  slug: string;
  title: string;
  niche: string;
  excerpt: string;
  tags: string[];
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: "project-teaser-1",
    title: "Project in voorbereiding",
    niche: "Esthetische sector",
    excerpt:
      "Eerste showcase-case volgt zodra je live klantwerk wilt tonen. Structuur en kaarten staan al klaar.",
    tags: ["Next.js", "Conversie", "SEO"]
  },
  {
    slug: "project-teaser-2",
    title: "Creative studio — teaser",
    niche: "Creative sector",
    excerpt:
      "Tweede slot voor portfolio-werk: gelinkt design, snelle site, duidelijke boekingsflow.",
    tags: ["Portfolio", "Branding", "UX"]
  },
  {
    slug: "sedaiia-site",
    title: "sedaiia.com",
    niche: "Eigen site",
    excerpt: "Deze site: agency- en portfolio-opzet met Next.js, Flowbite en Supabase voor content.",
    tags: ["One-man agency", "Stack"]
  }
];
