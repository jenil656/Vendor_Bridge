import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function QuotationSubmit() {
  const { rfqId } = useParams();
  const nav = useNavigate();
  return (
    <>
      <PageHeader title="Submit Quotation" description={`For RFQ ${rfqId}`} breadcrumbs={[{ label: "Quotations", to: "/quotations" }, { label: "Submit" }]} />
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Quotation submitted"); nav("/quotations"); }} className="grid gap-5 rounded-xl border border-border bg-card p-6 lg:grid-cols-2">
        <div className="space-y-1.5"><Label>Unit Price (₹)</Label><Input type="number" step="0.01" required /></div>
        <div className="space-y-1.5"><Label>Total Price (₹)</Label><Input type="number" step="0.01" required /></div>
        <div className="space-y-1.5"><Label>Delivery Timeline (days)</Label><Input type="number" required /></div>
        <div className="space-y-1.5"><Label>Validity (days)</Label><Input type="number" defaultValue={30} /></div>
        <div className="space-y-1.5 lg:col-span-2"><Label>Notes</Label><Textarea rows={4} placeholder="Payment terms, packaging, warranties, etc." /></div>
        <div className="space-y-1.5 lg:col-span-2">
          <Label>Supporting Documents</Label>
          <div className="rounded-lg border-2 border-dashed border-border bg-muted/40 p-6 text-center">
            <Upload className="mx-auto h-6 w-6 text-muted-foreground" /><p className="mt-1 text-sm">Drop files or click to upload</p>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-end gap-2">
          <Button type="button" variant="outline">Save Draft</Button>
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-dark">Submit Quotation</Button>
        </div>
      </form>
    </>
  );
}
