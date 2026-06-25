"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable, Column } from "@/components/dashboard/data-table";
import { rules as mockRules, getDiseaseById, symptoms as allSymptoms } from "@/lib/mock-data";
import { Rule } from "@/types";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function RulesPage() {
  const [data] = useState(mockRules);

  const columns: Column<Rule>[] = [
    { key: "id", header: "ID", sortable: true },
    {
      key: "disease",
      header: "Penyakit",
      render: (item) => {
        const disease = getDiseaseById(item.disease_id);
        return disease?.name ?? item.disease_id;
      },
    },
    {
      key: "symptoms",
      header: "Gejala",
      render: (item) => (
        <div className="flex flex-wrap gap-1">
          {item.symptom_ids.map((sid) => {
            const symptom = allSymptoms.find((s) => s.id === sid);
            return (
              <Badge key={sid} variant="outline" className="text-xs">
                {symptom?.code ?? sid}
              </Badge>
            );
          })}
        </div>
      ),
    },
    {
      key: "actions",
      header: "Aksi",
      render: () => (
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg">
            <Pencil className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-lg">
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manajemen Rules</h1>
          <p className="text-sm text-muted-foreground">
            Kelola aturan Forward Chaining (IF-THEN).
          </p>
        </div>
        <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-sm">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Rule
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchKeys={["id"]}
        pageSize={10}
        emptyMessage="Belum ada rule"
      />
    </div>
  );
}
