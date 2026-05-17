import type { Politician } from "@/lib/types";
import { cn } from "@/lib/utils";

type ScaleKey = "climate" | "economy" | "immigration" | "eu";

const scaleDefs: Record<
  ScaleKey,
  { label: string; left: string; right: string }
> = {
  climate: {
    label: "Climate",
    left: "Green transition",
    right: "Growth first",
  },
  economy: {
    label: "Economy",
    left: "Public spend",
    right: "Tax cuts",
  },
  immigration: {
    label: "Immigration",
    left: "Strict",
    right: "Open",
  },
  eu: {
    label: "EU",
    left: "More EU",
    right: "Less EU",
  },
};

export function PositionSnapshot({
  snapshot,
}: {
  snapshot: Politician["positionSnapshot"];
}) {
  const entries: ScaleKey[] = ["climate", "economy", "immigration", "eu"];

  return (
    <div className="space-y-5">
      {entries.map((key) => {
        const def = scaleDefs[key];
        const value = snapshot[key];
        return (
          <div key={key} className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span>{def.label}</span>
            </div>
            <div className="relative h-2 rounded-full bg-muted">
              <span
                className={cn(
                  "absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow",
                )}
                style={{ left: `${Math.round(value * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>{def.left}</span>
              <span>{def.right}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
