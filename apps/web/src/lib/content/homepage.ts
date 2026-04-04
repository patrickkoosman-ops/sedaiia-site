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
  hero_kicker: "",
  hero_title: "Sedaiia",
  hero_lead: "Boutique webdesign studio voor de esthetische en creatieve industrie.",
  cta_primary_label: "Consultatie",
  cta_primary_href: null,
  cta_secondary_label: "Werk",
  cta_secondary_href: "/portfolio",
  card_title: "Werkwijze",
  card_body:
    "Strategie, vormgeving en bouw in één lijn — inhoud beheer je in Supabase; de consultatie-CTA gebruikt NEXT_PUBLIC_BOOKING_URL als die gezet is."
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
