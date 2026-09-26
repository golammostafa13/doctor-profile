import { z } from "zod";

/**
 * Pieces shared by every record in this directory.
 *
 * Everything here is pure Zod with no `server-only` import, because the same
 * schemas validate a form in the browser and the POST it produces on the
 * server. Validating in one place and not the other is how a field ends up
 * trusted because it was checked somewhere the attacker did not have to go.
 */

/**
 * Bilingual text.
 *
 * English required, Bengali optional. That asymmetry is real rather than lazy:
 * every doctor has a Latin-script name because BMDC registration is in Latin
 * script, and not every one has a written Bengali form of it. A blank Bengali
 * field is correct, not a gap — `pick()` falls back to English rather than
 * rendering an empty heading.
 */
export const bilingual = (max: number) =>
  z.object({
    en: z.string().trim().min(1).max(max),
    bn: z.string().trim().max(max).optional(),
  });

/** The same, where even English may legitimately be empty (a long bio). */
export const bilingualOptional = (max: number) =>
  z.object({
    en: z.string().trim().max(max).default(""),
    bn: z.string().trim().max(max).optional(),
  });

export const slugSchema = z
  .string()
  .trim()
  .toLowerCase()
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Lowercase letters, numbers and hyphens only.",
  )
  .min(2)
  .max(80);

/**
 * The public id in a profile URL, e.g. `101993725`.
 *
 * Nine digits, never leading zero, matching the shape the reference directory
 * uses. Random rather than sequential: sequential ids would let anyone count
 * the roster and walk it, which for a directory of named professionals is a
 * privacy leak even though each page is individually public.
 */
export const linkNoSchema = z.string().regex(/^[1-9]\d{8}$/);

/**
 * An outbound link.
 *
 * https only — not merely "a valid URL". `z.url()` accepts `javascript:` and
 * `data:`, both of which become stored XSS the moment one is rendered into an
 * href, and these URLs are typed by doctors into a form.
 */
export const httpsUrl = z
  .url()
  .refine((u) => u.startsWith("https://"), "Must be an https:// address.");

/**
 * A Bangladeshi mobile number, folded to local form.
 *
 * `+8801712-445566`, `8801712445566` and `01712445566` are one number, and a
 * directory that stores all three cannot deduplicate or dial them. Normalised
 * on the way in so everything downstream — the vCard, the tel: link, the
 * appointment button — gets one shape.
 */
export const bdPhone = z
  .string()
  .trim()
  .transform((v) => {
    const d = v.replace(/\D+/g, "");
    if (d.startsWith("880")) return `0${d.slice(3)}`;
    if (d.length === 10 && d.startsWith("1")) return `0${d}`;
    return d;
  })
  .refine(
    (v) => /^01[3-9]\d{8}$/.test(v),
    "Not a Bangladeshi mobile number (01XXXXXXXXX).",
  );

/** Epoch milliseconds. Stored as a number so sorting needs no parsing. */
export const timestamp = z.number().int().nonnegative();

/**
 * A stored image.
 *
 * The URL is content-addressed — it carries `hash` — which is what makes it
 * safe to cache for a year and what means a replaced photograph is a *new*
 * URL rather than a stale one the CDN keeps serving.
 *
 * Width and height are not decoration: without them the layout shifts when the
 * image lands, and an advertisement slot that shifts the page is worse than no
 * advertisement at all.
 */
export const mediaRefSchema = z.object({
  url: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  hash: z.string().min(8).max(64),
  bytes: z.number().int().positive(),
});

export type MediaRef = z.infer<typeof mediaRefSchema>;
export type Bilingual = z.infer<ReturnType<typeof bilingual>>;
