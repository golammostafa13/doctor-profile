import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * The one button.
 *
 * Arcade-cabinet shaped: the primary is a volt slab with two corners cut off,
 * set in the display face in capitals, with a sheen that sweeps across it on
 * hover. The quieter variants are square outlines in the same face, so a row
 * of mixed buttons still reads as one set.
 *
 * The hover micro-motion is uniform across all of them — a small lift on
 * hover, a pixel down on press — because a button that moves differently from
 * the button beside it reads as two design systems. `active:translate-y-px`
 * matters more than it looks: it is the only feedback a touch device gets.
 *
 * `.cut` clips the box-shadow along with the corners, so the primary glows
 * through `.btn-glow` (a drop-shadow filter) rather than through a shadow.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-semibold uppercase tracking-[0.06em] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "cut btn-sheen btn-glow bg-accent text-accent-ink hover:bg-accent-hover hover:-translate-y-0.5 [&:hover_svg:last-child]:translate-x-0.5",
        outline:
          "border border-line bg-surface/60 text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5",
        soft: "border border-line bg-surface text-ink hover:border-hot hover:text-hot hover:-translate-y-0.5",
        ghost: "text-ink-mute hover:bg-accent-soft hover:text-accent",
        danger: "cut bg-danger text-white hover:brightness-110",
      },
      size: {
        sm: "h-9 px-4 text-[0.8rem] [&_svg]:size-4 [--cut:8px]",
        md: "h-11 px-6 text-[0.9rem] [&_svg]:size-4 [--cut:10px]",
        lg: "h-14 px-8 text-base [&_svg]:size-5 [--cut:14px]",
        icon: "size-10 [&_svg]:size-4 [--cut:8px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
