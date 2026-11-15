"use client";

import Image from "next/image";
import { useState } from "react";

import type { Photo } from "@/lib/data/types";

// A workshop's photos: one large photo with thumbnail buttons underneath to
// switch between them. Renders nothing when there are no photos.
export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState(0);

  if (photos.length === 0) {
    return null;
  }

  const current = photos[selected];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover"
        />
      </div>
      {photos.length > 1 && (
        <ul className="flex gap-2 overflow-x-auto">
          {photos.map((photo, index) => (
            <li key={`${photo.src}-${index}`}>
              <button
                type="button"
                onClick={() => setSelected(index)}
                aria-pressed={index === selected}
                aria-label={`Show photo ${index + 1}: ${photo.alt}`}
                className="block rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Image
                  src={photo.src}
                  alt=""
                  width={96}
                  height={64}
                  className={`rounded-md object-cover ${
                    index === selected ? "ring-2 ring-primary" : ""
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
