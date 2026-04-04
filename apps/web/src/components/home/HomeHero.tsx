import Link from "next/link";
import { HomeFeaturedGrid } from "@/components/home/HomeFeaturedGrid";
import { HOME_FEATURED_IMAGES, HOME_HERO_LINES, type HeroLinePart } from "@/lib/site/homeContent";

type HomeHeroProps = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

function HeroLine({ parts }: { parts: HeroLinePart[] }) {
  return (
    <p className="font-hero-display text-[clamp(1.35rem,4.2vw,3.35rem)] text-neutral-900">
      {parts.map((part, j) => {
        if (part.kind === "text") {
          return (
            <span
              key={j}
              className={part.muted ? "text-[var(--text-display-muted)]" : "text-[var(--text-heading)]"}
            >
              {part.text}
            </span>
          );
        }
        return (
          <span
            key={j}
            aria-hidden
            className="material-symbols-outlined relative mx-[0.15em] inline-block translate-y-[0.06em] text-[0.62em] font-light text-[var(--text-heading)]"
          >
            {part.name}
          </span>
        );
      })}
    </p>
  );
}

export function HomeHero({ primaryHref, primaryLabel, secondaryHref, secondaryLabel }: HomeHeroProps) {
  return (
    <section aria-label="Introductie" className="border-b border-[var(--border-soft)] bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 md:pb-14 md:pt-24">
        <div className="max-w-6xl space-y-2 md:space-y-3">
          {HOME_HERO_LINES.map((line, i) => (
            <HeroLine key={i} parts={line} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 md:mt-12">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text-heading)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
            href={primaryHref}
            rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
            target={primaryHref.startsWith("http") ? "_blank" : undefined}
          >
            {primaryLabel}
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-900 transition hover:bg-neutral-50"
            href={secondaryHref}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
        <HomeFeaturedGrid images={HOME_FEATURED_IMAGES} />
      </div>
    </section>
  );
}
