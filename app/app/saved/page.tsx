import { Bookmark } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function SavedChatsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-3xl text-foreground">Saved</h1>
      <Card className="mt-8 rounded-3xl border-dashed border-border bg-muted/30 p-12 text-center shadow-none">
        <Bookmark className="mx-auto h-8 w-8 text-muted-foreground" />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          You haven&apos;t saved any conversations yet. Star a chat to find it here
          again.
        </p>
      </Card>
    </div>
  );
}
