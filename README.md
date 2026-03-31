# Sedaiia Site

Officiële Sedaiia-website (pilot), technisch opgebouwd als CreativeLeads-achtige stack: Next.js in `apps/web`, gedeelde modules onder `packages/`, documentatie onder `docs/`.

## Deploy

Zie [DEPLOYMENT.md](./DEPLOYMENT.md) voor Vercel-root (`apps/web`), env-vars en domein.

## CMS (Supabase)

Zie [docs/cms-supabase.md](./docs/cms-supabase.md) — eerste stap: SQL-migratie `supabase/migrations/00001_site_homepage.sql` in je Supabase-project draaien.

**Payload CMS** (planning voor de AestheticLeads-engine) staat vast in `sedaiia-hq`, niet in deze repo; zie korte uitleg in `docs/cms-supabase.md`.

## Structuur

- `apps/web` — Next.js (App Router), productie-app voor Vercel
- `packages/` — herbruikbare modules (ui, core, config)
- `docs/` — scope en beslissingen (o.a. [UI-stack](./docs/ui-stack.md): Flowbite + Tailwind)
- Brand system: [docs/brand-identity.md](./docs/brand-identity.md)

### Publieke pagina’s (agency + portfolio)

- `/` — Home (hero o.a. uit Supabase `site_homepage`)
- `/diensten`
- `/portfolio` — kaarten uit `src/lib/content/portfolio.ts` (later CMS)
- `/over`
- `/contact` — o.a. `hallo@sedaiia.com` (pas aan naar jouw mailbox)
