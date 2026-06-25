"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Activity,
  Bug,
  GitBranch,
  History,
  Users,
  Leaf,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Gejala", href: "/admin/symptoms", icon: Activity },
  { title: "Penyakit", href: "/admin/diseases", icon: Bug },
  { title: "Rules", href: "/admin/rules", icon: GitBranch },
  { title: "Riwayat", href: "/admin/history", icon: History },
  { title: "Users", href: "/admin/users", icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-base py-6">
            <Link href="/admin/dashboard" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                <Leaf className="h-4.5 w-4.5 text-primary" />
              </div>
              <span className="font-extrabold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors">
                CabaiCare Admin
              </span>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    render={<Link href={item.href} />}
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-all py-5 hover:bg-muted"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
