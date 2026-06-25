"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable, Column } from "@/components/dashboard/data-table";
import { Disease } from "@/types";
import { diseases as mockDiseases } from "@/lib/mock-data";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default function DiseasesAdminPage() {
  const [data] = useState(mockDiseases);

  const columns: Column<Disease>[] = [
    { key: "code", header: "Kode", sortable: true },
    { key: "name", header: "Nama Penyakit", sortable: true },
    { key: "description", header: "Deskripsi" },
    { key: "solution", header: "Solusi" },
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
          <h1 className="text-2xl font-bold text-foreground">Manajemen Penyakit</h1>
          <p className="text-sm text-muted-foreground">
            Kelola data penyakit tanaman cabai.
          </p>
        </div>
        <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-sm">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Penyakit
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchKeys={["code", "name"]}
        pageSize={10}
        emptyMessage="Belum ada data penyakit"
      />
    </div>
  );
}
