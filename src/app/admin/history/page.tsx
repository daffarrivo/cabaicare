"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DataTable, Column } from "@/components/dashboard/data-table";
import { Consultation } from "@/types";
import { consultations, getDiseaseById, getSymptomById } from "@/lib/mock-data";
import { formatConfidence } from "@/lib/inference-engine";

export default function HistoryPage() {
  const [data] = useState(consultations);

  const columns: Column<Consultation>[] = [
    {
      key: "id",
      header: "ID",
      sortable: true,
      render: (item) => <span className="font-mono text-xs">{item.id}</span>,
    },
    {
      key: "date",
      header: "Tanggal",
      sortable: true,
      render: (item) =>
        new Date(item.consultation_date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
    {
      key: "disease",
      header: "Penyakit",
      render: (item) => {
        const disease = getDiseaseById(item.diagnosed_disease);
        return disease?.name ?? item.diagnosed_disease;
      },
    },
    {
      key: "symptoms",
      header: "Gejala",
      render: (item) => (
        <div className="flex flex-wrap gap-1 max-w-[200px]">
          {item.selected_symptoms.slice(0, 3).map((s) => {
            const symptom = getSymptomById(s.symptom_id);
            return (
              <Badge key={s.symptom_id} variant="outline" className="text-xs">
                {symptom?.code ?? s.symptom_id}
              </Badge>
            );
          })}
          {item.selected_symptoms.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{item.selected_symptoms.length - 3}
            </Badge>
          )}
        </div>
      ),
    },
    {
      key: "cf_result",
      header: "CF",
      sortable: true,
      render: (item) => (
        <Badge variant="secondary" className="font-mono">
          {formatConfidence(item.cf_result)}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Riwayat Diagnosis</h1>
        <p className="text-sm text-muted-foreground">
          Lihat riwayat konsultasi dan hasil diagnosis.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchKeys={["id"]}
        pageSize={10}
        emptyMessage="Belum ada riwayat diagnosis"
      />
    </div>
  );
}
