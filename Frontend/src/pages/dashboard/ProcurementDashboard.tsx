import { KPICard } from "@/components/common/KPICard";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { RFQS, PURCHASE_ORDERS, PROCUREMENT_FUNNEL, MONTHLY_SPEND } from "@/lib/mockData";
import { FileText, MessagesSquare, CheckCircle2, ShoppingCart, Receipt, IndianRupee, Plus, Building2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";

export default function ProcurementDashboard() {
  return (
    <>
      <PageHeader
        title="Procurement Workspace"
        description="Your RFQs, vendor responses, approvals and POs"
        breadcrumbs={[{ label: "Dashboard" }]}
        actions={
          <>
            <Link to="/rfqs/create"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark"><Plus className="mr-1.5 h-4 w-4" /> Create RFQ</Button></Link>
            <Link to="/vendors/add"><Button size="sm" variant="outline"><Building2 className="mr-1.5 h-4 w-4" /> Add Vendor</Button></Link>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <KPICard label="My Active RFQs" value="12" delta="3 closing this week" trend="flat" tone="primary" icon={<FileText className="h-5 w-5" />} />
        <KPICard label="Pending Quotations" value="18" delta="+5 today" trend="up" tone="accent" icon={<MessagesSquare className="h-5 w-5" />} />
        <KPICard label="Pending Approvals" value="4" delta="2 high priority" trend="flat" tone="warning" icon={<CheckCircle2 className="h-5 w-5" />} />
        <KPICard label="Purchase Orders" value="48" delta="+8 this month" trend="up" tone="primary" icon={<ShoppingCart className="h-5 w-5" />} />
        <KPICard label="Invoices Generated" value="36" delta="+11 this month" trend="up" tone="success" icon={<Receipt className="h-5 w-5" />} />
        <KPICard label="Monthly Spend" value="₹2.1Cr" delta="+6%" trend="up" tone="success" icon={<IndianRupee className="h-5 w-5" />} />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <h3 className="text-base font-semibold">RFQ Pipeline</h3>
          <p className="text-xs text-muted-foreground">Status distribution across your RFQs</p>
          <div className="h-64 mt-2">
            <ResponsiveContainer>
              <BarChart data={PROCUREMENT_FUNNEL}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="stage" stroke="#4B5568" fontSize={10} />
                <YAxis stroke="#4B5568" fontSize={11} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Bar dataKey="value" fill="#2E5FA3" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Quick Actions</h3>
          <div className="mt-4 space-y-2">
            {[
              { label: "Create RFQ", icon: Plus, to: "/rfqs/create" },
              { label: "Add Vendor", icon: Building2, to: "/vendors/add" },
              { label: "Generate Purchase Order", icon: ShoppingCart, to: "/purchase-orders" },
              { label: "Generate Invoice", icon: Receipt, to: "/invoices" },
              { label: "Send for Approval", icon: Send, to: "/approvals" },
            ].map((a) => (
              <Link key={a.label} to={a.to} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5 text-sm hover:border-primary hover:bg-primary-lightest">
                <a.icon className="h-4 w-4 text-primary" /> {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Recent Purchase Orders</h3>
          <ul className="mt-3 divide-y divide-border">
            {PURCHASE_ORDERS.slice(0, 5).map((p) => (
              <li key={p.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium">{p.id}</p>
                  <p className="text-xs text-muted-foreground">{p.vendor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">₹{(p.value/100000).toFixed(1)}L</p>
                  <StatusBadge tone={statusTone(p.status)}>{p.status}</StatusBadge>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Monthly Spend Trend</h3>
          <div className="h-64 mt-2">
            <ResponsiveContainer>
              <LineChart data={MONTHLY_SPEND}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#4B5568" fontSize={11} />
                <YAxis stroke="#4B5568" fontSize={11} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Line type="monotone" dataKey="spend" stroke="#2E5FA3" strokeWidth={2.5} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-5">
        <h3 className="text-base font-semibold">Vendor Responses — Open RFQs</h3>
        <table className="mt-3 w-full text-sm">
          <thead className="border-b border-border text-left text-xs uppercase text-muted-foreground">
            <tr><th className="py-2">RFQ</th><th>Vendors</th><th>Responses</th><th>Deadline</th><th>Status</th></tr>
          </thead>
          <tbody>
            {RFQS.slice(0, 5).map((r) => (
              <tr key={r.id} className="border-b border-border last:border-0">
                <td className="py-2.5">
                  <p className="font-medium">{r.id}</p>
                  <p className="text-xs text-muted-foreground">{r.title}</p>
                </td>
                <td>{r.vendors}</td>
                <td>{r.responses}/{r.vendors}</td>
                <td>{r.deadline}</td>
                <td><StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
