"use client";

import { useEffect, useState } from "react";

type FriendPhoto = {
  id: string;
  alt: string;
  image: string;
};

export function FriendsGallery({ photos }: { photos: readonly FriendPhoto[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = photos.find((item) => item.id === openId) ?? null;

  useEffect(() => {
    if (!openId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openId]);

  return (
    <>
      <div className="friends-mosaic mt-10">
        {photos.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            className="friends-mosaic-item"
            aria-label={item.alt}
          >
            {/* native img: mosaic needs natural height, not cropped tiles */}
            <img
              src={item.image}
              alt={item.alt}
              width={800}
              height={1000}
              loading={index < 8 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
            />
          </button>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/88 p-3 md:p-6"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <img
            src={current.image}
            alt={current.alt}
            className="max-h-[92vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm text-ink"
            onClick={() => setOpenId(null)}
          >
            Закрыть
          </button>
        </div>
      ) : null}
    </>
  );
}
