import { getHomepageContent } from "@/lib/content/homepage";
import { Button, Card } from "flowbite-react";

export const revalidate = 300;

export default async function HomePage() {
  const c = await getHomepageContent();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-4 py-16">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{c.hero_kicker}</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{c.hero_title}</h1>
        {c.hero_lead ? (
          <p className="text-lg text-gray-600 dark:text-gray-400">{c.hero_lead}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3">
        {c.cta_primary_label && c.cta_primary_href ? (
          <Button as="a" color="blue" href={c.cta_primary_href}>
            {c.cta_primary_label}
          </Button>
        ) : null}
        {c.cta_secondary_label && c.cta_secondary_href ? (
          <Button
            as="a"
            color="light"
            href={c.cta_secondary_href}
            rel={
              c.cta_secondary_href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            target={c.cta_secondary_href.startsWith("http") ? "_blank" : undefined}
          >
            {c.cta_secondary_label}
          </Button>
        ) : null}
      </div>
      {c.card_title ? (
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{c.card_title}</h2>
          {c.card_body ? (
            <p className="mt-2 text-gray-600 dark:text-gray-400">{c.card_body}</p>
          ) : null}
        </Card>
      ) : null}
    </main>
  );
}
