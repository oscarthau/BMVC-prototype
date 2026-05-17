"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatComposer({
  value,
  onChange,
  onSend,
  suggestions,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  suggestions: string[];
}) {
  return (
    <div className="space-y-3 border-t border-border bg-card px-4 py-4 md:px-6">
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            onClick={() => onChange(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="flex items-end gap-3">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ask a question…"
          rows={3}
          className="min-h-[96px] resize-none rounded-2xl border-border bg-background text-[15px] leading-relaxed shadow-inner"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <Button
          type="button"
          size="icon"
          className="h-11 w-11 shrink-0 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onSend}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
