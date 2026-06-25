"use client";

import { DataTable, Column } from "@/components/dashboard/data-table";
import { User } from "@/types";
import { users as mockUsers } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function UsersPage() {
  const [data] = useState(mockUsers);

  const columns: Column<User>[] = [
    { key: "name", header: "Nama", sortable: true },
    { key: "email", header: "Email", sortable: true },
    {
      key: "role",
      header: "Role",
      render: (item) => (
        <Badge className={item.role === "admin" ? "bg-primary/10 text-primary border border-primary/20" : "bg-muted text-muted-foreground border border-border"}>
          {item.role}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Daftar User</h1>
        <p className="text-sm text-muted-foreground">
          Lihat daftar pengguna terdaftar di sistem.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={data}
        searchKeys={["name", "email"]}
        pageSize={10}
        emptyMessage="Belum ada user"
      />
    </div>
  );
}
