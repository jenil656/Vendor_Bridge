import { createFileRoute } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { invoices } from "@/lib/mock";
export const Route = createFileRoute("/app/invoices")({
  component: () => (
    <DataPage title="Invoices" description="GST-ready invoices with payment status." actionLabel="Generate Invoice"
      columns={["Invoice #", "PO", "Vendor", "Date", "Amount", "GST", "Total", "Status"]}
      rows={invoices} statusKey="status" />
  ),
});