import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCategoryLabel } from "@/data/products";
import MadeInIndiaBadge from "@/components/ui/MadeInIndiaBadge";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-primary)] shadow-soft">
          {getCategoryLabel(product.category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-[var(--color-navy)] leading-snug">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-[var(--color-muted)]">SKU: {product.sku}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--color-muted)]">
            MOQ: {product.moq} units
          </span>
          <MadeInIndiaBadge size="sm" />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-bold text-[var(--color-primary)]">
            Bulk Pricing on Request
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-[var(--color-navy)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
