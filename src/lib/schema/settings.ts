import { z } from "zod";
import { bilingual, httpsUrl, mediaRefSchema, timestamp } from "@/lib/schema/common";

/**
 * The sponsor credit.
 *
 * Configured here rather than in environment variables because it is
 * bilingual campaign copy — product, generic name, the disclosure line — that
 * should not need a redeploy to change. The sibling libraries hard-code theirs
 * in `site.ts` and consequently need a code change to swap one Square product
 * for the next; that is the friction this removes.
 *
 * `site.ts` still carries the same fields as a fallback, because a sponsor
 * credit that vanishes when a cache blinks is a contractual problem rather
 * than a UI one.
 */
export const sponsorSchema = z.object({
  enabled: z.boolean().default(true),
  company: bilingual(120),
  product: bilingual(120).optional(),
  generic: bilingual(160).optional(),
  /** "Courtesy by" / "সৌজন্যে". */
  courtesyLabel: bilingual(60),
  logo: mediaRefSchema.nullable().default(null),
  pack: mediaRefSchema.nullable().default(null),
  href: httpsUrl.optional(),
  /**
   * The disclosure. Not optional: a pharmaceutical credit on a directory of
   * doctors needs a standing statement that it is an advertisement and not a
   * recommendation by anyone listed here.
   */
  note: bilingual(300),
});

export const settingsSchema = z.object({
  rev: z.number().int().nonnegative().default(0),
  updatedAt: timestamp.default(0),
  sponsor: sponsorSchema,
  directory: z
    .object({
      perPage: z.number().int().min(6).max(48).default(12),
      defaultSort: z.enum(["featured", "name", "recent"]).default("featured"),
    })
    .default({ perPage: 12, defaultSort: "featured" }),
  announcement: z
    .object({
      enabled: z.boolean().default(false),
      text: bilingual(240),
      href: httpsUrl.optional(),
    })
    .optional(),
});

export type Sponsor = z.infer<typeof sponsorSchema>;
export type SiteSettings = z.infer<typeof settingsSchema>;
