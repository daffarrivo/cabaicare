"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/diagnosis", label: "Diagnosis" },
  { href: "/diseases", label: "Penyakit" },
  { href: "/about", label: "Tentang" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.25rem)] max-w-6xl rounded-2xl border border-border bg-white/90 backdrop-blur-xl shadow-elevated h-16 flex items-center justify-between px-4 sm:px-6 transition-all duration-300">
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
          <Leaf className="h-4.5 w-4.5 text-primary" />
        </div>
        <span className="tracking-tight font-extrabold text-base text-foreground group-hover:text-primary transition-colors">
          CabaiCare
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-1.5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/diagnosis"
          className="inline-flex items-center gap-1.5 h-10 rounded-full px-5 bg-primary hover:bg-primary/90 text-white font-bold text-xs shadow-sm transition-colors"
        >
          Mulai Diagnosis
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <button
        className="md:hidden p-2.5 rounded-xl text-foreground hover:text-primary hover:bg-muted transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="absolute top-[4.5rem] left-0 right-0 md:hidden border border-border bg-white rounded-2xl py-3 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold py-3 px-4 rounded-xl transition-all ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 pb-1 px-3">
              <Link
                href="/diagnosis"
                className="inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs h-11 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Mulai Diagnosis
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
