import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Users, Building2, FileText, MessageSquare, CheckSquare,
  ShoppingCart, Receipt, BarChart3, ShieldCheck, Bell, Settings, User,
  Truck, FileCheck, Scale, ChevronLeft,
} from "lucide-react";
import { useAuth, type Role } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Item = { to: string; label: string; icon: React.ComponentType<{ className?: string }> };

const NAV: Record<Role, Item[]> = {
  admin: [
    { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/app/users", label: "User Management", icon: Users },
    { to: "/app/vendors", label: "Vendor Management", icon: Building2 },
    { to: "/app/rfqs", label: "RFQs", icon: FileText },
    { to: "/app/quotations", label: "Quotations", icon: MessageSquare },
    { to: "/app/approvals", label: "Approvals", icon: CheckSquare },
    { to: "/app/purchase-orders", label: "Purchase Orders", icon: ShoppingCart },
    { to: "/app/invoices", label: "Invoices", icon: Receipt },
    { to: "/app/reports", label: "Reports & Analytics", icon: BarChart3 },
    { to: "/app/audit", label: "Audit Logs", icon: ShieldCheck },
    { to: "/app/notifications", label: "Notifications", icon: Bell },
    { to: "/app/settings", label: "Settings", icon: Settings },
  ],
  procurement: [
    { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/app/vendors", label: "Vendor Management", icon: Building2 },
    { to: "/app/rfqs", label: "RFQs", icon: FileText },
    { to: "/app/quotations/compare", label: "Quotation Comparison", icon: Scale },
    { to: "/app/purchase-orders", label: "Purchase Orders", icon: ShoppingCart },
    { to: "/app/invoices", label: "Invoices", icon: Receipt },
    { to: "/app/reports", label: "Reports", icon: BarChart3 },
    { to: "/app/notifications", label: "Notifications", icon: Bell },
  ],
  vendor: [
    { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/app/rfqs", label: "Assigned RFQs", icon: FileText },
    { to: "/app/quotations", label: "My Quotations", icon: MessageSquare },
    { to: "/app/purchase-orders", label: "Purchase Orders", icon: ShoppingCart },
    { to: "/app/invoices", label: "Invoices", icon: Receipt },
    { to: "/app/delivery", label: "Delivery Tracking", icon: Truck },
    { to: "/app/profile", label: "Profile", icon: User },
    { to: "/app/notifications", label: "Notifications", icon: Bell },
  ],
  manager: [
    { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/app/approvals", label: "Approvals", icon: CheckSquare },
    { to: "/app/rfqs", label: "RFQs", icon: FileText },
    { to: "/app/quotations", label: "Quotation Reviews", icon: FileCheck },
    { to: "/app/purchase-orders", label: "Purchase Orders", icon: ShoppingCart },
    { to: "/app/reports", label: "Reports", icon: BarChart3 },
    { to: "/app/notifications", label: "Notifications", icon: Bell },
  ],
};

const ROLE_LABEL: Record<Role, string> = {
  admin: "Administrator", procurement: "Procurement Officer", vendor: "Vendor", manager: "Manager",
};

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const { user } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = NAV[user.role];
  const isAdmin = user.role === "admin";
  const sidebarBg = isAdmin ? "#1B2D55" : "#FFFFFF";
  const textInactive = isAdmin ? "#C4D2EA" : "#4B5568";
  const activeBg = isAdmin ? "#2E5FA3" : (user.role === "procurement" ? "#E6F5EE" : user.role === "vendor" ? "#FDF4E3" : "#F3F0FE");
  const activeText = isAdmin ? "#FFFFFF" : (user.role === "procurement" ? "#2D9A58" : user.role === "vendor" ? "#9A6310" : "#5B3FC8");
  const borderCol = isAdmin ? "#2E5FA3" : "#E2E8F0";

  return (
    <aside
      className={cn("flex h-screen flex-col border-r transition-all", collapsed ? "w-16" : "w-64")}
      style={{ background: sidebarBg, borderColor: borderCol }}
    >
      <div className="flex h-16 items-center justify-between border-b px-4" style={{ borderColor: borderCol }}>
        <Link to="/app/dashboard" className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2E5FA3] text-white font-bold">V</div>
          {!collapsed && (
            <div>
              <div className="text-sm font-semibold leading-tight" style={{ color: isAdmin ? "#FFFFFF" : "#1A202C" }}>VendorBridge</div>
              <div className="text-[10px] uppercase tracking-wider" style={{ color: isAdmin ? "#7A9CC8" : "#4B5568" }}>{ROLE_LABEL[user.role]}</div>
            </div>
          )}
        </Link>
        <button onClick={onToggle} className="rounded p-1 hover:bg-black/5" style={{ color: textInactive }} aria-label="Toggle sidebar">
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto p-2">
        {items.map((it) => {
          const active = pathname === it.to || (it.to !== "/app/dashboard" && pathname.startsWith(it.to));
          return (
            <Link
              key={it.to}
              to={it.to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                collapsed && "justify-center px-2",
              )}
              style={{
                background: active ? activeBg : "transparent",
                color: active ? activeText : textInactive,
                fontWeight: active ? 600 : 500,
              }}
            >
              <it.icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span className="truncate">{it.label}</span>}
            </Link>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="border-t p-3 text-xs" style={{ borderColor: borderCol, color: textInactive }}>
          v1.0 · © VendorBridge
        </div>
      )}
    </aside>
  );
}

export function SidebarShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#F7F8FA]">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}