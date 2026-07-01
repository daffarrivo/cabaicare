"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { diseases, getDiseaseSymptoms, symptoms as allSymptoms } from "@/lib/mock-data";
import { Disease } from "@/types";
import { Search, Shield, AlertCircle, AlertTriangle, CheckCircle, Info, Sparkles, Check, Activity, Leaf, Bug } from "lucide-react";
import Image from "next/image";

function getDiseaseType(cause: string): string {
  const c = cause.toLowerCase();
  if (c.includes("jamur")) return "jamur";
  if (c.includes("bakteri")) return "bakteri";
  if (c.includes("virus")) return "virus";
  return "lainnya";
}

const causeCategories = [
  { id: "all", label: "Semua" },
  { id: "jamur", label: "Jamur" },
  { id: "bakteri", label: "Bakteri" },
  { id: "virus", label: "Virus" },
  { id: "lainnya", label: "Lainnya" },
];

function getHazardLevel(code: string): { label: string; color: string; bg: string } {
  const codeUpper = code.toUpperCase();
  if (["P01", "P04", "P07"].includes(codeUpper)) {
    return { label: "Sangat Tinggi", color: "text-red-600", bg: "bg-red-50 border-red-200" };
  }
  if (["P02", "P05", "P08", "P11"].includes(codeUpper)) {
    return { label: "Tinggi", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" };
  }
  return { label: "Sedang", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200" };
}

export default function DiseasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const filteredDiseases = diseases.filter((disease) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      disease.name.toLowerCase().includes(query) ||
      disease.code.toLowerCase().includes(query) ||
      disease.description.toLowerCase().includes(query) ||
      disease.cause.toLowerCase().includes(query);

    const type = getDiseaseType(disease.cause);
    const matchesCategory = activeCategory === "all" || type === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#FAF9F5] via-[#FAF8F5] to-[#EAEFEA] text-foreground relative overflow-hidden">
      {/* Subtle Warm Ambient Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform" />

      <Navbar />
      {/* Premium Welcoming Header Section */}
      <div className="relative pt-36 pb-20 overflow-hidden border-b border-zinc-200/50">
        {/* Background Image with soft opacity and gradient blend */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/chili_pile.jpg"
            alt="Chili reference background"
            fill
            className="object-cover opacity-[0.22] brightness-[0.98] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/40 via-[#FAF8F5]/85 to-[#FAF9F5] backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center space-y-6 animate-fade-in-up">
          <div className="space-y-3">
            <span className="font-sans text-xs tracking-[0.25em] font-extrabold text-emerald-600 uppercase block">
              Referensi Ilmiah
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight uppercase leading-[1.05] text-foreground">
              Referensi <br />
              <span className="text-gradient-cabai">Penyakit Cabai</span>
            </h1>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto font-semibold">
            Kumpulan data ilmiah dan rekomendasi penanganan pakar untuk 11 jenis gangguan kesehatan pada tanaman cabai Anda.
          </p>
          
          <div className="relative max-w-md w-full mx-auto pt-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-pulse" />
            <Input
              placeholder="Cari penyakit (nama, kode, penyebab)..."
              className="pl-9.5 border-zinc-200/80 bg-white rounded-xl text-xs focus-visible:ring-emerald-500/50 focus-visible:border-emerald-500 shadow-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <main className="flex-1 py-12 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl animate-fade-in-up">

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-1.5 select-none mb-12">
            {causeCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all border duration-150 active:scale-[0.98] ${
                  activeCategory === cat.id
                    ? "bg-emerald-50 border-emerald-600 text-emerald-800 shadow-2xs"
                    : "bg-white text-muted-foreground border-zinc-200 hover:text-emerald-700 hover:border-emerald-500/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiseases.map((disease) => {
              const hazard = getHazardLevel(disease.code);
              return (
                <Card
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease)}
                  className="border border-zinc-200/60 bg-white shadow-sm hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-emerald-500 hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-300 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
                >
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge className="bg-zinc-50 text-muted-foreground border border-zinc-200/60 font-mono text-[9px] font-extrabold py-0.5 px-2 uppercase tracking-wide rounded-md">
                        {disease.code}
                      </Badge>
                      <Badge className={`border uppercase text-[8px] font-bold py-0.5 px-2 rounded-md ${hazard.color} ${hazard.bg}`}>
                        {hazard.label}
                      </Badge>
                    </div>
                    <h3 className="text-base font-extrabold text-foreground group-hover:text-emerald-700 transition-colors tracking-tight leading-snug">
                      {disease.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 space-y-4 flex flex-col justify-between flex-1">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 font-semibold">
                      {disease.description}
                    </p>
                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest">
                      <span>Lihat Detail Penanganan</span>
                      <Shield className="h-3.5 w-3.5 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredDiseases.length === 0 && (
            <div className="text-center py-16 border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50">
              <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-40" />
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Penyakit tidak ditemukan.</p>
            </div>
          )}
        </div>
      </main>

      {/* Disease Detail Dialog (Clean & Soft Cohesive Styling) */}
      <Dialog open={!!selectedDisease} onOpenChange={(open) => !open && setSelectedDisease(null)}>
        {selectedDisease && (
          <DialogContent className="max-w-6xl sm:max-w-6xl w-[95vw] bg-white border border-zinc-200/80 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.1)] p-0 overflow-hidden max-h-[90vh] flex flex-col animate-scale-in">
            
            {/* Header with warm botanical gradient */}
            <div className="relative p-6 sm:p-8 md:p-10 pb-6 bg-gradient-to-br from-[#FAF9F5] via-[#FAF9F5] to-[#EAEFEA] border-b border-zinc-200/50 shrink-0">
              <div className="flex items-center gap-2 mb-2.5 select-none">
                <Badge className="bg-emerald-600/10 text-emerald-800 border border-emerald-600/20 text-[10px] font-extrabold py-0.5 px-2.5 rounded-full uppercase tracking-wider">
                  {selectedDisease.code}
                </Badge>
                <Badge className={`border uppercase text-[9px] font-extrabold py-0.5 px-2.5 rounded-full ${getHazardLevel(selectedDisease.code).color} ${getHazardLevel(selectedDisease.code).bg}`}>
                  Tingkat Bahaya: {getHazardLevel(selectedDisease.code).label}
                </Badge>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-heading tracking-tight text-foreground uppercase leading-tight">
                {selectedDisease.name}
              </DialogTitle>
            </div>

            {/* Scrollable body content */}
            <div className="p-6 sm:p-8 md:p-10 space-y-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Description, Cause, and Symptoms (7 Columns) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Deskripsi Penyakit */}
                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest flex items-center gap-1.5 font-sans">
                      <Info className="h-3.5 w-3.5" /> Deskripsi Penyakit
                    </h4>
                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">
                      {selectedDisease.description}
                    </p>
                  </div>

                  {/* Penyebab & Vektor */}
                  <div className="p-4.5 bg-amber-500/[0.02] border border-amber-200/40 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-amber-700">
                      <AlertTriangle className="h-4 w-4 shrink-0 animate-pulse" />
                      <span className="text-[10px] font-extrabold uppercase tracking-widest">Penyebab / Vektor Penyebar</span>
                    </div>
                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">
                      {selectedDisease.cause}
                    </p>
                  </div>

                  {/* Gejala Klinis */}
                  <div className="space-y-3.5">
                    <h4 className="text-[10px] font-extrabold text-zinc-600 uppercase tracking-widest flex items-center gap-1.5 font-sans">
                      <Activity className="h-3.5 w-3.5 text-zinc-500" /> Gejala Pemicu Aturan Pakar
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {getDiseaseSymptoms(selectedDisease.id).map((ds) => {
                        const symptom = allSymptoms.find((s) => s.id === ds.symptom_id);
                        return (
                          <div key={ds.id} className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-200/50 bg-zinc-50/50 hover:bg-white hover:border-emerald-500/30 transition-all duration-300">
                            <div className="h-7 w-7 rounded-xl bg-emerald-600/10 flex items-center justify-center shrink-0">
                              <Check className="h-4 w-4 text-emerald-700" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-extrabold text-foreground truncate">{symptom?.name}</p>
                              <p className="text-[9px] text-muted-foreground font-mono mt-0.5">
                                Kode: {symptom?.code} • Bobot CF: <span className="font-extrabold text-emerald-700">{ds.cf_expert}</span>
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Side: Solutions & Prevention stacked (5 Columns) */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Solusi Penanganan */}
                  <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.01] hover:bg-emerald-500/[0.02] transition-all duration-300 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-600/10 text-emerald-700">
                        <Leaf className="h-4 w-4" />
                      </div>
                      <h5 className="font-extrabold text-xs text-emerald-800 uppercase tracking-widest">
                        Solusi Penanganan
                      </h5>
                    </div>
                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">{selectedDisease.solution}</p>
                  </div>

                  {/* Tindakan Pencegahan */}
                  <div className="p-5 rounded-2xl border border-sky-500/20 bg-sky-50/[0.01] hover:bg-sky-50/[0.02] transition-all duration-300 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-sky-600/10 text-sky-700">
                        <Shield className="h-4 w-4" />
                      </div>
                      <h5 className="font-extrabold text-xs text-sky-800 uppercase tracking-widest">
                        Tindakan Pencegahan
                      </h5>
                    </div>
                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">{selectedDisease.prevention}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer containing close button */}
            <div className="flex justify-end p-4 px-6 sm:px-8 border-t border-zinc-100 bg-zinc-50/50 shrink-0">
              <Button
                onClick={() => setSelectedDisease(null)}
                variant="outline"
                size="sm"
              >
                Tutup Detail
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
      <Footer />
      <MobileNav />
    </div>
  );
}
