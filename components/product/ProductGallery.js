"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProductGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div>
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <Image
          src={images[activeImage]}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => (
            <button
              key={img + index}
              onClick={() => setActiveImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg border-2 bg-slate-50 transition",
                activeImage === index
                  ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/15"
                  : "border-transparent hover:border-slate-300"
              )}
            >
              <Image src={img} alt={`${name} thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
