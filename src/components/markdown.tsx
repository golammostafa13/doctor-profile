import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A small, strict Markdown renderer for blog posts.
 *
 * Builds React elements; never `dangerouslySetInnerHTML`. The text comes from
 * a form a doctor filled in — which is to say from whoever holds that doctor's
 * password — so the only markup that exists is the markup this file creates:
 *
 *   ## / ### headings · paragraphs · - and 1. lists · > quotes · --- rules
 *   **bold** · *italic* · `code` · [links](https://…)
 *
 * Links must be https://, and carry rel="nofollow ugc noopener". Anything
 * else — raw HTML included — renders as the literal text it is.
 */

type Block =
  | { kind: "h2" | "h3" | "p" | "quote"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "hr" };

function parseBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: { kind: "ul" | "ol"; items: string[] } | null = null;
  let quote: string[] = [];

  const flush = () => {
    if (para.length) blocks.push({ kind: "p", text: para.join(" ") });
    if (list) blocks.push(list);
    if (quote.length) blocks.push({ kind: "quote", text: quote.join(" ") });
    para = [];
    list = null;
    quote = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      continue;
    }
    let m: RegExpMatchArray | null;
    if ((m = trimmed.match(/^(#{2,3})\s+(.*)$/))) {
      flush();
      blocks.push({ kind: m[1].length === 2 ? "h2" : "h3", text: m[2] });
    } else if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      flush();
      blocks.push({ kind: "hr" });
    } else if ((m = trimmed.match(/^[-*]\s+(.*)$/))) {
      if (!list || list.kind !== "ul") {
        flush();
        list = { kind: "ul", items: [] };
      }
      list.items.push(m[1]);
    } else if ((m = trimmed.match(/^\d+[.)]\s+(.*)$/))) {
      if (!list || list.kind !== "ol") {
        flush();
        list = { kind: "ol", items: [] };
      }
      list.items.push(m[1]);
    } else if ((m = trimmed.match(/^>\s?(.*)$/))) {
      if (!quote.length) flush();
      quote.push(m[1]);
    } else if (list && /^\s{2,}/.test(raw)) {
      // An indented continuation of the last list item.
      list.items[list.items.length - 1] += ` ${trimmed}`;
    } else {
      if (list || quote.length) flush();
      para.push(trimmed);
    }
  }
  flush();
  return blocks;
}

const INLINE = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const match of text.matchAll(INLINE)) {
    const token = match[0];
    const at = match.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    const key = `${keyBase}-${i++}`;
    if (token.startsWith("**")) {
      out.push(<strong key={key} className="font-semibold text-ink">{inline(token.slice(2, -2), key)}</strong>);
    } else if (token.startsWith("`")) {
      out.push(<code key={key} className="bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-accent">{token.slice(1, -1)}</code>);
    } else if (token.startsWith("[")) {
      const m = token.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      const href = m?.[2] ?? "";
      if (m && /^https:\/\/[^\s]+$/i.test(href)) {
        out.push(
          <a key={key} href={href} rel="nofollow ugc noopener noreferrer" target="_blank" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
            {m[1]}
          </a>,
        );
      } else {
        out.push(token);
      }
    } else {
      out.push(<em key={key}>{inline(token.slice(1, -1), key)}</em>);
    }
    last = at + token.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source, className }: { source: string; className?: string }) {
  const blocks = parseBlocks(source);
  return (
    <div className={cn("space-y-5 text-[1.05rem] leading-[1.8] text-ink-mute", className)}>
      {blocks.map((block, n) => {
        const k = `b${n}`;
        switch (block.kind) {
          case "h2":
            return <h2 key={k} className="pt-4 font-display text-2xl font-bold uppercase tracking-tight text-ink">{inline(block.text, k)}</h2>;
          case "h3":
            return <h3 key={k} className="pt-2 font-display text-xl font-semibold text-ink">{inline(block.text, k)}</h3>;
          case "quote":
            return (
              <blockquote key={k} className="border-l-2 border-accent bg-accent-soft/40 py-3 pl-5 pr-4 text-ink">
                {inline(block.text, k)}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={k} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span aria-hidden className="mt-[0.72em] size-1.5 shrink-0 bg-accent" />
                    <span>{inline(item, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={k} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span aria-hidden className="w-6 shrink-0 font-mono text-sm leading-[1.9] text-accent">{String(j + 1).padStart(2, "0")}</span>
                    <span>{inline(item, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ol>
            );
          case "hr":
            return <hr key={k} className="border-line" />;
          default:
            return <p key={k}>{inline(block.text, k)}</p>;
        }
      })}
    </div>
  );
}
