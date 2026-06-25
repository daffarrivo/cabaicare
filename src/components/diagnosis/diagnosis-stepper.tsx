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
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                  step.number < currentStep
                    ? "bg-primary text-white shadow-sm"
                    : step.number === currentStep
                    ? "bg-primary text-white ring-4 ring-primary/20 shadow-sm"
                    : "bg-muted text-muted-foreground border-2 border-border"
                )}
              >
                {step.number < currentStep ? (
                  <Check className="w-4.5 h-4.5 stroke-[3]" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={cn(
                  "text-[11px] mt-2 text-center font-semibold",
                  step.number <= currentStep
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-3 mb-6 rounded-full transition-colors duration-300",
                  step.number < currentStep ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
