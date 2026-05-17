import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DEMO_USER_FIRST_NAME, dicebearAvatar } from "@/lib/constants";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10 md:px-10">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Profile
        </p>
        <h1 className="mt-2 font-serif text-4xl text-foreground">Demo voter</h1>
      </header>

      <Card className="rounded-3xl border-border bg-card p-8 shadow-card">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <Avatar className="h-20 w-20 rounded-2xl border border-border">
            <AvatarImage src={dicebearAvatar(DEMO_USER_FIRST_NAME)} alt="" />
            <AvatarFallback>{DEMO_USER_FIRST_NAME.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-semibold text-foreground">
                {DEMO_USER_FIRST_NAME}
              </h2>
              <Badge
                variant="outline"
                className="rounded-full border-border text-[11px] uppercase tracking-wide text-muted-foreground"
              >
                Prototype voter
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Preferences are stored locally for this demo - no cloud sync, no
              accounts.
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-border" />
        <div className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Location
            </p>
            <p className="mt-1 text-foreground">Copenhagen metro (mock)</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Topics you signalled
            </p>
            <p className="mt-1 text-foreground">See onboarding chips</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
