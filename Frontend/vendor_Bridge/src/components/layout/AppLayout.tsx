import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppLayout() {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  if (!user) return <Navigate to="/login" replace />;
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar collapsed={collapsed} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onToggleSidebar={() => setCollapsed((c) => !c)} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
