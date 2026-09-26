"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClipboardList,
  FileText,
  Gauge,
  KeyRound,
  Megaphone,
  Newspaper,
  Settings,
  Stethoscope,
  Tags,
  UserRound,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Icons by name, because a component cannot be passed from a server layout. */
const ICONS = {
  gauge: Gauge,
  doctors: Stethoscope,
  applications: ClipboardList,
  lists: Tags,
  ads: Megaphone,
  blog: Newspaper,
  settings: Settings,
  system: Wrench,
  profile: UserRound,
  posts: FileText,
  account: KeyRound,
} as const;

export interface NavItem {
  href: string;
  label: string;
  icon: keyof typeof ICONS;
  exact?: boolean;
  badge?: number;
}

export function DashNav({ items, label }: { items: NavItem[]; label: string }) {
  const pathname = usePathname();
  return (
    <nav aria-label={label} className="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:px-0">
      <ul className="flex gap-1 lg:flex-col">
        {items.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
          const Icon = ICONS[item.icon];
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex h-10 items-center gap-3 px-3 font-display text-[0.82rem] font-semibold uppercase tracking-[0.08em] transition-colors",
                  active ? "cut bg-accent text-accent-ink [--cut:8px]" : "text-ink-mute hover:bg-accent-soft hover:text-accent",
                )}
              >
                <Icon className="size-4 shrink-0" aria-hidden />
                <span>{item.label}</span>
                {item.badge ? (
                  <span
                    className={cn(
                      "ml-auto grid h-5 min-w-5 place-items-center px-1 font-mono text-[0.65rem]",
                      active ? "bg-accent-ink text-accent" : "bg-hot text-white",
                    )}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
