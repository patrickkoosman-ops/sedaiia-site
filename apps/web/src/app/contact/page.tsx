import type { Metadata } from "next";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Sedaiia — mail, korte intro, of plan een gesprek."
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="page-intro">
        <p className="page-kicker">Contact</p>
        <h1 className="page-title">Laten we iets maken</h1>
        <p className="page-lead dark:text-gray-400">
          Vertel kort waar je tegenaan loopt: nieuwe site, herschikking van je aanbod, of sparren over
          SEO en conversie. Ik reageer zo snel mogelijk.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Card className="surface-card rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">E-mail</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Stuur een bericht naar{" "}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-400"
              href="mailto:hallo@sedaiia.com"
            >
              hallo@sedaiia.com
            </a>
            . Liever met onderwerp &quot;Project&quot; of &quot;Sparren&quot; zodat ik direct context heb.
          </p>
          <div className="mt-6">
            <Button as="a" color="blue" href="mailto:hallo@sedaiia.com?subject=Contact%20via%20sedaiia.com">
              Mail openen
            </Button>
          </div>
        </Card>
        <Card className="surface-card rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Volgende stappen</h2>
          <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
            <li>Korte beschrijving van je organisatie en doel</li>
            <li>Of het om esthetiek of creative studio gaat (mag beide)</li>
            <li>Eventuele deadline of gewenste live-gang</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            Later kunnen we een boekingslink (bijv. agenda) of formulier koppelen — nu bewust
            eenvoudig gehouden.
          </p>
        </Card>
      </div>

      <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        <Link className="text-primary-600 hover:underline dark:text-primary-400" href="/diensten">
          Terug naar diensten
        </Link>
      </p>
    </main>
  );
}
