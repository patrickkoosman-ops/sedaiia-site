import { PORTFOLIO_ITEMS } from "@/lib/content/portfolio";
import type { Metadata } from "next";
import { Badge, Card } from "flowbite-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Geselecteerd werk en cases — Sedaiia (webdesign en development)."
};

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <div className="page-intro">
        <p className="page-kicker">Werk</p>
        <h1 className="font-editorial mt-2 text-5xl tracking-tight md:text-6xl">Portfolio</h1>
        <p className="page-lead dark:text-gray-400">
          Een overzicht van projecten en propositions. Placeholders kan je vervangen door echte cases
          zodra je die wilt tonen — de structuur is al klaar voor uitbreiding (bijv. detailpagina&apos;s).
        </p>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_ITEMS.map((item) => (
          <li key={item.slug}>
            <Card className="surface-card h-full rounded-2xl shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                {item.niche}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h2>
              <p className="mt-2 flex-1 text-gray-600 dark:text-gray-400">{item.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} color="dark">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-gray-600 dark:text-gray-400">
        Nieuw project op de planning?{" "}
        <Link className="font-medium text-primary-600 hover:underline dark:text-primary-400" href="/contact">
          Laten we praten
        </Link>
        .
      </p>
    </main>
  );
}
