import { KPICard } from "@/components/common/KPICard";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { APPROVALS, VENDORS, MONTHLY_SPEND } from "@/lib/mockData";
import { CheckCircle2, ThumbsUp, ThumbsDown, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function ManagerDashboard() {
  return (
    <>
      <PageHeader title="Manager Dashboard" description="Approvals, vendor recommendations, and procurement oversight" breadcrumbs={[{ label: "Dashboard" }]} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard label="Pending Approvals" value="8" delta="3 high priority" trend="flat" tone="warning" icon={<CheckCircle2 className="h-5 w-5" />} />
        <KPICard label="Approved (30d)" value="42" delta="+11" trend="up" tone="success" icon={<ThumbsUp className="h-5 w-5" />} />
        <KPICard label="Rejected (30d)" value="6" delta="-2" trend="down" tone="danger" icon={<ThumbsDown className="h-5 w-5" />} />
        <KPICard label="Value Awaiting" value="₹54.2L" delta="across 8 items" tone="primary" icon={<IndianRupee className="h-5 w-5" />} />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <h3 className="text-base font-semibold">Approval Queue</h3>
          <ul className="mt-3 divide-y divide-border">
            {APPROVALS.map((a) => (
              <li key={a.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{a.id}</p>
                    <StatusBadge tone={statusTone(a.priority)}>{a.priority}</StatusBadge>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.title} — {a.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold">₹{(a.value/100000).toFixed(1)}L</p>
                    <StatusBadge tone={statusTone(a.status)}>{a.status}</StatusBadge>
                  </div>
                  <Link to={`/approvals/${a.id}`}><Button size="sm" variant="outline">Review</Button></Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Department Spending</h3>
          <div className="h-64 mt-2">
            <ResponsiveContainer>
              <BarChart data={MONTHLY_SPEND}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#4B5568" fontSize={11} />
                <YAxis stroke="#4B5568" fontSize={11} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Bar dataKey="spend" fill="#5B3FC8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-5">
        <h3 className="text-base font-semibold">Vendor Recommendation Panel</h3>
        <p className="text-xs text-muted-foreground">Top performing vendors this quarter</p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {VENDORS.filter((v) => v.status === "Active").slice(0, 3).map((v) => (
            <div key={v.id} className="rounded-lg border border-border p-3">
              <p className="text-sm font-medium">{v.company}</p>
              <p className="text-xs text-muted-foreground">{v.category} · {v.city}</p>
              <div className="mt-2 flex justify-between text-xs">
                <span>Delivery <span className="font-semibold text-success">{v.delivery}</span></span>
                <span>Quality <span className="font-semibold text-success">{v.quality}</span></span>
                <span>Compliance <span className="font-semibold text-success">{v.compliance}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
