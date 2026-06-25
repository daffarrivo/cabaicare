import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Binary, ShieldCheck, Bookmark } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 py-16 md:py-24 relative overflow-hidden bg-subtle-gradient">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs font-extrabold py-1 px-3.5 uppercase tracking-wider rounded-full">
              Tentang CabaiCare
            </Badge>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Sistem Pakar Diagnosis Penyakit Cabai
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Sistem pakar berbasis web untuk membantu identifikasi penyakit tanaman cabai secara cepat, tepat, dan terpercaya.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              <div className="md:col-span-7 flex flex-col justify-center text-left space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Bookmark className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-wider">Misi Sistem</span>
                </div>
                <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
                  Tujuan Pembangunan CabaiCare
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CabaiCare dibangun untuk membantu petani, penyuluh pertanian, dan praktisi perkebunan
                  melakukan identifikasi penyakit tanaman cabai berdasarkan gejala yang muncul di lapangan.
                  Sistem ini mendigitalisasi pengetahuan pakar pertanian menggunakan metode kecerdasan buatan
                  berbasis aturan (rule-based AI) untuk mempercepat pengambilan keputusan penanganan hama
                  dan penyakit secara efektif.
                </p>
              </div>

              <Card className="md:col-span-5 border border-border bg-white shadow-card p-6 rounded-2xl flex flex-col justify-center space-y-4 text-left">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-wider">Basis Pengetahuan</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-muted text-muted-foreground border border-border text-xs font-bold py-1 px-2.5">
                    11 Penyakit
                  </Badge>
                  <Badge className="bg-muted text-muted-foreground border border-border text-xs font-bold py-1 px-2.5">
                    35 Gejala
                  </Badge>
                  <Badge className="bg-muted text-muted-foreground border border-border text-xs font-bold py-1 px-2.5">
                    3 Fase Pertumbuhan
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold py-1 px-2.5">
                    Metode Terpadu CF
                  </Badge>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border bg-white shadow-card p-6 rounded-2xl text-left flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <FlaskConical className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-extrabold text-base text-foreground tracking-tight">Forward Chaining</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Metode penalaran berbasis aturan (rule-based reasoning) data-driven. Sistem mencocokkan
                    gejala input pengguna dengan aturan IF-THEN pakar pertanian untuk menemukan penyakit kandidat.
                  </p>
                </div>
                <div className="border border-border bg-muted/50 p-3.5 rounded-xl font-mono text-xs text-foreground mt-6">
                  <span className="text-primary font-bold">IF</span> Fase = F02{" "}
                  <span className="text-primary font-bold">AND</span> Gejala = G01{" "}
                  <span className="text-primary font-bold">THEN</span> Penyakit = P05
                </div>
              </Card>

              <Card className="border border-border bg-white shadow-card p-6 rounded-2xl text-left flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Binary className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-extrabold text-base text-foreground tracking-tight">Certainty Factor</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Metode pengukuran derajat keyakinan diagnosis. Mengalikan bobot pakar dengan keyakinan
                    pengguna untuk setiap gejala, lalu menggabungkannya secara kumulatif.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-6 font-mono text-xs text-foreground">
                  <div className="border border-border bg-muted/50 p-2.5 rounded-xl">
                    <p className="font-bold text-primary mb-1">Persamaan CF</p>
                    <p>CF(H,E) = CFpakar &times; CFuser</p>
                  </div>
                  <div className="border border-border bg-muted/50 p-2.5 rounded-xl">
                    <p className="font-bold text-primary mb-1">Kombinasi CF</p>
                    <p>CF1 + CF2 &times; (1 - CF1)</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
