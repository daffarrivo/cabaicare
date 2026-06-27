"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, Bug } from "lucide-react";

const mobileLinks = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/diagnosis", label: "Diagnosis", icon: Stethoscope },
  { href: "/diseases", label: "Penyakit", icon: Bug },
];

export function MobileNav() {
  const pathname = usePathname();

  const isDiagnosisWizard = pathname.startsWith("/diagnosis");

  if (isDiagnosisWizard) return null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {mobileLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-0.5 min-h-[44px] min-w-[44px] px-3 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <link.icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-semibold">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
