import { PackageCheck } from "lucide-react";
import { QUANTITY_TIERS } from "@/data/products";

/**
 * Displays wholesale quantity tiers without inventing per-unit rates —
 * actual pricing is shared directly by the sales team once quantity and
 * delivery location are known.
 */
export default function BulkPricingTiers({ moq }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
        <PackageCheck size={14} className="text-[var(--color-primary)]" />
        Wholesale Quantity Tiers
      </p>
      <div className="grid grid-cols-3 gap-2">
        {QUANTITY_TIERS.map((tier) => (
          <div
            key={tier}
            className="rounded-lg border border-slate-200 bg-white py-2.5 text-center"
          >
            <p className="text-sm font-bold text-[var(--color-navy)]">{tier}</p>
            <p className="text-[10px] text-[var(--color-muted)]">units</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-[var(--color-muted)]">
        Minimum order quantity: <strong className="text-[var(--color-navy)]">{moq} units</strong>.
        Share your required quantity to receive a tailored quote.
      </p>
    </div>
  );
}
