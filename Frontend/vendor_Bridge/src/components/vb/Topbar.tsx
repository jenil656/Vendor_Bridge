import { Link, useNavigate } from "@tanstack/react-router";
import { Bell, Search, LogOut, User, Settings, ChevronDown } from "lucide-react";
import { useAuth, type Role } from "@/lib/auth";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Topbar() {
  const { user, setRole, logout } = useAuth();
  const navigate = useNavigate();

  const initials = user.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-[#E2E8F0] bg-white px-6">
      <div className="relative w-full max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4B5568]" />
        <input
          type="search"
          placeholder="Search vendors, RFQs, POs, invoices…"
          className="h-9 w-full rounded-lg border border-[#E2E8F0] bg-[#F7F8FA] pl-9 pr-3 text-sm outline-none focus:border-[#2E5FA3] focus:bg-white"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 rounded-lg border border-[#E2E8F0] px-2.5 py-1.5 text-xs text-[#4B5568] hover:bg-[#F7F8FA]">
            View as: <span className="font-medium capitalize text-[#1A202C]">{user.role}</span>
            <ChevronDown className="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Switch role (demo)</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {(["admin", "procurement", "vendor", "manager"] as Role[]).map((r) => (
              <DropdownMenuItem key={r} onClick={() => setRole(r)} className="capitalize">{r}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/app/notifications" className="relative rounded-lg p-2 text-[#4B5568] hover:bg-[#F7F8FA]">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#D63F3F]" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg p-1 pr-2 hover:bg-[#F7F8FA]">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-[#2E5FA3] text-xs text-white">{initials}</AvatarFallback>
            </Avatar>
            <div className="hidden text-left md:block">
              <div className="text-xs font-medium text-[#1A202C]">{user.name}</div>
              <div className="text-[10px] text-[#4B5568]">{user.email}</div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate({ to: "/app/profile" })}>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate({ to: "/app/settings" })}>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => { logout(); navigate({ to: "/login" }); }}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}