"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { commandHits } from "@/lib/command-search-data";

export function AppCommand({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const router = useRouter();

  const grouped = React.useMemo(() => {
    const map = new Map<string, typeof commandHits>();
    for (const hit of commandHits) {
      const arr = map.get(hit.group) ?? [];
      arr.push(hit);
      map.set(hit.group, arr);
    }
    return map;
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search politicians, parties, news…" />
      <CommandList>
        <CommandEmpty>No mock results — try “Greenland”.</CommandEmpty>
        {Array.from(grouped.entries()).map(([group, hits]) => (
          <CommandGroup key={group} heading={group}>
            {hits.slice(0, 8).map((hit, idx) => (
              <CommandItem
                key={`${group}-${idx}`}
                value={`${hit.title} ${hit.subtitle}`}
                onSelect={() => {
                  onOpenChange(false);
                  router.push(hit.href);
                }}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{hit.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {hit.subtitle}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}

export function TopBarSearchTrigger({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-left text-sm text-muted-foreground shadow-sm transition hover:border-primary/40 hover:text-foreground"
    >
      <Search className="h-4 w-4" />
      <span className="flex-1">Search…</span>
      <kbd className="hidden rounded border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-block">
        ⌘K
      </kbd>
    </button>
  );
}
