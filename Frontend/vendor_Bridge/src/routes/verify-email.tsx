import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/vb/AuthShell";
import { useRef } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/verify-email")({
  head: () => ({ meta: [{ title: "Verify Email — VendorBridge" }] }),
  component: VerifyPage,
});

function VerifyPage() {
  const navigate = useNavigate();
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  return (
    <AuthShell title="Verify your email" subtitle="We sent a 6-digit code to your inbox.">
      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); toast.success("Email verified"); navigate({ to: "/profile-setup" }); }}>
        <div className="flex justify-between gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              maxLength={1}
              className="h-12 w-12 rounded-lg border border-[#E2E8F0] text-center text-lg font-semibold outline-none focus:border-[#2E5FA3]"
              onChange={(e) => { if (e.target.value && i < 5) refs.current[i + 1]?.focus(); }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="inline-flex items-center rounded-full bg-[#FFF7E6] px-2 py-0.5 font-medium text-[#E09B2E]">Pending verification</span>
          <button type="button" className="font-medium text-[#2E5FA3] hover:underline" onClick={() => toast("Code resent")}>Resend code</button>
        </div>
        <button className="h-10 w-full rounded-lg bg-[#2E5FA3] text-sm font-medium text-white hover:bg-[#1B2D55]">Verify</button>
      </form>
    </AuthShell>
  );
}