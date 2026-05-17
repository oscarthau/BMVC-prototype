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
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,35%)_minmax(0,65%)]">
        <PartyLeftPane party={party} members={members} snapshot={snapshot} />
        <PoliticianChatPanel
          variant={{ kind: "party", id: party.id }}
          heading={`${party.name} · Party bot`}
          partyLevel
          initialComposer={searchParams?.q}
        />
      </div>
    </div>
  );
}
