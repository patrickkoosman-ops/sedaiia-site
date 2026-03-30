# UI-stack — Sedaiia Site

## Besluit

**Flowbite** ([flowbite.com](https://flowbite.com)) als basis voor UI-componenten, bovenop **Tailwind CSS**.

## Rationale (kort)

- Snelle, consistente marketing- en dashboard-achtige patronen zonder alles zelf te bouwen.
- Tailwind sluit aan bij schaalbaar theming (design tokens per merk/klant later).
- Past bij de pilot: Sedaiia-site als referentie voor CreativeLeads-achtige sites.

## Implementatie-notities (Next.js)

- Gebruik de officiële Flowbite-setup voor Tailwind v4 of v3 volgens hun docs (versie synchroon houden met Next).
- Optioneel: `flowbite-react` voor React-componenten — check compatibiliteit met de huidige React/Next-versie voordat je vastlegt.
- Houd merk-specifieke aanpassingen in een dunne laag (eigen wrapper-componenten of CSS-variabelen), niet overal losse Flowbite-classes copy-pasten.

## Review-moment

Na de eerste echte pagina-set: bevestigen of we bij Flowbite-react blijven of gedeeltelijk “vanilla” Flowbite + eigen componenten gebruiken voor kleinere bundles.
