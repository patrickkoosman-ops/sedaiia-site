import type { Metadata } from "next";
import { Card } from "flowbite-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Webdesign, UX, development en begeleiding voor klinieken en creative studios — Sedaiia."
};

export default function DienstenPage() {
  return (
    <main className="page-shell">
      <div className="page-intro">
        <p className="page-kicker">Wat ik doe</p>
        <h1 className="page-title">Diensten</h1>
        <p className="page-lead dark:text-gray-400">
          Van eerste idee tot live site: strak design, duidelijke structuur en techniek die je online
          presence serieus neemt — zonder agency-gedoe.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="surface-card rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Strategie &amp; UX</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Informatiearchitectuur, user flows en conversiegerichte pagina&apos;s — vooral consult- en
            boekingspaden voor klinieken, en heldere proposities voor studios.
          </p>
        </Card>
        <Card className="surface-card rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Design &amp; merk</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Visuele richting, typografie en componenten die passen bij jouw niche — rustig en
            professioneel voor esthetiek; expressiever waar het de studio past.
          </p>
        </Card>
        <Card className="surface-card rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Development</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Next.js, snelle hosting, toegankelijke UI (Flowbite/Tailwind), koppelingen met o.a.
            Supabase, betalingen en boeking waar nodig.
          </p>
        </Card>
      </div>

      <p className="mt-12 text-center text-gray-600 dark:text-gray-400">
        Zin om te sparren?{" "}
        <Link className="font-medium text-primary-600 hover:underline dark:text-primary-400" href="/contact">
          Neem contact op
        </Link>
        .
      </p>
    </main>
  );
}
