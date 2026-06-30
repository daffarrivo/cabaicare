import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DiagnosisResult, Symptom } from "@/types";
import { AlertTriangle, CheckCircle2, FlaskConical, Shield, Check } from "lucide-react";

interface ResultCardProps {
  result: DiagnosisResult;
}

export function ResultCard({ result }: ResultCardProps) {
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
    <div className="space-y-6 rounded-3xl animate-fade-in-up">
      {/* Main Diagnosis Card */}
      <Card className="border border-zinc-200/60 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.03] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/[0.01] rounded-full blur-[80px] pointer-events-none" />

        <CardHeader className="text-center pb-2 relative z-10 flex flex-col items-center pt-8">
          <Badge className="mx-auto mb-3 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-xs font-extrabold py-1 px-3.5 uppercase rounded-full tracking-wide">
            Diagnosis Utama
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight text-gradient-cabai uppercase mt-1 leading-tight">
            {result.disease.name}
          </h2>
          <p className="text-xs text-muted-foreground font-mono mt-2 select-all px-2.5 py-0.5 rounded-md bg-zinc-50 border border-zinc-200/50 w-fit">
            KODE: {result.disease.code}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col items-center pt-2 pb-8 relative z-10 space-y-6">
          {/* Radial Progress Gauge */}
          <div className="relative flex items-center justify-center p-5 bg-zinc-50/40 rounded-full border border-zinc-200/30 animate-float shadow-inner">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                stroke={trackColor}
                strokeWidth="8"
                fill="transparent"
                r={radius}
                cx="80"
                cy="80"
              />
              <circle
                stroke={strokeColor}
                strokeWidth="8"
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
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-0.5">
                CF Score
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagnosis Alternatif */}
      {result.alternative_diagnoses.length > 0 && (
        <Card className="rounded-3xl border border-zinc-200/60 bg-white shadow-sm overflow-hidden">
          <CardHeader className="pb-3 border-b border-zinc-100 p-5 md:p-6 bg-zinc-50/50">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4.5 w-4.5 text-yellow-600 animate-pulse" />
              <h3 className="font-bold text-sm text-foreground uppercase tracking-widest">
                Diagnosis Alternatif
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-5 md:p-6">
            <p className="text-xs text-muted-foreground mb-5 font-semibold">
              Berikut kemungkinan penyakit lain yang memiliki kecocokan gejala:
            </p>
            <div className="space-y-4">
              {result.alternative_diagnoses.map((alt) => {
                const pct = Math.round(alt.confidence * 100);
                const barGradient = pct >= 60 ? "from-emerald-500 to-green-600" : pct >= 40 ? "from-amber-500 to-yellow-600" : "from-red-500 to-rose-600";
                return (
                  <div key={alt.disease.id} className="space-y-2 animate-fade-in-up">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-foreground">
                        {alt.disease.name}
                        <span className="text-[10px] text-muted-foreground font-mono ml-1.5 px-1.5 py-0.5 rounded bg-zinc-50 border border-zinc-200/60">
                          {alt.disease.code}
                        </span>
                      </span>
                      <span className="font-extrabold text-emerald-700">{pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${barGradient} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${pct}%`,
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

      {/* Deskripsi & Penyebab */}
      <Card className="rounded-3xl border border-zinc-200/60 bg-white shadow-sm overflow-hidden">
        <CardHeader className="pb-3 border-b border-zinc-100 p-5 md:p-6 bg-zinc-50/50">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4.5 w-4.5 text-emerald-600" />
              <h3 className="font-bold text-sm text-foreground uppercase tracking-widest">
                Deskripsi & Penyebab — {result.disease.name}
              </h3>
          </div>
        </CardHeader>
        <CardContent className="p-5 md:p-6 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-extrabold text-zinc-500 tracking-wider">
              Tentang Penyakit
            </span>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">{result.disease.description}</p>
          </div>
          <Separator className="bg-zinc-100" />
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-extrabold text-zinc-500 tracking-wider">
              Faktor Penyebab
            </span>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">{result.disease.cause}</p>
          </div>
        </CardContent>
      </Card>

      {/* Gejala Teridentifikasi */}
      <Card className="rounded-3xl border border-zinc-200/60 bg-white shadow-sm overflow-hidden">
        <CardHeader className="pb-3 border-b border-zinc-100 p-5 md:p-6 bg-zinc-50/50">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 animate-pulse" />
            <h3 className="font-bold text-sm text-foreground uppercase tracking-widest">
              Gejala Teridentifikasi
            </h3>
          </div>
        </CardHeader>
        <CardContent className="p-5 md:p-6">
          <div className="flex flex-wrap gap-2 select-none">
            {result.matched_symptoms.map((s: Symptom) => (
              <Badge
                key={s.id}
                className="bg-emerald-500/[0.04] text-emerald-800 border border-emerald-500/20 text-[11px] font-semibold py-1.5 px-3 rounded-xl flex items-center gap-1.5"
              >
                <Check className="h-3 w-3 text-emerald-600 stroke-[3]" />
                <span className="font-mono font-bold opacity-60">{s.code}</span>: {s.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Solusi & Pencegahan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border border-emerald-500/20 border-l-[4px] border-l-emerald-600 bg-emerald-500/[0.01] shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="pb-3 border-b border-emerald-500/10 p-5 bg-emerald-500/[0.03]">
            <div className="flex items-center gap-2">
              <Shield className="h-4.5 w-4.5 text-emerald-600 animate-pulse" />
              <h3 className="font-bold text-sm text-emerald-800 uppercase tracking-widest">
                Solusi Penanganan
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-5 md:p-6">
            <ol className="space-y-2.5 list-none [counter-reset:step]">
              {result.disease.solution.split(". ").filter(Boolean).map((step, i) => (
                <li key={i} className="flex gap-3 text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold [counter-increment:step]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[10px] font-extrabold text-emerald-700 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="pt-px">{step.trim()}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="border border-sky-500/20 border-l-[4px] border-l-sky-500 bg-sky-500/[0.01] shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="pb-3 border-b border-sky-500/10 p-5 bg-sky-500/[0.03]">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4.5 w-4.5 text-sky-500 animate-pulse" />
              <h3 className="font-bold text-sm text-sky-800 uppercase tracking-widest">
                Tindakan Pencegahan
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-5 md:p-6">
            <ol className="space-y-2.5 list-none [counter-reset:step]">
              {result.disease.prevention.split(". ").filter(Boolean).map((step, i) => (
                <li key={i} className="flex gap-3 text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold [counter-increment:step]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[10px] font-extrabold text-sky-700 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="pt-px">{step.trim()}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
