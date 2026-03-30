import { getPublicSupabase } from "@/lib/supabase/public";

export type SiteHomepageRow = {
  hero_kicker: string;
  hero_title: string;
  hero_lead: string | null;
  cta_primary_label: string | null;
  cta_primary_href: string | null;
  cta_secondary_label: string | null;
  cta_secondary_href: string | null;
  card_title: string | null;
  card_body: string | null;
};

const FALLBACK: SiteHomepageRow = {
  hero_kicker: "Sedaiia",
  hero_title: "Designer & builder",
  hero_lead:
    "Websites voor esthetische en creative studios. Basis met Tailwind en Flowbite staat; inhoud uit Supabase volgt zodra de migratie is gedraaid.",
  cta_primary_label: "Contact",
  cta_primary_href: "#contact",
  cta_secondary_label: "Flowbite React",
  cta_secondary_href: "https://flowbite-react.com",
  card_title: "Stack",
  card_body:
    "Next.js (App Router), Tailwind CSS v4, flowbite-react — gekoppeld aan Supabase voor CMS-light."
};

export async function getHomepageContent(): Promise<SiteHomepageRow> {
  const supabase = getPublicSupabase();
  if (!supabase) {
    return FALLBACK;
  }

  const { data, error } = await supabase
    .from("site_homepage")
    .select(
      "hero_kicker, hero_title, hero_lead, cta_primary_label, cta_primary_href, cta_secondary_label, cta_secondary_href, card_title, card_body"
    )
    .eq("slug", "default")
    .maybeSingle();

  if (error) {
    console.warn("[cms] site_homepage:", error.message);
    return FALLBACK;
  }

  if (!data) {
    return FALLBACK;
  }

  return data as SiteHomepageRow;
}
