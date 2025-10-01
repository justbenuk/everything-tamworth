import HeaderAuthMenu from "@/components/ui/header-auth-menu";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/features/admin/sidebar/admin-sidebar";
import { ReactNode } from "react";

export default function Adminlayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar variant="inset" />
      <SidebarInset>
        <header className="flex flex-row justify-between py-2 shrink-0 items-center gap-2 border-b">
          <div className="flex flex-row gap-2 items-center">
            <SidebarTrigger />
            <p className="text-sm">Admin Dashboard</p>
          </div>
          <div className="pr-2">
            <HeaderAuthMenu />
          </div>
        </header>
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

