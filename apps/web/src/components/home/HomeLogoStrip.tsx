import { HOME_LOGO_LABELS, HOME_LOGO_STRIP_TITLE } from "@/lib/site/homeContent";

export function HomeLogoStrip() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-[var(--brand-surface)] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-900">
          <span aria-hidden className="material-symbols-outlined text-[18px] font-light">
            sunny
          </span>
          {HOME_LOGO_STRIP_TITLE}
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-6 md:gap-x-10">
          {HOME_LOGO_LABELS.map((label) => (
            <li
              key={label}
              className="text-center text-sm font-semibold tracking-tight text-neutral-800 md:text-base"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
