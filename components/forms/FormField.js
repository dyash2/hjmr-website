import { cn } from "@/lib/utils";

export default function FormField({ label, error, required, children, hint }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-[var(--color-navy)]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-[var(--color-muted)]">{hint}</p>}
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

export const inputClasses = (hasError) =>
  cn(
    "w-full rounded-lg border px-4 py-3 text-sm text-[var(--color-navy)] outline-none transition-all placeholder:text-slate-400",
    hasError
      ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
      : "border-slate-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
  );
