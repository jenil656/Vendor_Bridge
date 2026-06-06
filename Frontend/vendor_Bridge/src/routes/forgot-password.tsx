import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, inputCls } from "@/components/vb/AuthShell";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Forgot Password — VendorBridge" }] }),
  component: ForgotPage,
});

function ForgotPage() {
  const navigate = useNavigate();
  return (
    <AuthShell title="Forgot your password?" subtitle="Enter your email and we'll send a reset link.">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Reset link sent"); navigate({ to: "/reset-password" }); }}>
        <Field label="Email Address"><input className={inputCls} type="email" required /></Field>
        <button className="h-10 w-full rounded-lg bg-[#2E5FA3] text-sm font-medium text-white hover:bg-[#1B2D55]">Send Reset Link</button>
        <p className="text-center text-xs text-[#4B5568]">
          Remembered? <Link to="/login" className="font-medium text-[#2E5FA3] hover:underline">Back to login</Link>
        </p>
      </form>
    </AuthShell>
  );
}