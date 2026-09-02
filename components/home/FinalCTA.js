import { ArrowRight, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/data/products";

export default function FinalCTA() {
  return (
    <section className="bg-[var(--color-navy)] py-20">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
          Ready to bring AT-ONE to your store or city?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
          Whether you need a one-time bulk order or want to become a
          long-term distribution partner, our team is ready to help.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/bulk-orders" variant="primary" size="lg" shine>
            Request Bulk Quote <ArrowRight size={18} />
          </Button>
          <Button href="/distributor" variant="outline-light" size="lg">
            Become a Distributor
          </Button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-slate-400 sm:flex-row sm:gap-8">
          <a href={`tel:${COMPANY.phoneDial}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={16} /> {COMPANY.phoneDisplay}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} /> {COMPANY.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
