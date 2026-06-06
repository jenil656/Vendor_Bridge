import { Link } from "react-router-dom";
import { Boxes, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export function AuthLayout({ title, subtitle, children, footer }: { title: string; subtitle?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-primary-dark p-12 text-white lg:flex">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"><Boxes className="h-6 w-6" /></div>
          <span className="text-lg font-bold">VendorBridge</span>
        </Link>
        <div>
          <p className="text-sm uppercase tracking-wider text-primary-light">Procurement & Vendor Management</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight">Run procurement<br />like the world's<br />best teams.</h2>
          <p className="mt-4 max-w-md text-sm text-primary-light">
            Centralize RFQs, vendor performance, multi-step approvals, POs and invoices in one auditable enterprise workspace.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["End-to-end source-to-pay workflow", "Role-based dashboards for every stakeholder", "Vendor scoring, audit trails, and compliance built-in", "Integrated approvals, POs and GST invoicing"].map((f) => (
              <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" />{f}</li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-primary-light">© 2026 VendorBridge ERP. All rights reserved.</p>
      </div>
      <div className="flex items-center justify-center bg-background p-6 sm:p-12">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Boxes className="h-5 w-5" /></div>
            <span className="text-lg font-bold">VendorBridge</span>
          </Link>
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
