import Link from "next/link";

import { PartyDot } from "@/components/cards/PartyDot";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getPartyById } from "@/lib/mock/parties";
import { newsEvents } from "@/lib/mock/newsEvents";

export default function NewsIndexPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 md:px-10">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          News desk
        </p>
        <h1 className="font-serif text-4xl leading-tight text-foreground">
          Briefings with bot-ready context
        </h1>
      </header>
      <div className="flex flex-col gap-5">
        {newsEvents.map((n) => (
          <Card
            key={n.id}
            className="rounded-2xl border-border bg-card p-6 shadow-card"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
                <Link
                  href={`/app/news/${n.id}`}
                  className="font-serif text-2xl leading-snug text-foreground hover:text-primary"
                >
                  {n.title}
                </Link>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {n.summary[0]}
                </p>
              </div>
              <Badge variant="outline" className="rounded-full border-border">
                Updated {new Date(n.updatedAt).toLocaleString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {n.involvedPartyIds.map((pid) => {
                const party = getPartyById(pid);
                if (!party) return null;
                return (
                  <Badge
                    key={pid}
                    variant="outline"
                    className="gap-1 rounded-full border-border px-2 py-0.5 text-[11px] font-normal text-muted-foreground"
                  >
                    <PartyDot color={party.color} label={party.name} />
                    {party.name}
                  </Badge>
                );
              })}
            </div>
            <Link
              href={`/app/news/${n.id}`}
              className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Open briefing →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
