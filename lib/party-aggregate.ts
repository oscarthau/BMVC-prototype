import type { Politician } from "@/lib/types";

export function averagePartySnapshot(
  members: Politician[],
): Politician["positionSnapshot"] {
  if (members.length === 0) {
    return {
      climate: 0.5,
      economy: 0.5,
      immigration: 0.5,
      eu: 0.5,
    };
  }

  const totals = members.reduce(
    (acc, pol) => ({
      climate: acc.climate + pol.positionSnapshot.climate,
      economy: acc.economy + pol.positionSnapshot.economy,
      immigration:
        acc.immigration + pol.positionSnapshot.immigration,
      eu: acc.eu + pol.positionSnapshot.eu,
    }),
    { climate: 0, economy: 0, immigration: 0, eu: 0 },
  );

  const n = members.length;

  return {
    climate: totals.climate / n,
    economy: totals.economy / n,
    immigration: totals.immigration / n,
    eu: totals.eu / n,
  };
}
