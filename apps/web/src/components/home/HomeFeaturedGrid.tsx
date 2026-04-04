import Image from "next/image";
import type { HOME_FEATURED_IMAGES } from "@/lib/site/homeContent";

type Props = {
  images: typeof HOME_FEATURED_IMAGES;
};

export function HomeFeaturedGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
      {images.map((item) => (
        <div
          key={item.src}
          className="relative aspect-[3/4] overflow-hidden bg-neutral-100 radius-block"
        >
          <Image
            alt={item.alt}
            className="object-cover"
            fill
            sizes="(max-width:640px) 100vw, 33vw"
            src={item.src}
            priority
          />
        </div>
      ))}
    </div>
  );
}
