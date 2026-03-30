# UI-stack — Sedaiia Site

## Besluit

**Flowbite** ([flowbite.com](https://flowbite.com)) als basis voor UI-componenten, bovenop **Tailwind CSS**.

## Rationale (kort)

- Snelle, consistente marketing- en dashboard-achtige patronen zonder alles zelf te bouwen.
- Tailwind sluit aan bij schaalbaar theming (design tokens per merk/klant later).
- Past bij de pilot: Sedaiia-site als referentie voor CreativeLeads-achtige sites.

## Implementatie-notities (Next.js)

**Status:** geïmplementeerd in `apps/web` — Tailwind CSS v4 (`@tailwindcss/postcss`), `flowbite-react` met officiële Next-plugin (`withFlowbiteReact`), `postcss.config.mjs`, `globals.css` met `@plugin "flowbite-react/plugin/tailwindcss"` en `@source` naar `.flowbite-react/class-list.json`. Root layout gebruikt `ThemeModeScript` (default light) en `ThemeInit` uit `.flowbite-react/init`.

- Houd merk-specifieke aanpassingen in een dunne laag (eigen wrappers of thema via `createTheme` / `ThemeProvider`).
- Externe links met `Button`: gebruik `as="a"` zodat `target` en `rel` type-safe blijven.

## Review-moment

Na de eerste echte pagina-set: bevestigen of we bij Flowbite-react blijven of gedeeltelijk “vanilla” Flowbite + eigen componenten gebruiken voor kleinere bundles.
