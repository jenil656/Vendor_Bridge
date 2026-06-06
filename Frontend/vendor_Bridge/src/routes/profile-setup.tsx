import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, inputCls } from "@/components/vb/AuthShell";
import { Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/profile-setup")({
  head: () => ({ meta: [{ title: "Profile Setup — VendorBridge" }] }),
  component: SetupPage,
});

function SetupPage() {
  const [type, setType] = useState<"vendor" | "employee">("vendor");
  const navigate = useNavigate();
  return (
    <AuthShell title="Complete your profile" subtitle="A few details and you're ready to go.">
      <div className="mb-5 inline-flex rounded-lg border border-[#E2E8F0] p-0.5">
        {(["vendor", "employee"] as const).map((t) => (
          <button key={t} onClick={() => setType(t)} className={`rounded px-3 py-1.5 text-xs font-medium capitalize ${type === t ? "bg-[#2E5FA3] text-white" : "text-[#4B5568]"}`}>{t}</button>
        ))}
      </div>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Profile complete"); navigate({ to: "/app/dashboard" }); }}>
        {type === "vendor" ? (
          <>
            <UploadBox label="Company Logo" />
            <Field label="Company Description"><textarea className={inputCls + " h-24 py-2"} /></Field>
            <Field label="Company Address"><textarea className={inputCls + " h-20 py-2"} /></Field>
            <Field label="Contact Person"><input className={inputCls} /></Field>
            <UploadBox label="GST Certificate (PDF)" />
            <UploadBox label="Business Certifications (PDF)" />
          </>
        ) : (
          <>
            <UploadBox label="Profile Picture" />
            <Field label="Department"><input className={inputCls} placeholder="e.g. Finance" /></Field>
            <Field label="Designation"><input className={inputCls} placeholder="e.g. Senior Manager" /></Field>
          </>
        )}
        <div className="flex gap-2">
          <button type="button" onClick={() => navigate({ to: "/app/dashboard" })} className="h-10 flex-1 rounded-lg border border-[#E2E8F0] text-sm font-medium text-[#1A202C] hover:bg-[#F7F8FA]">Skip for now</button>
          <button className="h-10 flex-1 rounded-lg bg-[#2E5FA3] text-sm font-medium text-white hover:bg-[#1B2D55]">Complete Setup</button>
        </div>
      </form>
    </AuthShell>
  );
}

function UploadBox({ label }: { label: string }) {
  return (
    <div>
      <span className="text-xs font-medium text-[#1A202C]">{label}</span>
      <div className="mt-1 flex items-center gap-3 rounded-lg border border-dashed border-[#E2E8F0] bg-[#F7F8FA] p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#2E5FA3]"><Upload className="h-4 w-4" /></div>
        <div className="text-xs">
          <div className="font-medium text-[#1A202C]">Click or drag to upload</div>
          <div className="text-[#4B5568]">PNG, JPG or PDF up to 5MB</div>
        </div>
      </div>
    </div>
  );
}