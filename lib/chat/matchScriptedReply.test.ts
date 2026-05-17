import { describe, expect, it } from "vitest";

import type { ScriptedExchange } from "@/lib/types";
import { matchScriptedReply } from "./matchScriptedReply";

const pairs: ScriptedExchange[] = [
  {
    question: "How will you fund the defence pledge?",
    answerSentences: [{ text: "With a staged plan.", citeSourceIds: ["src-a"] }],
  },
  {
    question: "What's your stance on the Greenland deal?",
    answerSentences: [{ text: "Respect Self-Rule first.", citeSourceIds: ["src-b"] }],
  },
];

describe("matchScriptedReply", () => {
  it("matches exact questions after normalisation", () => {
    expect(
      matchScriptedReply(pairs, "  how will you fund the defence pledge?  ", 0)
        .question,
    ).toBe("How will you fund the defence pledge?");
  });

  it("matches likely user variants by containment", () => {
    expect(matchScriptedReply(pairs, "Tell me your Greenland stance", 0).question).toBe(
      "What's your stance on the Greenland deal?",
    );
  });

  it("falls back deterministically by turn when no pair matches", () => {
    expect(matchScriptedReply(pairs, "Explain municipal budgets", 3).question).toBe(
      "What's your stance on the Greenland deal?",
    );
  });
});
