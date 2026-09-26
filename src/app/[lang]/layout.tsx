import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Chakra_Petch,
  Hind_Siliguri,
  Inter,
  JetBrains_Mono,
  Noto_Serif_Bengali,
} from "next/font/google";
import { hasLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";
import { themeScript } from "@/components/theme-toggle";
import "@/app/globals.css";

/**
 * Fonts are self-hosted by next/font rather than linked from Google's CDN.
 *
 * That is what lets the CSP keep `font-src 'self'` — a <link> to
 * fonts.googleapis.com would need two more hosts allowed, on a site whose only
 * third-party origin is the image store.
 */
/*
 * Three Latin faces, each with one job. Chakra Petch — squared, cut-cornered —
 * is the arcade voice: headings, buttons, figures. Inter carries body text,
 * because long paragraphs set in a display face are tiring to read. JetBrains
 * Mono is only for the small HUD labels (`— CHAMBERS_`), where a monospace
 * reads as a system readout rather than as prose.
 */
const display = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bengali = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serifBengali = Noto_Serif_Bengali({
  variable: "--font-serif-bengali",
  subsets: ["bengali", "latin"],
  display: "swap",
});

/** Both languages are known at build time, so both prerender. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: LayoutProps<"/[lang]">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const bn = lang === "bn";
  return {
    metadataBase: new URL(site.url),
    title: {
      default: bn ? site.nameBn : site.name,
      template: `%s · ${bn ? site.nameBn : site.name}`,
    },
    description: bn ? site.descriptionBn : site.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", bn: "/bn" },
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  // A path like /xx/doctors reaches here with an unknown locale. Without this
  // it would render with an invalid lang attribute and a dictionary lookup of
  // undefined; 404 is the honest answer.
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang as Locale);

  return (
    // Rendered dark, which is the default. A visitor who has chosen day gets
    // `light` swapped in by the inline script before first paint — hence
    // suppressHydrationWarning, since that class differs from the markup.
    <html
      lang={lang}
      className={`dark ${display.variable} ${body.variable} ${mono.variable} ${bengali.variable} ${serifBengali.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:font-display focus:uppercase focus:px-5 focus:py-2 focus:text-accent-ink"
        >
          {dict.common.skipToContent}
        </a>
        {props.children}
      </body>
    </html>
  );
}
