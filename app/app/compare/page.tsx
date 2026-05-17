import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 md:px-10">
      <Card className="rounded-3xl border-border bg-card p-10 text-center shadow-card">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Compare
        </p>
        <h1 className="mt-4 font-serif text-3xl text-foreground">
          Side-by-side stances are almost here
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          This stretch route is stubbed for the exam timeline. Use party rows on a
          news briefing or open two bot tabs for now.
        </p>
        <Button asChild className="mt-8 rounded-full bg-primary text-primary-foreground">
          <Link href="/app/news">Browse news briefings</Link>
        </Button>
      </Card>
    </div>
  );
}
