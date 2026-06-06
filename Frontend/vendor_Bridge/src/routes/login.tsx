import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, inputCls } from "@/components/vb/AuthShell";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — VendorBridge" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <AuthShell title="Welcome back" subtitle="Sign in to your VendorBridge account.">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Signed in"); navigate({ to: "/app/dashboard" }); }}>
        <Field label="Email or Username"><input className={inputCls} type="text" defaultValue="alex@vendorbridge.io" /></Field>
        <Field label="Password">
          <div className="relative">
            <input className={inputCls + " pr-10"} type={show ? "text" : "password"} defaultValue="••••••••" />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#4B5568]">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </Field>
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-[#4B5568]"><input type="checkbox" className="h-3.5 w-3.5 rounded border-[#E2E8F0]" /> Remember me</label>
          <Link to="/forgot-password" className="font-medium text-[#2E5FA3] hover:underline">Forgot password?</Link>
        </div>
        <button className="h-10 w-full rounded-lg bg-[#2E5FA3] text-sm font-medium text-white hover:bg-[#1B2D55]">Login</button>
        <div className="relative my-4 text-center text-xs text-[#4B5568]">
          <span className="bg-white px-2">or continue with</span>
          <div className="absolute left-0 right-0 top-1/2 -z-10 h-px bg-[#E2E8F0]" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className="h-10 rounded-lg border border-[#E2E8F0] text-sm font-medium text-[#1A202C] hover:bg-[#F7F8FA]">Google</button>
          <button type="button" className="h-10 rounded-lg border border-[#E2E8F0] text-sm font-medium text-[#1A202C] hover:bg-[#F7F8FA]">Microsoft</button>
        </div>
        <p className="text-center text-xs text-[#4B5568]">
          Don't have an account? <Link to="/register" className="font-medium text-[#2E5FA3] hover:underline">Create one</Link>
        </p>
      </form>
    </AuthShell>
  );
}