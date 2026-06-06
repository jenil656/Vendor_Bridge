import { KPICard } from "@/components/common/KPICard";
import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { ACTIVITY, APPROVALS, MONTHLY_SPEND, PROCUREMENT_FUNNEL, VENDOR_PERFORMANCE, CATEGORY_SPLIT } from "@/lib/mockData";
import { Users, Building2, FileText, CheckCircle2, ShoppingCart, Receipt, IndianRupee, AlertTriangle } from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, PieChart, Pie, Cell, Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const COLORS = ["#2E5FA3", "#7A9CC8", "#E09B2E", "#2D9A58", "#D63F3F", "#5B3FC8"];

export default function AdminDashboard() {
  return (
    <>
      <PageHeader
        title="Admin Dashboard"
        description="Organization-wide procurement performance and operations"
        breadcrumbs={[{ label: "Dashboard" }]}
        actions={<Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard label="Total Users" value="128" delta="+6 this month" trend="up" tone="primary" icon={<Users className="h-5 w-5" />} />
        <KPICard label="Total Vendors" value="84" delta="+3 this month" trend="up" tone="primary" icon={<Building2 className="h-5 w-5" />} />
        <KPICard label="Active RFQs" value="24" delta="+12%" trend="up" tone="accent" icon={<FileText className="h-5 w-5" />} />
        <KPICard label="Pending Approvals" value="8" delta="-2 vs last week" trend="down" tone="warning" icon={<CheckCircle2 className="h-5 w-5" />} />
        <KPICard label="Purchase Orders" value="312" delta="+18 this month" trend="up" tone="primary" icon={<ShoppingCart className="h-5 w-5" />} />
        <KPICard label="Invoices Generated" value="276" delta="+22 this month" trend="up" tone="success" icon={<Receipt className="h-5 w-5" />} />
        <KPICard label="Monthly Spend" value="₹6.8Cr" delta="+8% MoM" trend="up" tone="success" icon={<IndianRupee className="h-5 w-5" />} />
        <KPICard label="Audit Alerts" value="3" delta="2 high priority" trend="down" tone="warning" icon={<AlertTriangle className="h-5 w-5" />} />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Monthly Spend Trend</h3>
              <p className="text-xs text-muted-foreground">Spend vs target (₹ in crores)</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={MONTHLY_SPEND}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E5FA3" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#2E5FA3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#4B5568" fontSize={12} />
                <YAxis stroke="#4B5568" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Area type="monotone" dataKey="spend" stroke="#2E5FA3" strokeWidth={2} fill="url(#g1)" />
                <Area type="monotone" dataKey="target" stroke="#E09B2E" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Spend by Category</h3>
          <p className="text-xs text-muted-foreground">Last 6 months</p>
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={CATEGORY_SPLIT} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={2}>
                  {CATEGORY_SPLIT.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Procurement Funnel</h3>
          <p className="text-xs text-muted-foreground">RFQ to delivery conversion</p>
          <div className="h-64 mt-2">
            <ResponsiveContainer>
              <BarChart data={PROCUREMENT_FUNNEL} layout="vertical" margin={{ left: 16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis type="number" stroke="#4B5568" fontSize={11} />
                <YAxis dataKey="stage" type="category" stroke="#4B5568" fontSize={11} width={140} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Bar dataKey="value" fill="#2E5FA3" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Top Vendor Performance</h3>
          <p className="text-xs text-muted-foreground">Composite score</p>
          <div className="h-64 mt-2">
            <ResponsiveContainer>
              <BarChart data={VENDOR_PERFORMANCE}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" stroke="#4B5568" fontSize={11} />
                <YAxis stroke="#4B5568" fontSize={11} domain={[0, 100]} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Bar dataKey="score" fill="#2D9A58" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <h3 className="text-base font-semibold">Recent Activity</h3>
          <ul className="mt-4 space-y-3">
            {ACTIVITY.slice(0, 7).map((a) => (
              <li key={a.id} className="flex items-start gap-3 border-b border-border pb-3 last:border-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-lightest text-xs font-semibold text-primary">{a.user.split(" ").map((w) => w[0]).join("").slice(0, 2)}</div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm"><span className="font-medium">{a.user}</span> {a.action}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-base font-semibold">Upcoming Deadlines</h3>
          <ul className="mt-4 space-y-3">
            {APPROVALS.filter((a) => a.status === "Pending").map((a) => (
              <li key={a.id} className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{a.id}</p>
                  <StatusBadge tone={statusTone(a.priority)}>{a.priority}</StatusBadge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{a.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">Submitted {a.submitted}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
