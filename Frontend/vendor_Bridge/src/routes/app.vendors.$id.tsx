import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { StatusBadge } from "@/components/vb/StatusBadge";
import { vendors } from "@/lib/mock";

export const Route = createFileRoute("/app/vendors/$id")({
  component: () => {
    const { id } = Route.useParams();
    const v = vendors.find((x) => x.id === id) ?? vendors[0];
    return (
      <>
        <PageHeader title={v.name} description={`${v.id} · ${v.category}`} actions={<Link to="/app/vendors" className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium hover:bg-[#F7F8FA]">Back</Link>} />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold">Vendor Information</h3>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              {[["GST", v.gst], ["Contact", v.contact], ["Email", v.email], ["Phone", v.phone], ["Category", v.category], ["Procurement Volume", v.volume]].map(([k, val]) => (
                <div key={k}><dt className="text-xs text-[#4B5568]">{k}</dt><dd className="mt-0.5 font-medium text-[#1A202C]">{val}</dd></div>
              ))}
              <div><dt className="text-xs text-[#4B5568]">Status</dt><dd className="mt-1"><StatusBadge status={v.status} /></dd></div>
            </dl>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
            <h3 className="mb-4 text-sm font-semibold">Performance</h3>
            {[["Delivery", v.delivery], ["Quality", v.quality], ["Response", v.response], ["Compliance", v.compliance]].map(([k, val]) => (
              <div key={k as string} className="mb-3">
                <div className="flex justify-between text-xs"><span className="text-[#4B5568]">{k}</span><span className="font-medium">{val}%</span></div>
                <div className="mt-1 h-1.5 rounded-full bg-[#F7F8FA]"><div className="h-1.5 rounded-full bg-[#2E5FA3]" style={{ width: `${val}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  },
});