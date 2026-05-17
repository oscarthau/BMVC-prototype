import Link from "next/link";

import { PartyDot } from "@/components/cards/PartyDot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dicebearAvatar } from "@/lib/constants";
import { getPartyById } from "@/lib/mock/parties";
import type { Politician } from "@/lib/types";

export function PoliticianCard({ pol }: { pol: Politician }) {
  const party = getPartyById(pol.partyId);
  return (
    <Card className="flex h-full flex-col rounded-2xl border-border bg-card p-6 shadow-card">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 rounded-xl border border-border">
          <AvatarImage
            src={dicebearAvatar(pol.avatarSeed)}
            alt={`Illustrated portrait for ${pol.name}`}
          />
          <AvatarFallback>{pol.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-lg font-medium leading-none text-foreground">
              {pol.name}
            </h3>
            {party && (
              <Badge
                variant="outline"
                className="gap-1 rounded-full border-border px-2 py-0 text-[11px] font-normal text-muted-foreground"
              >
                <PartyDot color={party.color} label={party.name} />
                {party.name}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{pol.role}</p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {pol.bio}
          </p>
        </div>
      </div>
      <div className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Most asked about
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {pol.mostAskedTopics.map((t) => (
          <span
            key={t}
            className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <Button
        asChild
        className="mt-6 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Link href={`/app/politicians/${pol.id}`}>Chat with bot</Link>
      </Button>
    </Card>
  );
}
