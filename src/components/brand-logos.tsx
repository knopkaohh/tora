import Image from "next/image";
import { logos } from "@/lib/content";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { wrap: "h-12 w-12 md:h-14 md:w-14", image: 56 },
  md: { wrap: "h-16 w-16 md:h-20 md:w-20", image: 80 },
  lg: { wrap: "h-28 w-28 md:h-36 md:w-36", image: 144 },
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
      className={cn("flex items-center justify-center gap-3 md:gap-5", className)}
      aria-label="Эмблемы академии"
    >
      {logos.map((logo) => (
        <li key={logo.src} className="flex flex-col items-center gap-2">
          <span className={cn("relative block shrink-0", measure.wrap)}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={measure.image}
              height={measure.image}
              unoptimized
              className="h-full w-full object-contain"
            />
          </span>
          {labeled ? (
            <span className="max-w-28 text-center text-xs leading-tight tracking-[0.08em] text-ink/60 uppercase">
              {logo.name}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
