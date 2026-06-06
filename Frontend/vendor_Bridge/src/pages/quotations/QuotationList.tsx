import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { QUOTATIONS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GitCompare } from "lucide-react";

export default function QuotationList() {
  const cols: Column<typeof QUOTATIONS[number]>[] = [
    { key: "id", header: "Quote #", sortable: true },
    { key: "rfq", header: "RFQ" },
    { key: "vendor", header: "Vendor", sortable: true },
    { key: "unitPrice", header: "Unit Price", sortable: true, render: (r) => `₹${r.unitPrice}` },
    { key: "total", header: "Total", sortable: true, render: (r) => `₹${(r.total/100000).toFixed(1)}L` },
    { key: "delivery", header: "Delivery", render: (r) => `${r.delivery}d` },
    { key: "rating", header: "Rating", sortable: true },
    { key: "status", header: "Status", render: (r) => <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge> },
  ];
  return (
    <>
      <PageHeader
        title="Quotations"
        description="Submitted vendor quotations"
        breadcrumbs={[{ label: "Quotations" }]}
        actions={<Link to="/quotations/comparison"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark"><GitCompare className="mr-1.5 h-4 w-4" /> Compare</Button></Link>}
      />
      <DataTable columns={cols} data={QUOTATIONS} searchKeys={["id", "rfq", "vendor"]} />
    </>
  );
}
