import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export function AuthShell({ children, title, subtitle }: { children: ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left panel */}
      <div className="hidden flex-col justify-between bg-[#1B2D55] p-10 text-white md:flex">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2E5FA3] font-bold">V</div>
          <span className="font-semibold">VendorBridge</span>
        </Link>
        <div>
          <h2 className="text-3xl font-semibold leading-tight">Procurement, run with precision.</h2>
          <p className="mt-3 max-w-md text-sm text-[#C4D2EA]">From RFQ to invoice — vendors, finance and operations on a single auditable workflow.</p>
          <ul className="mt-8 space-y-3 text-sm text-[#C4D2EA]">
            {[
              "Multi-level approvals with full audit trail",
              "Vendor performance scoring & compliance",
              "Auto-generated POs and GST-ready invoices",
              "Real-time spend analytics by category & vendor",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E09B2E]" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="text-xs text-[#7A9CC8]">© 2026 VendorBridge Inc.</div>
      </div>
      {/* Right panel */}
      <div className="flex items-center justify-center bg-white p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-6">
            <Link to="/" className="flex items-center gap-2 text-[#1A202C]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2E5FA3] font-bold text-white">V</div>
              <span className="font-semibold">VendorBridge</span>
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-[#1A202C]">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-[#4B5568]">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-[#1A202C]">{label}</span>
      <div className="mt-1">{children}</div>
      {hint && <span className="mt-1 block text-[10px] text-[#4B5568]">{hint}</span>}
    </label>
  );
}

export const inputCls = "h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 text-sm text-[#1A202C] outline-none focus:border-[#2E5FA3]";