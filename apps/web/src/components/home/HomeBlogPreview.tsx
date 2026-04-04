import Image from "next/image";
import Link from "next/link";
import { HOME_BLOG_CARDS } from "@/lib/site/homeContent";

export function HomeBlogPreview() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-hero-display text-3xl text-neutral-900 md:text-4xl">Inzichten</h2>
          <Link
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
            href="/over"
          >
            Meer lezen
          </Link>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {HOME_BLOG_CARDS.map((post) => (
            <li key={post.title}>
              <article className="flex h-full flex-col border border-[var(--border-soft)] bg-white radius-block">
                <Link className="relative block aspect-[5/4] overflow-hidden bg-neutral-100" href={post.href}>
                  <Image
                    alt={post.title}
                    className="object-cover transition duration-300 hover:opacity-95"
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    src={post.imageSrc}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <time className="text-xs text-neutral-500" dateTime={post.date}>
                    {post.date}
                  </time>
                  <h3 className="mt-2 font-semibold leading-snug text-neutral-900">
                    <Link className="hover:underline" href={post.href}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
