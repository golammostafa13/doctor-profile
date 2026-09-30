/**
 * Builds the raster app icons from the same mark `components/brand.tsx` draws.
 *
 *   node scripts/build-icons.mjs
 *
 * Writes `src/app/favicon.ico` (16/32/48) and `src/app/apple-icon.png` (180).
 * `src/app/icon.svg` is authored by hand and is what modern browsers actually
 * use; these two exist for the slots that cannot take an SVG — the legacy
 * favicon request and the iOS home screen.
 *
 * The paths are duplicated here on purpose: a build script cannot import a TSX
 * component. They will drift silently if only one side is edited, so run this
 * after touching `BrandArt` or `icon.svg`.
 *
 * A one-off tool, not part of the build. It leans on the `sharp` that Next
 * already installs rather than adding a dependency for two files that change
 * about as often as the company name.
 */
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const appDir = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "app");

/** The tile, as in globals.css `.brand-mark`: ice, with the bottom-right
 *  corner cut. `cut` is false for the touch icon, which iOS masks itself. */
const tile = (inner, cut) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <defs><linearGradient id="t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c4e8ff"/><stop offset=".45" stop-color="#8fd3ff"/><stop offset="1" stop-color="#5fb4f0"/></linearGradient></defs>
  <path d="${cut ? "M0 0H48V34.5L34.5 48H0Z" : "M0 0H48V48H0Z"}" fill="url(#t)"/>${inner}</svg>`;

/** The drawing, as in `icon.svg` and `BrandArt`, knocked out in midnight. */
const mark = `
  <circle cx="24" cy="15.4" r="7" fill="#07111f"/>
  <path d="M10 33.6h5.4l3-6.4 4 13 3.4-8.4 2.2 1.8H38" stroke="#07111f" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

const png = (svg, size) =>
  sharp(Buffer.from(svg), { density: 900 }).resize(size, size).png().toBuffer();

/**
 * A minimal ICO container.
 *
 * `sharp` has no .ico encoder and the format is simple enough not to warrant a
 * dependency: a 6-byte header, one 16-byte directory entry per image, then the
 * PNG payloads. Browsers have accepted PNG-in-ICO since IE6.
 */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    // 256 is written as 0 — the field is one byte.
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2); // palette size
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const svg = tile(mark, true);
// The touch icon is a full bleed square: iOS applies its own rounding, and a
// cut corner inside a rounded mask shows as a notch.
const svgSquare = tile(mark, false);

const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map(async (size) => ({ size, data: await png(svg, size) })),
);

writeFileSync(join(appDir, "favicon.ico"), ico(images));
writeFileSync(join(appDir, "apple-icon.png"), await png(svgSquare, 180));

console.log("wrote src/app/favicon.ico (16/32/48) and src/app/apple-icon.png (180)");
