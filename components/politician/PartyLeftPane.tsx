import Link from "next/link";

import { PartyDot } from "@/components/cards/PartyDot";
import { PositionSnapshot } from "@/components/politician/PositionSnapshot";
import { Card } from "@/components/ui/card";
import type { Party } from "@/lib/mock/parties";
import type { Politician } from "@/lib/types";

export function PartyLeftPane({
  party,
  members,
  snapshot,
}: {
  party: Party;
  members: Politician[];
  snapshot: Politician["positionSnapshot"];
}) {
  return (
    <div className="flex flex-col gap-6">
      <Card className="rounded-3xl border-border bg-card p-6 shadow-card">
        <div className="flex items-start gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-semibold text-primary-foreground shadow-inner"
            style={{ backgroundColor: party.color }}
          >
            {party.shortCode}
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold leading-tight text-foreground">
                {party.name}
              </h1>
              <PartyDot color={party.color} label={party.name} size="md" />
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {party.description}
            </p>
          </div>
        </div>
      </Card>

      <Card className="rounded-3xl border-border bg-card p-6 shadow-card">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Voices inside this aggregate bot
        </p>
        <div className="mt-4 space-y-3">
          {members.slice(0, 6).map((pol) => (
            <Link
              key={pol.id}
              href={`/app/politicians/${pol.id}`}
              className="flex items-center justify-between rounded-2xl border border-border px-3 py-2 text-sm text-foreground transition hover:border-primary/40"
            >
              <span>{pol.name}</span>
              <span className="text-xs text-muted-foreground">
                Individual bot →
              </span>
            </Link>
          ))}
        </div>
      </Card>

      <Card className="rounded-3xl border-border bg-card p-6 shadow-card">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Aggregated position snapshot
        </p>
        <div className="mt-4">
          <PositionSnapshot snapshot={snapshot} />
        </div>
      </Card>

      <Card className="rounded-3xl border-border bg-primary/5 p-6 text-[15px] leading-relaxed text-muted-foreground shadow-inner">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Disclaimer
        </p>
        <p className="mt-3">
          This party bot synthesises approved member statements and programme
          text. It is not a single politician - verify anything consequential.
        </p>
      </Card>
    </div>
  );
}
