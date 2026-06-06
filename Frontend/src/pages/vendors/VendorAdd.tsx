import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function VendorAdd() {
  const nav = useNavigate();
  return (
    <>
      <PageHeader title="Add Vendor" description="Onboard a new vendor to your master list" breadcrumbs={[{ label: "Vendors", to: "/vendors" }, { label: "Add" }]} />
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Vendor added"); nav("/vendors"); }} className="space-y-6 rounded-xl border border-border bg-card p-6">
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Company Information</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1.5"><Label>Company Name</Label><Input required /></div>
            <div className="space-y-1.5"><Label>GST Number</Label><Input required /></div>
            <div className="space-y-1.5 md:col-span-2"><Label>Address</Label><Textarea rows={2} /></div>
            <div className="space-y-1.5">
              <Label>Category</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                <SelectContent>
                  {["Raw Materials", "Logistics", "Electronics", "Packaging", "Hardware", "IT Services", "Office Supplies", "Chemicals"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select defaultValue="Active">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="Active">Active</SelectItem><SelectItem value="Suspended">Suspended</SelectItem><SelectItem value="Blacklisted">Blacklisted</SelectItem></SelectContent>
              </Select>
            </div>
          </div>
        </section>
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="space-y-1.5"><Label>Contact Person</Label><Input required /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input type="email" required /></div>
            <div className="space-y-1.5"><Label>Phone</Label><Input type="tel" required /></div>
          </div>
        </section>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => nav(-1)}>Cancel</Button>
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">Save Vendor</Button>
        </div>
      </form>
    </>
  );
}
