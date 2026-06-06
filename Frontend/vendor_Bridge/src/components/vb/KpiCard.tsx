import type { LucideIcon } from "lucide-react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function KpiCard({
  label, value, delta, deltaTone = "up", icon: Icon, tint = "primary",
}: {
  label: string;
  value: string | number;
  delta?: string;
  deltaTone?: "up" | "down" | "flat";
  icon: LucideIcon;
  tint?: "primary" | "success" | "warning" | "danger" | "manager";
}) {
  const tints: Record<string, string> = {
    primary: "bg-[#EEF2F9] text-[#2E5FA3]",
    success: "bg-[#E6F5EE] text-[#2D9A58]",
    warning: "bg-[#FFF7E6] text-[#E09B2E]",
    danger: "bg-[#FEF2F2] text-[#D63F3F]",
    manager: "bg-[#F3F0FE] text-[#5B3FC8]",
  };
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#4B5568]">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-[#1A202C]">{value}</p>
        </div>
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", tints[tint])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {delta && (
        <div className="mt-3 flex items-center gap-1 text-xs">
          {deltaTone === "up" ? <TrendingUp className="h-3.5 w-3.5 text-[#2D9A58]" /> :
           deltaTone === "down" ? <TrendingDown className="h-3.5 w-3.5 text-[#D63F3F]" /> : null}
          <span className={cn(deltaTone === "up" ? "text-[#2D9A58]" : deltaTone === "down" ? "text-[#D63F3F]" : "text-[#4B5568]")}>
            {delta}
          </span>
          <span className="text-[#4B5568]">vs last month</span>
        </div>
      )}
    </div>
  );
}