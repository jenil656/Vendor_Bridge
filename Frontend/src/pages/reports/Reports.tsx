import { PageHeader } from "@/components/common/PageHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MONTHLY_SPEND, PROCUREMENT_FUNNEL, VENDOR_PERFORMANCE, CATEGORY_SPLIT } from "@/lib/mockData";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

const COLORS = ["#2E5FA3", "#7A9CC8", "#E09B2E", "#2D9A58", "#D63F3F", "#5B3FC8"];

export default function Reports() {
  return (
    <>
      <PageHeader
        title="Reports & Analytics"
        description="Interactive analytics across procurement KPIs"
        breadcrumbs={[{ label: "Reports" }]}
        actions={<>
          <Button size="sm" variant="outline"><FileText className="mr-1.5 h-4 w-4" /> PDF</Button>
          <Button size="sm" variant="outline"><FileSpreadsheet className="mr-1.5 h-4 w-4" /> Excel</Button>
          <Button size="sm" variant="outline"><Download className="mr-1.5 h-4 w-4" /> CSV</Button>
        </>}
      />
      <Tabs defaultValue="spend">
        <TabsList>
          <TabsTrigger value="spend">Monthly Spend</TabsTrigger>
          <TabsTrigger value="vendor">Vendor Performance</TabsTrigger>
          <TabsTrigger value="funnel">RFQ Funnel</TabsTrigger>
          <TabsTrigger value="category">Category Split</TabsTrigger>
        </TabsList>
        <TabsContent value="spend" className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Monthly Spend Trend (₹Cr)</h3>
          <div className="h-80 mt-2">
            <ResponsiveContainer>
              <LineChart data={MONTHLY_SPEND}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#4B5568" fontSize={11} />
                <YAxis stroke="#4B5568" fontSize={11} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Legend />
                <Line type="monotone" dataKey="spend" stroke="#2E5FA3" strokeWidth={2.5} />
                <Line type="monotone" dataKey="target" stroke="#E09B2E" strokeWidth={2.5} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        <TabsContent value="vendor" className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Vendor Composite Score</h3>
          <div className="h-80 mt-2">
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
        </TabsContent>
        <TabsContent value="funnel" className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Procurement Funnel</h3>
          <div className="h-80 mt-2">
            <ResponsiveContainer>
              <BarChart data={PROCUREMENT_FUNNEL} layout="vertical" margin={{ left: 32 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis type="number" stroke="#4B5568" fontSize={11} />
                <YAxis dataKey="stage" type="category" stroke="#4B5568" fontSize={11} width={160} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
                <Bar dataKey="value" fill="#2E5FA3" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        <TabsContent value="category" className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Spend by Category</h3>
          <div className="h-80 mt-2">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={CATEGORY_SPLIT} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110}>
                  {CATEGORY_SPLIT.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Legend />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
