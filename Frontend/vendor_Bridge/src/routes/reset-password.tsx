import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, inputCls } from "@/components/vb/AuthShell";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Reset Password — VendorBridge" }] }),
  component: ResetPage,
});

function ResetPage() {
  const [pwd, setPwd] = useState("");
  const [c, setC] = useState("");
  const navigate = useNavigate();
  return (
    <AuthShell title="Set a new password" subtitle="Use 8+ characters with letters, numbers and a symbol.">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Password updated"); navigate({ to: "/login" }); }}>
        <Field label="New Password"><input className={inputCls} type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} /></Field>
        <Field label="Confirm Password"><input className={inputCls} type="password" value={c} onChange={(e) => setC(e.target.value)} /></Field>
        {c && c !== pwd && <div className="text-xs text-[#D63F3F]">Passwords don't match</div>}
        <ul className="space-y-1 rounded-lg bg-[#F7F8FA] p-3 text-xs text-[#4B5568]">
          <li>• At least 8 characters</li>
          <li>• Mix of uppercase, lowercase and numbers</li>
          <li>• Avoid reusing previous passwords</li>
        </ul>
        <button className="h-10 w-full rounded-lg bg-[#2E5FA3] text-sm font-medium text-white hover:bg-[#1B2D55]">Update Password</button>
      </form>
    </AuthShell>
  );
}