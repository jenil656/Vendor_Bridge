import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const TONES = {
  primary: "bg-primary-lightest text-primary-dark",
  success: "bg-success-fill text-success",
  warning: "bg-warning-fill text-warning",
  danger: "bg-destructive-fill text-destructive",
  neutral: "bg-muted text-muted-foreground",
  accent: "bg-accent-lightest text-accent-foreground",
} as const;

export type StatusTone = keyof typeof TONES;

export function StatusBadge({ tone = "neutral", children, className }: { tone?: StatusTone; children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-[20px] px-2.5 py-1 text-xs font-medium", TONES[tone], className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", {
        "bg-primary": tone === "primary",
        "bg-success": tone === "success",
        "bg-warning": tone === "warning",
        "bg-destructive": tone === "danger",
        "bg-accent-strong": tone === "accent",
        "bg-muted-foreground": tone === "neutral",
      })} />
      {children}
    </span>
  );
}

export function statusTone(status: string): StatusTone {
  const s = status.toLowerCase();
  if (["active", "approved", "paid", "delivered", "verified", "completed"].includes(s)) return "success";
  if (["pending", "draft", "under review", "quotation received", "in transit", "dispatched", "submitted", "ordered"].includes(s)) return "warning";
  if (["rejected", "overdue", "blacklisted", "suspended", "failed"].includes(s)) return "danger";
  if (["published", "high"].includes(s)) return "primary";
  return "neutral";
}
