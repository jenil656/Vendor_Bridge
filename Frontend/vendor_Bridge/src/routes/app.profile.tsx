import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { useAuth } from "@/lib/auth";
import { Field, inputCls } from "@/components/vb/AuthShell";
export const Route = createFileRoute("/app/profile")({
  component: () => {
    const { user } = useAuth();
    return (
      <>
        <PageHeader title="Profile" description="Your account information and preferences." />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2E5FA3] text-2xl font-semibold text-white">{user.name.split(" ").map(n=>n[0]).join("").slice(0,2)}</div>
            <div className="mt-3 font-semibold">{user.name}</div>
            <div className="text-xs text-[#4B5568]">{user.email}</div>
            <div className="mt-2 inline-flex rounded-full bg-[#EEF2F9] px-2 py-0.5 text-[10px] font-medium capitalize text-[#2E5FA3]">{user.role}</div>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold">User Information</h3>
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Full Name"><input className={inputCls} defaultValue={user.name} /></Field>
              <Field label="Email"><input className={inputCls} defaultValue={user.email} /></Field>
              <Field label="Company"><input className={inputCls} defaultValue={user.company} /></Field>
              <Field label="Phone"><input className={inputCls} defaultValue="+91 98000 12345" /></Field>
            </div>
            <h3 className="mb-4 mt-6 text-sm font-semibold">Change Password</h3>
            <div className="grid gap-3 md:grid-cols-3">
              <Field label="Current"><input className={inputCls} type="password" /></Field>
              <Field label="New"><input className={inputCls} type="password" /></Field>
              <Field label="Confirm"><input className={inputCls} type="password" /></Field>
            </div>
            <button className="mt-5 rounded-lg bg-[#2E5FA3] px-4 py-2 text-sm font-medium text-white hover:bg-[#1B2D55]">Save Changes</button>
          </div>
        </div>
      </>
    );
  },
});
