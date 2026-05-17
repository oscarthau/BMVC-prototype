import Link from "next/link";

import { PartyDot } from "@/components/cards/PartyDot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPartyById } from "@/lib/mock/parties";
import type { NewsEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

export function NewsCard({
  item,
  hrefToNews,
}: {
  item: NewsEvent;
  hrefToNews: string;
}) {
  return (
    <Card
      className={cn(
        "overflow-hidden rounded-2xl border-border bg-card shadow-card transition-transform hover:-translate-y-0.5",
      )}
    >
      <div className="flex flex-col md:flex-row">
        <div
          className="h-40 w-full shrink-0 md:h-auto md:w-[38%]"
          style={{
            background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
          }}
          aria-hidden
        />
        <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
          <div className="space-y-3">
            <h3 className="font-serif text-balance text-2xl leading-tight tracking-tight text-foreground md:text-[26px]">
              {item.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {item.summary[0]} {item.summary[1]}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Stances · parties
            </span>
            <div className="flex flex-wrap gap-1">
              {item.involvedPartyIds.map((pid) => {
                const party = getPartyById(pid);
                if (!party) return null;
                return (
                  <Badge
                    key={pid}
                    variant="outline"
                    className="gap-1 rounded-full border-border bg-background px-2 py-0.5 text-[11px] font-normal text-muted-foreground"
                  >
                    <PartyDot color={party.color} label={party.name} />
                    <span>{party.name}</span>
                  </Badge>
                );
              })}
            </div>
          </div>
          <div className="mt-auto flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href={hrefToNews}>Ask a bot →</Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-full text-primary">
              <Link href={hrefToNews}>Open briefing</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
