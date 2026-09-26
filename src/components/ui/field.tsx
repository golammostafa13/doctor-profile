import { cn } from "@/lib/utils";

/**
 * Form field styling.
 *
 * A function rather than a component because half the fields here are native
 * `<select>` and `<textarea>`, and wrapping each in its own component to share
 * a border colour is more indirection than the problem deserves.
 *
 * The error state changes the border rather than adding an icon, and the
 * message is always rendered as text beside it — colour alone is not an error
 * report for anyone who cannot see the difference.
 */
export function fieldClass(error?: string, className?: string) {
  return cn(
    "h-12 w-full border bg-bg/80 px-4 text-[0.95rem] text-ink placeholder:text-ink-faint focus:outline-none transition-[border-color,box-shadow] duration-200",
    error
      ? "border-danger focus:border-danger"
      : "border-line hover:border-ink-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)]",
    className,
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-sm text-danger">
      {message}
    </p>
  );
}
