import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import type { Role } from "@/lib/roles";
import {
  LayoutDashboard, Users, Building2, FileText, MessagesSquare, GitCompare,
  CheckCircle2, ShoppingCart, Receipt, Truck, BarChart3, Bell, Settings, ScrollText, Shield, UserCircle2, LogOut, Boxes
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem { label: string; to: string; icon: React.ComponentType<{ className?: string }>; }

const NAV: Record<Role, NavItem[]> = {
  admin: [
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { label: "User Management", to: "/users", icon: Users },
    { label: "Vendor Management", to: "/vendors", icon: Building2 },
    { label: "RFQs", to: "/rfqs", icon: FileText },
    { label: "Quotations", to: "/quotations", icon: MessagesSquare },
    { label: "Approvals", to: "/approvals", icon: CheckCircle2 },
    { label: "Purchase Orders", to: "/purchase-orders", icon: ShoppingCart },
    { label: "Invoices", to: "/invoices", icon: Receipt },
    { label: "Delivery Tracking", to: "/delivery", icon: Truck },
    { label: "Reports & Analytics", to: "/reports", icon: BarChart3 },
    { label: "Activity Logs", to: "/activity", icon: ScrollText },
    { label: "Audit Logs", to: "/audit", icon: Shield },
    { label: "Notifications", to: "/notifications", icon: Bell },
    { label: "Settings", to: "/settings", icon: Settings },
  ],
  procurement: [
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { label: "Vendor Management", to: "/vendors", icon: Building2 },
    { label: "RFQs", to: "/rfqs", icon: FileText },
    { label: "Quotation Comparison", to: "/quotations/comparison", icon: GitCompare },
    { label: "Purchase Orders", to: "/purchase-orders", icon: ShoppingCart },
    { label: "Invoices", to: "/invoices", icon: Receipt },
    { label: "Delivery Tracking", to: "/delivery", icon: Truck },
    { label: "Reports", to: "/reports", icon: BarChart3 },
    { label: "Notifications", to: "/notifications", icon: Bell },
  ],
  vendor: [
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { label: "Assigned RFQs", to: "/rfqs", icon: FileText },
    { label: "My Quotations", to: "/quotations", icon: MessagesSquare },
    { label: "Purchase Orders", to: "/purchase-orders", icon: ShoppingCart },
    { label: "Invoices", to: "/invoices", icon: Receipt },
    { label: "Profile", to: "/profile", icon: UserCircle2 },
    { label: "Notifications", to: "/notifications", icon: Bell },
  ],
  manager: [
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { label: "Approvals", to: "/approvals", icon: CheckCircle2 },
    { label: "RFQs", to: "/rfqs", icon: FileText },
    { label: "Quotation Reviews", to: "/quotations", icon: MessagesSquare },
    { label: "Purchase Orders", to: "/purchase-orders", icon: ShoppingCart },
    { label: "Reports", to: "/reports", icon: BarChart3 },
    { label: "Notifications", to: "/notifications", icon: Bell },
  ],
};

export function Sidebar({ collapsed }: { collapsed: boolean }) {
  const { user, logout } = useAuth();
  const loc = useLocation();
  if (!user) return null;
  const items = NAV[user.role];

  return (
    <aside
      data-role={user.role === "admin" ? undefined : user.role}
      className={cn(
        "sticky top-0 flex h-screen flex-col bg-sidebar text-sidebar-foreground transition-[width] duration-200",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <Boxes className="h-5 w-5" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">VendorBridge</p>
            <p className="truncate text-[10px] uppercase tracking-wider text-sidebar-foreground/70">Procurement ERP</p>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        {items.map((it) => {
          const active = loc.pathname === it.to || (it.to !== "/dashboard" && loc.pathname.startsWith(it.to));
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={cn(
                "mb-0.5 flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-primary/30 hover:text-white"
              )}
              title={collapsed ? it.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span className="truncate">{it.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border p-2">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-primary/30 hover:text-white"
          title={collapsed ? "Log out" : undefined}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );
}
