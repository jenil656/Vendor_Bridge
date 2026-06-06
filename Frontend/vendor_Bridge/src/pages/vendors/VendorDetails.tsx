import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link, useParams } from "react-router-dom";
import { VENDORS, PURCHASE_ORDERS, INVOICES } from "@/lib/mockData";
import { Building2, Mail, Phone, MapPin, Edit3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function VendorDetails() {
  const { id } = useParams();
  const v = VENDORS.find((x) => x.id === id) ?? VENDORS[0];
  const metrics = [
    { label: "Delivery Score", value: v.delivery },
    { label: "Quality Score", value: v.quality },
    { label: "Response Time", value: v.response },
    { label: "Compliance", value: v.compliance },
  ];
  return (
    <>
      <PageHeader
        title={v.company}
        description={`Vendor ID ${v.id} · ${v.category}`}
        breadcrumbs={[{ label: "Vendors", to: "/vendors" }, { label: v.company }]}
        actions={<Link to={`/vendors/${v.id}/edit`}><Button size="sm" variant="outline"><Edit3 className="mr-1.5 h-4 w-4" /> Edit</Button></Link>}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-lightest text-primary"><Building2 className="h-6 w-6" /></div>
              <div>
                <h3 className="text-lg font-semibold">{v.company}</h3>
                <p className="text-sm text-muted-foreground">{v.contact}</p>
                <div className="mt-1"><StatusBadge tone={statusTone(v.status)}>{v.status}</StatusBadge></div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Procurement Volume</p>
              <p className="text-2xl font-bold">₹{(v.volume/100000).toFixed(1)}L</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /> {v.email}</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" /> {v.phone}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" /> {v.city}</div>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">GST: <span className="font-mono">{v.gst}</span></div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Performance</h3>
          <ul className="mt-3 space-y-3">
            {metrics.map((m) => (
              <li key={m.label}>
                <div className="flex justify-between text-xs"><span>{m.label}</span><span className="font-semibold">{m.value}/100</span></div>
                <Progress value={m.value} className="mt-1 h-1.5" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Tabs defaultValue="po" className="mt-6">
        <TabsList>
          <TabsTrigger value="po">Purchase Orders</TabsTrigger>
          <TabsTrigger value="inv">Invoices</TabsTrigger>
          <TabsTrigger value="docs">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="po" className="rounded-xl border border-border bg-card p-5">
          <table className="w-full text-sm">
            <thead className="border-b border-border text-left text-xs uppercase text-muted-foreground"><tr><th className="py-2">PO</th><th>Value</th><th>Status</th><th>Created</th></tr></thead>
            <tbody>{PURCHASE_ORDERS.slice(0, 4).map((p) => (
              <tr key={p.id} className="border-b border-border last:border-0">
                <td className="py-2.5 font-medium">{p.id}</td>
                <td>₹{(p.value/100000).toFixed(1)}L</td>
                <td><StatusBadge tone={statusTone(p.status)}>{p.status}</StatusBadge></td>
                <td>{p.created}</td>
              </tr>
            ))}</tbody>
          </table>
        </TabsContent>
        <TabsContent value="inv" className="rounded-xl border border-border bg-card p-5">
          <table className="w-full text-sm">
            <thead className="border-b border-border text-left text-xs uppercase text-muted-foreground"><tr><th className="py-2">Invoice</th><th>Total</th><th>Status</th><th>Due</th></tr></thead>
            <tbody>{INVOICES.slice(0, 4).map((i) => (
              <tr key={i.id} className="border-b border-border last:border-0">
                <td className="py-2.5 font-medium">{i.id}</td>
                <td>₹{(i.total/100000).toFixed(1)}L</td>
                <td><StatusBadge tone={statusTone(i.status)}>{i.status}</StatusBadge></td>
                <td>{i.due}</td>
              </tr>
            ))}</tbody>
          </table>
        </TabsContent>
        <TabsContent value="docs" className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-border py-2">GST Certificate <Button size="sm" variant="outline">Download</Button></li>
            <li className="flex justify-between border-b border-border py-2">Business Registration <Button size="sm" variant="outline">Download</Button></li>
            <li className="flex justify-between py-2">ISO 9001 Certificate <Button size="sm" variant="outline">Download</Button></li>
          </ul>
        </TabsContent>
      </Tabs>
    </>
  );
}
