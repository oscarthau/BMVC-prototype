"use client";

import * as React from "react";
import Link from "next/link";
import { Trash2, UploadCloud } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { parties } from "@/lib/mock/parties";
import { dicebearAvatar } from "@/lib/constants";

const defaultPrompt = `You are an AI representation of [Name]. You answer in English unless asked otherwise. You always cite a source from the approved material. If you're unsure, say so and refer the user to [Name]'s office. You never speculate about personal matters or unconfirmed future decisions.`;

type Tone = "Formal" | "Direct" | "Folksy";

const mockFiles = [
  "Greenland_strategy.pdf",
  "Health_regions_onepager.docx",
  "EU_AI_Act_notes.md",
  "Townhall_Aarhus.wav",
  "L142_vote_summary.pdf",
  "Party_programme_2030.pdf",
];

export default function ProducerDashboardPage() {
  const [name, setName] = React.useState("Maja Holm");
  const [party, setParty] = React.useState("socialdemokratiet");
  const [constituency, setConstituency] = React.useState("Storkredsen København");
  const [role, setRole] = React.useState("MP, Folketinget");
  const [bio, setBio] = React.useState(
    "Focus on welfare financing and pragmatic climate steps.",
  );
  const [prompt, setPrompt] = React.useState(defaultPrompt.replace(/\[Name\]/g, name));
  const [tone, setTone] = React.useState<Tone>("Formal");
  const [strictness, setStrictness] = React.useState([58]);
  const [files, setFiles] = React.useState(mockFiles);

  React.useEffect(() => {
    setPrompt(defaultPrompt.replace(/\[Name\]/g, name));
  }, [name]);

  const partyLabel = parties.find((p) => p.id === party)?.name ?? "";

  return (
    <div className="min-h-screen bg-background px-4 py-10 md:px-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-primary/15 bg-primary/5 px-6 py-4 text-sm text-muted-foreground">
          <p>
            You&apos;re signed in as{" "}
            <span className="font-semibold text-foreground">{name}</span> — Demo
            mode
          </p>
          <Button asChild variant="outline" className="rounded-full border-border">
            <Link href="/app">Switch to voter view</Link>
          </Button>
        </div>

        <header className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Producer console
          </p>
          <h1 className="font-serif text-4xl text-foreground">
            Shape how the bot represents you
          </h1>
        </header>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="rounded-full bg-muted/70 p-1">
            <TabsTrigger value="profile" className="rounded-full px-4">
              Profile
            </TabsTrigger>
            <TabsTrigger value="prompt" className="rounded-full px-4">
              System prompt
            </TabsTrigger>
            <TabsTrigger value="training" className="rounded-full px-4">
              Training material
            </TabsTrigger>
            <TabsTrigger value="insights" className="rounded-full px-4">
              Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="rounded-3xl border-border bg-card p-8 shadow-card">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-2xl border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="party">Party</Label>
                  <select
                    id="party"
                    value={party}
                    onChange={(e) => setParty(e.target.value)}
                    className="h-10 w-full rounded-2xl border border-border bg-background px-3 text-sm"
                  >
                    {parties.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="constituency">Constituency</Label>
                  <Input
                    id="constituency"
                    value={constituency}
                    onChange={(e) => setConstituency(e.target.value)}
                    className="rounded-2xl border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="rounded-2xl border-border"
                  />
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <Label htmlFor="bio">Short bio</Label>
                <Textarea
                  id="bio"
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="rounded-2xl border-border"
                />
              </div>

              <Separator className="my-8 bg-border" />

              <div className="flex flex-wrap items-center gap-6">
                <Avatar className="h-16 w-16 rounded-2xl border border-border">
                  <AvatarImage src={dicebearAvatar(name)} alt="" />
                  <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full border-border"
                      type="button"
                    >
                      Profile photo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-3xl border-border bg-card">
                    <DialogHeader>
                      <DialogTitle>Upload photo</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center gap-4 py-6">
                      <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-dashed border-border bg-muted/40 text-xs text-muted-foreground">
                        Mock thumbnail
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        This prototype skips real uploads - photographers stay on
                        holiday.
                      </p>
                      <Button type="button" className="rounded-full bg-primary">
                        Save pretend crop
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="prompt" className="space-y-6">
            <Card className="rounded-3xl border-border bg-card p-8 shadow-card">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                System prompt
              </Label>
              <Textarea
                rows={10}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="mt-3 rounded-2xl border-border font-mono text-sm leading-relaxed"
              />

              <div className="mt-8 space-y-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Tone
                </p>
                <div className="flex flex-wrap gap-2">
                  {(["Formal", "Direct", "Folksy"] as Tone[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                        tone === t
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex justify-between text-xs uppercase tracking-wider text-muted-foreground">
                  <span>Strictness</span>
                  <span>Loose ↔ Strict (only my exact words)</span>
                </div>
                <Slider
                  value={strictness}
                  max={100}
                  onValueChange={setStrictness}
                />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <Card className="rounded-3xl border-border bg-card p-8 shadow-card">
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/30 px-6 py-12 text-center">
                <UploadCloud className="h-8 w-8 text-muted-foreground" />
                <p className="mt-4 text-sm font-medium text-foreground">
                  Drop files here, or click to choose
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Cosmetic area · nothing uploads in this coursework build.
                </p>
                <Button type="button" variant="outline" className="mt-6 rounded-full">
                  Browse files
                </Button>
              </div>

              <div className="mt-8 space-y-3">
                {files.map((file) => (
                  <div
                    key={file}
                    className="flex items-center justify-between rounded-2xl border border-border px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{file}</p>
                      <p className="text-xs text-muted-foreground">Uploaded 3 days ago</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-muted-foreground hover:text-destructive"
                      onClick={() =>
                        setFiles((prev) => prev.filter((f) => f !== file))
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <Button
                type="button"
                className="mt-6 rounded-full bg-primary text-primary-foreground"
                onClick={() =>
                  toast("Retraining scheduled. Your bot will update in ~2 hours.")
                }
              >
                Retrain bot
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <InsightCard title="Conversations today" value="128" hint="+18%" />
              <InsightCard title="Top topics" value="Greenland, Defence" hint="Rolling 7d" />
              <InsightCard title="Avg. sentiment" value="Curious" hint="Not diagnostic" />
              <InsightCard title="Sources verified" value="96%" hint="Auditors satisfied" />
            </div>

            <Card className="rounded-3xl border-border bg-card p-8 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Questions per day
                  </p>
                  <p className="text-sm text-muted-foreground">Last 14 days · mock</p>
                </div>
                <Badge variant="outline" className="rounded-full border-border">
                  Demo analytics
                </Badge>
              </div>
              <Sparkline />
            </Card>

            <Card className="rounded-3xl border-border bg-card p-8 shadow-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Most-asked questions this week
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <QuestionRow q="What's your stance on the Greenland deal?" count={47} />
                <QuestionRow q="How will you fund the defence pledge?" count={39} />
                <QuestionRow q="Is a CO₂ tax on agriculture fair?" count={33} />
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <p className="text-xs text-muted-foreground">
          Showing party label in banner context:{" "}
          <span className="font-medium text-foreground">{partyLabel}</span>
        </p>
      </div>
    </div>
  );
}

function InsightCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <Card className="rounded-3xl border-border bg-card p-6 shadow-card">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-foreground">{value}</p>
      <p className="mt-2 text-xs text-muted-foreground">{hint}</p>
    </Card>
  );
}

function QuestionRow({ q, count }: { q: string; count: number }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border px-4 py-3">
      <p className="pr-4 text-muted-foreground">{q}</p>
      <span className="text-sm font-semibold text-foreground">{count}</span>
    </div>
  );
}

function Sparkline() {
  const points = [12, 18, 15, 22, 30, 28, 35, 40, 38, 44, 48, 46, 52, 58];
  const width = 640;
  const height = 160;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const path = points
    .map((v, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - ((v - min) / (max - min || 1)) * (height - 24) - 12;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mt-8 h-44 w-full text-primary"
      role="img"
      aria-label="Questions per day sparkline"
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
