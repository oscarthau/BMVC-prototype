"use client";

import * as React from "react";
import Link from "next/link";
import { Bookmark } from "lucide-react";

import { NewsCard } from "@/components/cards/NewsCard";
import { PartyDot } from "@/components/cards/PartyDot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DEMO_USER_FIRST_NAME, STORAGE_KEYS, dicebearAvatar } from "@/lib/constants";
import { timeBasedGreeting } from "@/lib/greeting";
import { newsEvents } from "@/lib/mock/newsEvents";
import { politicians } from "@/lib/mock/politicians";
import { topics } from "@/lib/mock/topics";
import { nicheTopics, trendingQuestions } from "@/lib/trending";
import { getPartyById } from "@/lib/mock/parties";

export default function VoterHomePage() {
  const [pickedTopics, setPickedTopics] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEYS.onboardingTopics);
      if (raw) setPickedTopics(JSON.parse(raw) as string[]);
    } catch {
      setPickedTopics([]);
    }
  }, []);

  const topicLabels = pickedTopics
    .map((id) => topics.find((t) => t.id === id)?.label)
    .filter(Boolean) as string[];

  const suggested = React.useMemo(() => {
    if (topicLabels.length === 0) return politicians.slice(0, 6);
    return politicians
      .filter((p) =>
        p.mostAskedTopics.some((t) =>
          topicLabels.map((l) => l.toLowerCase()).includes(t.toLowerCase()),
        ),
      )
      .slice(0, 8);
  }, [topicLabels]);

  return (
    <div className="px-4 py-10 md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-12">
        <div className="space-y-10">
          <header className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {timeBasedGreeting()}, {DEMO_USER_FIRST_NAME}
            </p>
            <h1 className="font-serif text-4xl leading-tight text-foreground md:text-[44px]">
              Here&apos;s what&apos;s moving today.
            </h1>
            <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Short briefings on the themes shaping Denmark right now - tap in,
              then ask a bot with citations attached.
            </p>
          </header>

          <section className="space-y-5">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              News desk
            </h2>
            <div className="flex flex-col gap-6">
              {newsEvents.slice(0, 4).map((n) => (
                <NewsCard key={n.id} item={n} hrefToNews={`/app/news/${n.id}`} />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Suggested politicians for you
              </h2>
              <Button asChild variant="ghost" className="rounded-full text-primary">
                <Link href="/app/politicians">Browse all</Link>
              </Button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3">
                {suggested.map((p) => {
                  const party = getPartyById(p.partyId);
                  return (
                    <Card
                      key={p.id}
                      className="inline-flex w-[260px] shrink-0 flex-col rounded-2xl border-border bg-card p-5 shadow-card"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-11 w-11 rounded-xl border border-border">
                          <AvatarImage
                            src={dicebearAvatar(p.avatarSeed)}
                            alt={`Illustrated portrait for ${p.name}`}
                          />
                          <AvatarFallback>{p.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">
                            {p.name}
                          </p>
                          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                            {party && (
                              <PartyDot color={party.color} label={party.name} />
                            )}
                            <span className="truncate">{party?.name}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                        Strongest on
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {p.mostAskedTopics.join(", ")}
                      </p>
                      <Button
                        asChild
                        className="mt-5 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Link href={`/app/politicians/${p.id}`}>Chat</Link>
                      </Button>
                    </Card>
                  );
                })}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Your saved chats
            </h2>
            <Card className="flex flex-col items-center justify-center rounded-2xl border-dashed border-border bg-muted/30 px-6 py-16 text-center shadow-none">
              <Bookmark className="h-8 w-8 text-muted-foreground" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                You haven&apos;t saved any conversations yet. Star a chat to find
                it here again.
              </p>
            </Card>
          </section>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24">
          <Card className="rounded-2xl border-border bg-card p-6 shadow-card">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Trending questions today
            </h3>
            <div className="mt-4 space-y-3">
              {trendingQuestions.slice(0, 4).map((item) => (
                <Link
                  key={item.q}
                  href={`/app/politicians/${item.politicianId}?q=${encodeURIComponent(item.q)}`}
                  className="block rounded-xl border border-border bg-background px-3 py-3 text-sm leading-snug text-foreground transition hover:border-primary/40"
                >
                  {item.q}
                </Link>
              ))}
            </div>
          </Card>

          <Card className="rounded-2xl border-border bg-card p-6 shadow-card">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Niche topics
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {nicheTopics.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Separator />

          <p className="text-xs leading-relaxed text-muted-foreground">
            Mock feed · parties shown as coloured dots only · no algorithms behind
            this prototype.
          </p>
        </aside>
      </div>
    </div>
  );
}
