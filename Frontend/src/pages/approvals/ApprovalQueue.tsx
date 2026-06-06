import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { APPROVALS } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ApprovalQueue() {
  const nav = useNavigate();
  const cols: Column<typeof APPROVALS[number]>[] = [
    { key: "id", header: "ID", sortable: true },
    { key: "title", header: "Request", render: (r) => <div><p className="font-medium">{r.title}</p><p className="text-xs text-muted-foreground">{r.type}</p></div> },
    { key: "requestor", header: "Requestor" },
    { key: "value", header: "Value", sortable: true, render: (r) => r.value ? `₹${(r.value/100000).toFixed(1)}L` : "—" },
    { key: "priority", header: "Priority", render: (r) => <StatusBadge tone={statusTone(r.priority)}>{r.priority}</StatusBadge> },
    { key: "status", header: "Status", render: (r) => <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge> },
    { key: "submitted", header: "Submitted", sortable: true },
    { key: "actions", header: "", render: (r) => <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); nav(`/approvals/${r.id}`); }}>Review</Button> },
  ];
  return (
    <>
      <PageHeader title="Approvals Queue" description="Review and act on pending procurement approvals" breadcrumbs={[{ label: "Approvals" }]} />
      <DataTable columns={cols} data={APPROVALS} searchKeys={["id", "title", "requestor"]} onRowClick={(r) => nav(`/approvals/${r.id}`)} />
    </>
  );
}
