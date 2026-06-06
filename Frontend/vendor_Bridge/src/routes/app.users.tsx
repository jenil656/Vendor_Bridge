import { createFileRoute } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { users } from "@/lib/mock";
export const Route = createFileRoute("/app/users")({
  component: () => (
    <DataPage title="User Management" description="Manage users, roles and permissions." actionLabel="Invite User"
      columns={["User ID","Name","Email","Role","Department","Status"]} rows={users} statusKey="status" />
  ),
});
