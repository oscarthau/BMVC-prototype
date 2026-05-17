import type { AnswerSentence } from "@/lib/types";

const citationPattern = /\[([a-z0-9-]+)\]/gi;

export function resolveCitations(answer: string): AnswerSentence[] {
  const sentences: AnswerSentence[] = [];
  const sentencePattern = /([^.!?]+[.!?])\s*((?:\[[a-z0-9-]+\]\s*)*)/gi;

  let match: RegExpExecArray | null;
  while ((match = sentencePattern.exec(answer)) !== null) {
    const text = match[1].replace(/\s+/g, " ").trim();
    const citeSourceIds = Array.from(match[2].matchAll(citationPattern)).map(
      (citation) => citation[1],
    );

    sentences.push(citeSourceIds.length > 0 ? { text, citeSourceIds } : { text });
  }

  if (sentences.length === 0 && answer.trim()) {
    sentences.push({ text: answer.trim() });
  }

  return sentences;
}
