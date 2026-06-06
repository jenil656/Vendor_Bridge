import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { quotations } from "@/lib/mock";
import { Check } from "lucide-react";

export const Route = createFileRoute("/app/quotations/compare")({
  component: () => {
    const rfqQuotes = quotations.filter((q) => q.rfq === "RFQ-2024-0241");
    const lowest = Math.min(...rfqQuotes.map((q) => q.total));
    return (
      <>
        <PageHeader title="Quotation Comparison" description="RFQ-2024-0241 · Industrial Air Compressors x 12" />
        <div className="grid gap-4 lg:grid-cols-4">
          {rfqQuotes.map((q) => (
            <div key={q.id} className={"rounded-xl border bg-white p-5 " + (q.total === lowest ? "border-[#2D9A58] ring-2 ring-[#E6F5EE]" : "border-[#E2E8F0]")}>
              {q.total === lowest && <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#E6F5EE] px-2 py-0.5 text-[10px] font-medium text-[#2D9A58]"><Check className="h-3 w-3" /> Lowest Price</div>}
              <div className="text-sm font-semibold">{q.vendor}</div>
              <div className="text-xs text-[#4B5568]">{q.id}</div>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-[#4B5568]">Unit Price</dt><dd>₹ {q.unitPrice.toLocaleString("en-IN")}</dd></div>
                <div className="flex justify-between"><dt className="text-[#4B5568]">Total</dt><dd className="font-semibold">₹ {q.total.toLocaleString("en-IN")}</dd></div>
                <div className="flex justify-between"><dt className="text-[#4B5568]">Delivery</dt><dd>{q.delivery}</dd></div>
                <div className="flex justify-between"><dt className="text-[#4B5568]">Rating</dt><dd>⭐ {q.rating}</dd></div>
              </dl>
              <button className="mt-4 w-full rounded-lg bg-[#2E5FA3] py-2 text-xs font-medium text-white hover:bg-[#1B2D55]">Shortlist & Send for Approval</button>
            </div>
          ))}
          <div className="rounded-xl border border-[#E2E8F0] bg-[#FDF4E3] p-5">
            <div className="text-sm font-semibold text-[#9A6310]">Recommendation</div>
            <p className="mt-2 text-xs text-[#9A6310]">Titan Machinery offers the lowest total cost with acceptable delivery. Acme Supplies has higher reliability but a 4% premium.</p>
          </div>
        </div>
      </>
    );
  },
});