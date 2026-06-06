import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { DELIVERY_TIMELINE, PURCHASE_ORDERS } from "@/lib/mockData";
import { Truck, Package, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DeliveryTracking() {
  return (
    <>
      <PageHeader title="Delivery Tracking" description="Real-time shipment status across active POs" breadcrumbs={[{ label: "Delivery Tracking" }]} />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Shipment PO-2026-0418</h3>
              <p className="text-xs text-muted-foreground">SteelCo Industries · Steel sheets 1200kg</p>
            </div>
            <StatusBadge tone="warning">In Transit</StatusBadge>
          </div>
          <ol className="mt-6 space-y-6">
            {DELIVERY_TIMELINE.map((t, i, arr) => (
              <li key={t.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={cn("flex h-9 w-9 items-center justify-center rounded-full", t.done ? "bg-success text-white" : "bg-muted text-muted-foreground")}>
                    {t.step === "Ordered" && <Package className="h-4 w-4" />}
                    {t.step === "Dispatched" && <Truck className="h-4 w-4" />}
                    {t.step === "In Transit" && <MapPin className="h-4 w-4" />}
                    {t.step === "Delivered" && <CheckCircle2 className="h-4 w-4" />}
                  </div>
                  {i < arr.length - 1 && <div className={cn("mt-1 h-12 w-px", t.done ? "bg-success" : "bg-border")} />}
                </div>
                <div>
                  <p className="font-medium">{t.step}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                  <p className="mt-1 text-sm text-foreground">{t.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">Expected Delivery</h3>
            <p className="mt-2 text-2xl font-bold text-primary">2026-06-17</p>
            <p className="text-xs text-muted-foreground">12 days from order</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">Other Active Shipments</h3>
            <ul className="mt-3 space-y-2">
              {PURCHASE_ORDERS.slice(0, 4).map((p) => (
                <li key={p.id} className="rounded-lg border border-border p-2.5">
                  <p className="text-sm font-medium">{p.id}</p>
                  <div className="mt-1 flex items-center justify-between"><p className="text-xs text-muted-foreground">{p.vendor}</p><StatusBadge tone={p.status === "Delivered" ? "success" : "warning"}>{p.status}</StatusBadge></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
