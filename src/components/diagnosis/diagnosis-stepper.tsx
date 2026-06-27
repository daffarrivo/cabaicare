"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  number: number;
  label: string;
}

interface DiagnosisStepperProps {
  steps: Step[];
  currentStep: number;
}

export function DiagnosisStepper({ steps, currentStep }: DiagnosisStepperProps) {
  return (
    <div className="w-full select-none">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold transition-all duration-300",
                  step.number < currentStep
                    ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-[0_4px_10px_rgba(16,185,129,0.15)]"
                    : step.number === currentStep
                    ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white ring-4 ring-emerald-500/10 scale-105 shadow-[0_4px_12px_rgba(16,185,129,0.25)]"
                    : "bg-muted text-muted-foreground border border-border"
                )}
              >
                {step.number < currentStep ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-wider font-extrabold mt-2.5 text-center",
                  step.number <= currentStep
                    ? "text-emerald-700"
                    : "text-muted-foreground/60"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-4 mb-6 rounded-full transition-colors duration-500",
                  step.number < currentStep ? "bg-emerald-500" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
