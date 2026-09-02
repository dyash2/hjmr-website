import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Text wordmark echoing the real AT ONE packaging lockup (AT | O | NE,
 * the "O" picked out as a ring). Kept as a styled text mark rather than
 * an invented logo graphic since no vector brand mark was supplied.
 */
export default function Logo({ tone = "default", className }) {
  const isLight = tone === "light";
  return (
    <Link href="/" className={cn("group flex flex-col leading-none select-none", className)}>
      <span
        className={cn(
          "font-display text-2xl font-extrabold tracking-tight flex items-center",
          isLight ? "text-white" : "text-[var(--color-navy)]"
        )}
      >
        AT
        <span
          className={cn(
            "mx-0.5 inline-block h-4 w-4 rounded-full border-2",
            isLight ? "border-white" : "border-[var(--color-primary)]"
          )}
          aria-hidden="true"
        />
        NE
        <span className="ml-1 text-[var(--color-accent)]">®</span>
      </span>
      <span
        className={cn(
          "text-[10px] font-medium italic tracking-wide",
          isLight ? "text-slate-300" : "text-[var(--color-muted)]"
        )}
      >
        Sparkles your home..!
      </span>
    </Link>
  );
}
