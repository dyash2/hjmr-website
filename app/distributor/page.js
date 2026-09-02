import {
  Factory,
  Package,
  Headset,
  MapPinned,
  Handshake,
  Layers,
  PhoneCall,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DistributorForm from "@/components/forms/DistributorForm";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export const metadata = {
  title: "Become a Distributor | AT-ONE",
  description:
    "Partner with AT-ONE as a distributor. Direct manufacturer relationship, full product range access, and dedicated business support.",
};

const whyPartner = [
  {
    icon: Factory,
    title: "Direct Manufacturer Relationship",
    desc: "Work directly with the factory that makes AT-ONE — no layers in between.",
  },
  {
    icon: Layers,
    title: "A Growing Category",
    desc: "Household cleaning is a category every retail outlet needs to stock, consistently.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership Approach",
    desc: "We aim to build ongoing relationships with our distribution partners, not one-off sales.",
  },
];

const benefits = [
  "Direct manufacturer relationship and consistent product quality",
  "Access to the full AT-ONE product range from a single source",
  "Dedicated point of contact for order support and queries",
  "GST-compliant billing on every order",
  "Support with onboarding and understanding the product range",
];

const businessSupport = [
  {
    icon: Headset,
    title: "Dedicated Support",
    desc: "A direct point of contact for order processing and day-to-day queries.",
  },
  {
    icon: PhoneCall,
    title: "Onboarding Assistance",
    desc: "Our team walks you through the product range and ordering process.",
  },
  {
    icon: Package,
    title: "Order Coordination",
    desc: "Support with quantities, scheduling, and dispatch coordination.",
  },
];

export default function DistributorPage() {
  return (
    <div className="bg-[var(--color-background)]">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white py-16">
        <Container className="text-center">
          <SectionHeading
            eyebrow="Partner With Us"
            title="Become an AT-ONE Distributor"
            description="Join our growing network of distribution partners and bring factory-direct cleaning products to your region."
          />
        </Container>
      </section>

      {/* Why Partner */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Why Partner" title="Why Partner With AT-ONE" align="left" className="mx-0" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyPartner.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-[var(--color-navy)]">{title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="Partner Benefits" title="What You Get" align="left" className="mx-0" />
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 rounded-xl border border-slate-100 bg-[var(--color-background)] p-4 text-sm text-[var(--color-navy)]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-white">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Product Range */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Product Range"
            title="What You'll Be Distributing"
            description={`The full AT-ONE catalog across ${CATEGORIES.length} categories — ${PRODUCTS.length} products and growing.`}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => PRODUCTS.find((p) => p.category === c.slug))
              .filter(Boolean)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </Container>
      </section>

      {/* Business Support */}
      <section className="bg-[var(--color-navy)] py-20">
        <Container>
          <SectionHeading
            eyebrow="Business Support"
            title="Support You Can Count On"
            tone="onDark"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {businessSupport.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Territory Information */}
      <section className="py-20">
        <Container className="max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            <MapPinned size={22} />
          </div>
          <h2 className="text-2xl font-extrabold text-[var(--color-navy)] sm:text-3xl">
            Territory Information
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            Let us know your preferred city or region in the application below.
            Our team will discuss territory availability and next steps with
            you directly based on your business and location.
          </p>
        </Container>
      </section>

      {/* Application Form */}
      <section className="bg-white py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Apply Now"
            title="Distributor Application"
            description="Fill out the form below and our team will get in touch to discuss the next steps."
          />
          <div className="mt-10 rounded-2xl border border-slate-100 bg-[var(--color-background)] p-6 shadow-soft sm:p-10">
            <DistributorForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
