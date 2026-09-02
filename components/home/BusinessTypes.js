import { Store, Building2, ShoppingCart, Landmark, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const types = [
  { icon: Building2, title: "Distributors & Wholesalers", desc: "Stock the full AT-ONE range for your regional network." },
  { icon: Store, title: "Retail & Kirana Stores", desc: "Bulk packs sized for shelf-ready retail sale." },
  { icon: ShoppingCart, title: "Supermarkets & Hypermarkets", desc: "Consistent supply for larger-format outlets." },
  { icon: Landmark, title: "Institutional & Corporate Buyers", desc: "Recurring bulk orders for facilities and housekeeping teams." },
  { icon: Globe, title: "Online Marketplace Sellers", desc: "Factory-direct stock for your online storefront." },
];

export default function BusinessTypes() {
  return (
    <section className="bg-[var(--color-background)] py-20">
      <Container>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for Every Kind of Business"
          description="Our bulk-order channel is set up to serve a range of business types across India."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {types.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)]/30 text-[var(--color-primary)]">
                <Icon size={22} />
              </div>
              <h3 className="text-sm font-bold text-[var(--color-navy)]">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
