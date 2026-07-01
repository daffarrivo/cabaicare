import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Card } from "@/components/ui/card";
import {
  Leaf,
  Search,
  FlaskConical,
  ShieldCheck,
  Sprout,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Bug,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const howItWorks = [
  { step: "01", title: "Pilih Fase Pertumbuhan", desc: "Tentukan fase pertumbuhan tanaman cabai Anda saat ini (Pembibitan, Vegetatif, atau Generatif) sebagai filter dasar diagnosis." },
  { step: "02", title: "Identifikasi Gejala", desc: "Centang berbagai gejala fisik yang tampak pada organ tanaman seperti daun, batang, buah, atau akar." },
  { step: "03", title: "Tentukan Keyakinan", desc: "Sesuaikan tingkat keyakinan Anda (dari Sangat Ragu hingga Pasti) untuk setiap gejala yang terdeteksi." },
  { step: "04", title: "Hasil & Rekomendasi", desc: "Dapatkan hasil diagnosis penyakit utama beserta persentase kepastian (Certainty Factor) dan panduan penanganan." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Welcoming Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#FAF9F5] via-[#FAF8F5] to-[#EAEFEA] bg-dot-grid overflow-hidden">
          {/* Subtle Warm Ambient Glows */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Welcoming Text Column */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-center animate-fade-in-up">
                <div className="space-y-4">


                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight uppercase leading-[0.95] text-center lg:text-left text-foreground">
                    Sistem Pakar Diagnosis <br />
                    <span className="text-gradient-cabai">Penyakit Cabai</span>
                  </h1>
                </div>
                
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0 font-semibold">
                  Diagnosis cepat dan akurat untuk mendeteksi hama serta penyakit tanaman cabai Anda. Menggunakan penalaran berbasis <strong>Forward Chaining</strong> dengan Certainty Factor untuk mengukur tingkat keyakinan diagnosis.
                </p>
                
                {/* Mobile Chili Image */}
                <div className="lg:hidden w-full max-w-[260px] relative mx-auto my-6 group">
                  <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-zinc-200/50 shadow-md bg-zinc-50">
                    <Image
                      src="/chili_growing.jpg"
                      alt="Capsicum annuum health"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Quick Start Panel directly on Hero */}
                <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-3xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] max-w-xl w-full mx-auto lg:mx-0 space-y-4">
                  <div className="space-y-1 text-center lg:text-left">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
                      Mulai Diagnosis Cepat
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-semibold">
                      Pilih fase pertumbuhan tanaman cabai Anda saat ini untuk langsung memulai:
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Link
                      href="/diagnosis?phase=f01"
                      className="flex flex-col items-center text-center p-4 rounded-xl border border-zinc-200 bg-white hover:bg-emerald-500/[0.02] hover:border-emerald-600 hover:shadow-sm active:scale-[0.98] transition-all duration-200 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-white border border-emerald-100/50 flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:rotate-1 transition-all duration-200 overflow-hidden">
                        <Image src="/phase-seedling.png" alt="Fase Pembibitan" width={56} height={56} className="object-contain" />
                      </div>
                      <span className="text-[11px] font-extrabold text-foreground tracking-tight block">Pembibitan</span>
                      <span className="text-[9px] text-muted-foreground mt-1 block leading-none font-medium">Semaian & Bibit</span>
                    </Link>
                    
                    <Link
                      href="/diagnosis?phase=f02"
                      className="flex flex-col items-center text-center p-4 rounded-xl border border-zinc-200 bg-white hover:bg-emerald-500/[0.02] hover:border-emerald-600 hover:shadow-sm active:scale-[0.98] transition-all duration-200 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-white border border-emerald-100/50 flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:rotate-1 transition-all duration-200 overflow-hidden">
                        <Image src="/phase-vegetative.png" alt="Fase Vegetatif" width={56} height={56} className="object-contain" />
                      </div>
                      <span className="text-[11px] font-extrabold text-foreground tracking-tight block">Vegetatif</span>
                      <span className="text-[9px] text-muted-foreground mt-1 block leading-none font-medium">Daun & Batang</span>
                    </Link>
                    
                    <Link
                      href="/diagnosis?phase=f03"
                      className="flex flex-col items-center text-center p-4 rounded-xl border border-zinc-200 bg-white hover:bg-emerald-500/[0.02] hover:border-emerald-600 hover:shadow-sm active:scale-[0.98] transition-all duration-200 group"
                    >
                      <div className="w-16 h-16 rounded-xl bg-white border border-emerald-100/50 flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:rotate-1 transition-all duration-200 overflow-hidden">
                        <Image src="/phase-generative.png" alt="Fase Generatif" width={56} height={56} className="object-contain" />
                      </div>
                      <span className="text-[11px] font-extrabold text-foreground tracking-tight block">Generatif</span>
                      <span className="text-[9px] text-muted-foreground mt-1 block leading-none font-medium">Bunga & Buah</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop Chili Image */}
              <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
                <div className="relative group max-w-[320px] w-full mx-auto">
                  {/* Decorative background offset shadow shape */}
                  <div className="absolute inset-0 bg-emerald-800/5 rounded-[2.5rem] translate-x-3 translate-y-3 rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                  
                  {/* Main Premium Borderless Image */}
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/40 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-50 border border-zinc-100">
                      <Image
                        src="/chili_growing.jpg"
                        alt="Capsicum annuum health"
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bento Grid Features Section */}
        <section className="py-20 md:py-28 bg-white border-t border-border/40 relative overflow-hidden bg-dot-grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-16 space-y-3">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground uppercase">
                Mengapa <span className="text-emerald-600">CabaiCare?</span>
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto font-semibold">
                Sistem pakar diagnosis cabai yang dirancang secara matang, presisi, dan ilmiah untuk mempermudah petani.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Card 1: Growth Phase (Large Bento 2/3 Width) */}
              <Card className="lg:col-span-7 border border-zinc-200/60 bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-emerald-500/80 hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between h-full">
                  <div className="space-y-4 max-w-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Sprout className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-2xl tracking-wide text-foreground uppercase">
                      Klasifikasi Fase Pertumbuhan
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                      Sistem membagi gejala berdasarkan fase perkembangan tanaman: Pembibitan, Vegetatif, atau Generatif. Filter awal ini mempermudah pencarian gejala yang relevan secara klinis.
                    </p>
                  </div>
                  <div className="w-full md:w-auto shrink-0 bg-zinc-50/50 border border-zinc-200/40 rounded-2xl p-4 space-y-2.5 min-w-[210px] shadow-xs select-none">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-zinc-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Fase Pembibitan</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border-emerald-500 shadow-[0_4px_12px_rgba(16,185,129,0.06)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Fase Vegetatif</span>
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600 ml-auto" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-zinc-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Fase Generatif</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Card 2: Catalog Diseases (Small Bento 1/3 Width) */}
              <Card className="lg:col-span-5 border border-zinc-200/60 bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-emerald-500/80 hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Bug className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-2xl tracking-wide text-foreground uppercase">
                      Katalog Penyakit Cabai
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                      Pelajari 11 jenis gangguan kesehatan cabai paling umum di Indonesia lengkap dengan gejala pemicu dan cara penanganannya.
                    </p>
                  </div>
                  <div className="space-y-2 select-none">
                    <Link href="/diseases" className="flex items-center justify-between p-2.5 bg-white border border-zinc-200/60 rounded-xl hover:border-emerald-500 hover:shadow-sm transition-all duration-300">
                      <span className="text-[10px] font-bold text-foreground">Antraknosa / Patek</span>
                      <span className="text-[8px] bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-200 uppercase font-bold">Tinggi</span>
                    </Link>
                    <Link href="/diseases" className="flex items-center justify-between p-2.5 bg-white border border-zinc-200/60 rounded-xl hover:border-emerald-500 hover:shadow-sm transition-all duration-300">
                      <span className="text-[10px] font-bold text-foreground">Virus Kuning Gemini</span>
                      <span className="text-[8px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-200 uppercase font-bold">Sedang</span>
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Card 3: Pakar Digital (Bento Medium 1/2 Width) */}
              <Card className="lg:col-span-6 border border-zinc-200/60 bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-emerald-500/80 hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <FlaskConical className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-2xl tracking-wide text-foreground uppercase">
                      Analisis Pakar Digital
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                      Sistem mencocokkan gejala dengan basis aturan ilmiah pakar (Forward Chaining) lalu mengkalkulasi tingkat keyakinan Anda (Certainty Factor).
                    </p>
                  </div>
                  <div className="bg-zinc-950 rounded-2xl p-4.5 font-mono text-[9px] text-emerald-400 space-y-1.5 shadow-inner border border-zinc-800/80">
                    <div className="text-zinc-500 flex items-center justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
                      <span>// Simulasi Penilaian Kepastian</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div>Gejala: Daun Layu + Pangkal Batang Menghitam</div>
                    <div className="text-zinc-100 flex items-center justify-between mt-2 pt-2 border-t border-zinc-900">
                      <span>Hasil Diagnosis:</span>
                      <span className="text-emerald-400 font-bold">Layu Bakteri (CF: 80%)</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Card 4: Tindakan Nyata (Bento Medium 1/2 Width) */}
              <Card className="lg:col-span-6 border border-zinc-200/60 bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-emerald-500/80 hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group">
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-2xl tracking-wide text-foreground uppercase">
                      Tindakan Penanganan Nyata
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                      Dapatkan langkah taktis secara instan mulai dari sanitasi bagian tanaman yang sakit, pemangkasan, hingga saran bahan aktif pestisida yang tepat secara klinis.
                    </p>
                  </div>
                  <div className="space-y-2 select-none">
                    <div className="flex items-center gap-3.5 p-3 bg-zinc-50/50 border border-zinc-200/40 rounded-xl shadow-xs">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-extrabold font-mono">A</div>
                      <div className="text-[10px] font-bold text-foreground">Rekomendasi taktis langsung dari pakar tani</div>
                    </div>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </section>

        {/* How It Works Section - Vertical Timeline */}
        <section className="py-20 md:py-28 bg-zinc-50 border-t border-border/40 relative overflow-hidden bg-dot-grid">
          <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/[0.01] rounded-full blur-[80px] pointer-events-none transform-gpu will-change-transform" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column (Sticky info) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 h-fit">
                <div className="space-y-3">
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground uppercase leading-[0.9]">
                    Bagaimana <br className="hidden lg:block" />
                    <span className="text-emerald-600">Caranya?</span>
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xs font-semibold">
                    Empat langkah sederhana untuk mendapatkan diagnosis penyakit tanaman cabai Anda secara runut dan tepercaya.
                  </p>
                </div>
                
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 group rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white border border-emerald-800 shadow-sm font-semibold text-xs uppercase tracking-wider px-5 py-3.5 active:scale-[0.98] transition-all duration-150"
                >
                  Mulai Diagnosis
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Right Column (Timeline Stack) */}
              <div className="lg:col-span-8 relative space-y-10 pl-4 md:pl-8">
                {/* Vertical connecting line */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-zinc-200 to-transparent" />

                {howItWorks.map((item, index) => (
                  <div key={item.step} className="flex gap-6 relative group bg-white/70 p-5 rounded-2xl border border-transparent hover:border-zinc-200/50 hover:bg-white hover:shadow-xs transition-[background-color,border-color,box-shadow] duration-300">
                    {/* Bullet indicator */}
                    <div className="absolute -left-[21px] md:-left-[37px] top-11 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-500 group-hover:bg-emerald-500 group-hover:scale-125 group-hover:ring-4 group-hover:ring-emerald-500/20 transition-all duration-300" />

                    {/* Step giant number */}
                    <div className="font-heading text-6xl md:text-7xl font-bold tracking-tight text-zinc-200/80 group-hover:text-emerald-600/35 select-none shrink-0 w-20 leading-none transition-colors duration-300">
                      {item.step}
                    </div>

                    {/* Step details */}
                    <div className="space-y-1.5 mt-1.5 flex-1">
                      <h3 className="font-bold text-base text-foreground group-hover:text-emerald-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
