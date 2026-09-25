import Image from "next/image";
import { logos } from "@/lib/content";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { wrap: "size-9 md:size-11", image: 36 },
  md: { wrap: "size-12 md:size-14", image: 48 },
  lg: { wrap: "size-20 md:size-24", image: 96 },
} as const;

export function BrandLogos({
  size = "sm",
  className,
  labeled = false,
}: {
  size?: keyof typeof sizes;
  className?: string;
  labeled?: boolean;
}) {
  const measure = sizes[size];

  return (
    <ul
      className={cn("flex items-center justify-center gap-2 md:gap-3", className)}
      aria-label="Эмблемы академии"
    >
      {logos.map((logo) => (
        <li key={logo.src} className="flex flex-col items-center gap-2">
          <span
            className={cn(
              "grid shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-sm",
              measure.wrap,
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={measure.image}
              height={measure.image}
              unoptimized
              className="size-[72%] object-contain"
            />
          </span>
          {labeled ? (
            <span className="max-w-24 text-center text-[0.62rem] leading-tight tracking-[0.08em] text-ink/55 uppercase">
              {logo.name}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
