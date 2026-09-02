import { Factory, ShieldCheck, RefreshCw, Truck, Receipt, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Factory,
    title: "Factory Direct Pricing",
    desc: "No middlemen, maximum margin for your business.",
  },
  {
    icon: Receipt,
    title: "GST Compliant Billing",
    desc: "100% genuine invoices for every transaction.",
  },
  {
    icon: Truck,
    title: "Bulk Manufacturing",
    desc: "In-house capacity for large volume, repeat orders.",
  },
  {
    icon: RefreshCw,
    title: "360° Rotation Technology",
    desc: "Engineered for effortless spinning and deep cleaning reach.",
  },
  {
    icon: ShieldCheck,
    title: "Washable, Reusable Refills",
    desc: "High-absorption microfiber refills built to last.",
  },
  {
    icon: Sparkles,
    title: "Pan-India Delivery",
    desc: "Fast, reliable shipping to distributors anywhere in India.",
  },
];

export default function WhyAtOne() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why AT-ONE"
          description="The reasons distributors and retailers keep coming back to us."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-slate-100 p-6 transition-colors hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">{title}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
