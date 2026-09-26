import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * Set statically here rather than in `proxy.ts`. A nonce-based CSP has to be
 * generated per request, which opts every page out of static rendering — and
 * static rendering is the whole reason this directory costs nothing to run:
 * ISR turns "ten thousand visitors" into one Redis read per revalidation
 * window. Until the CSP can be injected at the edge into an already-cached
 * response, `script-src` needs 'unsafe-inline', because Next's hydration
 * payload and the pre-paint theme script are both inline. Everything else
 * below is locked down.
 */
const isDev = process.env.NODE_ENV === "development";

/**
 * There is no third-party allowlist, and that is worth stating rather than
 * leaving as an absence.
 *
 * Doctor photographs and advertisement creatives are stored in Redis and
 * served from this origin by `app/api/media/[hash]/route.ts`; the fonts
 * are self-hosted by `next/font`; the sponsor's artwork is in `public/`; and
 * the advertisements are first-party creatives rather than a network's script.
 * So every directive below is 'self' plus, where a browser API demands it,
 * data: and blob:.
 *
 * That is the whole reason this site can promise no third-party scripts and
 * mean it. Adding a host here breaks that promise — and the one candidate,
 * Vercel Blob, needs `img-src https://*.public.blob.vercel-storage.com` added
 * here AND a matching entry in `images.remotePatterns` below, or next/image
 * will optimise a URL the browser then refuses to paint.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  // React's dev build needs eval() for stack reconstruction and HMR.
  // Production never gets it.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  // Self-hosted by next/font, so no font CDN needs allowing.
  "font-src 'self'",
  // data:/blob: cover canvas-drawn avatars and the client-side image resizer,
  // which hands an OffscreenCanvas blob to the upload before it ever leaves
  // the browser.
  "img-src 'self' data: blob:",
  "worker-src 'self' blob:",
  // No map embed. A chamber renders its own marker and links out to the native
  // maps app instead, which keeps this directive at 'self' and keeps ~800KB of
  // third-party script off the page whose selling point is how it moves.
  "frame-src 'self'",
  `connect-src 'self'${isDev ? " ws: http://localhost:*" : ""}`,
  "media-src 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Photo uploads arrive as phone pictures of several megabytes and are
      // shrunk on the server (src/lib/media.ts caps the input at 8MB). The
      // extra room is multipart overhead.
      bodySizeLimit: "9mb",
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
