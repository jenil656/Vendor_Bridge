import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { PURCHASE_ORDERS } from "@/lib/mockData";
import { useParams } from "react-router-dom";
import { Download, Printer, Mail } from "lucide-react";

export default function PurchaseOrderDetails() {
  const { id } = useParams();
  const p = PURCHASE_ORDERS.find((x) => x.id === id) ?? PURCHASE_ORDERS[0];
  const subtotal = p.value;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;
  return (
    <>
      <PageHeader
        title={p.id}
        description={`Purchase order for ${p.vendor}`}
        breadcrumbs={[{ label: "Purchase Orders", to: "/purchase-orders" }, { label: p.id }]}
        actions={<>
          <Button size="sm" variant="outline"><Download className="mr-1.5 h-4 w-4" /> Download PDF</Button>
          <Button size="sm" variant="outline"><Printer className="mr-1.5 h-4 w-4" /> Print</Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark"><Mail className="mr-1.5 h-4 w-4" /> Email PO</Button>
        </>}
      />
      <div className="rounded-xl border border-border bg-card p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">Purchase Order</h2>
            <p className="text-sm text-muted-foreground">{p.id}</p>
          </div>
          <div className="text-right text-sm">
            <p className="font-semibold">VendorBridge ERP Pvt Ltd</p>
            <p className="text-muted-foreground">12th Floor, Andheri East<br />Mumbai 400069 · India</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase text-muted-foreground">Vendor</p>
            <p className="mt-1 font-semibold">{p.vendor}</p>
            <p className="text-xs text-muted-foreground">contact@{p.vendor.toLowerCase().replace(/[^a-z]/g, "")}.com</p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs uppercase text-muted-foreground">Status</p>
            <div className="mt-1"><StatusBadge tone={statusTone(p.status)}>{p.status}</StatusBadge></div>
            <p className="mt-2 text-xs text-muted-foreground">Created {p.created} · Expected {p.expected}</p>
          </div>
        </div>

        <table className="mt-6 w-full text-sm">
          <thead className="border-b border-border text-left text-xs uppercase text-muted-foreground"><tr><th className="py-2">#</th><th>Item</th><th className="text-right">Qty</th><th className="text-right">Rate</th><th className="text-right">Amount</th></tr></thead>
          <tbody>
            <tr className="border-b border-border"><td className="py-3">1</td><td>{p.vendor} — contract supply</td><td className="text-right">{p.items}</td><td className="text-right">₹{Math.round(subtotal/p.items).toLocaleString()}</td><td className="text-right">₹{subtotal.toLocaleString()}</td></tr>
          </tbody>
        </table>

        <div className="mt-6 ml-auto w-full max-w-xs space-y-1.5 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">GST (18%)</span><span>₹{tax.toLocaleString()}</span></div>
          <div className="flex justify-between border-t border-border pt-2 text-base font-bold"><span>Grand Total</span><span>₹{total.toLocaleString()}</span></div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-xs text-muted-foreground">
          Approved by: Neha Iyer · Manager · 2026-06-03 · Digital signature on file
        </div>
      </div>
    </>
  );
}
