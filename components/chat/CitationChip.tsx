"use client";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getSourceById } from "@/lib/mock/sources";
import { cn } from "@/lib/utils";

export function CitationChip({
  displayIndex,
  sourceId,
  className,
}: {
  displayIndex: number;
  sourceId: string;
  className?: string;
}) {
  const src = getSourceById(sourceId);

  return (
    <HoverCard openDelay={80}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className={cn(
            "mx-0.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded border border-border bg-muted px-1 text-[11px] font-medium text-primary transition hover:border-primary/60",
            className,
          )}
        >
          [{displayIndex}]
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 space-y-3 rounded-xl border-border bg-card p-4 shadow-card">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Source
          </p>
          <p className="text-sm font-medium leading-snug text-foreground">
            {src?.title ?? "Approved material"}
          </p>
          <p className="text-xs text-muted-foreground">{src?.snippet}</p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full rounded-full border-border"
          onClick={() => {}}
        >
          <ExternalLink className="mr-2 h-3.5 w-3.5" />
          Open source
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
}
