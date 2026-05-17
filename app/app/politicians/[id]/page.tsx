import { notFound } from "next/navigation";

import { PoliticianChatPanel } from "@/components/chat/PoliticianChatPanel";
import { PoliticianLeftPane } from "@/components/politician/PoliticianLeftPane";
import { getPoliticianById } from "@/lib/mock/politicians";

export default function PoliticianProfilePage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { q?: string };
}) {
  const pol = getPoliticianById(params.id);
  if (!pol) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,35%)_minmax(0,65%)]">
        <PoliticianLeftPane pol={pol} />
        <PoliticianChatPanel
          variant={{ kind: "politician", id: pol.id }}
          heading={pol.name}
          initialComposer={searchParams?.q}
        />
      </div>
    </div>
  );
}
