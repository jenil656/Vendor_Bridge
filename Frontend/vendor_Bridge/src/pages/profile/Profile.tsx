import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { ROLE_LABELS } from "@/lib/roles";
import { toast } from "sonner";

export default function Profile() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <>
      <PageHeader title="My Profile" description="Manage your personal account and preferences" breadcrumbs={[{ label: "Profile" }]} />
      <Tabs defaultValue="info">
        <TabsList>
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="pw">Change Password</TabsTrigger>
          <TabsTrigger value="notif">Notification Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Profile updated"); }} className="grid gap-4 rounded-xl border border-border bg-card p-6 lg:grid-cols-2">
            <div className="space-y-1.5"><Label>Full Name</Label><Input defaultValue={user.name} /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input type="email" defaultValue={user.email} /></div>
            <div className="space-y-1.5"><Label>Role</Label><Input value={ROLE_LABELS[user.role]} disabled /></div>
            <div className="space-y-1.5"><Label>Company</Label><Input defaultValue={user.company ?? "VendorBridge"} /></div>
            <div className="lg:col-span-2 flex justify-end"><Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">Save Changes</Button></div>
          </form>
        </TabsContent>
        <TabsContent value="pw">
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Password changed"); }} className="grid gap-4 rounded-xl border border-border bg-card p-6">
            <div className="space-y-1.5"><Label>Current Password</Label><Input type="password" /></div>
            <div className="space-y-1.5"><Label>New Password</Label><Input type="password" /></div>
            <div className="space-y-1.5"><Label>Confirm New Password</Label><Input type="password" /></div>
            <div className="flex justify-end"><Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">Update Password</Button></div>
          </form>
        </TabsContent>
        <TabsContent value="notif" className="rounded-xl border border-border bg-card p-6">
          <ul className="space-y-3">
            {["Email notifications for RFQ updates", "Email notifications for approvals", "Email notifications for invoice events", "Daily digest", "Weekly procurement summary"].map((n) => (
              <li key={n} className="flex items-center justify-between border-b border-border pb-3 last:border-0"><span className="text-sm">{n}</span><label className="relative inline-flex h-5 w-9 cursor-pointer"><input type="checkbox" defaultChecked className="peer sr-only" /><span className="h-full w-full rounded-full bg-border peer-checked:bg-primary transition" /><span className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4" /></label></li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </>
  );
}
