import type { DoctorProfile } from "@/lib/schema/doctor";
import { site } from "@/lib/site";

/**
 * A vCard for "Save Contact".
 *
 * vCard 3.0 rather than 4.0: 3.0 is what Android and iOS both import without
 * complaint, and 4.0 buys nothing a directory entry needs.
 *
 * The subtle part is line folding. RFC 2426 requires lines longer than 75
 * OCTETS to be folded, and a Bengali character is three octets in UTF-8 — so
 * folding by character count splits a line in the middle of a multi-byte
 * sequence, and iOS Contacts shows a name ending in a replacement character.
 * `fold()` below counts encoded bytes and only ever breaks between characters.
 */

function escape(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

/**
 * Fold a content line to 75 octets, continuation lines starting with a space.
 *
 * Breaks are chosen on character boundaries — never inside a UTF-8 sequence —
 * which is the whole reason this is not a `slice(0, 75)`.
 */
function fold(line: string): string {
  const encoder = new TextEncoder();
  if (encoder.encode(line).length <= 75) return line;

  const out: string[] = [];
  let current = "";
  let bytes = 0;
  // A continuation line carries a leading space, so it has one fewer octet
  // available for content.
  let limit = 75;

  for (const char of line) {
    const size = encoder.encode(char).length;
    if (bytes + size > limit) {
      out.push(current);
      current = char;
      bytes = size;
      limit = 74;
      continue;
    }
    current += char;
    bytes += size;
  }
  out.push(current);
  return out.join("\r\n ");
}

export function buildVCard(profile: DoctorProfile, lang: "en" | "bn"): string {
  const name = lang === "bn" && profile.name.bn ? profile.name.bn : profile.name.en;
  const speciality =
    lang === "bn" && profile.speciality.bn
      ? profile.speciality.bn
      : profile.speciality.en;
  const workplace =
    lang === "bn" && profile.workplace.bn
      ? profile.workplace.bn
      : profile.workplace.en;

  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escape(name)}`,
    // N is structured: family;given;additional;prefix;suffix. The stored name
    // is a single display string, so everything goes in `given` rather than
    // guessing which word is the family name — a guess that is wrong often
    // enough in Bengali naming to be worse than not splitting at all.
    `N:;${escape(name)};;;`,
    `TITLE:${escape(speciality)}`,
  ];

  if (workplace) lines.push(`ORG:${escape(workplace)}`);
  if (profile.degrees.length) {
    lines.push(`NOTE:${escape(profile.degrees.join(", "))}`);
  }
  if (profile.publicPhone) {
    lines.push(`TEL;TYPE=CELL:${profile.publicPhone}`);
  }
  for (const chamber of profile.chambers) {
    if (chamber.appointmentPhone) {
      lines.push(`TEL;TYPE=WORK:${chamber.appointmentPhone}`);
    }
    const address = lang === "bn" && chamber.address.bn ? chamber.address.bn : chamber.address.en;
    lines.push(`ADR;TYPE=WORK:;;${escape(address)};;;;`);
  }
  if (profile.publicEmail) lines.push(`EMAIL;TYPE=INTERNET:${profile.publicEmail}`);
  lines.push(`URL:${site.url}/${lang}/doctors/${profile.linkNo}`);
  lines.push(`REV:${new Date(profile.updatedAt).toISOString()}`);
  lines.push("END:VCARD");

  // CRLF, not LF: some importers reject a vCard that uses bare newlines.
  return lines.map(fold).join("\r\n") + "\r\n";
}
