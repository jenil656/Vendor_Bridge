import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { Truck, CheckCircle2, Package, MapPin } from "lucide-react";
import { purchaseOrders } from "@/lib/mock";
export const Route = createFileRoute("/app/delivery")({
  component: () => {
    const steps = [{i:Package,l:"Ordered"},{i:Truck,l:"Dispatched"},{i:MapPin,l:"In Transit"},{i:CheckCircle2,l:"Delivered"}];
    return (
      <>
        <PageHeader title="Delivery Tracking" description="Shipment status across active purchase orders." />
        <div className="space-y-4">
          {purchaseOrders.slice(0,4).map((p,idx)=>{
            const active = (idx+1)%4 || 4;
            return (
              <div key={p.id} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
                <div className="flex items-center justify-between"><div><div className="text-sm font-semibold">{p.id} · {p.vendor}</div><div className="text-xs text-[#4B5568]">Expected delivery: 2026-06-18</div></div><div className="text-sm font-medium">{p.amount}</div></div>
                <div className="mt-5 flex items-center justify-between">
                  {steps.map((s,i)=>(
                    <div key={s.l} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center">
                        <div className={"flex h-8 w-8 items-center justify-center rounded-full "+(i<active?"bg-[#2E5FA3] text-white":"bg-[#F7F8FA] text-[#4B5568]")}><s.i className="h-4 w-4" /></div>
                        <div className="mt-2 text-xs font-medium">{s.l}</div>
                      </div>
                      {i<steps.length-1 && <div className={"mx-2 h-0.5 flex-1 "+(i<active-1?"bg-[#2E5FA3]":"bg-[#E2E8F0]")} />}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  },
});
