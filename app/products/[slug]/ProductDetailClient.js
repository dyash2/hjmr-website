"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, CheckCircle2, Star, PackageOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import MadeInIndiaBadge from "@/components/ui/MadeInIndiaBadge";
import ProductGallery from "@/components/product/ProductGallery";
import SpecTable from "@/components/product/SpecTable";
import BulkPricingTiers from "@/components/product/BulkPricingTiers";
import ProductCard from "@/components/product/ProductCard";
import QuoteModal from "@/components/product/QuoteModal";
import { COMPANY, getCategoryLabel } from "@/data/products";

export default function ProductDetailClient({ product, related }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return (
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <PackageOpen size={64} className="mb-4 text-slate-300" />
        <h1 className="text-2xl font-bold text-[var(--color-navy)]">Product Not Found</h1>
        <Link href="/products" className="mt-2 font-semibold text-[var(--color-primary)] hover:underline">
          Return to Catalog
        </Link>
      </Container>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Hello AT-ONE Team, I am looking for a wholesale quote.\n\nProduct: ${product.name}\nTarget Quantity: ${product.moq}+\n\nPlease share your best rate.`;
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[var(--color-background)] py-10">
      <Container className="mb-6">
        <div className="flex flex-wrap items-center gap-1 text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
          <ChevronRight size={15} />
          <Link href="/products" className="hover:text-[var(--color-primary)]">Products</Link>
          <ChevronRight size={15} />
          <span className="font-medium text-[var(--color-navy)]">{product.name}</span>
        </div>
      </Container>

      <Container>
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-8">
            <div className="bg-white p-6 lg:p-10">
              <ProductGallery images={product.images} name={product.name} />
            </div>

            <div className="flex flex-col justify-center border-slate-100 p-6 lg:border-l lg:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge tone="success">In Stock</Badge>
                <Badge tone="primary">Wholesale Only</Badge>
                <MadeInIndiaBadge size="sm" />
              </div>

              <h1 className="mb-2 text-3xl font-bold text-[var(--color-navy)]">{product.name}</h1>
              <p className="mb-6 text-sm text-[var(--color-muted)]">
                SKU: {product.sku} &nbsp;·&nbsp; {getCategoryLabel(product.category)} &nbsp;·&nbsp; Manufactured in Vasai, Maharashtra
              </p>

              <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-sm text-[var(--color-muted)]">Wholesale Price / Unit</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[var(--color-primary)]">
                    ₹ Request Quote
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1 text-xs text-[var(--color-muted)]">
                  <CheckCircle2 size={12} className="text-emerald-600" /> MOQ: {product.moq} Pieces
                </p>
              </div>

              <div className="mb-6">
                <BulkPricingTiers moq={product.moq} />
              </div>

              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-soft transition hover:bg-emerald-700"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </button>
                <a
                  href={`tel:${COMPANY.phoneDial}`}
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-shine relative mb-8 w-full rounded-lg bg-[var(--color-primary)] py-4 font-bold text-white shadow-soft transition hover:brightness-105"
              >
                Request Bulk Quote Online
              </button>

              <SpecTable product={product} />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-soft lg:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-[var(--color-navy)]">Product Description</h3>
            <p className="leading-relaxed text-[var(--color-muted)]">{product.description}</p>
          </div>

          <div className="h-fit rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/5 p-6">
            <h4 className="mb-4 flex items-center gap-2 font-bold text-[var(--color-navy)]">
              <Star size={18} className="fill-[var(--color-primary)] text-[var(--color-primary)]" />
              Why AT-ONE?
            </h4>
            <ul className="space-y-4">
              {[
                "Direct Factory Pricing",
                "GST Compliant Bill Provided",
                "Fast Delivery in Palghar & Mumbai",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--color-navy)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 text-xl font-bold text-[var(--color-navy)]">You may also need</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>

      <QuoteModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
}
