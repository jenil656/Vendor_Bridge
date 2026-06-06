import { createFileRoute } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { auditLogs } from "@/lib/mock";
export const Route = createFileRoute("/app/audit")({
  component: () => (
    <DataPage title="Audit Logs" description="Immutable system audit trail." actionLabel="Export"
      columns={["Time","User","Entity","Entity ID","Action","IP"]} rows={auditLogs} />
  ),
});
