import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { PURCHASE_ORDERS } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export default function PurchaseOrderList() {
  const nav = useNavigate();
  const cols: Column<typeof PURCHASE_ORDERS[number]>[] = [
    { key: "id", header: "PO #", sortable: true },
    { key: "vendor", header: "Vendor", sortable: true },
    { key: "items", header: "Items" },
    { key: "value", header: "Value", sortable: true, render: (r) => `₹${(r.value/100000).toFixed(1)}L` },
    { key: "status", header: "Status", render: (r) => <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge> },
    { key: "created", header: "Created", sortable: true },
    { key: "expected", header: "Expected" },
  ];
  return (
    <>
      <PageHeader
        title="Purchase Orders"
        description="Auto-numbered POs with full audit trail"
        breadcrumbs={[{ label: "Purchase Orders" }]}
        actions={<Button size="sm" onClick={() => toast.success("PO-2026-0419 generated")} className="bg-primary text-primary-foreground hover:bg-primary-dark"><Plus className="mr-1.5 h-4 w-4" /> Generate PO</Button>}
      />
      <DataTable columns={cols} data={PURCHASE_ORDERS} searchKeys={["id", "vendor"]} onRowClick={(r) => nav(`/purchase-orders/${r.id}`)} />
    </>
  );
}
