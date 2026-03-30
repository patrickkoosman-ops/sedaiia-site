-- Homepage content voor sedaiia-site (CMS-light via Supabase).
-- Voer uit in Supabase SQL Editor of via CLI: supabase db push

create table if not exists public.site_homepage (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique default 'default',
  updated_at timestamptz not null default now(),
  hero_kicker text not null default 'Sedaiia',
  hero_title text not null,
  hero_lead text,
  cta_primary_label text,
  cta_primary_href text,
  cta_secondary_label text,
  cta_secondary_href text,
  card_title text,
  card_body text
);

comment on table public.site_homepage is 'Marketing homepage copy; één logische rij per slug (default = sedaiia.com).';

alter table public.site_homepage enable row level security;

drop policy if exists "site_homepage_select_public" on public.site_homepage;
create policy "site_homepage_select_public"
  on public.site_homepage
  for select
  to anon, authenticated
  using (true);

-- Optioneel: eerste rij (draait als migratie-owner, niet als anon)
insert into public.site_homepage (
  slug,
  hero_title,
  hero_lead,
  cta_primary_label,
  cta_primary_href,
  cta_secondary_label,
  cta_secondary_href,
  card_title,
  card_body
)
values (
  'default',
  'Designer & builder',
  'Websites voor esthetische en creative studios. Content beheer je in Supabase; deze site leest het hier.',
  'Contact',
  '#contact',
  'Flowbite React',
  'https://flowbite-react.com',
  'Stack',
  'Next.js (App Router), Tailwind CSS v4, flowbite-react — gekoppeld aan Supabase voor CMS-light.'
)
on conflict (slug) do nothing;
