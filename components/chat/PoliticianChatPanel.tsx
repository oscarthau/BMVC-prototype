"use client";

import * as React from "react";

import { ChatComposer } from "@/components/chat/ChatComposer";
import { ChatThread, type UiMessage } from "@/components/chat/ChatThread";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { pickExchange } from "@/lib/chat-reply";
import { cn } from "@/lib/utils";
import {
  defaultFollowUps,
  getConversationPairsForParty,
  getConversationPairsForPolitician,
} from "@/lib/mock/conversations";
import type { ScriptedExchange } from "@/lib/types";

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function seedMessages(pairs: ScriptedExchange[]): UiMessage[] {
  const out: UiMessage[] = [];
  for (const ex of pairs.slice(0, 2)) {
    out.push({ id: uid(), role: "user", content: ex.question });
    out.push({
      id: uid(),
      role: "assistant",
      mode: { type: "final", sentences: ex.answerSentences },
    });
  }
  return out;
}

export function PoliticianChatPanel({
  variant,
  heading,
  partyLevel,
  initialComposer,
  className,
}: {
  variant:
    | { kind: "politician"; id: string }
    | { kind: "party"; id: string };
  heading: string;
  partyLevel?: boolean;
  initialComposer?: string;
  className?: string;
}) {
  const pairs =
    variant.kind === "politician"
      ? getConversationPairsForPolitician(variant.id)
      : getConversationPairsForParty(variant.id);

  const [messages, setMessages] = React.useState<UiMessage[]>(() =>
    seedMessages(pairs),
  );
  const [input, setInput] = React.useState("");
  const [showSources, setShowSources] = React.useState(true);
  const turnRef = React.useRef(0);
  const streamRef = React.useRef<number | null>(null);
  const streamingRef = React.useRef(false);

  React.useEffect(() => {
    if (initialComposer) setInput(initialComposer);
  }, [initialComposer]);

  React.useEffect(
    () => () => {
      if (streamRef.current) window.clearInterval(streamRef.current);
    },
    [],
  );

  const handleSend = React.useCallback(() => {
    const text = input.trim();
    if (!text || streamingRef.current) return;

    setInput("");
    const userMsg: UiMessage = { id: uid(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    const reply = pickExchange(pairs, text, turnRef.current);
    turnRef.current += 1;

    const targetText = reply.answerSentences.map((s) => s.text).join(" ");

    const assistantId = uid();

    window.setTimeout(() => {
      streamingRef.current = true;
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          mode: { type: "stream", text: "" },
        },
      ]);

      let i = 0;
      const tick = 25;
      streamRef.current = window.setInterval(() => {
        i += 1;
        const slice = targetText.slice(0, i);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId && m.role === "assistant"
              ? { ...m, mode: { type: "stream", text: slice } }
              : m,
          ),
        );
        if (i >= targetText.length) {
          if (streamRef.current) window.clearInterval(streamRef.current);
          streamRef.current = null;
          streamingRef.current = false;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId && m.role === "assistant"
                ? {
                    ...m,
                    mode: {
                      type: "final",
                      sentences: reply.answerSentences,
                    },
                  }
                : m,
            ),
          );
        }
      }, tick);
    }, 600);
  }, [input, pairs]);

  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-1 flex-col rounded-2xl border border-border bg-card shadow-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-medium text-foreground">{heading}</h2>
            <Badge
              variant="outline"
              className="rounded-full border-border text-[11px] uppercase tracking-wide text-muted-foreground"
            >
              AI bot
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Answers cite approved materials only - verify before acting.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Label
            htmlFor="show-sources"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Show sources
          </Label>
          <Switch
            id="show-sources"
            checked={showSources}
            onCheckedChange={setShowSources}
          />
        </div>
      </div>
      <div className="min-h-0 flex-1">
        <ChatThread
          messages={messages}
          showSources={showSources}
          partyLevel={partyLevel}
        />
      </div>
      <Separator />
      <ChatComposer
        value={input}
        onChange={setInput}
        onSend={handleSend}
        suggestions={defaultFollowUps}
      />
    </div>
  );
}
