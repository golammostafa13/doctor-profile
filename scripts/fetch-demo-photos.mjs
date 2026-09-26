/**
 * Stock photographs for the demo roster, from Pexels.
 *
 *   node --env-file=.env.local scripts/fetch-demo-photos.mjs
 *   node scripts/build-fixtures.mjs
 *
 * Needs PEXELS_API_KEY (PIXELS_API_KEY is accepted too) — used by this script
 * only, never by the site. Writes square WebP crops to public/demo/photos and
 * a manifest that build-fixtures.mjs reads to give each demo doctor a photo.
 *
 * These are stock models, not the doctors on the profiles — the doctors are
 * invented. The avatar marks every photo from this folder "demo photo" so a
 * visitor cannot take the model for the named doctor, and the manifest keeps
 * each photographer's credit as the Pexels licence asks.
 *
 * Served from this origin, because the CSP is `img-src 'self'`.
 */
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "demo", "photos");
const KEY = process.env.PEXELS_API_KEY ?? process.env.PIXELS_API_KEY;
if (!KEY) {
  console.error("Set PEXELS_API_KEY in .env.local and run with --env-file=.env.local");
  process.exit(1);
}

// Per gender: as many as survived review, so a re-run returns the set that
// was looked at rather than topping up with photos nobody has checked.
const WANT = { female: 56, male: 53 };
const SIZE = 480;

// South Asian searches first, so the roster looks like the city it lists.
const QUERIES = {
  female: [
    "bangladeshi female doctor", "indian woman doctor", "south asian woman doctor",
    "woman doctor portrait", "female doctor stethoscope", "female physician portrait",
  ],
  male: [
    "bangladeshi male doctor", "indian man doctor", "south asian man doctor",
    "man doctor portrait", "male doctor stethoscope", "male physician portrait",
  ],
};

// Photos seen and rejected by eye: children, groups, nurses in scrubs only,
// faces hidden by masks. Pexels ids.
const REJECT = new Set([
  32115905, 32251893, 5998442, 32160039, 33733659, 32251894, 32115903, 32251891, 19963168, 7659690, 38250872, 32115904, 32115955, 19438557, 19438564, 19438559, 19438562, 32115962, 32115957, 6129105, 5452292, 32205051, 5452293, 5452225, 13156759, 5888190, 5888195, 5888179, 3279197, 26336882, 5888167, 5888158, 32351310, 5888194, 4021772, 4021766,
  5452195, 5214967, 12955896, 7904478, 5452252, 5867730, 8376287, 33857839, 26886760, 17221169, 6129497,
]);

const WORDS = {
  female: /\b(woman|female|lady)\b/i,
  male: /\b(man|male|gentleman)\b/i,
};
const MEDICAL = /\b(doctor|physician|medical|stethoscope|lab coat|white coat|healthcare|clinic|hospital|surgeon|dentist)\b/i;
const AVOID = /\b(child|children|kid|baby|boy|girl patient|group|team|people|couple|mask|masked|toy|costume|patient)\b/i;

async function search(query, page) {
  const url = new URL("https://api.pexels.com/v1/search");
  url.search = new URLSearchParams({ query, page: String(page), per_page: "80", orientation: "portrait" }).toString();
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`Pexels ${res.status} for "${query}"`);
  return (await res.json()).photos ?? [];
}

async function collect(gender) {
  const other = gender === "female" ? "male" : "female";
  const picked = new Map();
  for (const query of QUERIES[gender]) {
    for (const page of [1, 2]) {
      for (const photo of await search(query, page)) {
        const alt = photo.alt ?? "";
        if (picked.has(photo.id) || REJECT.has(photo.id)) continue;
        // One person, of the gender the name implies — and `\bman\b` does not
        // match inside "woman", so the two tests do not collide.
        if (!WORDS[gender].test(alt) || WORDS[other].test(alt)) continue;
        if (!MEDICAL.test(alt) || AVOID.test(alt)) continue;
        picked.set(photo.id, photo);
        if (picked.size >= WANT[gender]) return [...picked.values()];
      }
    }
  }
  return [...picked.values()];
}

async function save(photo, file) {
  const res = await fetch(photo.src.large);
  if (!res.ok) throw new Error(`download ${photo.id}: ${res.status}`);
  const input = Buffer.from(await res.arrayBuffer());
  // Portrait stock shots put the face in the upper part of the frame; an
  // attention crop finds it rather than guessing a fixed offset.
  const out = await sharp(input)
    .resize(SIZE, SIZE, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 78 })
    .toBuffer();
  writeFileSync(join(outDir, file), out);
  return out.length;
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const manifest = { source: "Pexels (https://www.pexels.com/license/)", female: [], male: [] };
for (const gender of ["female", "male"]) {
  const photos = await collect(gender);
  for (const [i, photo] of photos.entries()) {
    const file = `${gender[0]}-${String(i + 1).padStart(2, "0")}.webp`;
    const bytes = await save(photo, file);
    manifest[gender].push({
      file,
      bytes,
      pexelsId: photo.id,
      page: photo.url,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
      alt: photo.alt,
    });
  }
  console.log(`${gender}: ${photos.length}`);
}
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
