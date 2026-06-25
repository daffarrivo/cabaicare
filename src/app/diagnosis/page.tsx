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
import {
  Leaf,
  Search,
  Sprout,
  ArrowRight,
  ArrowLeft,
  Loader2,
  RotateCcw,
  Bug,
  Check,
  Info,
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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          {/* Stepper */}
          <div className="mb-10">
            <DiagnosisStepper steps={steps} currentStep={step} />
          </div>

          {/* Step 1: Phase Selection */}
          {step === 1 && (
            <Card className="border border-border bg-white shadow-card rounded-2xl overflow-hidden animate-fade-in-up">
              <CardHeader className="border-b border-border p-5 md:p-6 bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Sprout className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-foreground">Pilih Fase Pertumbuhan</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Tentukan tahapan siklus hidup tanaman cabai Anda.
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
                        className={`flex flex-col items-center text-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                          phaseId === phase.id
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border bg-white hover:border-primary/30 hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem value={phase.id} id={phase.id} className="sr-only" />
                        <Leaf
                          className={`h-6 w-6 text-primary mb-3 transition-transform ${
                            phaseId === phase.id ? "scale-110" : ""
                          }`}
                        />
                        <p className="font-extrabold text-sm text-foreground mb-1">{phase.name}</p>
                        <Badge className="bg-muted text-muted-foreground border border-border text-[10px] font-bold">
                          {phase.code}
                        </Badge>
                        <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
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
                    className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-2.5 shadow-sm"
                  >
                    Lanjut
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Symptom Selection */}
          {step === 2 && (
            <Card className="border border-border bg-white shadow-card rounded-2xl overflow-hidden animate-fade-in-up">
              <CardHeader className="border-b border-border p-5 md:p-6 bg-muted/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-extrabold text-foreground">Pilih Gejala</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Centang gejala yang muncul pada tanaman cabai Anda.
                    </p>
                  </div>
                  <Badge className="bg-primary/10 text-primary border border-primary/20 font-bold text-xs py-1 px-3 rounded-full self-start sm:self-auto">
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
                      className="pl-9 border-border bg-white rounded-xl text-sm"
                      value={symptomSearch}
                      onChange={(e) => setSymptomSearch(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
                            isActive
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                          }`}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1">
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
                  <div className="text-center text-muted-foreground py-12 border border-dashed border-border rounded-2xl bg-muted/30">
                    <Bug className="h-8 w-8 mx-auto mb-2 opacity-40" />
                    <p className="text-sm font-semibold">Tidak ada gejala yang cocok.</p>
                  </div>
                )}

                <div className="flex justify-between pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="rounded-xl border-border text-foreground font-semibold text-sm"
                  >
                    <ArrowLeft className="mr-1.5 h-4 w-4" />
                    Kembali
                  </Button>
                  <Button
                    disabled={selectedCount === 0}
                    onClick={() => setStep(3)}
                    className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-2.5 shadow-sm"
                  >
                    Lanjut
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Certainty Factor */}
          {step === 3 && (
            <Card className="border border-border bg-white shadow-card rounded-2xl overflow-hidden animate-fade-in-up">
              <CardHeader className="border-b border-border p-5 md:p-6 bg-muted/30">
                <div>
                  <h2 className="text-lg font-extrabold text-foreground">Tingkat Keyakinan</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Tentukan seberapa yakin Anda terhadap setiap gejala yang dipilih.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-6 space-y-4">
                <div className="bg-muted/50 border border-border rounded-xl p-4 flex items-start gap-3">
                  <Info className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Pilih <strong>&quot;Sangat Yakin&quot;</strong> jika gejala terlihat jelas pada tanaman.
                    Pilih <strong>&quot;Tidak Tahu&quot;</strong> jika Anda ragu dengan gejala yang muncul.
                    Nilai keyakinan akan dikalikan dengan bobot pakar untuk menghitung hasil akhir.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 max-h-[480px] overflow-y-auto pr-1">
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

                <div className="flex justify-between pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="rounded-xl border-border text-foreground font-semibold text-sm"
                  >
                    <ArrowLeft className="mr-1.5 h-4 w-4" />
                    Kembali
                  </Button>
                  <Button
                    onClick={handleDiagnose}
                    className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-2.5 shadow-sm"
                  >
                    Proses Diagnosis
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Loading & Result */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              {isLoading && (
                <Card className="border border-border bg-white shadow-card rounded-2xl overflow-hidden">
                  <CardContent className="py-20 text-center space-y-6 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Loader2 className="h-6 w-6 text-primary animate-spin" />
                    </div>
                    <div className="space-y-2 max-w-sm">
                      <h2 className="text-sm font-bold text-foreground uppercase tracking-wide">
                        Memproses Diagnosis
                      </h2>
                      <p className="text-sm text-muted-foreground min-h-[20px]">{scanStatus}</p>
                    </div>
                    <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-pulse w-full" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {!isLoading && error && (
                <Card className="border border-destructive/30 bg-destructive/5 rounded-2xl overflow-hidden">
                  <CardContent className="py-12 text-center space-y-4">
                    <Bug className="h-10 w-10 text-destructive mx-auto opacity-60" />
                    <h2 className="text-sm font-bold text-destructive">Diagnosis Gagal</h2>
                    <p className="text-sm text-muted-foreground">{error}</p>
                    <Button
                      onClick={handleReset}
                      className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-sm"
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
                      className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-2.5 shadow-sm"
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
