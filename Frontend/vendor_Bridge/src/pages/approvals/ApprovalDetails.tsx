import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { APPROVALS } from "@/lib/mockData";
import { useParams, useNavigate } from "react-router-dom";
import { Check, X, MessageSquare, FileSignature } from "lucide-react";
import { toast } from "sonner";

export default function ApprovalDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const a = APPROVALS.find((x) => x.id === id) ?? APPROVALS[0];

  const timeline = [
    { step: "Submitted", who: a.requestor, date: a.submitted, done: true },
    { step: "Under Review", who: "Neha Iyer", date: "2026-06-04 09:00", done: true },
    { step: "Approved", who: "Pending", date: "—", done: a.status === "Approved" },
    { step: "PO Generated", who: "—", date: "—", done: false },
  ];

  return (
    <>
      <PageHeader
        title={a.id}
        description={a.title}
        breadcrumbs={[{ label: "Approvals", to: "/approvals" }, { label: a.id }]}
        actions={<StatusBadge tone={statusTone(a.status)}>{a.status}</StatusBadge>}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">Request Details</h3>
            <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
              <div><dt className="text-xs uppercase text-muted-foreground">Type</dt><dd className="mt-1 font-medium">{a.type}</dd></div>
              <div><dt className="text-xs uppercase text-muted-foreground">Requestor</dt><dd className="mt-1 font-medium">{a.requestor}</dd></div>
              <div><dt className="text-xs uppercase text-muted-foreground">Value</dt><dd className="mt-1 font-medium">{a.value ? `₹${(a.value/100000).toFixed(1)}L` : "—"}</dd></div>
              <div><dt className="text-xs uppercase text-muted-foreground">Priority</dt><dd className="mt-1"><StatusBadge tone={statusTone(a.priority)}>{a.priority}</StatusBadge></dd></div>
              <div className="sm:col-span-2"><dt className="text-xs uppercase text-muted-foreground">Justification</dt><dd className="mt-1">Requested to fulfill Q3 IT refresh cycle. Vendor selected based on rating, delivery and TCO.</dd></div>
            </dl>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Remarks</h3>
            <Textarea className="mt-3" rows={3} placeholder="Add remarks for this approval…" />
            <div className="mt-3 flex flex-wrap gap-2">
              <Button onClick={() => { toast.success("Approved"); nav("/approvals"); }} className="bg-success text-success-foreground hover:bg-success/90"><Check className="mr-1.5 h-4 w-4" /> Approve</Button>
              <Button onClick={() => { toast.success("Rejected"); nav("/approvals"); }} variant="outline" className="border-destructive text-destructive hover:bg-destructive-fill"><X className="mr-1.5 h-4 w-4" /> Reject</Button>
              <Button variant="outline">Request Changes</Button>
              <Button variant="outline"><FileSignature className="mr-1.5 h-4 w-4" /> Digital Signature</Button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Approval Timeline</h3>
          <ol className="mt-4 space-y-4">
            {timeline.map((t, i) => (
              <li key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${t.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{i + 1}</div>
                  {i < timeline.length - 1 && <div className={`mt-1 h-12 w-px ${t.done ? "bg-primary" : "bg-border"}`} />}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.step}</p>
                  <p className="text-xs text-muted-foreground">{t.who}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
