import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { phoneDisplay } from "@/lib/content";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xn----8sbajyo4bdli5j.xn--p1ai"),
  title: {
    default: "Академия Окинавского Каратэ — клуб Тора",
    template: "%s — Академия Окинавского Каратэ",
  },
  description:
    "Клуб спортивных единоборств «Тигр». Окинавское каратэ для детей, подростков и взрослых в Москве. Бесплатное пробное занятие.",
  icons: { icon: "/media/logo.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Академия Окинавского Каратэ",
              alternateName: "Клуб Тора",
              telephone: phoneDisplay,
              sport: "Окинавское каратэ",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Москва",
                addressCountry: "RU",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
