import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { RFQS, QUOTATIONS } from "@/lib/mockData";
import { Calendar, Package, Boxes, FileText } from "lucide-react";

export default function RFQDetails() {
  const { id } = useParams();
  const r = RFQS.find((x) => x.id === id) ?? RFQS[0];
  const quotes = QUOTATIONS.filter((q) => q.rfq === r.id);
  return (
    <>
      <PageHeader
        title={r.title}
        description={`${r.id} · ${r.qty} ${r.unit}`}
        breadcrumbs={[{ label: "RFQs", to: "/rfqs" }, { label: r.id }]}
        actions={<><Link to="/quotations/comparison"><Button variant="outline" size="sm">Compare Quotations</Button></Link><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark">Send for Approval</Button></>}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">RFQ Details</h3>
            <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge>
          </div>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
            <div><dt className="text-xs uppercase text-muted-foreground">Quantity</dt><dd className="mt-1 flex items-center gap-1.5 font-medium"><Boxes className="h-4 w-4 text-muted-foreground" /> {r.qty} {r.unit}</dd></div>
            <div><dt className="text-xs uppercase text-muted-foreground">Estimated Value</dt><dd className="mt-1 font-medium">₹{(r.value/100000).toFixed(1)}L</dd></div>
            <div><dt className="text-xs uppercase text-muted-foreground">Submission Deadline</dt><dd className="mt-1 flex items-center gap-1.5 font-medium"><Calendar className="h-4 w-4 text-muted-foreground" /> {r.deadline}</dd></div>
            <div><dt className="text-xs uppercase text-muted-foreground">Created</dt><dd className="mt-1 font-medium">{r.created}</dd></div>
            <div className="sm:col-span-2"><dt className="text-xs uppercase text-muted-foreground">Specifications</dt><dd className="mt-1 text-foreground">Cold-rolled, IS 513 Gr CR2 D compliant, 1250mm coil width, with mill test certificate. Delivery to Mumbai warehouse.</dd></div>
          </dl>
          <div className="mt-5">
            <p className="mb-2 text-xs uppercase text-muted-foreground">Attachments</p>
            <div className="flex flex-wrap gap-2">
              {["Specifications.pdf", "Drawing-CR-512.pdf"].map((f) => (
                <div key={f} className="flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2 text-sm"><FileText className="h-4 w-4 text-muted-foreground" /> {f}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold">Quotations Received ({quotes.length}/{r.vendors})</h3>
          <ul className="mt-3 space-y-2">
            {quotes.map((q) => (
              <li key={q.id} className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between"><p className="text-sm font-medium">{q.vendor}</p><StatusBadge tone={statusTone(q.status)}>{q.status}</StatusBadge></div>
                <div className="mt-1.5 grid grid-cols-2 gap-1 text-xs text-muted-foreground"><span>Unit: ₹{q.unitPrice}</span><span>Delivery: {q.delivery}d</span><span>Total: ₹{(q.total/100000).toFixed(1)}L</span><span>Rating: {q.rating}</span></div>
              </li>
            ))}
            {quotes.length === 0 && <p className="text-sm text-muted-foreground">No quotations yet.</p>}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">Workflow Progress</h3>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {["Draft", "Published", "Quotation Received", "Under Review", "Approved", "PO Generated"].map((s, i, arr) => {
            const active = arr.indexOf(r.status) >= i;
            return (
              <div key={s} className="flex items-center">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{i + 1}</div>
                <span className={`ml-2 text-xs ${active ? "font-medium" : "text-muted-foreground"}`}>{s}</span>
                {i < arr.length - 1 && <span className={`mx-3 h-px w-8 ${active ? "bg-primary" : "bg-border"}`} />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
