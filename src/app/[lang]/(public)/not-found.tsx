import { en } from "@/lib/i18n/dictionaries/en";
import { bn } from "@/lib/i18n/dictionaries/bn";
import { NotFoundView } from "@/components/not-found-view";

/**
 * The public 404, inside the header and footer.
 *
 * A not-found file receives no props, so it cannot read the locale from
 * params. Both languages' few strings go to a client view that reads the
 * locale from the URL — that section only, not the whole dictionary.
 */
export default function NotFound() {
  return <NotFoundView strings={{ en: en.notFound, bn: bn.notFound }} />;
}
