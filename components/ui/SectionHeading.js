import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  className,
}) {
  const isCenter = align === "center";
  const eyebrowColor =
    tone === "onDark" ? "text-[var(--color-secondary)]" : "text-[var(--color-primary)]";
  const titleColor = tone === "onDark" ? "text-white" : "text-[var(--color-navy)]";
  const descColor = tone === "onDark" ? "text-slate-300" : "text-[var(--color-muted)]";

  return (
    <div
      className={cn(
        "max-w-2xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.15em]", eyebrowColor)}>
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={cn("text-3xl sm:text-4xl font-extrabold tracking-tight", titleColor)}>
          {title}
        </h2>
      )}
      {description && (
        <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", descColor)}>
          {description}
        </p>
      )}
    </div>
  );
}
