import { HomeAboutIntro } from "@/components/home/HomeAboutIntro";
import { HomeBlogPreview } from "@/components/home/HomeBlogPreview";
import { HomeContactBlock } from "@/components/home/HomeContactBlock";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeLogoStrip } from "@/components/home/HomeLogoStrip";
import { getHomepageContent } from "@/lib/content/homepage";
import type { Metadata } from "next";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Home",
  description:
    "Digitale producten en webdesign voor de esthetische en creatieve industrie — Sedaiia (design, UX & development)."
};

export default async function HomePage() {
  const c = await getHomepageContent();

  const bookingHref =
    process.env.NEXT_PUBLIC_BOOKING_URL?.trim() && process.env.NEXT_PUBLIC_BOOKING_URL.trim().length > 0
      ? process.env.NEXT_PUBLIC_BOOKING_URL.trim()
      : "/contact";

  const primaryHref =
    c.cta_primary_href?.trim() && c.cta_primary_href.trim().length > 0 ? c.cta_primary_href.trim() : bookingHref;

  const primaryLabel =
    c.cta_primary_label?.trim() && c.cta_primary_label.trim().length > 0 ? c.cta_primary_label.trim() : "Consultatie";

  const secondaryHref =
    c.cta_secondary_href?.trim() && c.cta_secondary_href.trim().length > 0 ? c.cta_secondary_href.trim() : "/portfolio";

  const secondaryLabel =
    c.cta_secondary_label?.trim() && c.cta_secondary_label.trim().length > 0 ? c.cta_secondary_label.trim() : "Werk";

  const aboutLead =
    c.hero_lead?.trim() && c.hero_lead.trim().length > 0
      ? c.hero_lead.trim()
      : "Boutique webdesign studio voor de esthetische en creatieve industrie — high-end, persoonlijk en art directed.";

  return (
    <>
      <HomeHero
        primaryHref={primaryHref}
        primaryLabel={primaryLabel}
        secondaryHref={secondaryHref}
        secondaryLabel={secondaryLabel}
      />
      <HomeAboutIntro lead={aboutLead} />
      <HomeLogoStrip />
      <HomeBlogPreview />
      <HomeFaq />
      <HomeContactBlock />
    </>
  );
}
