import { PageHeader } from "@/components/common/PageHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { QUOTATIONS, RFQS } from "@/lib/mockData";
import { useMemo, useState } from "react";
import { Star, Trophy, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const rfqId = "RFQ-2026-0142";

export default function QuotationComparison() {
  const rfq = RFQS.find((r) => r.id === rfqId)!;
  const all = QUOTATIONS.filter((q) => q.rfq === rfqId);
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [sort, setSort] = useState<"price" | "delivery" | "rating">("price");

  const sorted = useMemo(() => {
    const arr = [...all];
    arr.sort((a, b) => sort === "price" ? a.total - b.total : sort === "delivery" ? a.delivery - b.delivery : b.rating - a.rating);
    return arr;
  }, [all, sort]);

  const lowest = Math.min(...all.map((q) => q.total));
  const fastest = Math.min(...all.map((q) => q.delivery));
  const best = all.reduce((a, b) => b.rating > a.rating ? b : a);

  const toggle = (id: string) => setShortlist((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);

  return (
    <>
      <PageHeader
        title="Quotation Comparison"
        description={`${rfq.title} · ${rfq.id}`}
        breadcrumbs={[{ label: "Quotations", to: "/quotations" }, { label: "Comparison" }]}
        actions={<Button size="sm" disabled={!shortlist.length} onClick={() => toast.success(`Sent ${shortlist.length} vendor(s) for approval`)} className="bg-primary text-primary-foreground hover:bg-primary-dark"><Send className="mr-1.5 h-4 w-4" /> Send for Approval ({shortlist.length})</Button>}
      />

      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-success/30 bg-success-fill p-4"><p className="text-xs uppercase text-success">Lowest Price</p><p className="mt-1 text-lg font-bold text-success">₹{(lowest/100000).toFixed(2)}L</p></div>
        <div className="rounded-xl border border-primary/30 bg-primary-lightest p-4"><p className="text-xs uppercase text-primary-dark">Fastest Delivery</p><p className="mt-1 text-lg font-bold text-primary-dark">{fastest} days</p></div>
        <div className="rounded-xl border border-accent-strong/30 bg-accent-lightest p-4"><p className="text-xs uppercase text-accent-foreground">Best Rated</p><p className="mt-1 text-lg font-bold text-accent-foreground">{best.vendor}</p></div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Sort by:</p>
        <div className="flex gap-1">
          {(["price", "delivery", "rating"] as const).map((s) => (
            <Button key={s} size="sm" variant={sort === s ? "default" : "outline"} onClick={() => setSort(s)} className={cn(sort === s && "bg-primary text-primary-foreground hover:bg-primary-dark")}>
              {s[0].toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/40 text-left text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Vendor</th><th>Unit Price</th><th>Total</th><th>Delivery</th><th>Rating</th><th>Status</th><th></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((q) => {
              const isLowest = q.total === lowest;
              const isFastest = q.delivery === fastest;
              const isBest = q.id === best.id;
              return (
                <tr key={q.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3"><p className="font-medium">{q.vendor}</p><p className="text-xs text-muted-foreground">{q.id}</p></td>
                  <td className="px-4">₹{q.unitPrice}</td>
                  <td className={cn("px-4 font-semibold", isLowest && "text-success")}>₹{(q.total/100000).toFixed(2)}L {isLowest && <Trophy className="ml-1 inline h-3.5 w-3.5" />}</td>
                  <td className={cn("px-4", isFastest && "font-semibold text-primary")}>{q.delivery}d {isFastest && <Trophy className="ml-1 inline h-3.5 w-3.5" />}</td>
                  <td className="px-4"><span className={cn("inline-flex items-center gap-1", isBest && "font-semibold text-accent-strong")}><Star className="h-3.5 w-3.5 fill-current" /> {q.rating}</span></td>
                  <td className="px-4"><StatusBadge tone="warning">{q.status}</StatusBadge></td>
                  <td className="px-4 py-3 text-right">
                    <Button size="sm" variant={shortlist.includes(q.id) ? "default" : "outline"} onClick={() => toggle(q.id)} className={cn(shortlist.includes(q.id) && "bg-primary text-primary-foreground hover:bg-primary-dark")}>
                      {shortlist.includes(q.id) ? "Shortlisted" : "Shortlist"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold">Recommendation</h3>
        <p className="mt-2 text-sm text-muted-foreground">Based on weighted scoring (price 40%, delivery 25%, rating 25%, compliance 10%), <span className="font-semibold text-foreground">{best.vendor}</span> offers the best balance for this RFQ.</p>
      </div>
    </>
  );
}
