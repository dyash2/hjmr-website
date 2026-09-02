import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import MadeInIndiaBadge from "@/components/ui/MadeInIndiaBadge";
import { COMPANY, CATEGORIES } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-slate-400">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-xs">
              Premium spin mops, buckets, and cleaning accessories, manufactured
              in-house and supplied direct to distributors and retailers across
              India.
            </p>
            <MadeInIndiaBadge tone="light" size="sm" className="mt-5" />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products?category=${c.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Business
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/bulk-orders" className="hover:text-white transition-colors">Bulk Orders</Link></li>
              <li><Link href="/distributor" className="hover:text-white transition-colors">Become a Distributor</Link></li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                {COMPANY.location}
              </li>
              <li>
                <a href={`tel:${COMPANY.phoneDial}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone size={16} className="text-[var(--color-secondary)]" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail size={16} className="text-[var(--color-secondary)]" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="text-[var(--color-secondary)]" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              GST: {COMPANY.gst} &nbsp;·&nbsp; IEC: {COMPANY.iec}
            </p>
            <p>
              © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
            </p>
          </div>
          <p className="mt-3 flex items-center gap-1 sm:justify-end">
            Designed &amp; Developed by
            <a
              href="https://dyash2.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--color-secondary)] hover:text-white transition-colors"
            >
              YDSR Company
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
