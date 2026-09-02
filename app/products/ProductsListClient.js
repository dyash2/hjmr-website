"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

const SORTS = [
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
  { value: "moq-asc", label: "MOQ: Low to High" },
];

// Thin wrapper so that navigating to /products?category=X from elsewhere
// (e.g. the footer or homepage category cards) always lands on a fresh,
// correctly-filtered view — remounting via `key` instead of syncing state
// through an effect.
export default function ProductsListClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  return <ProductsListView key={initialCategory} initialCategory={initialCategory} />;
}

function ProductsListView({ initialCategory }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("name-asc");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "moq-asc") return a.moq - b.moq;
      return 0;
    });

    return list;
  }, [query, category, sort]);

  const activeCategoryLabel =
    category === "all" ? "All Categories" : CATEGORIES.find((c) => c.slug === category)?.label;

  return (
    <div className="bg-[var(--color-background)] py-16">
      <Container>
        <SectionHeading
          eyebrow="Wholesale Catalog"
          title="Our Product Range"
          description="Factory-direct spin mops, buckets, and cleaning accessories — built for bulk supply to distributors and retailers."
        />

        {/* Search + Sort bar */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, SKU, category..."
              className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-[var(--color-navy)] shadow-soft outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
            />
          </div>

          <div className="flex gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[var(--color-navy)] shadow-soft outline-none transition focus:border-[var(--color-primary)]"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowFilters((v) => !v)}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold shadow-soft transition sm:hidden",
                showFilters
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  : "border-slate-200 bg-white text-[var(--color-navy)]"
              )}
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>
        </div>

        {/* Category filter pills */}
        <div
          className={cn(
            "mx-auto mt-6 max-w-4xl flex-wrap justify-center gap-2 sm:flex",
            showFilters ? "flex" : "hidden"
          )}
        >
          <button
            onClick={() => setCategory("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              category === "all"
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-slate-200 bg-white text-[var(--color-navy)] hover:border-[var(--color-primary)]"
            )}
          >
            All ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((c) => {
            const count = PRODUCTS.filter((p) => p.category === c.slug).length;
            return (
              <button
                key={c.slug}
                onClick={() => setCategory(c.slug)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  category === c.slug
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-slate-200 bg-white text-[var(--color-navy)] hover:border-[var(--color-primary)]"
                )}
              >
                {c.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Active filters + results count */}
        <div className="mx-auto mt-6 flex max-w-4xl items-center justify-between text-sm text-[var(--color-muted)]">
          <p>
            Showing <strong className="text-[var(--color-navy)]">{filtered.length}</strong> of{" "}
            {PRODUCTS.length} products
            {category !== "all" && (
              <>
                {" "}
                in <strong className="text-[var(--color-navy)]">{activeCategoryLabel}</strong>
              </>
            )}
          </p>
          {(query || category !== "all") && (
            <button
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="flex items-center gap-1 font-semibold text-[var(--color-primary)] hover:underline"
            >
              <X size={14} /> Clear
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center text-center">
            <p className="text-lg font-bold text-[var(--color-navy)]">No products match your search</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Try a different keyword or clear your filters.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
