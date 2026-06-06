import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { ROLE_LABELS, type Role } from "@/lib/roles";
import { NOTIFICATIONS } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

export function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { user, setRole, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const [unread] = useState(NOTIFICATIONS.filter((n) => !n.read).length);

  if (!user) return null;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-card px-4">
      <button onClick={onToggleSidebar} className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Toggle sidebar">
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative hidden flex-1 max-w-md md:block">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search vendors, RFQs, POs…" className="pl-9" />
      </div>

      <div className="flex-1 md:hidden" />

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-primary-dark bg-primary-lightest hover:bg-primary-light">
          {ROLE_LABELS[user.role]}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Switch role (demo)</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {(["admin", "procurement", "vendor", "manager"] as Role[]).map((r) => (
            <DropdownMenuItem key={r} onClick={() => { setRole(r); navigate("/dashboard"); }}>
              {ROLE_LABELS[r]}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <button onClick={toggle} className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Toggle theme">
        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger className="relative rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
          <Bell className="h-4 w-4" />
          {unread > 0 && <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-white">{unread}</span>}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel className="flex items-center justify-between">
            Notifications
            <Link to="/notifications" className="text-xs font-normal text-primary hover:underline">View all</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {NOTIFICATIONS.slice(0, 4).map((n) => (
            <DropdownMenuItem key={n.id} className="flex-col items-start gap-0.5 py-2">
              <span className="text-sm font-medium">{n.title}</span>
              <span className="text-xs text-muted-foreground">{n.desc}</span>
              <span className="text-[10px] uppercase text-muted-foreground">{n.time} ago</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg p-1 pr-2 hover:bg-muted">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {user.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
          </div>
          <div className="hidden text-left md:block">
            <p className="text-xs font-medium leading-tight">{user.name}</p>
            <p className="text-[10px] leading-tight text-muted-foreground">{ROLE_LABELS[user.role]}</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => navigate("/profile")}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/settings")}>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => { logout(); navigate("/login"); }}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
