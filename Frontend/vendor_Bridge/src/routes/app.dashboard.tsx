import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { KpiCard } from "@/components/vb/KpiCard";
import { StatusBadge } from "@/components/vb/StatusBadge";
import { useAuth } from "@/lib/auth";
import {
  Users, Building2, FileText, CheckSquare, ShoppingCart, Receipt, Wallet,
  Plus, Download, TrendingUp, CalendarClock, AlertCircle,
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { activities, approvals, rfqs, purchaseOrders, spendTrend, vendorPerf, funnelData, categorySpend } from "@/lib/mock";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — VendorBridge" }] }),
  component: Dashboard,
});

const CHART_COLORS = ["#2E5FA3", "#2D9A58", "#E09B2E", "#5B3FC8", "#7A9CC8"];

function Card({ title, action, children, className = "" }: { title: string; action?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={"rounded-xl border border-[#E2E8F0] bg-white p-5 " + className}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#1A202C]">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

function Dashboard() {
  const { user } = useAuth();
  const titleMap = {
    admin: { t: "Admin Dashboard", d: "Procurement overview across the organization." },
    procurement: { t: "Procurement Dashboard", d: "Your RFQs, approvals and active orders." },
    vendor: { t: "Vendor Dashboard", d: "Your assigned RFQs and order status." },
    manager: { t: "Manager Dashboard", d: "Pending approvals and department spending." },
  } as const;
  const meta = titleMap[user.role];

  return (
    <>
      <PageHeader title={meta.t} description={meta.d} actions={
        <>
          <button className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#1A202C] hover:bg-[#F7F8FA]"><Download className="h-3.5 w-3.5" /> Export</button>
          {user.role !== "vendor" && (
            <Link to="/app/rfqs" className="inline-flex items-center gap-1 rounded-lg bg-[#2E5FA3] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#1B2D55]"><Plus className="h-3.5 w-3.5" /> New RFQ</Link>
          )}
        </>
      } />

      {user.role === "admin" && <AdminDash />}
      {user.role === "procurement" && <ProcurementDash />}
      {user.role === "vendor" && <VendorDash />}
      {user.role === "manager" && <ManagerDash />}
    </>
  );
}

function AdminDash() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
        <KpiCard label="Total Users" value="248" delta="+12" icon={Users} tint="primary" />
        <KpiCard label="Total Vendors" value="1,284" delta="+38" icon={Building2} tint="primary" />
        <KpiCard label="Active RFQs" value="47" delta="+5" icon={FileText} tint="warning" />
        <KpiCard label="Pending Approvals" value="9" delta="-3" deltaTone="down" icon={CheckSquare} tint="warning" />
        <KpiCard label="Purchase Orders" value="312" delta="+24" icon={ShoppingCart} tint="success" />
        <KpiCard label="Invoices Generated" value="287" delta="+19" icon={Receipt} tint="success" />
        <KpiCard label="Monthly Spend" value="₹ 72.4L" delta="+8.4%" icon={Wallet} tint="manager" />
        <KpiCard label="Compliance" value="98.2%" delta="+0.6%" icon={TrendingUp} tint="success" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Monthly Spend Trend" className="lg:col-span-2">
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={spendTrend}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E5FA3" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#2E5FA3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#4B5568" fontSize={12} />
                <YAxis stroke="#4B5568" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Area type="monotone" dataKey="spend" stroke="#2E5FA3" strokeWidth={2} fill="url(#g)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Spend by Category">
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={categorySpend} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {categorySpend.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Procurement Funnel">
          <div className="space-y-3">
            {funnelData.map((s, i) => {
              const pct = (s.count / funnelData[0].count) * 100;
              return (
                <div key={s.stage}>
                  <div className="flex justify-between text-xs"><span className="text-[#4B5568]">{s.stage}</span><span className="font-medium text-[#1A202C]">{s.count}</span></div>
                  <div className="mt-1 h-2 rounded-full bg-[#F7F8FA]"><div className="h-2 rounded-full" style={{ width: `${pct}%`, background: CHART_COLORS[i % CHART_COLORS.length] }} /></div>
                </div>
              );
            })}
          </div>
        </Card>
        <Card title="Vendor Performance" className="lg:col-span-2">
          <div className="h-56">
            <ResponsiveContainer>
              <BarChart data={vendorPerf}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" stroke="#4B5568" fontSize={12} />
                <YAxis stroke="#4B5568" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="delivery" fill="#2E5FA3" radius={[4, 4, 0, 0]} />
                <Bar dataKey="quality" fill="#2D9A58" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Recent Activities" action={<Link to="/app/activity" className="text-xs text-[#2E5FA3]">View all</Link>}>
          <ActivityList />
        </Card>
        <Card title="Audit Alerts">
          <div className="space-y-3">
            {[
              { t: "Vendor blacklisted: Helix Pharma", time: "2h ago", tone: "danger" },
              { t: "PO threshold exceeded: PO-7739", time: "5h ago", tone: "warning" },
              { t: "Role change logged: USR-208", time: "1d ago", tone: "primary" },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-[#E2E8F0] p-3">
                <AlertCircle className={"h-4 w-4 shrink-0 " + (a.tone === "danger" ? "text-[#D63F3F]" : a.tone === "warning" ? "text-[#E09B2E]" : "text-[#2E5FA3]")} />
                <div className="flex-1"><div className="text-sm text-[#1A202C]">{a.t}</div><div className="text-[10px] text-[#4B5568]">{a.time}</div></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function ProcurementDash() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        <KpiCard label="My Active RFQs" value="14" delta="+3" icon={FileText} tint="primary" />
        <KpiCard label="Pending Quotations" value="22" delta="+7" icon={Building2} tint="warning" />
        <KpiCard label="Pending Approvals" value="5" icon={CheckSquare} tint="warning" />
        <KpiCard label="Purchase Orders" value="48" delta="+9" icon={ShoppingCart} tint="success" />
        <KpiCard label="Invoices" value="36" icon={Receipt} tint="success" />
        <KpiCard label="Spend (Month)" value="₹ 28.6L" delta="+12%" icon={Wallet} tint="manager" />
      </div>

      <Card title="Quick Actions">
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { i: FileText, t: "Create RFQ", to: "/app/rfqs" },
            { i: Building2, t: "Add Vendor", to: "/app/vendors" },
            { i: ShoppingCart, t: "Generate PO", to: "/app/purchase-orders" },
            { i: Receipt, t: "Generate Invoice", to: "/app/invoices" },
          ].map((a) => (
            <Link key={a.t} to={a.to} className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] p-4 hover:border-[#2E5FA3] hover:bg-[#EEF2F9]">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2F9] text-[#2E5FA3]"><a.i className="h-4 w-4" /></div>
              <div className="text-sm font-medium text-[#1A202C]">{a.t}</div>
            </Link>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="RFQ Pipeline" className="lg:col-span-2">
          <div className="h-56">
            <ResponsiveContainer>
              <BarChart data={funnelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="stage" stroke="#4B5568" fontSize={11} />
                <YAxis stroke="#4B5568" fontSize={11} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Bar dataKey="count" fill="#2E5FA3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Procurement Calendar">
          <div className="space-y-3">
            {rfqs.slice(0, 5).map((r) => (
              <div key={r.id} className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-col items-center justify-center rounded-lg bg-[#FDF4E3] text-[10px] font-semibold text-[#9A6310]">
                  <CalendarClock className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-[#1A202C]">{r.title}</div>
                  <div className="text-[10px] text-[#4B5568]">{r.id} · due {r.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Recent Purchase Orders" action={<Link to="/app/purchase-orders" className="text-xs text-[#2E5FA3]">View all</Link>}>
          <RecentPoList />
        </Card>
        <Card title="Vendor Responses">
          <ActivityList />
        </Card>
      </div>
    </div>
  );
}

function VendorDash() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
        <KpiCard label="Assigned RFQs" value="9" delta="+2" icon={FileText} tint="warning" />
        <KpiCard label="Submitted Quotations" value="14" delta="+4" icon={Building2} tint="primary" />
        <KpiCard label="Approved Quotations" value="6" delta="+1" icon={CheckSquare} tint="success" />
        <KpiCard label="POs Received" value="11" icon={ShoppingCart} tint="success" />
        <KpiCard label="Pending Invoices" value="3" icon={Receipt} tint="warning" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="RFQ Deadlines">
          <div className="space-y-3">
            {rfqs.slice(0, 5).map((r) => (
              <div key={r.id} className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-3">
                <div>
                  <div className="text-sm font-medium text-[#1A202C]">{r.title}</div>
                  <div className="text-[10px] text-[#4B5568]">{r.id} · due {r.deadline}</div>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        </Card>
        <Card title="Quotation Status">
          <div className="h-56">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={[{ name: "Submitted", value: 14 }, { name: "Approved", value: 6 }, { name: "Rejected", value: 2 }]} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                  {[0, 1, 2].map((i) => <Cell key={i} fill={["#2E5FA3", "#2D9A58", "#D63F3F"][i]} />)}
                </Pie>
                <Tooltip /><Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Recent Purchase Orders" action={<Link to="/app/purchase-orders" className="text-xs text-[#2E5FA3]">View all</Link>}><RecentPoList /></Card>
        <Card title="Payment Summary">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-[#E6F5EE] p-4"><div className="text-xs text-[#2D9A58]">Received</div><div className="mt-1 text-xl font-semibold text-[#1A202C]">₹ 42.1L</div></div>
            <div className="rounded-lg bg-[#FFF7E6] p-4"><div className="text-xs text-[#E09B2E]">Pending</div><div className="mt-1 text-xl font-semibold text-[#1A202C]">₹ 8.6L</div></div>
            <div className="rounded-lg bg-[#FEF2F2] p-4"><div className="text-xs text-[#D63F3F]">Overdue</div><div className="mt-1 text-xl font-semibold text-[#1A202C]">₹ 1.2L</div></div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ManagerDash() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Pending Approvals" value="7" delta="+2" icon={CheckSquare} tint="warning" />
        <KpiCard label="Approved Requests" value="48" delta="+12" icon={CheckSquare} tint="success" />
        <KpiCard label="Rejected Requests" value="6" deltaTone="down" delta="-2" icon={CheckSquare} tint="danger" />
        <KpiCard label="Value Awaiting" value="₹ 64.2L" icon={Wallet} tint="manager" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Approval Queue" className="lg:col-span-2" action={<Link to="/app/approvals" className="text-xs text-[#2E5FA3]">Open queue</Link>}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs text-[#4B5568]">
                <tr className="border-b border-[#E2E8F0]"><th className="py-2">ID</th><th>Title</th><th>Requester</th><th>Value</th><th>Status</th></tr>
              </thead>
              <tbody>
                {approvals.slice(0, 5).map((a) => (
                  <tr key={a.id} className="border-b border-[#E2E8F0] last:border-0"><td className="py-2 font-medium text-[#2E5FA3]">{a.id}</td><td>{a.title}</td><td className="text-[#4B5568]">{a.requester}</td><td>{a.value}</td><td><StatusBadge status={a.status} /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card title="Department Spending">
          <div className="h-56">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={categorySpend} dataKey="value" nameKey="name" innerRadius={45} outerRadius={75}>
                  {categorySpend.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip /><Legend wrapperStyle={{ fontSize: 10 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Vendor Recommendations">
          <div className="space-y-3">
            {vendorPerf.slice(0, 4).map((v) => (
              <div key={v.name} className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-3">
                <div>
                  <div className="text-sm font-medium text-[#1A202C]">{v.name}</div>
                  <div className="text-[10px] text-[#4B5568]">Delivery {v.delivery}% · Quality {v.quality}%</div>
                </div>
                <button className="text-xs font-medium text-[#2E5FA3]">Shortlist</button>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Recent Activities"><ActivityList /></Card>
      </div>
    </div>
  );
}

function ActivityList() {
  return (
    <div className="space-y-3">
      {activities.slice(0, 6).map((a, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2E5FA3]" />
          <div className="flex-1 text-sm">
            <span className="font-medium text-[#1A202C]">{a.user}</span> <span className="text-[#4B5568]">{a.action}</span> <span className="font-medium text-[#2E5FA3]">{a.target}</span>
            <div className="text-[10px] text-[#4B5568]">{a.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RecentPoList() {
  return (
    <div className="space-y-2">
      {purchaseOrders.slice(0, 5).map((p) => (
        <div key={p.id} className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-3">
          <div>
            <div className="text-sm font-medium text-[#1A202C]">{p.id}</div>
            <div className="text-[10px] text-[#4B5568]">{p.vendor} · {p.date}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">{p.amount}</div>
            <StatusBadge status={p.status} />
          </div>
        </div>
      ))}
    </div>
  );
}