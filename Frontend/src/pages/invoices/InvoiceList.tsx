import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { INVOICES } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export default function InvoiceList() {
  const nav = useNavigate();
  const cols: Column<typeof INVOICES[number]>[] = [
    { key: "id", header: "Invoice #", sortable: true },
    { key: "po", header: "PO" },
    { key: "vendor", header: "Vendor", sortable: true },
    { key: "amount", header: "Amount", render: (r) => `₹${(r.amount/100000).toFixed(1)}L` },
    { key: "tax", header: "GST", render: (r) => `₹${(r.tax/100000).toFixed(2)}L` },
    { key: "total", header: "Total", sortable: true, render: (r) => `₹${(r.total/100000).toFixed(1)}L` },
    { key: "due", header: "Due", sortable: true },
    { key: "status", header: "Status", render: (r) => <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge> },
  ];
  return (
    <>
      <PageHeader
        title="Invoices"
        description="GST-compliant invoices with payment status"
        breadcrumbs={[{ label: "Invoices" }]}
        actions={<Button size="sm" onClick={() => toast.success("INV-2026-0419 generated")} className="bg-primary text-primary-foreground hover:bg-primary-dark"><Plus className="mr-1.5 h-4 w-4" /> Generate Invoice</Button>}
      />
      <DataTable columns={cols} data={INVOICES} searchKeys={["id", "vendor", "po"]} onRowClick={(r) => nav(`/invoices/${r.id}`)} />
    </>
  );
}
