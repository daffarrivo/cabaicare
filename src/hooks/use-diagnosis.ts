"use client";

import { useState, useCallback } from "react";
import { DiagnosisInput, DiagnosisResult } from "@/types";
import { runDiagnosis } from "@/lib/inference-engine";

interface DiagnosisState {
  step: number;
  phaseId: string;
  selectedSymptoms: { symptom_id: string; user_cf: number }[];
  result: DiagnosisResult | null;
  isLoading: boolean;
  error: string | null;
}

const DIAGNOSIS_STORAGE_KEY = "cabaicare-diagnosis";

export function useDiagnosis() {
  const [state, setState] = useState<DiagnosisState>({
    step: 1,
    phaseId: "",
    selectedSymptoms: [],
    result: null,
    isLoading: false,
    error: null,
  });

  const setStep = useCallback((step: number) => {
    setState((prev) => ({ ...prev, step, error: null }));
  }, []);

  const setPhase = useCallback((phaseId: string) => {
    setState((prev) => ({ ...prev, phaseId, selectedSymptoms: [] }));
  }, []);

  const toggleSymptom = useCallback(
    (symptomId: string) => {
      setState((prev) => {
        const existing = prev.selectedSymptoms.find(
          (s) => s.symptom_id === symptomId
        );
        if (existing) {
          return {
            ...prev,
            selectedSymptoms: prev.selectedSymptoms.filter(
              (s) => s.symptom_id !== symptomId
            ),
          };
        }
        return {
          ...prev,
          selectedSymptoms: [
            ...prev.selectedSymptoms,
            { symptom_id: symptomId, user_cf: 0.8 },
          ],
        };
      });
    },
    []
  );

  const goToConfidence = useCallback(() => {
    if (state.selectedSymptoms.length === 0) return;
    setState((prev) => ({ ...prev, step: 3 }));
  }, [state.selectedSymptoms.length]);

  const updateSymptomCF = useCallback((symptomId: string, userCf: number) => {
    setState((prev) => ({
      ...prev,
      selectedSymptoms: prev.selectedSymptoms.map((s) =>
        s.symptom_id === symptomId ? { ...s, user_cf: userCf } : s
      ),
    }));
  }, []);

  const submitDiagnosis = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    const input: DiagnosisInput = {
      phase_id: state.phaseId,
      symptoms: state.selectedSymptoms,
    };

    const result = runDiagnosis(input);

    if (!result) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: "Tidak ditemukan penyakit yang cocok dengan gejala yang dipilih.",
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      result,
      isLoading: false,
      step: 4,
    }));

    // Save to localStorage
    try {
      const history = JSON.parse(
        localStorage.getItem(DIAGNOSIS_STORAGE_KEY) ?? "[]"
      );
      history.unshift(result);
      localStorage.setItem(
        DIAGNOSIS_STORAGE_KEY,
        JSON.stringify(history.slice(0, 50))
      );
    } catch {
      // ignore storage errors
    }
  }, [state.phaseId, state.selectedSymptoms]);

  const resetDiagnosis = useCallback(() => {
    setState({
      step: 1,
      phaseId: "",
      selectedSymptoms: [],
      result: null,
      isLoading: false,
      error: null,
    });
  }, []);

  const getHistory = useCallback((): DiagnosisResult[] => {
    try {
      return JSON.parse(localStorage.getItem(DIAGNOSIS_STORAGE_KEY) ?? "[]");
    } catch {
      return [];
    }
  }, []);

  return {
    ...state,
    setStep,
    setPhase,
    toggleSymptom,
    goToConfidence,
    updateSymptomCF,
    submitDiagnosis,
    resetDiagnosis,
    getHistory,
  };
}
