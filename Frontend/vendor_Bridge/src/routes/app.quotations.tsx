import { createFileRoute } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { StatusBadge } from "@/components/vb/StatusBadge";
import { quotations } from "@/lib/mock";

export const Route = createFileRoute("/app/quotations")({
  component: () => (
    <DataPage title="Quotations" description="Vendor quotation submissions." actionLabel="Submit Quotation"
      columns={["Quote #", "RFQ", "Vendor", "Unit Price", "Total", "Delivery", "Rating", "Status"]}
      rows={quotations}
      renderRow={(q) => (
        <>
          <td className="px-4 py-3 font-medium text-[#2E5FA3]">{q.id}</td>
          <td className="px-4 py-3">{q.rfq}</td>
          <td className="px-4 py-3 font-medium">{q.vendor}</td>
          <td className="px-4 py-3">₹ {q.unitPrice.toLocaleString("en-IN")}</td>
          <td className="px-4 py-3 font-medium">₹ {q.total.toLocaleString("en-IN")}</td>
          <td className="px-4 py-3 text-[#4B5568]">{q.delivery}</td>
          <td className="px-4 py-3">⭐ {q.rating}</td>
          <td className="px-4 py-3"><StatusBadge status={q.status} /></td>
        </>
      )}
    />
  ),
});