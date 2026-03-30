# Sedaiia Site Deployment (Pilot)

Dit document is bedoeld als runbook voor het opnieuw inrichten van Vercel/Cloudflare/Supabase voor de `sedaiia-site` repository.

## Vercel - vaste instellingen

1. Project: kies GitHub repo `patrickkoosman-ops/sedaiia-site`
2. Framework: Next.js
3. Root Directory: `apps/web`
4. Build Command (standaard Next.js): `next build`
5. Output Directory (standaard Next.js): `/.next`
6. Node versie: gebruik de standaard die Vercel aanbiedt (of borg een versie in de toekomst zodra dat gewenst is)

Waarom: onze Next app staat in `apps/web`. Als je root op `/` zet, krijg je “No Next.js version detected”.

## Vercel - Environment Variables

Stel per omgeving in:

### Development / Preview / Production

Public (client-side) (begin met `NEXT_PUBLIC_`):
- `NEXT_PUBLIC_SUPABASE_URL` = `https://<supabase-project>.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `<anon-key>`

Server-side (alleen in Vercel server/runtime):
- `SUPABASE_SERVICE_ROLE_KEY` = `<service-role-key>`

### Optioneel (later toevoegen wanneer ingeschakeld)

- Stripe:
  - `STRIPE_SECRET_KEY`
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Resend:
  - `RESEND_API_KEY`

## Supabase - minimale checks

1. Gebruik het juiste Supabase project (geen dev/prod mix).
2. Verifieer RLS (Row Level Security) voor:
   - publieke reads (pagina content / treatments / FAQ)
   - authed writes (booking flows indien relevant)
3. Test minimaal 1 route die publiek is (leest werkt)
4. Test minimaal 1 server-actie die service role gebruikt (write/trigger werkt)

## Cloudflare - domein migratie

1. In Vercel: voeg domeinen toe aan het project
   - `sedaiia.com`
   - `www.sedaiia.com` (als die gebruikt wordt)
2. Cloudflare DNS:
   - laat DNS records naar het juiste Vercel target wijzen
   - check na wijziging:
     - `https://sedaiia.com`
     - `https://www.sedaiia.com`
     - redirect consistentie (www -> root of omgekeerd, zoals gewenst)

## Stripe / Resend - rollout moment

1. Eerst draaien met alleen de basis (content + navigatie + booking entrypoint)
2. Dan pas Stripe betalingen inschakelen
3. Daarna Resend e-mail flows (confirmations/reminders/review requests)

## Deploy stappen (kort)

1. Root Directory bevestigen: `apps/web`
2. Env vars invullen (minimaal Supabase)
3. Redeploy
4. Handmatige smoke test:
   - homepage laadt
   - content render via CMS/Supabase waar van toepassing
   - booking CTA aanwezig (en leidt naar de juiste flow)

