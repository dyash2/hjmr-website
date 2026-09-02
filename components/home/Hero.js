import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MadeInIndiaBadge from "@/components/ui/MadeInIndiaBadge";
import { COMPANY } from "@/data/products";

const trustChips = [
  "Factory Direct Pricing",
  "Bulk Manufacturing Capacity",
  "GST Compliant Billing",
  "Pan-India Delivery",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[var(--color-secondary)]/15 via-[var(--color-background)] to-[var(--color-background)] pt-14 pb-16 lg:pt-20 lg:pb-24">
      {/* soft ambient blob — the one deliberate gradient moment on this page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-[var(--color-primary)]/20 blur-[110px]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)] shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Est. {COMPANY.established} • {COMPANY.location}
            </span>
            <MadeInIndiaBadge />
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-navy)] sm:text-5xl lg:text-6xl">
            AT-ONE
            <span className="mt-2 block text-2xl font-medium italic text-[var(--color-primary)] sm:text-3xl">
              Sparkles your home..!
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] lg:mx-0">
            Premium spin mops, buckets, and cleaning accessories — manufactured
            in-house in Vasai, Maharashtra and supplied wholesale to
            distributors, retailers, and institutions across India.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/products" size="lg" shine>
              View Wholesale Catalog <ArrowRight size={18} />
            </Button>
            <Button href="/bulk-orders" size="lg" variant="outline">
              <MessageCircle size={18} /> Request Bulk Quote
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="text-xs font-semibold text-[var(--color-muted)] before:mr-2 before:text-[var(--color-primary)] before:content-['✓']"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="shine-sweep relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-lift sm:p-10">
            <Image
              src="/atone.webp"
              alt="AT-ONE premium mop packaging — Sparkles your home"
              width={700}
              height={806}
              priority
              className="mx-auto h-auto w-full max-w-xs object-contain sm:max-w-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
