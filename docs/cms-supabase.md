# CMS-light met Supabase (sedaiia-site)

We gebruiken **Supabase PostgreSQL** als bron voor bewerkbare content, **zonder** extra CMS-abonnement. De site leest met de **anon key** (publiek lezen via RLS).

## Aanpak

1. Tabellen in Supabase houden marketingteksten en later uitbreidbare blokken.
2. Next.js **Server Components** halen data op tijdens render (met `revalidate` voor frisse content).
3. Bewerken gebeurt in **Supabase Table Editor** of later een klein admin-paneel; schrijfrechten volgen apart (service role / auth policies).

## Eerste migratie

Bestand: [../supabase/migrations/00001_site_homepage.sql](../supabase/migrations/00001_site_homepage.sql)

**Handmatig:** plak de SQL in Supabase → SQL Editor → Run.

**Effect:**

- Tabel `public.site_homepage` met unieke `slug` (`default` = hoofdpagina).
- RLS: iedereen mag **select**; insert/update alleen via service role of strakkere policies die je later toevoegt.
- Een **seed-rij** wordt toegevoegd als die nog niet bestaat.

## Omgeving (npm/Next + Vercel integration)

Al aanwezig via het project:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Geen `SERVICE_ROLE` nodig voor alleen-lezen homepage.

## Volgende uitbreidingen (wanneer nodig)

- Extra tabellen: `site_pages`, `navigation_items`, `blog_posts`.
- [Payload CMS](https://payloadcms.com/) overwegen voor AestheticLeads multi-tenant; sedaiia-site kan bewust op Supabase-tables blijven voor eenvoud en kosten.
