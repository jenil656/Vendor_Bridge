import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { VENDORS } from "@/lib/mockData";
import { Progress } from "@/components/ui/progress";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function VendorPerformance() {
  const cols: Column<typeof VENDORS[number]>[] = [
    { key: "company", header: "Vendor", render: (r) => <p className="font-medium">{r.company}</p> },
    { key: "delivery", header: "Delivery", sortable: true, render: (r) => <div className="w-32"><Progress value={r.delivery} className="h-1.5" /><p className="mt-0.5 text-xs">{r.delivery}</p></div> },
    { key: "quality", header: "Quality", sortable: true, render: (r) => <div className="w-32"><Progress value={r.quality} className="h-1.5" /><p className="mt-0.5 text-xs">{r.quality}</p></div> },
    { key: "response", header: "Response", sortable: true, render: (r) => <div className="w-32"><Progress value={r.response} className="h-1.5" /><p className="mt-0.5 text-xs">{r.response}</p></div> },
    { key: "compliance", header: "Compliance", sortable: true, render: (r) => <div className="w-32"><Progress value={r.compliance} className="h-1.5" /><p className="mt-0.5 text-xs">{r.compliance}</p></div> },
    { key: "volume", header: "Volume", sortable: true, render: (r) => `₹${(r.volume/100000).toFixed(1)}L` },
  ];
  return (
    <>
      <PageHeader title="Vendor Performance" description="Cross-vendor scorecards and procurement volume" breadcrumbs={[{ label: "Vendors", to: "/vendors" }, { label: "Performance" }]} />
      <div className="mb-5 rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">Composite Score</h3>
        <div className="mt-2 h-56">
          <ResponsiveContainer>
            <BarChart data={VENDORS.map((v) => ({ name: v.company.split(" ")[0], score: Math.round((v.delivery + v.quality + v.response + v.compliance) / 4) }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="name" stroke="#4B5568" fontSize={11} />
              <YAxis stroke="#4B5568" fontSize={11} domain={[0, 100]} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
              <Bar dataKey="score" fill="#2E5FA3" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <DataTable columns={cols} data={VENDORS} searchKeys={["company"]} />
    </>
  );
}
