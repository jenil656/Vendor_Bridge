import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function EmailVerification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [verified, setVerified] = useState(false);
  const nav = useNavigate();

  const onChange = (i: number, v: string) => {
    if (!/^[0-9]?$/.test(v)) return;
    const c = [...code]; c[i] = v; setCode(c);
    if (v && i < 5) (document.getElementById(`otp-${i + 1}`) as HTMLInputElement)?.focus();
  };

  const verify = () => {
    if (code.join("").length !== 6) { toast.error("Enter the full 6-digit code"); return; }
    setVerified(true);
    toast.success("Email verified");
    setTimeout(() => nav("/profile-setup"), 900);
  };

  return (
    <AuthLayout title="Verify your email" subtitle="We sent a 6-digit code to your inbox">
      {verified ? (
        <div className="rounded-xl border border-success/30 bg-success-fill p-6 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
          <p className="mt-3 text-sm font-medium text-success">Verified successfully</p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex justify-between gap-2">
            {code.map((c, i) => (
              <Input key={i} id={`otp-${i}`} value={c} onChange={(e) => onChange(i, e.target.value)} maxLength={1} className="h-12 w-full text-center text-lg font-semibold" />
            ))}
          </div>
          <Button onClick={verify} className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Verify</Button>
          <p className="text-center text-xs text-muted-foreground">Didn't get the code? <button className="font-medium text-primary hover:underline">Resend</button></p>
          <div className="rounded-lg bg-warning-fill px-3 py-2 text-center text-xs text-warning">Pending verification — check your spam folder</div>
        </div>
      )}
    </AuthLayout>
  );
}
