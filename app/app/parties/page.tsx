import Link from "next/link";

import { PartyDot } from "@/components/cards/PartyDot";
import { Card } from "@/components/ui/card";
import { parties } from "@/lib/mock/parties";
import { getPoliticiansByParty } from "@/lib/mock/politicians";

export default function PartiesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 md:px-10">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Parties
        </p>
        <h1 className="font-serif text-4xl leading-tight text-foreground">
          Chat with party-level bots
        </h1>
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Aggregate personas stitch together programme language and recorded
          member votes - still experimental, still cited.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {parties.map((party) => {
          const count = getPoliticiansByParty(party.id).length;
          return (
            <Card
              key={party.id}
              className="rounded-3xl border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-semibold text-primary-foreground"
                  style={{ backgroundColor: party.color }}
                >
                  {party.shortCode}
                </div>
                <div className="min-w-0 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-foreground">
                      {party.name}
                    </h2>
                    <PartyDot color={party.color} label={party.name} />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {party.description}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {count} fictional MPs in prototype
                  </p>
                  <Link
                    href={`/app/parties/${party.id}`}
                    className="inline-flex text-sm font-medium text-primary hover:underline"
                  >
                    Open party bot →
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
