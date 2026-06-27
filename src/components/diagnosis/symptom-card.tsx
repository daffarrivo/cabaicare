"use client";

import { Card, CardContent } from "@/components/ui/card";
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
      className={`cursor-pointer border-2 transition-all duration-300 rounded-2xl select-none overflow-hidden hover:-translate-y-1 ${
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
            <div className="grid grid-cols-5 gap-1 p-1 bg-zinc-100/80 border border-zinc-200/40 rounded-xl w-full select-none">
              {[
                { val: 0.2, label: "20%", desc: "Tidak Tahu" },
                { val: 0.4, label: "40%", desc: "Sedikit" },
                { val: 0.6, label: "60%", desc: "Cukup" },
                { val: 0.8, label: "80%", desc: "Yakin" },
                { val: 1.0, label: "100%", desc: "Pasti" },
              ].map((level) => {
                const isActive = Math.abs(userCf - level.val) < 0.01;
                return (
                  <button
                    key={level.val}
                    type="button"
                    onClick={() => onCFChange(id, level.val)}
                    className={`py-2 text-[10px] font-extrabold rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-white text-emerald-700 shadow-xs border border-zinc-200/30"
                        : "text-muted-foreground/70 hover:text-foreground bg-transparent border-transparent"
                    }`}
                    title={level.desc}
                  >
                    {level.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
