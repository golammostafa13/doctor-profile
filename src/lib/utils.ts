import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names, letting a later Tailwind utility beat an earlier one.
 *
 * `clsx` flattens the conditionals; `twMerge` resolves the conflicts, so a
 * component can ship a sensible default like `px-4` and a caller can still
 * pass `px-8` without both landing in the class list and the cascade picking
 * whichever happened to be defined last in the stylesheet.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
