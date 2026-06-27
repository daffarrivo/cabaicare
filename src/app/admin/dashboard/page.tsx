"use client";

import { StatisticCard } from "@/components/dashboard/statistic-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { symptoms, diseases, consultations, users, rules } from "@/lib/mock-data";
import { Activity, Bug, GitBranch, History, Users } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Gejala", value: symptoms.length, icon: <Activity className="h-5 w-5 text-sky-500" /> },
    { title: "Total Penyakit", value: diseases.length, icon: <Bug className="h-5 w-5 text-red-500" /> },
    { title: "Total Rules", value: rules.length, icon: <GitBranch className="h-5 w-5 text-purple-500" /> },
    { title: "Total Diagnosa", value: consultations.length, icon: <History className="h-5 w-5 text-primary" /> },
    { title: "Total User", value: users.length, icon: <Users className="h-5 w-5 text-amber-500" /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Selamat datang di panel admin CabaiCare.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <StatisticCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Disease Distribution Placeholder */}
        <Card className="border-border bg-white shadow-card rounded-2xl">
          <CardHeader className="pb-3">
            <h3 className="font-semibold text-foreground">Distribusi Penyakit</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Virus Kuning", pct: 28, color: "bg-primary" },
                { name: "Antraknosa", pct: 22, color: "bg-secondary" },
                { name: "Layu Fusarium", pct: 18, color: "bg-amber-500" },
                { name: "Rebah Kecambah", pct: 12, color: "bg-sky-500" },
                { name: "Lainnya", pct: 20, color: "bg-muted-foreground" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div className="flex-1 text-sm text-foreground">{item.name}</div>
                  <span className="text-sm font-bold text-muted-foreground">{item.pct}%</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Data simulasi
            </p>
          </CardContent>
        </Card>

        {/* Diagnosis Terbaru */}
        <Card className="border-border bg-white shadow-card rounded-2xl">
          <CardHeader>
            <h3 className="font-semibold text-foreground">Diagnosis Terbaru</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {consultations.slice(0, 5).map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">Diagnosis #{c.id}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(c.consultation_date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <span className="text-sm font-mono font-bold text-primary">
                    {Math.round(c.cf_result * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Penyakit Teratas */}
        <Card className="border-border bg-white shadow-card rounded-2xl">
          <CardHeader>
            <h3 className="font-semibold text-foreground">Penyakit Teratas</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {diseases.slice(0, 5).map((d) => (
                <div
                  key={d.id}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
