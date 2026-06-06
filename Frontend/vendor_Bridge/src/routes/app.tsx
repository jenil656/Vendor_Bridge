import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarShell } from "@/components/vb/Sidebar";
import { Topbar } from "@/components/vb/Topbar";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/app")({ component: AppLayout });

function AppLayout() {
  const { user } = useAuth();
  return (
    <div data-role={user.role}>
      <SidebarShell>
        <Topbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarShell>
    </div>
  );
}