import { MessageCircle, Phone, PackageCheck, Clock, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BulkOrderForm from "@/components/forms/BulkOrderForm";
import { COMPANY } from "@/data/products";

export const metadata = {
  title: "Bulk Orders | AT-ONE Wholesale",
  description:
    "Request a wholesale quote for AT-ONE spin mops, buckets, and cleaning accessories. Factory-direct pricing for distributors and retailers across India.",
};

const sidePoints = [
  {
    icon: PackageCheck,
    title: "Factory Direct",
    desc: "Straight from our Vasai manufacturing unit, no middlemen.",
  },
  {
    icon: ShieldCheck,
    title: "GST Compliant",
    desc: "Genuine invoices provided with every order.",
  },
  {
    icon: Clock,
    title: "We'll Reach Out",
    desc: "Our team reviews every enquiry and gets back to you directly.",
  },
];

export default function BulkOrdersPage() {
  return (
    <div className="bg-[var(--color-background)] py-16">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Wholesale Enquiry"
            title="Request a Bulk Order Quote"
            description="Tell us what you need and our team will follow up with wholesale pricing tailored to your quantity and location."
            className="mx-0"
          />

          <div className="mt-8 space-y-5">
            {sidePoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-navy)]">{title}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="mb-4 text-sm font-semibold text-[var(--color-navy)]">
              Prefer to talk directly?
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a
                href={`tel:${COMPANY.phoneDial}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <Phone size={18} /> {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-10 lg:col-span-3">
          <BulkOrderForm />
        </div>
      </Container>
    </div>
  );
}
