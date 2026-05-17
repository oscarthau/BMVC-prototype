import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-28 md:px-12 md:pb-32 md:pt-36 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Benchmate · CBS exam prototype
        </p>
        <h1 className="mt-6 font-serif text-balance text-[48px] leading-[1.05] tracking-tight text-foreground md:text-[56px] lg:text-[60px]">
          Politics, without the noise.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
          Ask AI versions of Danish politicians your real questions — with
          sources, and without the sharp elbows of social media.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/onboarding">Try the prototype</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-card px-8 text-foreground hover:bg-muted"
          >
            <Link href="/politician">I&apos;m a politician</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
