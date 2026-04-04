-- Optioneel: bestaande rij bijwerken naar boutique-hero copy (slug default).
-- Alleen draaien als je eerder al seed-data had met oude teksten.

update public.site_homepage
set
  hero_kicker = '',
  hero_title = 'Sedaiia',
  hero_lead = 'Boutique webdesign studio voor de esthetische en creatieve industrie.',
  cta_primary_label = 'Consultatie',
  cta_primary_href = null,
  cta_secondary_label = 'Werk',
  cta_secondary_href = '/portfolio',
  card_title = 'Werkwijze',
  card_body = 'Strategie, vormgeving en bouw in één lijn — inhoud beheer je in Supabase; de consultatie-CTA gebruikt NEXT_PUBLIC_BOOKING_URL als die gezet is.',
  updated_at = now()
where slug = 'default';
