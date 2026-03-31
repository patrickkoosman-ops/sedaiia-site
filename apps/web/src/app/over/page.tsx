import type { Metadata } from "next";
import { Card } from "flowbite-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over Sedaiia",
  description:
    "One-man agency achter Sedaiia — design, UX en development voor esthetiek en creative studios."
};

export default function OverPage() {
  return (
    <main className="page-shell">
      <div className="page-intro">
        <p className="page-kicker">Over</p>
        <h1 className="page-title">One-man agency</h1>
        <p className="page-lead dark:text-gray-400">
          Sedaiia is mijn studio: ik combineer design, UX-denken en development om websites te bouwen
          die er goed uitzien, snel laden en écht iets opleveren — vooral daar waar concurrentie om
          zichtbaarheid en conversie draait.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="surface-card rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Twee niches</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Onder Sedaiia werk ik met twee duidelijke lijnen:{" "}
            <strong className="font-medium text-gray-800 dark:text-gray-200">AestheticLeads</strong>{" "}
            (esthetische klinieken — SEO, boekingen, vertrouwen) en{" "}
            <strong className="font-medium text-gray-800 dark:text-gray-200">CreativeLeads</strong>{" "}
            (studios — portfolio, identiteit, aanvragen). Zelfde kwaliteitslat, andere strategie per
            sector.
          </p>
        </Card>
        <Card className="surface-card rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Hoe ik werk</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Geen buzzwords, wel heldere stappen: inhoud en doelen scherp krijgen, dan ontwerp en
            bouw. Je praat direct met degene die ontwerpt en bouwt — kort lijntje, voorspelbare
            planning.
          </p>
        </Card>
      </div>

      <p className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <Link className="font-medium text-primary-600 hover:underline dark:text-primary-400" href="/portfolio">
          Bekijk portfolio
        </Link>
        <span className="mx-2 text-gray-400 dark:text-gray-500" aria-hidden>
          ·
        </span>
        <Link className="font-medium text-primary-600 hover:underline dark:text-primary-400" href="/contact">
          Contact
        </Link>
      </p>
    </main>
  );
}
