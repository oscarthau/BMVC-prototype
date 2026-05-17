import { cn } from "@/lib/utils";

export function PartyDot({
  color,
  label,
  size = "sm",
}: {
  color: string;
  label: string;
  size?: "sm" | "md";
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        aria-hidden
        className={cn(
          "rounded-full ring-2 ring-background",
          size === "sm" ? "h-2 w-2" : "h-2.5 w-2.5",
        )}
        style={{ backgroundColor: color }}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
