import { KPICard } from "@/components/common/KPICard";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { RFQS, QUOTATIONS, PURCHASE_ORDERS, INVOICES } from "@/lib/mockData";
import { FileText, Send, CheckCircle2, ShoppingCart, Receipt } from "lucide-react";

export default function VendorDashboard() {
  return (
    <>
      <PageHeader title="Vendor Workspace" description="Track your RFQs, quotations, POs and payments" breadcrumbs={[{ label: "Dashboard" }]} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <KPICard label="Assigned RFQs" value="6" delta="2 closing in 48h" trend="flat" tone="primary" icon={<FileText className="h-5 w-5" />} />
        <KPICard label="Submitted Quotations" value="14" delta="+3 this week" trend="up" tone="accent" icon={<Send className="h-5 w-5" />} />
        <KPICard label="Approved" value="8" delta="57% win rate" trend="up" tone="success" icon={<CheckCircle2 className="h-5 w-5" />} />
        <KPICard label="POs Received" value="11" delta="₹38.4L value" trend="up" tone="primary" icon={<ShoppingCart className="h-5 w-5" />} />
        <KPICard label="Pending Invoices" value="3" delta="₹14.2L" trend="flat" tone="warning" icon={<Receipt className="h-5 w-5" />} />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">RFQ Deadlines</h3>
          <ul className="mt-3 divide-y divide-border">
            {RFQS.slice(0, 5).map((r) => (
              <li key={r.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{r.id}</p>
                  <p className="text-xs text-muted-foreground">{r.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium">{r.deadline}</p>
                  <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Quotation Status</h3>
          <ul className="mt-3 divide-y divide-border">
            {QUOTATIONS.slice(0, 5).map((q) => (
              <li key={q.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{q.id}</p>
                  <p className="text-xs text-muted-foreground">RFQ {q.rfq}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">₹{(q.total/100000).toFixed(1)}L</p>
                  <StatusBadge tone={statusTone(q.status)}>{q.status}</StatusBadge>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Recent Purchase Orders</h3>
          <ul className="mt-3 divide-y divide-border">
            {PURCHASE_ORDERS.slice(0, 4).map((p) => (
              <li key={p.id} className="flex items-center justify-between py-3">
                <div><p className="text-sm font-medium">{p.id}</p><p className="text-xs text-muted-foreground">Expected {p.expected}</p></div>
                <div className="text-right"><p className="text-sm font-semibold">₹{(p.value/100000).toFixed(1)}L</p><StatusBadge tone={statusTone(p.status)}>{p.status}</StatusBadge></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Payment Summary</h3>
          <ul className="mt-3 divide-y divide-border">
            {INVOICES.slice(0, 4).map((i) => (
              <li key={i.id} className="flex items-center justify-between py-3">
                <div><p className="text-sm font-medium">{i.id}</p><p className="text-xs text-muted-foreground">Due {i.due}</p></div>
                <div className="text-right"><p className="text-sm font-semibold">₹{(i.total/100000).toFixed(1)}L</p><StatusBadge tone={statusTone(i.status)}>{i.status}</StatusBadge></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
