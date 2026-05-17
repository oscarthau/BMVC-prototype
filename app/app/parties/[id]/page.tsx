import { notFound } from "next/navigation";

import { PoliticianChatPanel } from "@/components/chat/PoliticianChatPanel";
import { PartyLeftPane } from "@/components/politician/PartyLeftPane";
import { averagePartySnapshot } from "@/lib/party-aggregate";
import { getPartyById } from "@/lib/mock/parties";
import { getPoliticiansByParty } from "@/lib/mock/politicians";

export default function PartyBotPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { q?: string };
}) {
  const party = getPartyById(params.id);
  if (!party) notFound();

  const members = getPoliticiansByParty(party.id);
  const snapshot = averagePartySnapshot(members);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,35%)_minmax(0,65%)]">
        <div className="order-2 min-w-0 lg:order-none lg:col-start-1 lg:row-start-1">
          <PartyLeftPane party={party} members={members} snapshot={snapshot} />
        </div>
        <div className="order-1 flex min-h-[68dvh] min-w-0 flex-col lg:sticky lg:top-20 lg:order-none lg:col-start-2 lg:row-start-1 lg:h-[calc(100dvh-5.5rem)] lg:self-start">
          <PoliticianChatPanel
            variant={{ kind: "party", id: party.id }}
            heading={`${party.name} · Party bot`}
            partyLevel
            initialComposer={searchParams?.q}
          />
        </div>
      </div>
    </div>
  );
}
