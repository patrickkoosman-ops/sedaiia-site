# Brand Identity (boutique v2)

High-end en art directed, maar warm en persoonlijk — geen kille SaaS-esthetiek.

## Kern-tokens

- Primary: `#003dff`
- Surface: `#f7f5f2` — CSS `--brand-surface` (gelijk aan `designTokens.color.surface`); hero-basis blijft `--hero-base` (#faf7f4)
- Headings: donkergrijs (`--text-heading`), geen puur zwart
- Body: `--text-body`
- Border: zacht warm (`--border-soft`)
- **Geen dark mode** (alleen licht thema)

## Typografie

- Display / grote titels: **Gloock** 400 (`.font-editorial` / `--font-display`)
- Body: **Work Sans** (`--font-sans`)
- UI-labels / kleine koppen: compacter sans via Work Sans; statement-headlines blijven display

Technische bron:

- `apps/web/src/lib/site/designTokens.ts`
- `apps/web/src/app/globals.css` + `layout.tsx` (Google fonts + Material Symbols link)

## Beeld & beweging

- Hero: abstracte orb / gradient / noise (geen stock mensenfoto’s)
- Geen drukke animaties; subtiele hover op o.a. portfolio-tegels
- Iconen: **Material Symbols Outlined** (licht gewicht), minimalistisch

## Toepassing

- Hero: `HomeHero` + copy uit Supabase `site_homepage`
- Primaire CTA “Consultatie”: `NEXT_PUBLIC_BOOKING_URL` (fallback `/contact`)
- Secundaire CTA “Werk”: `/portfolio` (override via CMS mogelijk)
- Cards: `.surface-card rounded-2xl shadow-sm`
