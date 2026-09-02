import { ShieldCheck, Truck, Receipt, Factory } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MadeInIndiaBadge from "@/components/ui/MadeInIndiaBadge";

const trustItems = [
  {
    icon: Factory,
    title: "Factory Direct Pricing",
    desc: "No middlemen — buy straight from our Vasai manufacturing unit.",
  },
  {
    icon: ShieldCheck,
    title: "GST Compliant",
    desc: "100% genuine billing and invoices for every order.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    desc: "Reliable shipping to distributors and retailers nationwide.",
  },
  {
    icon: Receipt,
    title: "Bulk Manufacturing",
    desc: "In-house capacity built for large, recurring volume orders.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          <MadeInIndiaBadge size="lg" tone="tint" />
          <SectionHeading
            eyebrow="Proudly Made in India"
            title="Built for India, Ready for the World"
            description="Every AT-ONE product is manufactured at our own facility in Vasai, Maharashtra — engineered for the everyday demands of Indian homes and businesses."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon size={22} />
              </div>
              <h3 className="mb-1 font-bold text-[var(--color-navy)]">{title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
