"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Sparkles, AlertTriangle, Loader2, Leaf } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    if (email === "admin@cabaicare.com" && password === "admin123") {
      router.push("/admin/dashboard");
    } else {
      setError("Email atau password salah.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 bg-subtle-gradient">
      <Card className="w-full max-w-sm border border-border bg-white shadow-elevated rounded-2xl relative z-10">
        <CardHeader className="text-center pb-2 pt-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-extrabold text-foreground tracking-tight">CabaiCare</span>
          </div>
          <p className="text-sm text-muted-foreground">Panel Pengawas Admin</p>
        </CardHeader>
        <CardContent className="pt-4 pb-8">
          {error && (
            <Alert variant="destructive" className="mb-4 rounded-xl border-destructive/20 bg-destructive/5 text-destructive">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-xs">{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@cabaicare.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-border bg-white rounded-xl text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs text-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-border bg-white rounded-xl text-sm"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-2.5 font-bold text-sm shadow-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memverifikasi...
                </>
              ) : (
                "Masuk Ke Dashboard"
              )}
            </Button>
            <p className="text-[11px] text-center text-muted-foreground font-mono mt-4 pt-2 border-t border-border">
              Akses Demo: admin@cabaicare.com / admin123
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
