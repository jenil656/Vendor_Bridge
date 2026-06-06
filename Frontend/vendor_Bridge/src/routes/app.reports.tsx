import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { spendTrend, vendorPerf, categorySpend, funnelData } from "@/lib/mock";
import { Download } from "lucide-react";
const C = ["#2E5FA3","#2D9A58","#E09B2E","#5B3FC8","#7A9CC8"];
export const Route = createFileRoute("/app/reports")({
  component: () => (
    <>
      <PageHeader title="Reports & Analytics" description="Procurement trends, vendor performance and spend analysis." actions={
        <>
          <button className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium hover:bg-[#F7F8FA]"><Download className="h-3.5 w-3.5" /> PDF</button>
          <button className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium hover:bg-[#F7F8FA]"><Download className="h-3.5 w-3.5" /> Excel</button>
          <button className="inline-flex items-center gap-1 rounded-lg bg-[#2E5FA3] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#1B2D55]"><Download className="h-3.5 w-3.5" /> CSV</button>
        </>
      } />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-5"><h3 className="mb-3 text-sm font-semibold">Monthly Spend Trend</h3><div className="h-64"><ResponsiveContainer><LineChart data={spendTrend}><CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" /><XAxis dataKey="month" fontSize={11} stroke="#4B5568" /><YAxis fontSize={11} stroke="#4B5568" /><Tooltip /><Line type="monotone" dataKey="spend" stroke="#2E5FA3" strokeWidth={2} /></LineChart></ResponsiveContainer></div></div>
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-5"><h3 className="mb-3 text-sm font-semibold">Vendor Performance</h3><div className="h-64"><ResponsiveContainer><BarChart data={vendorPerf}><CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" /><XAxis dataKey="name" fontSize={11} stroke="#4B5568" /><YAxis fontSize={11} stroke="#4B5568" /><Tooltip /><Legend wrapperStyle={{fontSize:11}} /><Bar dataKey="delivery" fill="#2E5FA3" radius={[4,4,0,0]} /><Bar dataKey="quality" fill="#2D9A58" radius={[4,4,0,0]} /></BarChart></ResponsiveContainer></div></div>
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-5"><h3 className="mb-3 text-sm font-semibold">Spend by Category</h3><div className="h-64"><ResponsiveContainer><PieChart><Pie data={categorySpend} dataKey="value" nameKey="name" outerRadius={80}>{categorySpend.map((_,i)=><Cell key={i} fill={C[i%C.length]}/>)}</Pie><Tooltip /><Legend wrapperStyle={{fontSize:11}} /></PieChart></ResponsiveContainer></div></div>
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-5"><h3 className="mb-3 text-sm font-semibold">Procurement Funnel</h3><div className="h-64"><ResponsiveContainer><BarChart data={funnelData} layout="vertical"><CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" /><XAxis type="number" fontSize={11} stroke="#4B5568" /><YAxis dataKey="stage" type="category" fontSize={11} stroke="#4B5568" width={110} /><Tooltip /><Bar dataKey="count" fill="#2E5FA3" radius={[0,4,4,0]} /></BarChart></ResponsiveContainer></div></div>
      </div>
    </>
  ),
});
