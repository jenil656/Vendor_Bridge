import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { VENDORS } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
import { useState } from "react";

export default function RFQCreate() {
  const nav = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  return (
    <>
      <PageHeader title="Create RFQ" description="Publish a new request for quotation" breadcrumbs={[{ label: "RFQs", to: "/rfqs" }, { label: "Create" }]} />
      <form onSubmit={(e) => { e.preventDefault(); toast.success("RFQ published"); nav("/rfqs"); }} className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">RFQ Information</h3>
            <div className="space-y-1.5"><Label>RFQ Title</Label><Input required placeholder="e.g. Steel sheets — 5mm cold rolled" /></div>
            <div className="space-y-1.5"><Label>Product Description</Label><Textarea rows={3} required /></div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="space-y-1.5"><Label>Quantity</Label><Input type="number" required /></div>
              <div className="space-y-1.5">
                <Label>Unit</Label>
                <Select><SelectTrigger><SelectValue placeholder="kg" /></SelectTrigger><SelectContent>{["kg","units","tonnes","litres","contract"].map((u) => <SelectItem key={u} value={u}>{u}</SelectItem>)}</SelectContent></Select>
              </div>
              <div className="space-y-1.5"><Label>Submission Deadline</Label><Input type="date" required /></div>
            </div>
            <div className="space-y-1.5"><Label>Specifications</Label><Textarea rows={3} placeholder="Quality, certifications, packaging, etc." /></div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Attachments</h3>
            <div className="mt-3 rounded-lg border-2 border-dashed border-border bg-muted/40 p-6 text-center">
              <Upload className="mx-auto h-6 w-6 text-muted-foreground" />
              <p className="mt-1 text-sm font-medium">Drop files or click to upload</p>
              <p className="text-xs text-muted-foreground">PDF, XLSX, DOC, PNG · up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Assigned Vendors ({selected.length})</h3>
            <div className="mt-3 max-h-96 space-y-2 overflow-y-auto">
              {VENDORS.filter((v) => v.status === "Active").map((v) => (
                <label key={v.id} className="flex cursor-pointer items-start gap-2 rounded-lg border border-border p-2.5 hover:bg-muted">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border" checked={selected.includes(v.id)} onChange={() => toggle(v.id)} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{v.company}</p>
                    <p className="text-xs text-muted-foreground">{v.category} · {v.city}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">Publish RFQ</Button>
            <Button type="button" variant="outline">Save as Draft</Button>
            <Button type="button" variant="ghost" onClick={() => nav(-1)}><X className="mr-1.5 h-4 w-4" /> Cancel</Button>
          </div>
        </div>
      </form>
    </>
  );
}
