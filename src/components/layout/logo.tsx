"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({ className, showText = true, textClassName }: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none group">
      {/* High-End Geometric Vector Logo */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-8 w-8 transition-transform duration-300 group-hover:scale-105 shrink-0", className)}
      >
        <defs>
          <linearGradient id="chiliGrad" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="12" y1="4" x2="22" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* Ambient Ring Shield */}
        <circle cx="16" cy="16" r="14.5" fill="url(#ringGrad)" stroke="#E2E8F0" strokeWidth="1.25" />

        {/* Dynamic Botanical Shield Line */}
        <path
          d="M6.5 16C6.5 8 12.5 3.5 20.5 3.5C22.5 5 24 7.5 24 9.5"
          stroke="#059669"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Chili Pepper Body */}
        <path
          d="M13.5 9C13.5 9 15.5 15 22.5 17C20.5 19.5 17.5 22 14 22C10 22 8 19.5 8 16.5C8 12 13.5 9 13.5 9Z"
          fill="url(#chiliGrad)"
        />

        {/* Chili Leaf Stem */}
        <path
          d="M13.5 9C16.5 7 20.5 7.5 22.5 10C19 10 15.5 12 13.5 9Z"
          fill="url(#leafGrad)"
        />

        {/* Clean Plus Icon representing medical/care context */}
        <path
          d="M23 23H27M25 21V25"
          stroke="#059669"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-heading text-[15px] font-extrabold tracking-tight text-foreground transition-colors group-hover:text-emerald-700",
            textClassName
          )}
        >
          Cabai<span className="text-emerald-600">Care</span>
        </span>
      )}
    </div>
  );
}
