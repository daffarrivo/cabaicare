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
      className={`cursor-pointer border transition-all duration-300 rounded-2xl select-none overflow-hidden hover:-translate-y-0.5 ${
        isSelected
          ? "border-primary bg-primary/[0.03] shadow-[0_0_0_1px_rgba(22,163,74,0.3)]"
          : "border-border bg-white shadow-card hover:border-primary/30 hover:shadow-card-hover"
      }`}
      onClick={() => onToggle(id)}
    >
      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex items-start gap-3 w-full">
          <div
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
              isSelected
                ? "border-primary bg-primary text-white"
                : "border-border bg-muted"
            }`}
          >
            {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
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
            className="pt-3 border-t border-border w-full space-y-2"
          >
            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
              Tingkat Keyakinan:
            </p>
            <div className="flex flex-wrap gap-1.5">
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
                    className={`px-3 py-1.5 text-[10px] font-bold rounded-lg border transition-all ${
                      isActive
                        ? "bg-primary border-primary text-white shadow-sm"
                        : "bg-white border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
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
