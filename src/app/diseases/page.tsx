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
import { Search, Shield, AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 space-y-3">
            <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs font-extrabold py-1 px-3.5 uppercase tracking-wider rounded-full">
              Katalog Referensi
            </Badge>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
              Informasi Penyakit Cabai
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Kenali 11 jenis penyakit tanaman cabai beserta gejala, penyebab, solusi penanganan, dan tingkat keparahannya.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto mb-12">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari penyakit..."
                className="pl-9 border-border bg-white rounded-xl text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 select-none">
              {causeCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
                    activeCategory === cat.id
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-muted-foreground border-border hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDiseases.map((disease) => {
              const hazard = getHazardLevel(disease.code);
              return (
                <Card
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease)}
                  className="border border-border bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge className="bg-muted text-muted-foreground border border-border font-mono text-[9px] font-bold py-0.5 px-2">
                        {disease.code}
                      </Badge>
                      <Badge className={`border uppercase text-[8px] font-bold py-0.5 px-2 rounded-md ${hazard.color} ${hazard.bg}`}>
                        {hazard.label}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {disease.name}
                    </h3>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {disease.description}
                    </p>
                    <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-primary font-bold uppercase tracking-wider">
                      <span>Lihat Detail</span>
                      <Shield className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredDiseases.length === 0 && (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-muted/20">
              <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-40" />
              <p className="text-sm text-muted-foreground font-semibold">Penyakit tidak ditemukan.</p>
            </div>
          )}
        </div>
      </main>

      <Dialog open={!!selectedDisease} onOpenChange={(open) => !open && setSelectedDisease(null)}>
        {selectedDisease && (
          <DialogContent className="max-w-2xl bg-white border border-border rounded-2xl shadow-elevated p-6 overflow-y-auto max-h-[90vh]">
            <DialogHeader className="pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Badge className="bg-muted text-muted-foreground border border-border text-xs font-bold py-1 px-2.5">
                  {selectedDisease.code}
                </Badge>
                <Badge className={`border uppercase text-[9px] font-bold py-0.5 px-2 rounded-md ${getHazardLevel(selectedDisease.code).color} ${getHazardLevel(selectedDisease.code).bg}`}>
                  {getHazardLevel(selectedDisease.code).label}
                </Badge>
              </div>
              <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight mt-2">
                {selectedDisease.name}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 pt-4">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  Deskripsi Penyakit
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-xl border border-border">
                  {selectedDisease.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" />
                  Penyebab & Vektor
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed bg-muted/50 p-4 rounded-xl border border-border">
                  {selectedDisease.cause}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Gejala Pemicu Aturan Pakar
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-muted/30 p-4 rounded-xl border border-border">
                  {getDiseaseSymptoms(selectedDisease.id).map((ds) => {
                    const symptom = allSymptoms.find((s) => s.id === ds.symptom_id);
                    return (
                      <div key={ds.id} className="flex items-start gap-2 text-xs text-foreground">
                        <Badge className="bg-muted text-muted-foreground border border-border font-mono text-[9px] py-0.5 px-1.5 shrink-0 mt-0.5">
                          {symptom?.code}
                        </Badge>
                        <div className="space-y-0.5">
                          <p className="font-semibold">{symptom?.name}</p>
                          <p className="text-[9px] text-muted-foreground font-mono">
                            CF Expert: {ds.cf_expert}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border border-l-[3px] border-l-primary bg-muted/20 space-y-1.5">
                  <h5 className="font-bold text-xs text-primary uppercase tracking-wider">
                    Solusi Penanganan
                  </h5>
                  <p className="text-sm text-foreground/80 leading-relaxed">{selectedDisease.solution}</p>
                </div>
                <div className="p-4 rounded-xl border border-border border-l-[3px] border-l-sky-500 bg-muted/20 space-y-1.5">
                  <h5 className="font-bold text-xs text-sky-600 uppercase tracking-wider">
                    Tindakan Pencegahan
                  </h5>
                  <p className="text-sm text-foreground/80 leading-relaxed">{selectedDisease.prevention}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-border mt-4">
              <Button
                onClick={() => setSelectedDisease(null)}
                variant="outline"
                className="rounded-xl border-border text-foreground font-semibold text-sm"
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
