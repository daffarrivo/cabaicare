import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="font-extrabold text-lg text-foreground tracking-tight">CabaiCare</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Sistem Pakar Diagnosis Penyakit Tanaman Cabai menggunakan kombinasi metode Forward Chaining dan Certainty Factor berbasis aturan pakar.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-xs tracking-[0.28em] uppercase mb-4">Navigasi</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/diseases" className="hover:text-primary transition-colors">
                  Penyakit
                </Link>
              </li>
              <li>
                <Link href="/diagnosis" className="hover:text-primary transition-colors">
                  Diagnosis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-xs tracking-[0.28em] uppercase mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Email: info@cabaicare.com</li>
              <li>Telepon: (021) 1234-5678</li>
              <li>Lokasi: Bogor, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CabaiCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
