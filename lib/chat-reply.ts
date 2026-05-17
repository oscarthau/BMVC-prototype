import type { ScriptedExchange } from "@/lib/types";
import { matchScriptedReply } from "@/lib/chat/matchScriptedReply";

export function pickExchange(
  pairs: ScriptedExchange[],
  text: string,
  turn: number,
): ScriptedExchange {
  return matchScriptedReply(pairs, text, turn);
}
