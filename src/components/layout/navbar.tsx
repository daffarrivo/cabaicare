"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/layout/logo";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/diagnosis", label: "Diagnosis" },
  { href: "/diseases", label: "Penyakit" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.25rem)] max-w-6xl rounded-2xl border border-border bg-white/90 backdrop-blur-xl shadow-elevated h-16 flex items-center justify-between px-4 sm:px-6 transform-gpu will-change-transform transition-[border-color,background-color,box-shadow] duration-300">
      <Link href="/">
        <Logo />
      </Link>

      <nav className="hidden md:flex items-center gap-1.5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                isActive
                  ? "bg-emerald-500/10 text-emerald-800"
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
          className="inline-flex items-center justify-center gap-1.5 h-10 rounded-lg px-5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs border border-emerald-800 shadow-sm active:scale-[0.98] transition-all duration-150"
        >
          Mulai Diagnosis
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <button
        className="md:hidden p-2.5 rounded-xl text-foreground hover:text-emerald-700 hover:bg-muted transition-colors"
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
                      ? "text-emerald-700 bg-emerald-500/5"
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
                className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs h-11 border border-emerald-800 active:scale-[0.98] transition-all duration-150"
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
