import { PageHeader } from "@/components/common/PageHeader";
import { NOTIFICATIONS } from "@/lib/mockData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, FileText, CheckCircle2, Receipt, Building2 } from "lucide-react";

const ICONS: any = { rfq: FileText, approval: CheckCircle2, invoice: Receipt, po: Receipt, vendor: Building2 };

export default function Notifications() {
  return (
    <>
      <PageHeader title="Notifications" description="System alerts, approvals and updates" breadcrumbs={[{ label: "Notifications" }]} />
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="rfq">RFQ Alerts</TabsTrigger>
          <TabsTrigger value="approval">Approvals</TabsTrigger>
          <TabsTrigger value="invoice">Invoices</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="rounded-xl border border-border bg-card">
          <ul className="divide-y divide-border">
            {NOTIFICATIONS.map((n) => {
              const Icon = ICONS[n.type] ?? Bell;
              return (
                <li key={n.id} className="flex items-start gap-3 p-4">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full ${n.read ? "bg-muted text-muted-foreground" : "bg-primary-lightest text-primary"}`}><Icon className="h-4 w-4" /></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm ${n.read ? "" : "font-semibold"}`}>{n.title}</p>
                      <span className="text-xs text-muted-foreground">{n.time} ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{n.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </TabsContent>
        {["rfq", "approval", "invoice", "system"].map((t) => (
          <TabsContent key={t} value={t} className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">No new alerts in this category.</TabsContent>
        ))}
      </Tabs>
    </>
  );
}
