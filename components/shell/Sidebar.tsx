"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bookmark,
  Home,
  Landmark,
  Newspaper,
  UserRound,
  Users,
} from "lucide-react";

import { StanceBrand } from "@/components/brand/StanceBrand";
import { cn } from "@/lib/utils";

const links = [
  { href: "/app", label: "Home", icon: Home },
  { href: "/app/news", label: "News", icon: Newspaper },
  { href: "/app/politicians", label: "Politicians", icon: Users },
  { href: "/app/parties", label: "Parties", icon: Landmark },
  { href: "/app/saved", label: "Saved", icon: Bookmark },
  { href: "/app/profile", label: "Profile", icon: UserRound },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[240px] shrink-0 flex-col border-r border-border bg-card px-4 py-8 lg:flex">
      <StanceBrand href="/" className="mb-10 px-3" />
      <nav className="flex flex-1 flex-col gap-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/app"
              ? pathname === "/app"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                active
                  ? "border-l-2 border-primary bg-muted/60 font-semibold text-foreground"
                  : "border-l-2 border-transparent text-muted-foreground hover:bg-muted/40 hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
      <p className="px-3 pt-8 text-xs leading-relaxed text-muted-foreground">
        Demo mode · no authentication
      </p>
    </aside>
  );
}
