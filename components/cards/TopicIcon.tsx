"use client";

import * as LucideIcons from "lucide-react";

import type { TopicIconKey } from "@/lib/types";

const map: Record<TopicIconKey, React.ComponentType<{ className?: string }>> =
  {
    leaf: LucideIcons.Leaf,
    coins: LucideIcons.Coins,
    heart: LucideIcons.HeartPulse,
    home: LucideIcons.Home,
    graduation: LucideIcons.GraduationCap,
    globe: LucideIcons.Globe2,
    flag: LucideIcons.Flag,
    building: LucideIcons.Landmark,
    shield: LucideIcons.Shield,
    percent: LucideIcons.Percent,
    gavel: LucideIcons.Gavel,
    scale: LucideIcons.Scale,
  };

export function TopicIcon({
  name,
  className,
}: {
  name: TopicIconKey;
  className?: string;
}) {
  const Cmp = map[name] ?? LucideIcons.Circle;
  return <Cmp className={className} />;
}
