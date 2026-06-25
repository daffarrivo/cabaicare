import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DiagnosisResult, Symptom } from "@/types";
import { getConfidenceLevel } from "@/lib/inference-engine";
import { AlertTriangle, CheckCircle2, FlaskConical, Shield, Printer, Check } from "lucide-react";

interface ResultCardProps {
  result: DiagnosisResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const level = getConfidenceLevel(result.confidence);
  const confidencePct = Math.round(result.confidence * 100);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  const getStrokeColor = (pct: number) => {
    if (pct >= 80) return "#16A34A";
    if (pct >= 60) return "#FACC15";
    return "#DC2626";
  };

  const getTrackColor = (pct: number) => {
    if (pct >= 80) return "rgba(22,163,74,0.1)";
    if (pct >= 60) return "rgba(250,204,21,0.1)";
    return "rgba(220,38,38,0.1)";
  };

  const strokeColor = getStrokeColor(confidencePct);
  const trackColor = getTrackColor(confidencePct);

  const strokeDashoffset = circumference - (confidencePct / 100) * circumference;

  return (
    <div className="space-y-6 print-card rounded-2xl">
      {/* Main Diagnosis Card */}
      <Card className="border border-border bg-white shadow-card rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <CardHeader className="text-center pb-2 relative z-10 flex flex-col items-center pt-8">
          <Badge className="mx-auto mb-3 bg-primary/10 text-primary border border-primary/20 text-xs font-extrabold py-1 px-3 uppercase rounded-full">
            Diagnosis Utama
          </Badge>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            {result.disease.name}
          </h2>
          <p className="text-xs text-muted-foreground font-mono mt-1">{result.disease.code}</p>
        </CardHeader>

        <CardContent className="flex flex-col items-center pt-2 pb-8 relative z-10 space-y-5">
          {/* Radial Progress Gauge */}
          <div className="relative flex items-center justify-center">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                stroke={trackColor}
                strokeWidth="7"
                fill="transparent"
                r={radius}
                cx="80"
                cy="80"
              />
              <circle
                stroke={strokeColor}
                strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                r={radius}
                cx="80"
                cy="80"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center text-center">
              <span className="text-4xl font-extrabold text-foreground tracking-tight">
                {confidencePct}%
              </span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">
                CF Score
              </span>
            </div>
          </div>

          <div className="text-center space-y-2 max-w-sm">
            <Badge
              className="text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: getTrackColor(confidencePct),
                color: strokeColor,
                border: `1px solid ${strokeColor}40`,
              }}
            >
              {level.label}
            </Badge>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Hasil diagnosis berdasarkan perhitungan kombinasi Certainty Factor dari gejala yang dipilih.
            </p>
          </div>

          <Button
            onClick={() => window.print()}
            variant="outline"
            className="no-print border-border bg-white hover:bg-muted text-xs font-bold uppercase tracking-wider rounded-xl px-5 py-2.5 flex items-center gap-2"
          >
            <Printer className="h-3.5 w-3.5 text-primary" />
            Cetak / Simpan PDF
          </Button>
        </CardContent>
      </Card>

      {/* Deskripsi & Penyebab */}
      <Card className="rounded-2xl border border-border bg-white shadow-card">
        <CardHeader className="pb-3 border-b border-border p-5 bg-muted/30">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4.5 w-4.5 text-primary" />
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">
              Deskripsi & Penyebab
            </h3>
          </div>
        </CardHeader>
        <CardContent className="p-5 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Tentang Penyakit
            </span>
            <p className="text-sm text-foreground/80 leading-relaxed">{result.disease.description}</p>
          </div>
          <Separator className="bg-border" />
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Faktor Penyebab
            </span>
            <p className="text-sm text-foreground/80 leading-relaxed">{result.disease.cause}</p>
          </div>
        </CardContent>
      </Card>

      {/* Gejala Teridentifikasi */}
      <Card className="rounded-2xl border border-border bg-white shadow-card">
        <CardHeader className="pb-3 border-b border-border p-5 bg-muted/30">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">
              Gejala Teridentifikasi
            </h3>
          </div>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex flex-wrap gap-2">
            {result.matched_symptoms.map((s: Symptom) => (
              <Badge
                key={s.id}
                className="bg-primary/5 text-primary border border-primary/15 text-xs font-semibold py-1.5 px-3 rounded-lg flex items-center gap-1.5"
              >
                <Check className="h-3 w-3 text-primary stroke-[3]" />
                <span className="font-mono font-bold opacity-60">{s.code}</span>: {s.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Solusi & Pencegahan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border border-border border-l-[3px] border-l-primary bg-white shadow-card rounded-2xl">
          <CardHeader className="pb-3 border-b border-border p-5 bg-muted/30">
            <div className="flex items-center gap-2">
              <Shield className="h-4.5 w-4.5 text-primary" />
              <h3 className="font-bold text-sm text-primary uppercase tracking-wider">
                Solusi Penanganan
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm text-foreground/80 leading-relaxed">{result.disease.solution}</p>
          </CardContent>
        </Card>

        <Card className="border border-border border-l-[3px] border-l-sky-500 bg-white shadow-card rounded-2xl">
          <CardHeader className="pb-3 border-b border-border p-5 bg-muted/30">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4.5 w-4.5 text-sky-500" />
              <h3 className="font-bold text-sm text-sky-600 uppercase tracking-wider">
                Tindakan Pencegahan
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-sm text-foreground/80 leading-relaxed">{result.disease.prevention}</p>
          </CardContent>
        </Card>
      </div>

      {/* Diagnosis Alternatif */}
      {result.alternative_diagnoses.length > 0 && (
        <Card className="rounded-2xl border border-border bg-white shadow-card">
          <CardHeader className="pb-3 border-b border-border p-5 bg-muted/30">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4.5 w-4.5 text-yellow-600" />
              <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">
                Diagnosis Alternatif
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground mb-5">
              Berikut kemungkinan penyakit lain yang memiliki kecocokan gejala:
            </p>
            <div className="space-y-4">
              {result.alternative_diagnoses.map((alt) => {
                const pct = Math.round(alt.confidence * 100);
                const barColor = pct >= 60 ? "#16A34A" : pct >= 40 ? "#FACC15" : "#F97316";
                return (
                  <div key={alt.disease.id} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-foreground">
                        {alt.disease.name}
                        <span className="text-xs text-muted-foreground font-mono ml-1.5">
                          ({alt.disease.code})
                        </span>
                      </span>
                      <span className="font-bold text-primary">{pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden border border-border">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: barColor,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
