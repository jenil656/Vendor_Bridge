import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { INVOICES } from "@/lib/mockData";
import { useParams } from "react-router-dom";
import { Download, Printer, Mail } from "lucide-react";

export default function InvoiceDetails() {
  const { id } = useParams();
  const i = INVOICES.find((x) => x.id === id) ?? INVOICES[0];
  const cgst = Math.round(i.tax / 2);
  const sgst = i.tax - cgst;
  return (
    <>
      <PageHeader
        title={i.id}
        description={`Invoice from ${i.vendor}`}
        breadcrumbs={[{ label: "Invoices", to: "/invoices" }, { label: i.id }]}
        actions={<>
          <Button size="sm" variant="outline"><Download className="mr-1.5 h-4 w-4" /> Download</Button>
          <Button size="sm" variant="outline"><Printer className="mr-1.5 h-4 w-4" /> Print</Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark"><Mail className="mr-1.5 h-4 w-4" /> Email</Button>
        </>}
      />
      <div className="rounded-xl border border-border bg-card p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">Tax Invoice</h2>
            <p className="text-sm text-muted-foreground">{i.id} · PO {i.po}</p>
          </div>
          <StatusBadge tone={statusTone(i.status)}>{i.status}</StatusBadge>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase text-muted-foreground">From</p>
            <p className="mt-1 font-semibold">{i.vendor}</p>
            <p className="text-xs text-muted-foreground">GSTIN: 27AABCS1234R1Z5</p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs uppercase text-muted-foreground">Bill To</p>
            <p className="mt-1 font-semibold">VendorBridge ERP Pvt Ltd</p>
            <p className="text-xs text-muted-foreground">Mumbai, India</p>
            <p className="mt-2 text-xs text-muted-foreground">Due {i.due}</p>
          </div>
        </div>
        <table className="mt-6 w-full text-sm">
          <thead className="border-b border-border text-left text-xs uppercase text-muted-foreground"><tr><th className="py-2">Description</th><th className="text-right">HSN</th><th className="text-right">Amount</th></tr></thead>
          <tbody><tr className="border-b border-border"><td className="py-3">Supply against {i.po}</td><td className="text-right">7208</td><td className="text-right">₹{i.amount.toLocaleString()}</td></tr></tbody>
        </table>
        <div className="mt-6 ml-auto w-full max-w-xs space-y-1.5 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>₹{i.amount.toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">CGST (9%)</span><span>₹{cgst.toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">SGST (9%)</span><span>₹{sgst.toLocaleString()}</span></div>
          <div className="flex justify-between border-t border-border pt-2 text-base font-bold"><span>Grand Total</span><span>₹{i.total.toLocaleString()}</span></div>
        </div>
      </div>
    </>
  );
}
