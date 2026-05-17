import Link from "next/link";
import {
  BookMarked,
  ExternalLink,
  FileText,
  MessageSquare,
  Mic,
  Vote,
} from "lucide-react";

import { PartyDot } from "@/components/cards/PartyDot";
import { PositionSnapshot } from "@/components/politician/PositionSnapshot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dicebearAvatar } from "@/lib/constants";
import { getPartyById } from "@/lib/mock/parties";
import { getSourceById } from "@/lib/mock/sources";
import type { Politician, SourceType } from "@/lib/types";

function TypeGlyph({ type }: { type: SourceType }) {
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

export function PoliticianLeftPane({ pol }: { pol: Politician }) {
  const party = getPartyById(pol.partyId);

  return (
    <div className="flex flex-col gap-6">
      <Card className="rounded-3xl border-border bg-card p-6 shadow-card">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 rounded-2xl border border-border">
            <AvatarImage
            src={dicebearAvatar(pol.avatarSeed)}
            alt={`Illustrated portrait for ${pol.name}`}
          />
            <AvatarFallback>{pol.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold leading-tight text-foreground">
                {pol.name}
              </h1>
              {party && (
                <Badge
                  variant="outline"
                  className="gap-1 rounded-full border-border px-2 py-0.5 text-[11px] font-normal text-muted-foreground"
                >
                  <PartyDot color={party.color} label={party.name} />
                  {party.name}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{pol.role}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {pol.constituency}
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {pol.bio}
            </p>
          </div>
        </div>
      </Card>

      <Card className="rounded-3xl border-border bg-card p-6 shadow-card">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Bot training material
        </p>
        <div className="mt-4 space-y-3">
          {pol.trainingSourceIds.map((sid) => {
            const src = getSourceById(sid);
            if (!src) return null;
            return (
              <div
                key={sid}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background/80 px-3 py-3"
              >
                <TypeGlyph type={src.type} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {src.title}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {src.type} · {src.date}
                  </p>
                </div>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="rounded-full"
                  aria-label="Open source"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="rounded-3xl border-border bg-card p-6 shadow-card">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Position snapshot
        </p>
        <div className="mt-4">
          <PositionSnapshot snapshot={pol.positionSnapshot} />
        </div>
      </Card>

      <Card className="rounded-3xl border-border bg-primary/5 p-6 text-[15px] leading-relaxed text-muted-foreground shadow-inner">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Disclaimer
        </p>
        <p className="mt-3">
          This is not {pol.name}. It&apos;s an AI bot trained on {pol.name}&apos;s
          public statements and material approved by their office. Verify before
          acting on its answers.
        </p>
      </Card>

      <Button asChild variant="outline" className="rounded-full border-border">
        <Link href={`/app/parties/${pol.partyId}`}>View party aggregate bot</Link>
      </Button>
    </div>
  );
}
