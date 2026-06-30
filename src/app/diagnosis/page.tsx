"use client";

import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SymptomCard } from "@/components/diagnosis/symptom-card";
import { ResultCard } from "@/components/diagnosis/result-card";
import { DiagnosisStepper } from "@/components/diagnosis/diagnosis-stepper";
import { useDiagnosis } from "@/hooks/use-diagnosis";
import { growthPhases, getSymptomsByPhase } from "@/lib/mock-data";
import { DiagnosisResult } from "@/types";
import Image from "next/image";
import {
  Search,
  Sprout,
  ArrowRight,
  ArrowLeft,
  Loader2,
  RotateCcw,
  Bug,
  Check,
  Info,
  FlaskConical,
} from "lucide-react";

const steps = [
  { number: 1, label: "Fase" },
  { number: 2, label: "Gejala" },
  { number: 3, label: "Keyakinan" },
  { number: 4, label: "Hasil" },
];

function getSymptomCategory(symptomName: string): string {
  const name = symptomName.toLowerCase();
  if (name.includes("daun")) return "daun";
  if (name.includes("batang")) return "batang";
  if (name.includes("buah") || name.includes("bunga")) return "buah";
  if (name.includes("akar")) return "akar";
  return "umum";
}

const categories = [
  { id: "all", label: "Semua" },
  { id: "daun", label: "Daun" },
  { id: "batang", label: "Batang" },
  { id: "buah", label: "Buah" },
  { id: "akar", label: "Akar" },
  { id: "umum", label: "Lainnya" },
];

export default function DiagnosisPage() {
  const {
    step,
    phaseId,
    selectedSymptoms,
    result,
    isLoading,
    error,
    setStep,
    setPhase,
    toggleSymptom,
    updateSymptomCF,
    submitDiagnosis,
    resetDiagnosis,
  } = useDiagnosis();

  const [symptomSearch, setSymptomSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [scanStatus, setScanStatus] = useState("Menginisialisasi...");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const phaseParam = params.get("phase");
      if (phaseParam) {
        const validPhases = ["f01", "f02", "f03"];
        if (validPhases.includes(phaseParam.toLowerCase())) {
          setPhase(phaseParam.toLowerCase());
          setStep(2);
          
          // Clear query param so resetting works cleanly without re-triggering
          const newUrl = window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        }
      }
    }
  }, [setPhase, setStep]);

  const phaseSymptoms = getSymptomsByPhase(phaseId);

  const filteredSymptoms = phaseSymptoms.filter((symptom) => {
    const matchesSearch =
      symptom.name.toLowerCase().includes(symptomSearch.toLowerCase()) ||
      symptom.code.toLowerCase().includes(symptomSearch.toLowerCase());
    if (activeCategory === "all") return matchesSearch;
    return getSymptomCategory(symptom.name) === activeCategory && matchesSearch;
  });

  useEffect(() => {
    if (isLoading) {
      const statuses = [
        "Menganalisis gejala terpilih...",
        "Menghubungkan dengan basis aturan...",
        "Menghitung Certainty Factor...",
        "Menyusun rekomendasi...",
        "Memvalidasi hasil...",
      ];
      let idx = 0;
      setScanStatus(statuses[0]);
      const interval = setInterval(() => {
        idx++;
        setScanStatus(statuses[idx % statuses.length]);
      }, 400);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleDiagnose = async () => {
    await submitDiagnosis();
    setStep(4);
  };

  const handleReset = () => {
    resetDiagnosis();
    setSymptomSearch("");
    setActiveCategory("all");
  };

  const selectedCount = selectedSymptoms.length;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#FAF9F5] via-[#FAF8F5] to-[#EAEFEA] text-foreground relative overflow-hidden">
      {/* Subtle Warm Ambient Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Navbar />
      <main className="flex-1 pt-28 pb-20 md:pt-32 md:pb-28 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          {/* Page Title Header */}
          <div className="text-center mb-10 space-y-2">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground uppercase leading-none">
              Diagnosis Tanaman
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto font-medium">
              Identifikasi gangguan kesehatan tanaman cabai Anda menggunakan penalaran pakar berbasis Forward Chaining dan Certainty Factor.
            </p>
          </div>

          {/* Stepper */}
          <div className="mb-10 max-w-xl mx-auto">
            <DiagnosisStepper steps={steps} currentStep={step} />
          </div>

          {/* Step 1: Phase Selection */}
          {step === 1 && (
            <Card className="border border-zinc-200/60 bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-3xl overflow-hidden animate-fade-in-up">
              <CardHeader className="border-b border-zinc-100 p-5 md:p-6 bg-zinc-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <Sprout className="h-5 w-5 text-emerald-600 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Pilih Fase Pertumbuhan</h2>
                    <p className="text-[11px] text-muted-foreground mt-0.5 font-semibold">
                      Tentukan tahapan siklus hidup tanaman cabai Anda saat ini.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                <RadioGroup
                  value={phaseId}
                  onValueChange={(value: string) => setPhase(value)}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {growthPhases.map((phase) => (
                      <Label
                        key={phase.id}
                        className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                          phaseId === phase.id
                            ? "border-emerald-500 bg-emerald-500/[0.02] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.12)]"
                            : "border-zinc-200/80 bg-white hover:border-emerald-500/30 hover:bg-emerald-500/[0.01] hover:-translate-y-1 hover:shadow-xs"
                        }`}
                      >
                        {phaseId === phase.id && (
                          <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm animate-scale-in">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                        )}
                        <RadioGroupItem value={phase.id} id={phase.id} className="sr-only" />
                        {(phase.id === "f01" ? (
                          <Image src="/phase-seedling.png" alt="Fase Pembibitan" width={36} height={36} className="object-contain mb-3 transition-transform group-hover:scale-105" />
                        ) : phase.id === "f02" ? (
                          <Image src="/phase-vegetative.png" alt="Fase Vegetatif" width={36} height={36} className="object-contain mb-3 transition-transform group-hover:scale-105" />
                        ) : (
                          <Image src="/phase-generative.png" alt="Fase Generatif" width={36} height={36} className="object-contain mb-3 transition-transform group-hover:scale-105" />
                        ))}
                        <p className="font-extrabold text-sm text-foreground mb-1 group-hover:text-emerald-700 transition-colors">{phase.name}</p>
                        <Badge className="bg-muted text-muted-foreground border border-border text-[9px] font-bold py-0.5 px-1.5 uppercase">
                          {phase.code}
                        </Badge>
                        <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed font-semibold">
                          {phase.description}
                        </p>
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
                <div className="flex justify-end mt-6">
                  <Button
                    disabled={!phaseId}
                    onClick={() => setStep(2)}
                    className="group rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm px-6 py-2.5 shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    Lanjut
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Symptom Selection */}
          {step === 2 && (
            <Card className="border border-zinc-200/60 bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-3xl overflow-hidden animate-fade-in-up">
              <CardHeader className="border-b border-zinc-100 p-5 md:p-6 bg-zinc-50/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Search className="h-5 w-5 text-emerald-600 animate-pulse" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Pilih Gejala Tanaman</h2>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-semibold">
                        Centang gejala fisik yang muncul pada tanaman cabai Anda.
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-extrabold text-xs py-1.5 px-3.5 rounded-full self-start sm:self-auto uppercase tracking-wide">
                    {selectedCount} Gejala Terpilih
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-6 space-y-4">
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Cari gejala (nama atau kode)..."
                      className="pl-9 border-zinc-200/80 bg-white rounded-xl text-sm focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500 transition-all shadow-xs"
                      value={symptomSearch}
                      onChange={(e) => setSymptomSearch(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 select-none">
                    {categories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
                            isActive
                              ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white border-emerald-500 shadow-sm"
                              : "bg-white text-muted-foreground border-zinc-200 hover:text-emerald-700 hover:border-emerald-500/30"
                          }`}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto py-1 pr-1">
                  {filteredSymptoms.map((symptom) => {
                    const isSelected = !!selectedSymptoms.find(
                      (s) => s.symptom_id === symptom.id
                    );
                    return (
                      <SymptomCard
                        key={symptom.id}
                        id={symptom.id}
                        code={symptom.code}
                        name={symptom.name}
                        isSelected={isSelected}
                        onToggle={(id: string) => toggleSymptom(id)}
                      />
                    );
                  })}
                </div>

                {filteredSymptoms.length === 0 && (
                  <div className="text-center text-muted-foreground py-12 border border-dashed border-zinc-200 rounded-2xl bg-muted/20">
                    <Bug className="h-8 w-8 mx-auto mb-2 opacity-40 text-emerald-600" />
                    <p className="text-xs font-bold uppercase tracking-wider">Tidak ada gejala yang cocok.</p>
                  </div>
                )}

                <div className="flex justify-between pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="rounded-xl border-zinc-200 bg-white hover:bg-muted text-foreground font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <ArrowLeft className="mr-1.5 h-4 w-4" />
                    Kembali
                  </Button>
                  <Button
                    disabled={selectedCount === 0}
                    onClick={() => setStep(3)}
                    className="group rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm px-6 py-2.5 shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    Lanjut
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Certainty Factor */}
          {step === 3 && (
            <Card className="border border-zinc-200/60 bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-3xl overflow-hidden animate-fade-in-up">
              <CardHeader className="border-b border-zinc-100 p-5 md:p-6 bg-zinc-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <FlaskConical className="h-5 w-5 text-emerald-600 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Tingkat Keyakinan Gejala</h2>
                    <p className="text-[11px] text-muted-foreground mt-0.5 font-semibold">
                      Tentukan seberapa yakin Anda terhadap setiap gejala yang terpilih.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-6 space-y-4">
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4.5 flex items-start gap-3">
                  <Info className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-emerald-800 leading-relaxed font-semibold">
                      Geser slider untuk menyesuaikan tingkat keyakinan Anda terhadap setiap gejala yang terpilih.
                      Nilai keyakinan akan dikalikan dengan bobot pakar untuk menghitung hasil akhir diagnosis.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 max-h-[420px] overflow-y-auto py-1 pr-1">
                  {selectedSymptoms.map((symptom) => {
                    const symptomData = phaseSymptoms.find((s) => s.id === symptom.symptom_id);
                    if (!symptomData) return null;
                    return (
                      <SymptomCard
                        key={symptom.symptom_id}
                        id={symptom.symptom_id}
                        code={symptomData.code}
                        name={symptomData.name}
                        isSelected={true}
                        userCf={symptom.user_cf}
                        onToggle={() => {}}
                        onCFChange={(id: string, cf: number) => updateSymptomCF(id, cf)}
                      />
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="rounded-xl border-zinc-200 bg-white hover:bg-muted text-foreground font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <ArrowLeft className="mr-1.5 h-4 w-4" />
                    Kembali
                  </Button>
                  <Button
                    onClick={handleDiagnose}
                    className="group rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm px-6 py-2.5 shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    Proses Diagnosis
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Loading & Result */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              {isLoading && (
                <Card className="border border-zinc-200/60 bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl overflow-hidden">
                  <CardContent className="py-20 text-center space-y-6 flex flex-col items-center justify-center">
                    <div className="relative flex items-center justify-center w-24 h-24">
                      {/* Spinning background glow */}
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-500/30 animate-spin" style={{ animationDuration: '8s' }} />
                      {/* Pulse backdrop circle */}
                      <div className="absolute w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
                      <div className="absolute w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm">
                        <Sprout className="h-8 w-8 text-emerald-600 animate-float" />
                      </div>
                    </div>
                    <div className="space-y-2 max-w-sm">
                      <h2 className="text-sm font-bold text-foreground uppercase tracking-widest animate-pulse">
                        Memproses Diagnosis
                      </h2>
                      <p className="text-xs font-semibold text-muted-foreground min-h-[16px] transition-all duration-300">{scanStatus}</p>
                    </div>
                    <div className="w-48 h-1.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse w-full" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {!isLoading && error && (
                <Card className="border border-red-200 bg-red-500/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-3xl overflow-hidden">
                  <CardContent className="py-12 text-center space-y-4">
                    <Bug className="h-10 w-10 text-red-600 mx-auto opacity-80" />
                    <h2 className="text-sm font-bold text-red-700 uppercase tracking-wider">Diagnosis Gagal</h2>
                    <p className="text-xs font-semibold text-muted-foreground">{error}</p>
                    <Button
                      onClick={handleReset}
                      className="rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <RotateCcw className="mr-1.5 h-4 w-4" />
                      Coba Lagi
                    </Button>
                  </CardContent>
                </Card>
              )}

              {!isLoading && result && (
                <div className="space-y-6">
                  <ResultCard result={result} />
                  <div className="flex justify-center gap-3">
                    <Button
                      onClick={handleReset}
                      className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm px-6 py-2.5 shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      <RotateCcw className="mr-1.5 h-4 w-4" />
                      Diagnosis Baru
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
