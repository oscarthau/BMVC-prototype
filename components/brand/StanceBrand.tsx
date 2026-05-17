import Link from "next/link";

import { cn } from "@/lib/utils";

/** Compact mark: layered lines suggesting aligned perspectives / “stance”. */
export function StanceMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 text-primary", className)}
      aria-hidden
    >
      <rect
        x="3"
        y="3"
        width="26"
        height="26"
        rx="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 12h12M10 17h9M10 22h6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StanceBrand({
  href = "/",
  className,
  showWordmark = true,
}: {
  href?: string;
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-90",
        className,
      )}
    >
      <StanceMark className="h-7 w-7" />
      {showWordmark ? (
        <span className="font-semibold tracking-tight text-primary">Stance</span>
      ) : null}
    </Link>
  );
}
