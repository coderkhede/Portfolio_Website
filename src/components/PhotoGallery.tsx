"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {gallery.map((image, index) => (
          <FadeIn
            key={image.caption}
            delay={index * 0.05}
            className={index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className={`group relative w-full overflow-hidden rounded-2xl border border-line ${
                index === 0 ? "aspect-[3/4] md:h-full md:min-h-[28rem]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                style={{ objectPosition: image.objectPosition }}
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-violet-accent/10 opacity-80 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-left text-[11px] uppercase tracking-[0.18em] text-zinc-200">
                {image.caption}
              </span>
            </button>
          </FadeIn>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div
            className="relative h-[80vh] w-full max-w-lg overflow-hidden rounded-3xl border border-white/20"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={gallery[active].src}
              alt={gallery[active].alt}
              fill
              className="object-cover"
              style={{ objectPosition: gallery[active].objectPosition }}
            />
          </div>
        </div>
      )}
    </>
  );
}
