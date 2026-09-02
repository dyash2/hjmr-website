import Image from "next/image";
import { RefreshCw, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: RefreshCw,
    title: "360° Rotation Technology",
    desc: "Engineered with a premium disk for effortless spinning, deep cleaning, and maximum reach under furniture.",
  },
  {
    icon: ShieldCheck,
    title: "Washable Microfiber Refills",
    desc: "High-absorption R-1 refills that trap dirt effectively. Reusable and easily washable design ensures long-lasting utility.",
  },
];

export default function BrandShowcase() {
  return (
    <section className="overflow-hidden bg-[var(--color-navy)] py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-14 lg:flex-row">
        <div className="relative w-full lg:w-1/2">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-20 blur-[100px]"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
            <Image
              src="/atone.webp"
              alt="AT-ONE premium quality mop packaging"
              width={700}
              height={806}
              className="mx-auto h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>

        <div className="w-full text-white lg:w-1/2">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-[var(--color-accent)]">
            <Sparkles size={16} />
            Flagship Retail Brand
          </div>

          <h2 className="mb-3 text-4xl font-extrabold sm:text-5xl">
            AT-ONE <span className="align-top text-3xl text-[var(--color-accent)]">®</span>
          </h2>
          <p className="mb-10 text-2xl font-light italic text-slate-400">
            &ldquo;Sparkles your home..!&rdquo;
          </p>

          <div className="space-y-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                  <p className="leading-relaxed text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <Button href="/products" variant="accent" size="lg" shine>
              Request AT-ONE Wholesale Rates <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
