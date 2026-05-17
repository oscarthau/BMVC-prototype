import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/marketing/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-sm font-semibold text-primary">
          Benchmate
        </Link>
        <div className="flex gap-3">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/politician">Producer demo</Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/onboarding">Try the prototype</Link>
          </Button>
        </div>
      </header>
      <Hero />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3 md:px-12 lg:px-16">
        <FeatureCard
          title="Personal"
          body="Pick the topics you care about and get answers that match what you're actually curious about."
        />
        <FeatureCard
          title="Sourced"
          body="Every answer points back to the speech, interview, or party programme it came from."
        />
        <FeatureCard
          title="Transparent"
          body="It's not the politician - it's a bot. We tell you clearly, every time."
        />
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-28 md:px-12 lg:px-16">
        <Card className="rounded-3xl border-border bg-card p-10 shadow-card">
          <p className="font-serif text-[26px] leading-snug text-foreground md:text-[28px]">
            &ldquo;I never know where to look when something big happens. It all
            drowns in memes.&rdquo;
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Mette, 24, student
          </p>
        </Card>
      </section>
      <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted-foreground md:px-12">
        A CBS exam project · Spring 2026 · No real politicians were involved.
      </footer>
      <div className="fixed bottom-6 right-6 hidden md:block">
        <Button
          asChild
          size="lg"
          className="rounded-full bg-primary text-primary-foreground shadow-card hover:bg-primary/90"
        >
          <Link href="/onboarding">
            Start demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <Card className="h-full rounded-2xl border-border bg-card p-8 shadow-card">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        {body}
      </p>
    </Card>
  );
}
