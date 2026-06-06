import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { USERS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export default function UserManagement() {
  const cols: Column<typeof USERS[number]>[] = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name", sortable: true, render: (r) => <div><p className="font-medium">{r.name}</p><p className="text-xs text-muted-foreground">{r.email}</p></div> },
    { key: "role", header: "Role", sortable: true },
    { key: "department", header: "Department" },
    { key: "status", header: "Status", render: (r) => <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge> },
    { key: "lastLogin", header: "Last Login", sortable: true },
  ];
  return (
    <>
      <PageHeader
        title="User Management"
        description="Manage workspace users and role assignments"
        breadcrumbs={[{ label: "Users" }]}
        actions={<Button size="sm" onClick={() => toast.success("Invite sent")} className="bg-primary text-primary-foreground hover:bg-primary-dark"><Plus className="mr-1.5 h-4 w-4" /> Invite User</Button>}
      />
      <DataTable columns={cols} data={USERS} searchKeys={["name", "email", "role"]} />
    </>
  );
}
