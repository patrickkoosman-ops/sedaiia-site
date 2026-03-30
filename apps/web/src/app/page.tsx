import { Button, Card } from "flowbite-react";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-4 py-16">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">Sedaiia</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Designer &amp; builder</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Websites voor esthetische en creative studios. Basis met Tailwind en Flowbite staat; inhoud
          en CMS volgen.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button as="a" color="blue" href="#contact">
          Contact
        </Button>
        <Button
          as="a"
          color="light"
          href="https://flowbite-react.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Flowbite React
        </Button>
      </div>
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Stack</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Next.js (App Router), Tailwind CSS v4, flowbite-react — klaar voor vervolgstappen met
          Supabase en content.
        </p>
      </Card>
    </main>
  );
}
