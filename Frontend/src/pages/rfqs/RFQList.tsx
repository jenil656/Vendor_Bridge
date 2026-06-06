import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { RFQS } from "@/lib/mockData";
import { Plus, Download } from "lucide-react";

export default function RFQList() {
  const nav = useNavigate();
  const cols: Column<typeof RFQS[number]>[] = [
    { key: "id", header: "RFQ #", sortable: true },
    { key: "title", header: "Title", render: (r) => <div><p className="font-medium">{r.title}</p><p className="text-xs text-muted-foreground">{r.qty} {r.unit}</p></div> },
    { key: "value", header: "Est. Value", sortable: true, render: (r) => `₹${(r.value/100000).toFixed(1)}L` },
    { key: "vendors", header: "Vendors", render: (r) => `${r.responses}/${r.vendors}` },
    { key: "deadline", header: "Deadline", sortable: true },
    { key: "status", header: "Status", render: (r) => <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge> },
  ];
  return (
    <>
      <PageHeader
        title="RFQs"
        description="Request for Quotation pipeline"
        breadcrumbs={[{ label: "RFQs" }]}
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Link to="/rfqs/create"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark"><Plus className="mr-1.5 h-4 w-4" /> Create RFQ</Button></Link>
          </>
        }
      />
      <DataTable columns={cols} data={RFQS} searchKeys={["id", "title", "status"]} onRowClick={(r) => nav(`/rfqs/${r.id}`)} />
    </>
  );
}
