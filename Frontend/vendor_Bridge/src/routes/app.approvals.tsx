import { createFileRoute } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { StatusBadge } from "@/components/vb/StatusBadge";
import { approvals } from "@/lib/mock";

export const Route = createFileRoute("/app/approvals")({
  component: () => (
    <DataPage title="Approvals" description="Workflow queue for procurement approvals." actionLabel="New Request"
      columns={["ID", "Reference", "Title", "Requester", "Value", "Date", "Status", ""]}
      rows={approvals}
      renderRow={(a) => (
        <>
          <td className="px-4 py-3 font-medium text-[#2E5FA3]">{a.id}</td>
          <td className="px-4 py-3">{a.reference}</td>
          <td className="px-4 py-3 font-medium">{a.title}</td>
          <td className="px-4 py-3 text-[#4B5568]">{a.requester}</td>
          <td className="px-4 py-3">{a.value}</td>
          <td className="px-4 py-3 text-[#4B5568]">{a.date}</td>
          <td className="px-4 py-3"><StatusBadge status={a.status} /></td>
          <td className="px-4 py-3 text-right">
            {a.status === "Pending" && (
              <div className="flex justify-end gap-1">
                <button className="rounded bg-[#E6F5EE] px-2 py-1 text-[10px] font-medium text-[#2D9A58]">Approve</button>
                <button className="rounded bg-[#FEF2F2] px-2 py-1 text-[10px] font-medium text-[#D63F3F]">Reject</button>
              </div>
            )}
          </td>
        </>
      )}
    />
  ),
});