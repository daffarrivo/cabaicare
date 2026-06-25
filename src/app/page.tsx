import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Search,
  FlaskConical,
  ShieldCheck,
  Sprout,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Sprout,
    title: "Berdasarkan Fase Pertumbuhan",
    description:
      "Diagnosis dimulai dari fase tanaman: Pembibitan, Vegetatif, atau Generatif. Filter awal yang mengurangi kesalahan diagnosis.",
  },
  {
    icon: Search,
    title: "Pilih Gejala Tanaman",
    description:
      "Pilih gejala yang tampak pada tanaman cabai Anda. Sistem akan mencocokkan dengan basis pengetahuan pakar.",
  },
  {
    icon: FlaskConical,
    title: "Forward Chaining + CF",
    description:
      "Mesin inferensi menggunakan Forward Chaining untuk penalaran berbasis aturan dan Certainty Factor untuk mengukur keyakinan.",
  },
  {
    icon: ShieldCheck,
    title: "Rekomendasi Penanganan",
    description:
      "Dapatkan solusi pengendalian dan tindakan pencegahan berdasarkan hasil diagnosis secara instan.",
  },
];

const howItWorks = [
  { step: "01", title: "Pilih Fase", desc: "Tentukan fase pertumbuhan tanaman cabai Anda saat ini." },
  { step: "02", title: "Pilih Gejala", desc: "Centang gejala fisik yang muncul pada tanaman Anda." },
  { step: "03", title: "Tentukan Keyakinan", desc: "Sesuaikan tingkat keyakinan untuk setiap gejala yang dipilih." },
  { step: "04", title: "Hasil Diagnosis", desc: "Lihat hasil diagnosis, tingkat keyakinan, dan rekomendasi." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold py-1.5 px-4 uppercase tracking-wider rounded-full">
                CabaiCare Engine v1.0
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Sistem Pakar Diagnosis{" "}
                <span className="text-gradient-cabai">Penyakit Cabai</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Diagnosis cepat dan terpercaya berbasis{" "}
                <strong>Forward Chaining</strong> dan{" "}
                <strong>Certainty Factor</strong>. Identifikasi penyakit tanaman
                cabai Anda berdasarkan fase pertumbuhan dan gejala yang muncul.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 h-12 rounded-xl px-8 bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-md transition-colors"
                >
                  Mulai Diagnosis
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
                <Link
                  href="/diseases"
                  className="inline-flex items-center gap-2 h-12 rounded-xl px-8 border border-border bg-white hover:bg-muted text-foreground font-semibold text-sm transition-colors"
                >
                  Lihat Penyakit
                  <ChevronRight className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-14 space-y-3">
              <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold py-1 px-3.5 uppercase tracking-wider rounded-full">
                Fitur Utama
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Mengapa <span className="text-primary">CabaiCare?</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Dirancang khusus untuk membantu petani dan penyuluh melakukan identifikasi penyakit dengan pendekatan pakar pertanian.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border border-border bg-white shadow-card hover:shadow-card-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <feature.icon className="h-5.5 w-5.5 text-primary" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-base text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-14 space-y-3">
              <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold py-1 px-3.5 uppercase tracking-wider rounded-full">
                Alur Diagnosis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Bagaimana <span className="text-primary">Caranya?</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Empat langkah sederhana untuk mendapatkan diagnosis penyakit tanaman cabai Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {howItWorks.map((item, index) => (
                <Card
                  key={item.step}
                  className="border border-border bg-white shadow-card hover:shadow-card-hover rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-extrabold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>

                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 text-muted-foreground/30">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary">
          <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Siap Mendiagnosis Tanaman Anda?
            </h2>
            <p className="text-primary-foreground/80 text-base max-w-xl mx-auto leading-relaxed">
              Mulai diagnosis sekarang dan dapatkan rekomendasi penanganan dari sistem pakar kami
              secara cepat dan gratis.
            </p>
            <Link
              href="/diagnosis"
              className="inline-flex items-center gap-2 h-12 rounded-xl px-8 bg-white hover:bg-white/90 text-primary font-bold text-sm shadow-lg transition-colors"
            >
              Mulai Diagnosis Sekarang
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
