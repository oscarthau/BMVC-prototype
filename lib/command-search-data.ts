import { newsEvents } from "@/lib/mock/newsEvents";
import { parties } from "@/lib/mock/parties";
import { politicians } from "@/lib/mock/politicians";
import { topics } from "@/lib/mock/topics";

export type CommandHit =
  | {
      group: "Politicians";
      title: string;
      subtitle: string;
      href: string;
    }
  | {
      group: "Parties";
      title: string;
      subtitle: string;
      href: string;
    }
  | {
      group: "News";
      title: string;
      subtitle: string;
      href: string;
    }
  | {
      group: "Topics";
      title: string;
      subtitle: string;
      href: string;
    };

export const commandHits: CommandHit[] = [
  ...politicians.slice(0, 8).map((p) => ({
    group: "Politicians" as const,
    title: p.name,
    subtitle: `${p.role}`,
    href: `/app/politicians/${p.id}`,
  })),
  ...parties.map((p) => ({
    group: "Parties" as const,
    title: p.name,
    subtitle: p.description,
    href: `/app/parties/${p.id}`,
  })),
  ...newsEvents.map((n) => ({
    group: "News" as const,
    title: n.title,
    subtitle: n.summary[0],
    href: `/app/news/${n.id}`,
  })),
  ...topics.map((t) => ({
    group: "Topics" as const,
    title: t.label,
    subtitle: t.description,
    href: "/onboarding",
  })),
];
