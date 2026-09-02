import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]";

const sizes = {
  sm: "text-sm px-4 py-2.5",
  md: "text-sm px-6 py-3.5",
  lg: "text-base px-8 py-4",
};

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-soft hover:brightness-105 active:brightness-95",
  accent:
    "bg-[var(--color-accent)] text-white shadow-soft hover:brightness-105 active:brightness-95",
  dark: "bg-[var(--color-navy)] text-white hover:brightness-125 active:brightness-110",
  outline:
    "bg-white text-[var(--color-navy)] border border-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  ghost: "text-[var(--color-navy)] hover:bg-slate-100",
  "outline-light":
    "bg-transparent text-white border border-white/30 hover:border-white/70 hover:bg-white/10",
};

export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className,
  shine = false,
  children,
  ...props
}) {
  const classes = cn(base, sizes[size], variants[variant], shine && "btn-shine", className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const Tag = as || "button";
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
