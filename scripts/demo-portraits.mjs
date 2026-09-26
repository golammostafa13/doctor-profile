/**
 * Drawn portraits for the demo roster.
 *
 * The demo doctors are invented, so they get invented faces: an illustrated
 * bust — head, hair, white coat, stethoscope — rather than a stock photograph.
 * A photograph of a real person on a fictional doctor's profile, beside a
 * registration number and a phone line, would be presenting that person as
 * someone they are not; a drawing cannot be mistaken for anybody.
 *
 * Drawn in the site's three colours only (void, volt, signal) plus the white
 * the type uses, at a few strengths — a duotone "HUD" portrait rather than a
 * skin-toned illustration, so a grid of them sits inside the palette instead
 * of fighting it.
 *
 * Everything varies by a hash of the doctor's id, NOT by the fixture PRNG:
 * drawing a portrait must not consume random numbers, or adding portraits
 * would reshuffle every other field of the roster.
 *
 * Written as files under public/demo/portraits and served from this origin,
 * because the CSP is `img-src 'self'`.
 */

const VOID = "#05080a";
const VOLT = "#fce300";
const SIGNAL = "#ff1f4b";

// Type-white at the strengths the portrait needs: skin, its shade, the coat.
const TONES = [
  { face: "#d9dde0", shade: "#a9b0b4" },
  { face: "#c3c9cc", shade: "#939a9f" },
  { face: "#aeb5b9", shade: "#81898e" },
];
const COAT = "#e8ebed";
const COAT_SHADE = "#b4bbbf";
const HAIR = "#141a1e";

/** FNV-1a, so one id always draws the same face. */
function hash(seed) {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Independent picks from one hash: take a few bits per feature. */
function traits(seed) {
  const h = hash(seed);
  // `^` yields a signed int32, so the mix is coerced back to unsigned before
  // the modulo, or half the picks would be negative indices.
  const at = (shift, n) => (((h >>> shift) ^ (h >>> (shift + 11))) >>> 0) % n;
  return {
    tone: TONES[at(0, TONES.length)],
    accent: at(3, 2) === 0 ? VOLT : SIGNAL,
    style: at(5, 3),
    glasses: at(8, 10) < 3,
    beard: at(12, 10) < 4,
    glowX: 20 + at(16, 60),
  };
}

function maleHair(style) {
  switch (style) {
    case 0: // short, even
      return `<path d="M34 41c-1.5-15 7-22 16-22s17.5 6 16 22c-2-8-7-12-16-12s-14 4-16 12z" fill="${HAIR}"/>`;
    case 1: // side part with volume
      return `<path d="M33 42c-2-17 8-24 18-24 11 0 18 8 16 22-3-7-9-11-15-10-6-3-15 0-19 12z" fill="${HAIR}"/>`;
    default: // receding, close at the sides
      return `<path d="M34 44c-1-7 0-12 3-15-1 5 0 9 1 12zM66 44c1-7 0-12-3-15 1 5 0 9-1 12z" fill="${HAIR}"/><path d="M40 27c5-4 15-4 20 0-6-1-14-1-20 0z" fill="${HAIR}" opacity=".7"/>`;
  }
}

/** Female hair has a part drawn BEHIND the head and a part in front of it. */
function femaleHair(style, accent) {
  switch (style) {
    case 0: // long, loose
      return {
        back: `<path d="M31 46c-3-20 8-28 19-28s22 8 19 28l2 24c-9 5-33 5-42 0z" fill="${HAIR}"/>`,
        front: `<path d="M35 40c0-12 7-17 15-17s16 5 15 17c-4-7-9-10-15-10-5 3-10 6-15 10z" fill="${HAIR}"/>`,
      };
    case 1: // tied back, bun
      return {
        back: `<circle cx="50" cy="20" r="7" fill="${HAIR}"/>`,
        front: `<path d="M35 41c-1-13 6-19 15-19s16 6 15 19c-3-8-8-11-15-11s-12 3-15 11z" fill="${HAIR}"/>`,
      };
    default: // hijab, in the accent's shadow
      return {
        back: `<path d="M29 46c-2-22 9-30 21-30s23 8 21 30c0 13-3 21 7 28H22c10-7 7-15 7-28z" fill="${VOID}" stroke="${accent}" stroke-opacity=".55" stroke-width=".8"/><path d="M33 46c-1-18 7-25 17-25s18 7 17 25c-1 8-3 14 2 22H31c5-8 3-14 2-22z" fill="#1b2227"/>`,
        front: "",
        hijab: true,
      };
  }
}

export function portraitSvg(seed, female) {
  const t = traits(seed);
  const hair = female ? femaleHair(t.style, t.accent) : null;
  const scrubs = t.accent;

  const parts = [];

  // Ground: the void, a bloom of the accent, a hairline grid, scanlines.
  parts.push(`<rect width="100" height="100" fill="${VOID}"/>`);
  parts.push(
    `<circle cx="${t.glowX}" cy="22" r="46" fill="url(#g)"/>`,
    `<path d="M0 25h100M0 50h100M0 75h100M25 0v100M50 0v100M75 0v100" stroke="#fff" stroke-opacity=".04" stroke-width=".3"/>`,
  );

  if (hair) parts.push(hair.back);

  // Coat, shirt, lapels.
  parts.push(
    `<path d="M6 100c2-18 16-27 32-29h24c16 2 30 11 32 29z" fill="${COAT}"/>`,
    `<path d="M40 71l10 17 10-17z" fill="${scrubs}"/>`,
    `<path d="M38 71l8 29M62 71l-8 29" stroke="${COAT_SHADE}" stroke-width="1.4" fill="none"/>`,
    `<path d="M20 100c1-9 5-15 10-19M80 100c-1-9-5-15-10-19" stroke="${COAT_SHADE}" stroke-width=".8" fill="none"/>`,
  );

  // Neck, ears, head.
  const hijab = hair?.hijab;
  if (!hijab) {
    parts.push(
      `<path d="M43 57h14v15c-4 3-10 3-14 0z" fill="${t.tone.shade}"/>`,
      `<ellipse cx="35" cy="45" rx="2.6" ry="4" fill="${t.tone.shade}"/>`,
      `<ellipse cx="65" cy="45" rx="2.6" ry="4" fill="${t.tone.shade}"/>`,
    );
  }
  parts.push(
    `<ellipse cx="50" cy="43" rx="${hijab ? 13 : 15}" ry="${hijab ? 16 : 18}" fill="${t.tone.face}"/>`,
    // A shade down the far side of the face, so it reads as lit from the glow.
    `<path d="M${hijab ? 58 : 60} 28c6 6 7 22 0 31 3-9 3-22 0-31z" fill="${t.tone.shade}" opacity=".7"/>`,
  );

  if (hair) parts.push(hair.front);
  else parts.push(maleHair(t.style));

  if (!female && t.beard) {
    parts.push(
      `<path d="M35.5 46c1 13 7 17 14.5 17s13.5-4 14.5-17c-3 7-7 9-14.5 9s-11.5-2-14.5-9z" fill="${HAIR}"/>`,
    );
  }

  // Features.
  parts.push(
    `<path d="M41 38.5h6M53 38.5h6" stroke="${HAIR}" stroke-width="1.3" stroke-linecap="round"/>`,
    `<ellipse cx="44" cy="43" rx="1.4" ry="1.6" fill="${VOID}"/>`,
    `<ellipse cx="56" cy="43" rx="1.4" ry="1.6" fill="${VOID}"/>`,
    `<path d="M50 45v5l-1.6 1" stroke="${t.tone.shade}" stroke-width=".9" fill="none" stroke-linecap="round"/>`,
    `<path d="M45.5 54.5c2.6 1.8 6.4 1.8 9 0" stroke="${VOID}" stroke-opacity=".7" stroke-width="1" fill="none" stroke-linecap="round"/>`,
  );

  if (t.glasses) {
    parts.push(
      `<rect x="39.5" y="40" width="9" height="6.5" rx="1" fill="none" stroke="${VOLT}" stroke-width="1"/>`,
      `<rect x="51.5" y="40" width="9" height="6.5" rx="1" fill="none" stroke="${VOLT}" stroke-width="1"/>`,
      `<path d="M48.5 42.5h3" stroke="${VOLT}" stroke-width="1"/>`,
    );
  }

  // Stethoscope, in volt whatever the accent — it is the one medical cue.
  parts.push(
    `<path d="M41 72c-3 9-1 16 5 19M59 72c3 9 1 16-5 19" stroke="${VOID}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`,
    `<path d="M46 91c2 1.4 6 1.4 8 0" stroke="${VOID}" stroke-width="1.8" fill="none"/>`,
    `<path d="M58 88c6 1 9 4 9 8" stroke="${VOID}" stroke-width="1.6" fill="none"/>`,
    `<circle cx="67" cy="96" r="2.6" fill="${VOLT}" stroke="${VOID}" stroke-width=".8"/>`,
  );

  // HUD corners and scanlines over everything.
  parts.push(
    `<path d="M3 11V3h8M89 3h8v8M97 89v8h-8M11 97H3v-8" stroke="${VOLT}" stroke-width="1" fill="none"/>`,
    `<rect width="100" height="100" fill="url(#s)"/>`,
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="480" height="480">
<defs>
<radialGradient id="g"><stop offset="0" stop-color="${t.accent}" stop-opacity=".42"/><stop offset="1" stop-color="${t.accent}" stop-opacity="0"/></radialGradient>
<pattern id="s" width="1.6" height="1.6" patternUnits="userSpaceOnUse"><rect width="1.6" height=".5" fill="${VOID}" opacity=".16"/></pattern>
</defs>
${parts.join("\n")}
</svg>
`;
}
