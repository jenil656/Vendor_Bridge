import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: ReactNode;
  delta?: string;
  trend?: "up" | "down" | "flat";
  icon?: ReactNode;
  tone?: "primary" | "success" | "warning" | "accent" | "danger";
}

export function KPICard({ label, value, delta, trend = "flat", icon, tone = "primary" }: Props) {
  const toneBg = {
    primary: "bg-primary-lightest text-primary",
    success: "bg-success-fill text-success",
    warning: "bg-warning-fill text-warning",
    accent: "bg-accent-lightest text-accent-strong",
    danger: "bg-destructive-fill text-destructive",
  }[tone];

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-bold text-foreground">{value}</p>
          {delta && (
            <p className={cn("mt-1 text-xs font-medium", {
              "text-success": trend === "up",
              "text-destructive": trend === "down",
              "text-muted-foreground": trend === "flat",
            })}>
              {trend === "up" && "▲ "}{trend === "down" && "▼ "}{delta}
            </p>
          )}
        </div>
        {icon && (
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", toneBg)}>{icon}</div>
        )}
      </div>
    </div>
  );
}
