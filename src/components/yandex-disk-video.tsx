"use client";

import { useEffect, useState } from "react";

export function YandexDiskVideo({
  publicUrl,
  title,
  poster,
}: {
  publicUrl: string;
  title: string;
  poster?: string;
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const endpoint =
      "https://cloud-api.yandex.net/v1/disk/public/resources?public_key=" +
      encodeURIComponent(publicUrl);

    fetch(endpoint, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("yandex");
        return response.json() as Promise<{ file?: string }>;
      })
      .then((data) => {
        if (data.file) setSrc(data.file);
        else setFailed(true);
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });

    return () => controller.abort();
  }, [publicUrl]);

  return (
    <div className="relative aspect-video overflow-hidden bg-ink">
      {src ? (
        <video
          className="absolute inset-0 h-full w-full bg-ink"
          controls
          playsInline
          preload="none"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        >
          <div className="absolute inset-0 flex items-end bg-ink/45 p-5">
            <p className="text-sm text-white/85">
              {failed
                ? "Плеер Яндекса сейчас не открылся — посмотрите по ссылке ниже."
                : "Подключаем фильм с Яндекс Диска…"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
