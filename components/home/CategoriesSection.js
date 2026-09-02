import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CATEGORIES, PRODUCTS } from "@/data/products";

const categoryCopy = {
  buckets: {
    desc: "Spin mop buckets built for daily household and commercial use.",
  },
  accessories: {
    desc: "Refills, rods, and replacement parts to extend product life.",
  },
  other: {
    desc: "Complementary cleaning products from the AT-ONE range.",
  },
};

export default function CategoriesSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Shop by Category"
          title="Product Categories"
          description="Everything a distributor or retailer needs from a single, factory-direct source."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const sample = PRODUCTS.find((p) => p.category === cat.slug);
            const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl border border-slate-100 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                {sample && (
                  <Image
                    src={sample.image}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/90 via-[var(--color-navy)]/20 to-transparent" />
                <div className="relative p-6 text-white">
                  <h3 className="text-xl font-bold">{cat.label}</h3>
                  <p className="mt-1 text-sm text-slate-200">{categoryCopy[cat.slug]?.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                      {count} products
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white group-hover:text-[var(--color-navy)]">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
