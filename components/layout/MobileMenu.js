"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, ChevronRight } from "lucide-react";
import { COMPANY } from "@/data/products";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/bulk-orders", label: "Bulk Orders" },
  { href: "/distributor", label: "Become a Distributor" },
  { href: "/about", label: "About Us" },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
          />
          <motion.div
            key="panel"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 max-h-screen overflow-y-auto rounded-b-2xl bg-white pt-4 pb-6 shadow-lift md:hidden"
          >
            <div className="flex items-center justify-between px-5 pb-4 border-b border-slate-100">
              <span className="font-display text-lg font-extrabold text-[var(--color-navy)]">
                Menu
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col px-2 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold text-[var(--color-navy)] hover:bg-slate-50 active:bg-slate-100"
                >
                  {link.label}
                  <ChevronRight size={18} className="text-slate-300" />
                </Link>
              ))}
            </nav>

            <div className="mt-2 flex flex-col gap-2.5 px-5 pt-3 border-t border-slate-100">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href={`tel:${COMPANY.phoneDial}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 font-semibold text-[var(--color-navy)]"
              >
                <Phone size={18} />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
