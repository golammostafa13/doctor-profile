"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * The day/night switch.
 *
 * The theme is a class on <html> — `dark` as rendered, `light` once chosen —
 * and the choice lives in localStorage rather than a cookie, so no page has to
 * read a request header and every page can still prerender. `ThemeScript`
 * puts the class back before first paint; the toggle only reads it and flips
 * it.
 *
 * The <html> class is the source of truth, observed rather than mirrored into
 * React state, so every toggle on the page (the dashboard has two) agrees.
 */
const themeStorageKey = "theme";

/** Runs inline in <head>, before anything paints. Keep it tiny and ES5. */
const themeScript = `try{if(localStorage.getItem("${themeStorageKey}")==="light"){var c=document.documentElement.classList;c.remove("dark");c.add("light")}}catch(e){}`;

function applyStoredTheme() {
  try {
    if (localStorage.getItem(themeStorageKey) === "light") {
      document.documentElement.classList.replace("dark", "light");
    }
  } catch {
    // Storage blocked: stay on the rendered default.
  }
}

/**
 * Restores the chosen theme, in two situations.
 *
 * On a full page load, the inline script in the server HTML does it before
 * first paint. That script must not be a live <script> on the client: React
 * never runs one it creates, and warns about it. So the client renders it as
 * an inert data block (`text/plain`), and suppressHydrationWarning covers the
 * one attribute that differs from the server markup.
 *
 * On a client navigation that remounts the locale layout — switching
 * language, /en → /bn — React re-acquires <html> and resets its attributes to
 * the rendered `dark`. The layout effect puts `light` back after that commit
 * and before the browser paints it.
 */
export function ThemeScript() {
  useLayoutEffect(applyStoredTheme, []);
  return (
    <script
      type={typeof window === "undefined" ? undefined : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const isLight = () => document.documentElement.classList.contains("light");

export function ThemeToggle({ label }: { label: string }) {
  // The server always renders dark; the real value arrives on hydration.
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  function toggle() {
    const root = document.documentElement.classList;
    const next = light ? "dark" : "light";
    root.remove("dark", "light");
    root.add(next);
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {
      // Private mode or blocked storage: the switch still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={light}
      title={label}
      className="grid size-10 shrink-0 place-items-center border border-line text-ink-faint transition-colors duration-200 hover:border-accent hover:text-accent [&_svg]:size-4"
    >
      {light ? <Moon aria-hidden /> : <Sun aria-hidden />}
    </button>
  );
}
