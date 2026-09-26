import type { ReactNode } from "react";

/**
 * The root layout exists only to satisfy Next's requirement for one.
 *
 * Everything real — <html>, the fonts, the theme provider — lives in
 * `[lang]/layout.tsx`, because the `lang` attribute and the Bengali font stack
 * cannot be decided before the locale is known. This file must not render
 * <html> as well, or every page would ship two.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
