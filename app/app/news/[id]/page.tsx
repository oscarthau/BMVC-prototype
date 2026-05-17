import Link from "next/link";
import { notFound } from "next/navigation";

import { PartyDot } from "@/components/cards/PartyDot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPartyById } from "@/lib/mock/parties";
import { getNewsEventById } from "@/lib/mock/newsEvents";

export default function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const item = getNewsEventById(params.id);
  if (!item) notFound();

  const relative = formatRelative(item.updatedAt);

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-10 md:px-10">
      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Last updated {relative}
          </Badge>
          <Badge className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            8 sources
          </Badge>
        </div>
        <h1 className="font-serif text-balance text-4xl leading-tight text-foreground md:text-[44px]">
          {item.title}
        </h1>
        <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
          {item.summary.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          How the parties see it
        </h2>
        <Card className="divide-y divide-border rounded-3xl border-border bg-card shadow-card">
          {item.partyStances.map((row) => {
            const party = getPartyById(row.partyId);
            if (!party) return null;
            const href = `/app/politicians/${row.chatPoliticianId}?q=${encodeURIComponent(row.prefilledQuestion)}`;
            return (
              <div
                key={row.partyId}
                className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center"
              >
                <div className="flex flex-1 items-start gap-3">
                  <PartyDot color={party.color} label={party.name} size="md" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {party.name}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {row.stance}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-border md:w-auto"
                >
                  <Link href={href}>Chat →</Link>
                </Button>
              </div>
            );
          })}
        </Card>
      </section>
    </div>
  );
}

function formatRelative(iso: string) {
  const delta = Date.now() - new Date(iso).getTime();
  const mins = Math.round(delta / 60000);
  if (mins < 120) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  return `${hrs} hr ago`;
}
