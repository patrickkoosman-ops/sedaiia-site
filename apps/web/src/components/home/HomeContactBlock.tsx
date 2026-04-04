"use client";

import { FormEvent } from "react";

export function HomeContactBlock() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const body = [`Naam: ${name}`, `E-mail: ${email}`, "", message].join("\n");
    const subject = encodeURIComponent("Contact via sedaiia.com");
    window.location.href = `mailto:hallo@sedaiia.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="border-b border-[var(--border-soft)] pb-10 md:pb-14">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <h2 className="max-w-2xl font-hero-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-tight text-neutral-900">
              Een project in gedachten? Laten we het samen vormgeven.
            </h2>
            <p className="text-sm text-neutral-500">NL / EN / DE</p>
          </div>
        </div>

        <div className="grid gap-12 pt-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <a
            className="text-2xl font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 md:text-3xl"
            href="mailto:hallo@sedaiia.com"
          >
            hallo@sedaiia.com
          </a>

          <div>
            <p className="text-sm font-semibold text-neutral-900">Bericht sturen</p>
            <form className="mt-6 grid gap-5" noValidate onSubmit={onSubmit}>
              <label className="grid gap-1.5 text-sm text-neutral-700">
                Naam
                <input
                  autoComplete="name"
                  className="radius-block border border-[var(--border-soft)] bg-white px-3 py-2.5 text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-400"
                  name="name"
                  placeholder="Naam"
                  required
                  type="text"
                />
              </label>
              <label className="grid gap-1.5 text-sm text-neutral-700">
                E-mail
                <input
                  autoComplete="email"
                  className="radius-block border border-[var(--border-soft)] bg-white px-3 py-2.5 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-400"
                  name="email"
                  placeholder="E-mail"
                  required
                  type="email"
                />
              </label>
              <label className="grid gap-1.5 text-sm text-neutral-700">
                Bericht
                <textarea
                  className="radius-block min-h-[140px] resize-y border border-[var(--border-soft)] bg-white px-3 py-2.5 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-400"
                  name="message"
                  placeholder="Waar kunnen we je mee helpen?"
                  required
                  rows={5}
                />
              </label>
              <button
                className="w-fit rounded-full bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                type="submit"
              >
                Versturen
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
