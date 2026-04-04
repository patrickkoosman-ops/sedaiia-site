import Image from "next/image";
import Link from "next/link";
import { HOME_ABOUT_PORTRAIT } from "@/lib/site/homeContent";

type Props = {
  lead: string;
};

export function HomeAboutIntro({ lead }: Props) {
  return (
    <section className="border-b border-[var(--border-soft)] bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-start md:gap-14 lg:gap-20">
        <div className="space-y-6 text-[15px] leading-relaxed text-[var(--text-body)] md:text-base">
          <p>{lead}</p>
          <p>
            Van eerste positioning tot livegang: één lijn in strategie, design en techniek — met oog voor
            SEO en conversie in jouw niche.
          </p>
          <Link
            className="inline-flex rounded-full border border-neutral-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-900 hover:bg-neutral-50"
            href="/over"
          >
            Over Sedaiia
          </Link>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 radius-block md:max-h-[min(70vh,36rem)] md:justify-self-end">
          <Image alt={HOME_ABOUT_PORTRAIT.alt} className="object-cover" fill priority={false} sizes="(max-width:768px) 100vw, 45vw" src={HOME_ABOUT_PORTRAIT.src} />
        </div>
      </div>
    </section>
  );
}
