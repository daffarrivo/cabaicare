"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";

interface SymptomCardProps {
  id: string;
  code: string;
  name: string;
  isSelected: boolean;
  onToggle: (id: string) => void;
  disabled?: boolean;
  userCf?: number;
  onCFChange?: (id: string, cf: number) => void;
}

export function SymptomCard({
  id,
  code,
  name,
  isSelected,
  onToggle,
  userCf,
  onCFChange,
}: SymptomCardProps) {
  return (
    <Card
      className={`cursor-pointer border-2 transition-all duration-300 rounded-2xl select-none overflow-hidden relative z-0 hover:-translate-y-1 hover:z-20 ${
        isSelected
          ? "border-emerald-500 bg-emerald-500/[0.02] shadow-[0_10px_20px_-10px_rgba(16,185,129,0.06)]"
          : "border-zinc-200/80 bg-white shadow-xs hover:border-emerald-500/30 hover:shadow-sm"
      }`}
      onClick={() => onToggle(id)}
    >
      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex items-start gap-3 w-full">
          <div
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
              isSelected
                ? "border-emerald-500 bg-emerald-500 text-white scale-105"
                : "border-zinc-200 bg-zinc-50"
            }`}
          >
            {isSelected && <Check className="h-3.5 w-3.5 stroke-[3] animate-scale-in" />}
          </div>
          <div className="space-y-1">
            <span className="inline-flex text-[9px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded bg-muted border border-border text-muted-foreground">
              {code}
            </span>
            <p className="text-xs font-semibold leading-relaxed text-foreground">
              {name}
            </p>
          </div>
        </div>

        {isSelected && onCFChange && userCf !== undefined && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="pt-3 border-t border-zinc-100 w-full space-y-2"
          >
            <p className="text-[9px] font-extrabold text-zinc-500 uppercase tracking-widest">
              Tingkat Keyakinan:
            </p>
            <div className="flex items-center gap-3 w-full">
              <Slider
                value={[Math.round(userCf * 100)]}
                onValueChange={(value) => onCFChange(id, (Array.isArray(value) ? value[0] : value) / 100)}
                min={0}
                max={100}
                step={1}
                className="flex-1 [&>[data-slot=slider-track]]:h-2 [&>[data-slot=slider-range]]:bg-emerald-500 [&>[data-slot=slider-thumb]]:size-4 [&>[data-slot=slider-thumb]]:border-emerald-500"
              />
              <span className="text-xs font-extrabold text-emerald-700 w-9 text-right tabular-nums">
                {Math.round(userCf * 100)}%
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
