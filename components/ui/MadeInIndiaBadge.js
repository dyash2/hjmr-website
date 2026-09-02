import { cn } from "@/lib/utils";

/**
 * Reusable "Made in India" trust badge.
 * `size`: "sm" (inline, product cards) | "md" (default) | "lg" (hero / trust section)
 * `tone`: "light" (for dark backgrounds) | "default"
 */
export default function MadeInIndiaBadge({ size = "md", tone = "default", className }) {
  const sizes = {
    sm: "text-[10px] px-2 py-1 gap-1",
    md: "text-xs px-3 py-1.5 gap-1.5",
    lg: "text-sm px-4 py-2 gap-2",
  };

  const tones = {
    default: "bg-white border-slate-200 text-[var(--color-navy)] shadow-soft",
    light: "bg-white/10 border-white/20 text-white",
    tint: "bg-[var(--color-primary)]/8 border-[var(--color-primary)]/20 text-[var(--color-primary)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-bold uppercase tracking-wide",
        sizes[size],
        tones[tone],
        className
      )}
    >
      <span aria-hidden="true" className="leading-none">
        🇮🇳
      </span>
      Made in India
    </span>
  );
}
