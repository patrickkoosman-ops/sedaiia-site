import { HOME_FAQ } from "@/lib/site/homeContent";

export function HomeFaq() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16 lg:gap-24">
        <h2 className="font-hero-display text-4xl text-neutral-900 md:text-5xl">FAQ.</h2>
        <div className="divide-y divide-[var(--border-soft)]">
          {HOME_FAQ.map((item) => (
            <details key={item.question} className="group py-4 first:pt-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[15px] font-normal text-neutral-900 md:text-base [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] font-light text-neutral-500 transition group-open:rotate-180"
                >
                  expand_more
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
