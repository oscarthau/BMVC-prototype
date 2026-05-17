import type { ScriptedExchange } from "@/lib/types";

function normalise(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function meaningfulTokens(value: string) {
  const stopWords = new Set([
    "a",
    "an",
    "and",
    "are",
    "do",
    "does",
    "how",
    "i",
    "is",
    "me",
    "my",
    "on",
    "the",
    "to",
    "what",
    "what's",
    "will",
    "with",
    "you",
    "your",
  ]);

  return normalise(value)
    .split(" ")
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

export function matchScriptedReply(
  pairs: ScriptedExchange[],
  text: string,
  turn: number,
): ScriptedExchange {
  if (pairs.length === 0) {
    return {
      question: text,
      answerSentences: [
        {
          text: "I do not have enough approved material to answer that confidently yet. Please verify with the politician's office before acting on it.",
        },
      ],
    };
  }

  const query = normalise(text);
  const exact = pairs.find((pair) => normalise(pair.question) === query);
  if (exact) return exact;

  const queryTokens = new Set(meaningfulTokens(text));
  const best = pairs
    .map((pair) => ({
      pair,
      score: meaningfulTokens(pair.question).filter((token) =>
        queryTokens.has(token),
      ).length,
    }))
    .sort((a, b) => b.score - a.score)[0];

  if (best && best.score >= 2) return best.pair;

  return pairs[Math.abs(turn) % pairs.length]!;
}
