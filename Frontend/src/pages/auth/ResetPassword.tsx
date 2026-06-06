import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function ResetPassword() {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);
  const nav = useNavigate();
  const strength = useMemo(() => {
    let s = 0;
    if (pw.length >= 8) s++; if (/[A-Z]/.test(pw)) s++; if (/[0-9]/.test(pw)) s++; if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  }, [pw]);
  const color = ["bg-destructive", "bg-destructive", "bg-warning", "bg-success", "bg-success"][strength];

  if (done) return (
    <AuthLayout title="Password updated" subtitle="You can now log in with your new password">
      <div className="rounded-xl border border-success/30 bg-success-fill p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
        <p className="mt-3 text-sm font-medium text-success">Password updated successfully</p>
        <Button onClick={() => nav("/login")} className="mt-5 bg-primary text-primary-foreground hover:bg-primary-dark">Go to Login</Button>
      </div>
    </AuthLayout>
  );

  return (
    <AuthLayout title="Reset password" subtitle="Choose a strong new password">
      <form onSubmit={(e) => { e.preventDefault(); if (pw !== confirm) return toast.error("Passwords don't match"); if (strength < 3) return toast.error("Stronger password required"); setDone(true); }} className="space-y-4">
        <div className="space-y-1.5">
          <Label>New Password</Label>
          <Input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required minLength={8} />
          <div className="flex h-1.5 gap-1 overflow-hidden rounded-full bg-muted">
            {[0,1,2,3].map((i) => <div key={i} className={cn("flex-1", i < strength ? color : "bg-transparent")} />)}
          </div>
        </div>
        <div className="space-y-1.5"><Label>Confirm Password</Label><Input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required /></div>
        <div className="flex items-start gap-2 rounded-lg bg-primary-lightest p-3 text-xs text-primary-dark">
          <ShieldCheck className="mt-0.5 h-4 w-4" /> Use 8+ characters with uppercase, numbers and symbols.
        </div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Update Password</Button>
      </form>
    </AuthLayout>
  );
}
