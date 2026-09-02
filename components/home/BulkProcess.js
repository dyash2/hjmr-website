import { FileText, PhoneCall, PackageCheck, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Your Enquiry",
    desc: "Fill out the bulk-order form with your product, quantity, and delivery details.",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Consultation & Quote",
    desc: "Our team reviews your requirement and reaches out to share pricing and options.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Confirm Your Order",
    desc: "Finalize quantity, pricing, and delivery timelines with our sales team.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Production & Dispatch",
    desc: "Your order is prepared at our Vasai facility and dispatched to your location.",
  },
];

export default function BulkProcess() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Bulk Order Process"
          description="A straightforward path from enquiry to delivery."
        />

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute top-6 left-0 right-0 hidden h-px bg-slate-200 lg:block"
          />
          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div key={number} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-white text-sm font-extrabold text-[var(--color-primary)]">
                {number}
              </div>
              <Icon size={22} className="mb-3 text-[var(--color-primary)]" />
              <h3 className="font-bold text-[var(--color-navy)]">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
