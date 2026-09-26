import { z } from "zod";
import {
  bilingual,
  httpsUrl,
  mediaRefSchema,
  timestamp,
} from "@/lib/schema/common";

/**
 * Advertisements.
 *
 * These are first-party creatives — images this site hosts, links it renders,
 * a redirect it owns — not an ad network's script. That is a deliberate
 * choice, not a limitation: a network (AdSense, GAM) would need `script-src`
 * and `frame-src` opened to several Google origins and, in practice,
 * `img-src https:`, which means any origin on the internet can be loaded as an
 * image. On a medical directory, where a mis-targeted advertisement beside a
 * doctor's name is a reputational problem rather than an annoyance, that is a
 * trade worth refusing. It also keeps the whole sponsorship value with the
 * sponsor instead of splitting it with a network.
 *
 * If more inventory is needed, add a slot to the enum.
 */
export const adSlot = z.enum([
  /** Wide strip above the directory grid. */
  "list-leaderboard",
  /** A card injected into the doctor grid, flowing with it. */
  "grid-native",
  /** Tall panel in the profile sidebar. */
  "profile-rail",
  /** Between paragraphs of a blog post. */
  "blog-inline",
  /** Short strip in the site footer. */
  "footer",
]);

export const adSchema = z
  .object({
    id: z.string().min(1),
    slot: adSlot,
    enabled: z.boolean().default(true),
    /** Administrator-facing name only; never rendered to a visitor. */
    label: z.string().trim().min(2).max(80),
    image: mediaRefSchema,
    /** A leaderboard cropped for a phone. Falls back to `image` when absent. */
    imageMobile: mediaRefSchema.nullable().default(null),
    /**
     * Required, and required in English at minimum. An advertisement with no
     * alternative text is an advertisement a blind visitor is simply told
     * nothing about, and the slot is paid for either way.
     */
    alt: bilingual(160),
    headline: bilingual(120).optional(),
    body: bilingual(280).optional(),
    cta: bilingual(40).optional(),
    href: httpsUrl,
    /** null means "no bound" at that end, not "now". */
    activeFrom: timestamp.nullable().default(null),
    activeUntil: timestamp.nullable().default(null),
    weight: z.number().int().min(0).max(100).default(50),
    createdAt: timestamp,
    updatedAt: timestamp,
  })
  .refine(
    (a) =>
      a.activeFrom === null ||
      a.activeUntil === null ||
      a.activeUntil > a.activeFrom,
    { message: "The end date must be after the start date.", path: ["activeUntil"] },
  );

/**
 * Every creative for every slot, in one document.
 *
 * Which advertisements are live for a given slot is then a filter in memory
 * rather than a query: one `GET` serves the leaderboard, the in-grid card, the
 * profile rail and the footer on the same page.
 */
export const adsDocSchema = z.object({
  rev: z.number().int().nonnegative().default(0),
  updatedAt: timestamp.default(0),
  items: z.array(adSchema).max(120).default([]),
});

export type AdSlot = z.infer<typeof adSlot>;
export type Ad = z.infer<typeof adSchema>;
export type AdsDoc = z.infer<typeof adsDocSchema>;
