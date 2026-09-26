import { notFound } from "next/navigation";

/**
 * Every unmatched path under a locale, sent to the public not-found page.
 *
 * Without this, an unknown URL like /en/nowhere matches no segment at all and
 * Next falls back to the ROOT not-found — which renders in `app/layout.tsx`,
 * the one layout that deliberately has no <html>, and fails with "Missing
 * <html> and <body> tags". Catching it here keeps the 404 inside the locale
 * layout and the site's own header and footer.
 */
export default function Missing(): never {
  notFound();
}
