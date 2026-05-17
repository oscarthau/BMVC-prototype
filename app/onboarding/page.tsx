"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { StanceBrand } from "@/components/brand/StanceBrand";
import { TopicIcon } from "@/components/cards/TopicIcon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { STORAGE_KEYS } from "@/lib/constants";
import { topics } from "@/lib/mock/topics";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
  const [step, setStep] = React.useState(1);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [bias, setBias] = React.useState([42]);
  const [partyFilter, setPartyFilter] = React.useState<"all" | "curious">(
    "all",
  );
  const [accepted, setAccepted] = React.useState(false);

  const toggleTopic = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };

  const persistAndEnter = () => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(
      STORAGE_KEYS.onboardingTopics,
      JSON.stringify(selected),
    );
    window.sessionStorage.setItem(
      STORAGE_KEYS.feedBias,
      JSON.stringify({ value: bias[0] }),
    );
    window.sessionStorage.setItem(
      STORAGE_KEYS.partyFilter,
      partyFilter,
    );
  };

  const stepValid =
    step === 1
      ? selected.length >= 3 && selected.length <= 5
      : step === 2
        ? true
        : accepted;

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center justify-between">
          <StanceBrand href="/" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Step {step} / 3
          </span>
        </div>
        <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {step === 1 && (
          <Card className="rounded-3xl border-border bg-card p-8 shadow-card md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Pick your topics
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground">
              Shape your feed
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Pick 3-5 topics you care about most.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {topics.map((t) => {
                const active = selected.includes(t.id);
                return (
                  <motion.button
                    key={t.id}
                    type="button"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggleTopic(t.id)}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-colors",
                      active
                        ? "border-primary bg-muted/70"
                        : "border-border bg-background hover:bg-muted/40",
                    )}
                  >
                    <TopicIcon
                      name={t.icon}
                      className="mt-0.5 h-5 w-5 text-primary"
                    />
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {t.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {t.description}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="rounded-3xl border-border bg-card p-8 shadow-card md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Tune your feed
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground">
              Balance versus bias
            </h1>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Balanced ←→ Closer to my views
            </p>
            <Slider
              value={bias}
              max={100}
              step={1}
              onValueChange={setBias}
              className="mt-4"
            />
            <div className="mt-10 space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Party coverage
              </p>
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border px-4 py-3">
                <input
                  type="radio"
                  name="party"
                  checked={partyFilter === "all"}
                  onChange={() => setPartyFilter("all")}
                  className="accent-primary"
                />
                <span className="text-sm text-foreground">Show all parties</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border px-4 py-3">
                <input
                  type="radio"
                  name="party"
                  checked={partyFilter === "curious"}
                  onChange={() => setPartyFilter("curious")}
                  className="accent-primary"
                />
                <span className="text-sm text-foreground">
                  Only parties I&apos;m curious about
                </span>
              </label>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card className="rounded-3xl border-border bg-card p-8 shadow-card md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Before you start
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground">
              Read this once
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              These bots are not the politicians themselves. They are AI personas
              trained on public statements and material that politicians or their
              offices have approved. Always verify before acting on what they say.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-muted/40 px-4 py-3">
              <Checkbox
                id="accept"
                checked={accepted}
                onCheckedChange={(v) => setAccepted(Boolean(v))}
              />
              <Label htmlFor="accept" className="text-sm leading-relaxed">
                I understand
              </Label>
            </div>
          </Card>
        )}

        <div className="mt-10 flex flex-wrap justify-between gap-4">
          <Button
            variant="ghost"
            className="rounded-full"
            disabled={step === 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
          >
            Back
          </Button>
          {step < 3 ? (
            <Button
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={!stepValid}
              onClick={() => stepValid && setStep((s) => s + 1)}
            >
              Continue
            </Button>
          ) : (
            <Button
              asChild
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={!stepValid}
            >
              <Link
                href="/app"
                aria-disabled={!stepValid}
                className={!stepValid ? "pointer-events-none opacity-50" : undefined}
                onClick={(e) => {
                  if (!stepValid) {
                    e.preventDefault();
                    return;
                  }
                  persistAndEnter();
                }}
              >
                Enter the platform
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
