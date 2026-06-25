"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/dashboard/admin-sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 border-b border-border bg-white flex items-center px-4 gap-3">
            <SidebarTrigger />
            <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
              CabaiCare Admin Portal
            </span>
          </header>
          <main className="flex-1 p-6 bg-muted/30 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
