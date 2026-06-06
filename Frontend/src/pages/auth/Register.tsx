import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    fullName: "", email: "", mobile: "",
    company: "", companyType: "", gst: "", category: "",
    username: "", password: "", confirm: "",
    role: "vendor", terms: false, privacy: false,
  });
  const set = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const strength = useMemo(() => {
    const p = form.password;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  }, [form.password]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.terms || !form.privacy) { toast.error("Accept terms and privacy policy"); return; }
    if (form.password !== form.confirm) { toast.error("Passwords do not match"); return; }
    if (strength < 3) { toast.error("Choose a stronger password"); return; }
    toast.success("Account created — verify your email");
    nav("/verify-email");
  };

  const strLabel = ["Too weak", "Weak", "Fair", "Strong", "Very strong"][strength];
  const strColor = ["bg-destructive", "bg-destructive", "bg-warning", "bg-success", "bg-success"][strength];

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join VendorBridge to streamline procurement end-to-end"
      footer={<>Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Log in</Link></>}
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <section className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Personal Information</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5"><Label>Full Name</Label><Input required value={form.fullName} onChange={(e) => set("fullName", e.target.value)} /></div>
            <div className="space-y-1.5"><Label>Email Address</Label><Input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
            <div className="space-y-1.5 sm:col-span-2"><Label>Mobile Number</Label><Input type="tel" pattern="[0-9+ ]{8,15}" required value={form.mobile} onChange={(e) => set("mobile", e.target.value)} placeholder="+91 98xxxxxxxx" /></div>
          </div>
        </section>

        <section className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Organization</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5"><Label>Company Name</Label><Input required value={form.company} onChange={(e) => set("company", e.target.value)} /></div>
            <div className="space-y-1.5">
              <Label>Company Type</Label>
              <Select value={form.companyType} onValueChange={(v) => set("companyType", v)}>
                <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="pvtltd">Private Limited</SelectItem>
                  <SelectItem value="public">Public Limited</SelectItem>
                  <SelectItem value="llp">LLP</SelectItem>
                  <SelectItem value="prop">Proprietorship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5"><Label>GST Number</Label><Input pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{3}" value={form.gst} onChange={(e) => set("gst", e.target.value.toUpperCase())} placeholder="22AAAAA0000A1Z5" /></div>
            <div className="space-y-1.5">
              <Label>Business Category</Label>
              <Select value={form.category} onValueChange={(v) => set("category", v)}>
                <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                <SelectContent>
                  {["IT Services", "Raw Materials", "Logistics", "Hardware", "Chemicals", "Packaging", "Office Supplies"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Account</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5"><Label>Username</Label><Input required value={form.username} onChange={(e) => set("username", e.target.value)} /></div>
            <div className="space-y-1.5">
              <Label>Role</Label>
              <Select value={form.role} onValueChange={(v) => set("role", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="procurement">Procurement Officer</SelectItem>
                  <SelectItem value="manager">Manager / Approver</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Password</Label>
              <Input type="password" required minLength={8} value={form.password} onChange={(e) => set("password", e.target.value)} />
              {form.password && (
                <div className="space-y-1">
                  <div className="flex h-1.5 gap-1 overflow-hidden rounded-full bg-muted">
                    {[0,1,2,3].map((i) => <div key={i} className={cn("flex-1", i < strength ? strColor : "bg-transparent")} />)}
                  </div>
                  <p className="text-xs text-muted-foreground">Strength: {strLabel}</p>
                </div>
              )}
            </div>
            <div className="space-y-1.5"><Label>Confirm Password</Label><Input type="password" required value={form.confirm} onChange={(e) => set("confirm", e.target.value)} />
              {form.confirm && form.confirm !== form.password && <p className="text-xs text-destructive">Passwords do not match</p>}
            </div>
          </div>
        </section>

        <div className="space-y-2 text-sm">
          <label className="flex items-start gap-2"><input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" checked={form.terms} onChange={(e) => set("terms", e.target.checked)} /> I accept the <a className="text-primary hover:underline">Terms & Conditions</a></label>
          <label className="flex items-start gap-2"><input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" checked={form.privacy} onChange={(e) => set("privacy", e.target.checked)} /> I agree to the <a className="text-primary hover:underline">Privacy Policy</a></label>
        </div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Create Account</Button>
      </form>
    </AuthLayout>
  );
}
