import { createFileRoute, Link } from "@tanstack/react-router";
import { DataPage } from "@/components/vb/DataPage";
import { StatusBadge } from "@/components/vb/StatusBadge";
import { vendors } from "@/lib/mock";

export const Route = createFileRoute("/app/vendors")({
  head: () => ({ meta: [{ title: "Vendors — VendorBridge" }] }),
  component: () => (
    <DataPage
      title="Vendor Management"
      description="Manage suppliers, performance and compliance."
      actionLabel="Add Vendor"
      columns={["Vendor ID", "Company", "Category", "Contact", "GST", "Delivery", "Status", ""]}
      rows={vendors}
      renderRow={(v) => (
        <>
          <td className="px-4 py-3 font-medium text-[#2E5FA3]">{v.id}</td>
          <td className="px-4 py-3 font-medium">{v.name}</td>
          <td className="px-4 py-3 text-[#4B5568]">{v.category}</td>
          <td className="px-4 py-3 text-[#4B5568]">{v.contact}</td>
          <td className="px-4 py-3 text-[#4B5568]">{v.gst}</td>
          <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="h-1.5 w-16 rounded-full bg-[#F7F8FA]"><div className="h-1.5 rounded-full bg-[#2D9A58]" style={{ width: `${v.delivery}%` }} /></div><span className="text-xs">{v.delivery}%</span></div></td>
          <td className="px-4 py-3"><StatusBadge status={v.status} /></td>
          <td className="px-4 py-3 text-right"><Link to="/app/vendors/$id" params={{ id: v.id }} className="text-xs font-medium text-[#2E5FA3]">View</Link></td>
        </>
      )}
    />
  ),
});