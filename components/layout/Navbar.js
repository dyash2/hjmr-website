"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/bulk-orders", label: "Bulk Orders" },
  { href: "/distributor", label: "Distributor" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-saturate-150 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between py-2.5">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "text-[var(--color-primary)]"
                    : "text-slate-600 hover:text-[var(--color-navy)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/bulk-orders" size="sm" shine>
            Get Bulk Pricing
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-navy)] hover:bg-slate-100"
        >
          <Menu size={22} />
        </button>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
