import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, inputCls } from "@/components/vb/AuthShell";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create Account — VendorBridge" }] }),
  component: RegisterPage,
});

function strength(p: string) {
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p)) s++;
  if (/[0-9]/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return s;
}

function RegisterPage() {
  const [role, setRole] = useState<"vendor" | "procurement" | "manager">("vendor");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const s = strength(pwd);
  const labels = ["Too weak", "Weak", "Fair", "Good", "Strong"];
  const colors = ["#E2E8F0", "#D63F3F", "#E09B2E", "#7A9CC8", "#2D9A58"];
  return (
    <AuthShell title="Create your account" subtitle="Get your team onto VendorBridge in minutes.">
      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); toast.success("Account created"); navigate({ to: "/verify-email" }); }}>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4B5568]">Personal Information</div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <Field label="Full Name"><input className={inputCls} required /></Field>
            <Field label="Email Address"><input className={inputCls} type="email" required /></Field>
            <Field label="Mobile Number" hint="10 digit, with country code"><input className={inputCls} type="tel" required /></Field>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4B5568]">Organization</div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <Field label="Company Name"><input className={inputCls} required /></Field>
            <Field label="Company Type">
              <select className={inputCls}>
                <option>Private Limited</option><option>LLP</option><option>Partnership</option><option>Proprietorship</option><option>Public</option>
              </select>
            </Field>
            <Field label="GST Number" hint="15-character GSTIN"><input className={inputCls} pattern=".{15,15}" maxLength={15} /></Field>
            <Field label="Business Category">
              <select className={inputCls}>
                <option>IT Services</option><option>Industrial</option><option>Office Supplies</option><option>Logistics</option><option>Pharma</option><option>Packaging</option>
              </select>
            </Field>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4B5568]">Account</div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <Field label="Username"><input className={inputCls} required /></Field>
            <Field label="Role">
              <select className={inputCls} value={role} onChange={(e) => setRole(e.target.value as never)}>
                <option value="vendor">Vendor</option>
                <option value="procurement">Procurement Officer</option>
                <option value="manager">Manager / Approver</option>
              </select>
            </Field>
            <Field label="Password">
              <input className={inputCls} type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
              <div className="mt-1.5 flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-1 flex-1 rounded" style={{ background: i < s ? colors[s] : "#E2E8F0" }} />
                ))}
              </div>
              <div className="mt-1 text-[10px]" style={{ color: colors[s] }}>{labels[s]}</div>
            </Field>
            <Field label="Confirm Password">
              <input className={inputCls} type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
              {confirm && confirm !== pwd && <div className="mt-1 text-[10px] text-[#D63F3F]">Passwords don't match</div>}
            </Field>
          </div>
        </div>

        <div className="space-y-2 text-xs text-[#4B5568]">
          <label className="flex items-start gap-2"><input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded border-[#E2E8F0]" /> I agree to the <a className="text-[#2E5FA3] hover:underline" href="#">Terms & Conditions</a></label>
          <label className="flex items-start gap-2"><input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded border-[#E2E8F0]" /> I accept the <a className="text-[#2E5FA3] hover:underline" href="#">Privacy Policy</a></label>
        </div>

        <button className="h-10 w-full rounded-lg bg-[#2E5FA3] text-sm font-medium text-white hover:bg-[#1B2D55]">Create Account</button>
        <p className="text-center text-xs text-[#4B5568]">
          Already have an account? <Link to="/login" className="font-medium text-[#2E5FA3] hover:underline">Login instead</Link>
        </p>
      </form>
    </AuthShell>
  );
}