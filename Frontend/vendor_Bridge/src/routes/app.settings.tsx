import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { Field, inputCls } from "@/components/vb/AuthShell";
export const Route = createFileRoute("/app/settings")({
  component: () => (
    <>
      <PageHeader title="Settings" description="System configuration and preferences." />
      <div className="grid gap-4 lg:grid-cols-2">
        <Section title="System Configuration">
          <Field label="Company Name"><input className={inputCls} defaultValue="VendorBridge Inc." /></Field>
          <Field label="Default Currency"><select className={inputCls}><option>INR (₹)</option><option>USD ($)</option><option>EUR (€)</option></select></Field>
          <Field label="GST Rate (%)"><input className={inputCls} defaultValue="18" /></Field>
        </Section>
        <Section title="Email Settings">
          <Field label="From Email"><input className={inputCls} defaultValue="noreply@vendorbridge.io" /></Field>
          <Field label="SMTP Host"><input className={inputCls} defaultValue="smtp.vendorbridge.io" /></Field>
          <Field label="SMTP Port"><input className={inputCls} defaultValue="587" /></Field>
        </Section>
        <Section title="Security">
          {[["Require 2FA for all users",true],["Enforce strong passwords",true],["Auto-logout after 30 minutes",false]].map(([l,v])=>(
            <label key={l as string} className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-3 text-sm"><span>{l as string}</span><input type="checkbox" defaultChecked={v as boolean} className="h-4 w-4" /></label>
          ))}
        </Section>
        <Section title="Notification Preferences">
          {["Approval alerts","RFQ updates","Invoice reminders","System notifications"].map(l=>(
            <label key={l} className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-3 text-sm"><span>{l}</span><input type="checkbox" defaultChecked className="h-4 w-4" /></label>
          ))}
        </Section>
      </div>
    </>
  ),
});
function Section({title,children}:{title:string;children:React.ReactNode}){return <div className="rounded-xl border border-[#E2E8F0] bg-white p-5"><h3 className="mb-4 text-sm font-semibold">{title}</h3><div className="space-y-3">{children}</div></div>;}
