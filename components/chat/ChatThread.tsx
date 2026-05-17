"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { CitationChip } from "@/components/chat/CitationChip";
import { SourcesPanel } from "@/components/chat/SourcesPanel";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { AnswerSentence } from "@/lib/types";

export type UiMessage =
  | { id: string; role: "user"; content: string }
  | {
      id: string;
      role: "assistant";
      mode:
        | { type: "stream"; text: string }
        | { type: "final"; sentences: AnswerSentence[] };
    };

const chipContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.05 },
  },
};

const chipItem = {
  hidden: { opacity: 0, y: 3 },
  show: { opacity: 1, y: 0 },
};

export function ChatThread({
  messages,
  showSources,
  partyLevel,
}: {
  messages: UiMessage[];
  showSources: boolean;
  partyLevel?: boolean;
}) {
  const bottomRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-6 px-4 py-4 md:px-8 md:py-8">
        {messages.map((m) =>
          m.role === "user" ? (
            <div key={m.id} className="flex justify-end">
              <div className="max-w-[85%] rounded-3xl bg-muted px-5 py-4 text-[15px] leading-relaxed text-foreground shadow-sm">
                {m.content}
              </div>
            </div>
          ) : (
            <div key={m.id} className="flex justify-start">
              <div className="max-w-[90%] space-y-2 rounded-3xl border border-border bg-card px-5 py-4 shadow-card">
                {partyLevel && (
                  <span className="inline-flex rounded-full bg-muted px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Party-level answer - synthesised from member statements
                  </span>
                )}
                {m.mode.type === "stream" ? (
                  <p className="text-[15px] leading-relaxed text-foreground">
                    {m.mode.text}
                    <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary/70 align-middle" />
                  </p>
                ) : (
                  <AssistantFinalBody
                    messageId={m.id}
                    sentences={m.mode.sentences}
                    showSources={showSources}
                  />
                )}
                {m.mode.type === "final" && showSources && (
                  <SourcesPanel
                    sourceIds={collectSourceIds(m.mode.sentences)}
                    defaultOpen={false}
                  />
                )}
              </div>
            </div>
          ),
        )}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  );
}

function AssistantFinalBody({
  messageId,
  sentences,
  showSources,
}: {
  messageId: string;
  sentences: AnswerSentence[];
  showSources: boolean;
}) {
  let citeCounter = 1;

  return (
    <div className="space-y-2 text-[15px] leading-relaxed text-foreground">
      {sentences.map((s, idx) => {
        const chips =
          showSources && s.citeSourceIds && s.citeSourceIds.length > 0 ? (
            <motion.span
              key={`${messageId}-chips-${idx}`}
              className="inline-flex flex-wrap gap-1 align-middle"
              variants={chipContainer}
              initial="hidden"
              animate="show"
            >
              {s.citeSourceIds.map((sourceId) => {
                const displayIndex = citeCounter++;
                return (
                  <motion.span
                    key={`${messageId}-${idx}-${sourceId}-${displayIndex}`}
                    variants={chipItem}
                    className="inline-block"
                  >
                    <CitationChip displayIndex={displayIndex} sourceId={sourceId} />
                  </motion.span>
                );
              })}
            </motion.span>
          ) : null;

        return (
          <p key={`${messageId}-sent-${idx}`} className="inline-block">
            <span>{s.text}</span>
            {chips}
          </p>
        );
      })}
    </div>
  );
}

function collectSourceIds(sentences: AnswerSentence[]) {
  const ids: string[] = [];
  for (const s of sentences) {
    for (const id of s.citeSourceIds ?? []) ids.push(id);
  }
  return ids;
}
