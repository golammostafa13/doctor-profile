import { readImage } from "@/lib/media";

/**
 * Uploaded images, served from this origin so the CSP stays `img-src 'self'`.
 *
 * The path is the hash of the bytes, so the response never changes and can be
 * cached for a year by the browser and any CDN in front.
 */
export async function GET(_request: Request, ctx: RouteContext<"/api/media/[hash]">) {
  const { hash } = await ctx.params;
  const image = await readImage(hash);
  if (!image) return new Response("Not found", { status: 404 });
  return new Response(new Uint8Array(image.bytes), {
    headers: {
      "Content-Type": image.type,
      "Content-Length": String(image.bytes.length),
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
