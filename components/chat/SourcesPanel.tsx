"use client";

import * as React from "react";
import {
  BookMarked,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  FileText,
  MessageSquare,
  Mic,
  Vote,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { SourceType } from "@/lib/types";
import { getSourceById } from "@/lib/mock/sources";
import { cn } from "@/lib/utils";

function TypeIcon({ type }: { type: SourceType }) {
  switch (type) {
    case "speech":
      return <Mic className="h-4 w-4 text-muted-foreground" />;
    case "paper":
      return <FileText className="h-4 w-4 text-muted-foreground" />;
    case "interview":
      return <MessageSquare className="h-4 w-4 text-muted-foreground" />;
    case "vote":
      return <Vote className="h-4 w-4 text-muted-foreground" />;
    case "article":
      return <BookMarked className="h-4 w-4 text-muted-foreground" />;
    case "tweet":
      return <MessageSquare className="h-4 w-4 text-muted-foreground" />;
    default:
      return <FileText className="h-4 w-4 text-muted-foreground" />;
  }
}

export function SourcesPanel({
  sourceIds,
  defaultOpen = false,
}: {
  sourceIds: string[];
  defaultOpen?: boolean;
}) {
  const unique = Array.from(new Set(sourceIds));
  const [open, setOpen] = React.useState(defaultOpen);

  if (unique.length === 0) return null;

  return (
    <div className="mt-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? "Hide sources" : `Show sources (${unique.length})`}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            open ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
      {open && (
        <div className="mt-3 space-y-3">
          <Separator className="bg-border" />
          {unique.map((id) => {
            const src = getSourceById(id);
            if (!src) return null;
            return (
              <div key={id} className="flex gap-3 rounded-lg bg-background/80 p-3">
                <TypeIcon type={src.type} />
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {src.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 capitalize">
                      {src.type}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {src.date}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {src.snippet}
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="mt-1 h-8 rounded-full px-2 text-xs text-primary"
                    onClick={() => {}}
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Open source
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
