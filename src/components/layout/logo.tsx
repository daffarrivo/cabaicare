"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({ className, showText = true, textClassName }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Premium Geometric Vector Logo (Custom Minimalist Line/Shape Art) */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-7 w-7 transition-transform duration-300 group-hover:scale-105 shrink-0", className)}
      >
        {/* Chili Body - Matte Deep Red */}
        <path
          d="M12 8C12 8 14.5 16.5 23.5 19C21 22 17.5 25.5 13 25.5C8.5 25.5 6 22 6 18.5C6 13 12 8 12 8Z"
          fill="#DC2626"
          className="fill-red-600 dark:fill-red-500"
        />
        
        {/* Chili Stem / Leaf - Forest Green */}
        <path
          d="M12 8C15.5 5.5 20.5 6.5 23.5 9.5C19.5 9.5 15 12 12 8Z"
          fill="#16A34A"
          className="fill-emerald-600 dark:fill-emerald-500"
        />
        
        {/* Minimal Highlight Curve */}
        <path
          d="M9.5 17C9.5 19.5 11 22.5 13.5 22.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        
        {/* Integrated Medical Care Plus Icon */}
        <path
          d="M24 10H28M26 8V12"
          stroke="#16A34A"
          strokeWidth="2"
          strokeLinecap="round"
          className="stroke-emerald-600 dark:stroke-emerald-500"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            "font-heading text-base font-extrabold tracking-tight text-foreground transition-colors group-hover:text-emerald-700",
            textClassName
          )}
        >
          Cabai<span className="text-emerald-600">Care</span>
        </span>
      )}
    </div>
  );
}
