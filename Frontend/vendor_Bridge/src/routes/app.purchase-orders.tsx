import { createFileRoute } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { purchaseOrders } from "@/lib/mock";

export const Route = createFileRoute("/app/purchase-orders")({
  component: () => (
    <DataPage title="Purchase Orders" description="Auto-generated POs across vendors." actionLabel="Generate PO"
      columns={["PO #", "Vendor", "RFQ", "Date", "Amount", "Status"]}
      rows={purchaseOrders} statusKey="status"
    />
  ),
});