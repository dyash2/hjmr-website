import { Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { COMPANY } from "@/data/products";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-[var(--color-navy)] text-slate-300 text-xs">
      <Container className="flex items-center justify-between py-2">
        <p className="font-semibold tracking-wide text-slate-200">
          BUILT FOR INDIA <span className="text-[var(--color-secondary)]">•</span> READY FOR THE WORLD
        </p>
        <div className="flex items-center gap-5">
          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
            <MapPin size={12} />
            {COMPANY.location}
          </span>
          <a
            href={`tel:${COMPANY.phoneDial}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={12} />
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </Container>
    </div>
  );
}
