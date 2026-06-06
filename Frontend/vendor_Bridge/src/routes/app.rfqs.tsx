import { createFileRoute } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { StatusBadge } from "@/components/vb/StatusBadge";
import { rfqs } from "@/lib/mock";

export const Route = createFileRoute("/app/rfqs")({
  component: () => (
    <DataPage title="RFQ Management" description="Requests for quotation across vendors." actionLabel="Create RFQ"
      columns={["RFQ #", "Title", "Category", "Qty", "Deadline", "Vendors", "Quotations", "Status"]}
      rows={rfqs}
      renderRow={(r) => (
        <>
          <td className="px-4 py-3 font-medium text-[#2E5FA3]">{r.id}</td>
          <td className="px-4 py-3 font-medium">{r.title}</td>
          <td className="px-4 py-3 text-[#4B5568]">{r.category}</td>
          <td className="px-4 py-3">{r.qty}</td>
          <td className="px-4 py-3 text-[#4B5568]">{r.deadline}</td>
          <td className="px-4 py-3">{r.vendors}</td>
          <td className="px-4 py-3">{r.quotations}</td>
          <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
        </>
      )}
    />
  ),
});