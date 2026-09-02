import { ShieldCheck, Users, Factory, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import MadeInIndiaBadge from "@/components/ui/MadeInIndiaBadge";
import { COMPANY } from "@/data/products";

export const metadata = {
  title: "About Us | AT-ONE",
  description:
    "Established in 2022, HJMR Industries manufactures the AT-ONE range of spin mops and cleaning accessories from its facility in Vasai, Palghar.",
};

const stats = [
  {
    icon: ShieldCheck,
    title: "Statutory Profile",
    lines: [`GST: ${COMPANY.gst}`, `IEC Code: ${COMPANY.iec}`],
  },
  {
    icon: Factory,
    title: "Infrastructure",
    lines: [
      "State-of-the-art manufacturing unit in Vasai capable of high-volume export quality production.",
    ],
  },
  {
    icon: Users,
    title: "Leadership",
    lines: [
      "Led by Mahavir Kothari, Ritesh Mehta, and partners, dedicated to manufacturing excellence.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white py-16 lg:py-20">
      <Container>
        <div className="mx-auto mb-6 flex justify-center">
          <MadeInIndiaBadge tone="tint" />
        </div>
        <SectionHeading
          eyebrow="Our Company"
          title={`About ${COMPANY.legalName}`}
          description={`Established in ${COMPANY.established}, ${COMPANY.legalName} has grown into a trusted name in household cleaning manufacturing. Located in the industrial hub of ${COMPANY.location}, we specialize in high-volume production of spin mops and cleaning accessories under the AT-ONE brand.`}
          className="max-w-3xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-[var(--color-background)] p-8 shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[var(--color-navy)]">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-slate-100 pt-12 text-center sm:flex-row">
          <Button href="/products" variant="outline">
            Browse Products
          </Button>
          <Button href="/bulk-orders" shine>
            Request Bulk Quote <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </div>
  );
}
