import "server-only";
import { createHash } from "node:crypto";
import sharp from "sharp";
import { appKey, getRedis } from "@/lib/redis";
import type { MediaRef } from "@/lib/schema/common";

/**
 * Uploaded images: re-encoded, content-addressed, stored in Redis and served
 * from this origin by `app/api/media/[hash]/route.ts`.
 *
 * Re-encoded rather than stored as uploaded, for three reasons: a phone photo
 * is 4–8MB and the profile shows it at 480px; EXIF carries the GPS position of
 * wherever the doctor took it; and a file that merely claims to be an image is
 * refused by the decoder instead of being served back with an image type.
 *
 * The URL carries the hash of the output bytes, so it can be cached for a year
 * — a replaced photo is a new URL, never a stale one.
 */

export type ImagePreset = "portrait" | "banner" | "logo";

const PRESETS: Record<ImagePreset, (img: sharp.Sharp) => sharp.Sharp> = {
  // Square, cropped toward whatever the eye would look at — usually the face.
  portrait: (img) =>
    img.resize(640, 640, { fit: "cover", position: sharp.strategy.attention }),
  banner: (img) =>
    img.resize(1600, 1600, { fit: "inside", withoutEnlargement: true }),
  logo: (img) => img.resize(800, 800, { fit: "inside", withoutEnlargement: true }),
};

/** What the upload form will take before re-encoding. */
export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;

/** Upstash's free tier caps a request at 1MB; stay well under it. */
const MAX_STORED_BYTES = 700 * 1024;

const KEY = (hash: string) => appKey(`media:${hash}`);

/** `code` names the dashboard string (dash.errors.<code>) to show. */
export class MediaError extends Error {
  constructor(
    message: string,
    readonly code: "noStore" | "chooseImage" | "imageTooBig" | "notImage" | "unreadableImage" | "tooDetailed",
  ) {
    super(message);
  }
}

export async function storeImage(file: File, preset: ImagePreset): Promise<MediaRef> {
  const redis = await getRedis();
  if (!redis) throw new MediaError("No store configured: uploads are disabled.", "noStore");
  if (!file || file.size === 0) throw new MediaError("Choose an image to upload.", "chooseImage");
  if (file.size > MAX_UPLOAD_BYTES) throw new MediaError("That image is over 8MB.", "imageTooBig");
  if (!file.type.startsWith("image/")) throw new MediaError("That file is not an image.", "notImage");

  let out: { data: Buffer; info: sharp.OutputInfo };
  try {
    const input = Buffer.from(await file.arrayBuffer());
    // `rotate()` with no angle applies the EXIF orientation, and re-encoding
    // drops the rest of the metadata, GPS included.
    let quality = 82;
    do {
      out = await PRESETS[preset](sharp(input, { failOn: "error" }).rotate())
        .webp({ quality })
        .toBuffer({ resolveWithObject: true });
      quality -= 12;
    } while (out.data.length > MAX_STORED_BYTES && quality > 30);
  } catch {
    throw new MediaError("That image could not be read. Try a JPEG, PNG or WebP.", "unreadableImage");
  }
  if (out.data.length > MAX_STORED_BYTES) {
    throw new MediaError("That image is too detailed to store. Try a smaller one.", "tooDetailed");
  }

  const hash = createHash("sha256").update(out.data).digest("hex").slice(0, 32);
  await redis.set(
    KEY(hash),
    JSON.stringify({ type: "image/webp", data: out.data.toString("base64") }),
  );
  return {
    url: `/api/media/${hash}`,
    width: out.info.width,
    height: out.info.height,
    hash,
    bytes: out.data.length,
  };
}

export async function readImage(
  hash: string,
): Promise<{ type: string; bytes: Buffer } | null> {
  if (!/^[0-9a-f]{32}$/.test(hash)) return null;
  const redis = await getRedis();
  if (!redis) return null;
  const raw = await redis.get<string>(KEY(hash));
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { type: string; data: string };
    return { type: parsed.type, bytes: Buffer.from(parsed.data, "base64") };
  } catch {
    return null;
  }
}
