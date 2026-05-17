"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { PoliticianCard } from "@/components/cards/PoliticianCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { parties } from "@/lib/mock/parties";
import { politicians } from "@/lib/mock/politicians";
import { cn } from "@/lib/utils";

type SortKey = "active" | "asked" | "az";

const sortLabels: Record<SortKey, string> = {
  active: "Most active",
  asked: "Most asked",
  az: "A–Z",
};

export default function PoliticiansDirectoryPage() {
  const [query, setQuery] = React.useState("");
  const [partyId, setPartyId] = React.useState<string | "all">("all");
  const [sort, setSort] = React.useState<SortKey>("active");

  const filtered = React.useMemo(() => {
    let list = [...politicians];
    if (partyId !== "all") {
      list = list.filter((p) => p.partyId === partyId);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) => {
        const partyName =
          parties.find((x) => x.id === p.partyId)?.name.toLowerCase() ?? "";
        return (
          p.name.toLowerCase().includes(q) ||
          partyName.includes(q) ||
          p.role.toLowerCase().includes(q)
        );
      });
    }
    list.sort((a, b) => {
      if (sort === "az") return a.name.localeCompare(b.name);
      if (sort === "asked") {
        return b.mostAskedTopics.length - a.mostAskedTopics.length;
      }
      return a.id.localeCompare(b.id);
    });
    return list;
  }, [partyId, query, sort]);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 md:px-10">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Politicians
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-4xl leading-tight text-foreground">
              Choose who you want to question
            </h1>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Every profile opens a cited bot trained only on approved material -
              still verify anything consequential.
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full border-border bg-card"
              >
                Sort · {sortLabels[sort]}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              {(Object.keys(sortLabels) as SortKey[]).map((key) => (
                <DropdownMenuItem key={key} onClick={() => setSort(key)}>
                  {sortLabels[key]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or party"
        className="h-12 rounded-2xl border-border bg-card text-[15px] shadow-sm"
      />

      <div className="flex flex-wrap gap-2">
        <FilterChip
          active={partyId === "all"}
          onClick={() => setPartyId("all")}
          label="All"
        />
        {parties.map((p) => (
          <FilterChip
            key={p.id}
            active={partyId === p.id}
            onClick={() => setPartyId(p.id)}
            label={p.name}
            dot={p.color}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((pol) => (
          <PoliticianCard key={pol.id} pol={pol} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No fictional politicians match that filter yet - loosen your search.
        </p>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
  dot,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  dot?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition",
        active
          ? "border-primary bg-muted text-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary/40",
      )}
    >
      {dot && (
        <span
          className="h-2 w-2 rounded-full ring-2 ring-background"
          style={{ backgroundColor: dot }}
        />
      )}
      {label}
    </button>
  );
}
