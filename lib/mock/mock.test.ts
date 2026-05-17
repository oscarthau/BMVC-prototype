import { describe, expect, it } from "vitest";
import { conversationsByParty, conversationsByPolitician } from "./conversations";
import { newsEvents } from "./newsEvents";
import { parties } from "./parties";
import { politicians } from "./politicians";
import { sources } from "./sources";

describe("mock dataset integrity", () => {
  it("covers every politician with three scripted pairs", () => {
    for (const p of politicians) {
      expect(conversationsByPolitician[p.id]?.length).toBe(3);
    }
  });

  it("covers every party with three party-level pairs", () => {
    for (const party of parties) {
      expect(conversationsByParty[party.id]?.length).toBe(3);
    }
  });

  it("references valid parties on news stance rows", () => {
    const partyIds = new Set(parties.map((p) => p.id));
    const polIds = new Set(politicians.map((p) => p.id));
    for (const event of newsEvents) {
      for (const row of event.partyStances) {
        expect(partyIds.has(row.partyId)).toBe(true);
        expect(polIds.has(row.chatPoliticianId)).toBe(true);
      }
    }
  });

  it("keeps politician training sources resolvable", () => {
    const sourceIds = new Set(sources.map((s) => s.id));
    for (const pol of politicians) {
      for (const sid of pol.trainingSourceIds) {
        expect(sourceIds.has(sid)).toBe(true);
      }
    }
  });
});
