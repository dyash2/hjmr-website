import Image from "next/image";
import { ArrowRight, ShieldCheck, Factory, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/data/products";

const stats = [
  {
    icon: ShieldCheck,
    title: "Statutory Profile",
    lines: [`GST: ${COMPANY.gst}`, `IEC Code: ${COMPANY.iec}`],
  },
  {
    icon: Factory,
    title: "Infrastructure",
    lines: ["Manufacturing unit in Vasai capable of high-volume production."],
  },
  {
    icon: Users,
    title: "Leadership",
    lines: ["Led by Mahavir Kothari, Ritesh Mehta, and partners."],
  },
];

export default function ManufacturingAbout() {
  return (
    <section className="bg-[var(--color-background)] py-20">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
            About the Manufacturer
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-navy)] sm:text-4xl">
            From a Vasai Factory Floor to Homes Across India
          </h2>
          <p className="mt-5 leading-relaxed text-[var(--color-muted)]">
            Established in {COMPANY.established}, {COMPANY.legalName} has grown
            into a trusted name in household cleaning manufacturing. Located in
            the industrial hub of {COMPANY.location}, we specialize in
            high-volume production of spin mops and cleaning accessories under
            the AT-ONE brand.
          </p>

          <div className="mt-8 space-y-5">
            {stats.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-navy)]">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="text-sm text-[var(--color-muted)]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button href="/about" variant="outline" className="mt-8">
            Read Full Company Profile <ArrowRight size={16} />
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-lift">
          <Image
            src="/cleaning-mop/image.png"
            alt="AT-ONE mop components manufactured at our Vasai facility"
            width={966}
            height={732}
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
