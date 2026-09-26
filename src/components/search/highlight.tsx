import { highlight } from "@/lib/search";

/**
 * Text with the query's words marked, so a result shows why it matched.
 *
 * No directive: it renders wherever it is imported, server or client, and
 * with an empty query it is the plain text and nothing else.
 */
export function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  return (
    <>
      {highlight(text, query).map((part, i) =>
        part.hit ? (
          <mark key={i} className="hit">
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}
