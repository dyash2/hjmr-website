import { cn } from "@/lib/utils";

const tones = {
  primary: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20",
  accent: "bg-[var(--color-accent)]/10 text-blue-600 border-[var(--color-accent)]/25",
  navy: "bg-[var(--color-navy)]/5 text-[var(--color-navy)] border-[var(--color-navy)]/10",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  onDark: "bg-white/10 text-white border-white/20",
};

export default function Badge({ children, tone = "primary", icon: Icon, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {Icon && <Icon size={13} strokeWidth={2.5} />}
      {children}
    </span>
  );
}
