import { getHomepageContent } from "@/lib/content/homepage";
import type { Metadata } from "next";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sedaiia — design, UX en webdevelopment voor esthetische klinieken en creative studios (one-man agency)."
};

export default async function HomePage() {
  const c = await getHomepageContent();

  return (
    <>
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white dark:border-gray-800 dark:from-gray-900 dark:to-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{c.hero_kicker}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{c.hero_title}</h1>
            {c.hero_lead ? (
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 md:text-xl">{c.hero_lead}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {c.cta_primary_label && c.cta_primary_href ? (
                <Button as="a" color="blue" href={c.cta_primary_href} size="lg">
                  {c.cta_primary_label}
                </Button>
              ) : null}
              <Button as="a" color="light" href="/portfolio" size="lg">
                Bekijk portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Waar ik voor sta
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          Eén aanspreekpunt voor structuur, vormgeving en techniek — schaalbaar genoeg voor serieuze
          klanten, persoonlijk genoeg voor echte samenwerking.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design &amp; UX</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Heldere hiërarchie, rustige esthetiek of studio-eigen karakter — afgestemd op jouw
              doelgroep.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Development</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Next.js, snelle hosting, toegankelijke UI. Koppelingen met data, mail en betalingen waar
              het nodig is.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Twee niches</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              <Link className="text-primary-600 hover:underline dark:text-primary-400" href="/over">
                AestheticLeads &amp; CreativeLeads
              </Link>{" "}
              — dezelfde kwaliteit, verschillende strategie per sector.
            </p>
          </Card>
        </div>
      </section>

      {c.card_title ? (
        <section className="border-t border-gray-100 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="mx-auto max-w-6xl px-4">
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{c.card_title}</h2>
              {c.card_body ? (
                <p className="mt-2 text-gray-600 dark:text-gray-400">{c.card_body}</p>
              ) : null}
            </Card>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Klaar om te starten?</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
          Vertel wat je nodig hebt — van eerste site tot doorontwikkeling van je online aanwezigheid.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button as="a" color="blue" href="/contact" size="lg">
            Neem contact op
          </Button>
          <Button as="a" color="light" href="/diensten" size="lg">
            Diensten
          </Button>
        </div>
      </section>
    </>
  );
}
