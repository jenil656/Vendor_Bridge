import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function Settings() {
  return (
    <>
      <PageHeader title="Settings" description="System configuration, email, security and roles" breadcrumbs={[{ label: "Settings" }]} />
      <Tabs defaultValue="system">
        <TabsList>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="roles">Role Permissions</TabsTrigger>
        </TabsList>
        <TabsContent value="system">
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Settings saved"); }} className="grid gap-4 rounded-xl border border-border bg-card p-6 lg:grid-cols-2">
            <div className="space-y-1.5"><Label>Organization Name</Label><Input defaultValue="VendorBridge ERP Pvt Ltd" /></div>
            <div className="space-y-1.5"><Label>Currency</Label><Input defaultValue="INR (₹)" /></div>
            <div className="space-y-1.5"><Label>Default GST Rate (%)</Label><Input type="number" defaultValue={18} /></div>
            <div className="space-y-1.5"><Label>Fiscal Year Starts</Label><Input defaultValue="April" /></div>
            <div className="lg:col-span-2 flex justify-end"><Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">Save Settings</Button></div>
          </form>
        </TabsContent>
        <TabsContent value="email">
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Email settings saved"); }} className="grid gap-4 rounded-xl border border-border bg-card p-6 lg:grid-cols-2">
            <div className="space-y-1.5"><Label>SMTP Host</Label><Input defaultValue="smtp.vendorbridge.io" /></div>
            <div className="space-y-1.5"><Label>SMTP Port</Label><Input type="number" defaultValue={587} /></div>
            <div className="space-y-1.5"><Label>From Email</Label><Input type="email" defaultValue="no-reply@vendorbridge.io" /></div>
            <div className="space-y-1.5"><Label>Reply-to</Label><Input type="email" defaultValue="hello@vendorbridge.io" /></div>
            <div className="lg:col-span-2 flex justify-end"><Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">Save</Button></div>
          </form>
        </TabsContent>
        <TabsContent value="security" className="rounded-xl border border-border bg-card p-6">
          <ul className="space-y-3">
            {["Require 2FA for all admin users", "Force password rotation every 90 days", "Lockout after 5 failed attempts", "Restrict access to corporate IPs", "Enable audit log retention (365 days)"].map((n) => (
              <li key={n} className="flex items-center justify-between border-b border-border pb-3 last:border-0"><span className="text-sm">{n}</span><label className="relative inline-flex h-5 w-9 cursor-pointer"><input type="checkbox" defaultChecked className="peer sr-only" /><span className="h-full w-full rounded-full bg-border peer-checked:bg-primary transition" /><span className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4" /></label></li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="roles" className="rounded-xl border border-border bg-card p-6">
          <table className="w-full text-sm">
            <thead className="border-b border-border text-left text-xs uppercase text-muted-foreground"><tr><th className="py-2">Permission</th><th className="text-center">Admin</th><th className="text-center">Procurement</th><th className="text-center">Manager</th><th className="text-center">Vendor</th></tr></thead>
            <tbody>
              {[
                ["Manage users", true, false, false, false],
                ["Create RFQ", true, true, false, false],
                ["Submit Quotation", false, false, false, true],
                ["Approve Quotation", true, false, true, false],
                ["Generate PO", true, true, false, false],
                ["Generate Invoice", true, true, false, true],
                ["View Audit Logs", true, false, true, false],
              ].map((row) => (
                <tr key={row[0] as string} className="border-b border-border last:border-0">
                  <td className="py-2.5">{row[0]}</td>
                  {row.slice(1).map((v, i) => <td key={i} className="text-center">{v ? "✓" : "—"}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </>
  );
}
