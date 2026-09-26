import { NextResponse } from "next/server";
import { getPublicCards } from "@/lib/data/doctors";
import { getTaxonomy } from "@/lib/data/taxonomy";

/**
 * The site-wide search palette's data: every public card, plus the terms at
 * least one of them carries.
 *
 * Fetched by the palette the first time it opens, not embedded in every page.
 * Most visitors never open it, and putting the whole roster into the HTML of
 * every page would charge all of them for the few who do.
 *
 * Static and revalidated on the directory's own window, so this is one Redis
 * read per five minutes however many people search.
 */
export const revalidate = 300;

export async function GET() {
  const [cards, taxonomy] = await Promise.all([getPublicCards(), getTaxonomy()]);

  const used = {
    speciality: new Set(cards.flatMap((card) => card.specialityIds)),
    hospital: new Set(cards.flatMap((card) => card.hospitalIds)),
    location: new Set(cards.flatMap((card) => card.locationIds)),
  };

  return NextResponse.json({
    cards,
    specialities: taxonomy.specialities.filter((t) => used.speciality.has(t.id)),
    hospitals: taxonomy.hospitals.filter((t) => used.hospital.has(t.id)),
    locations: taxonomy.locations.filter((t) => used.location.has(t.id)),
  });
}
