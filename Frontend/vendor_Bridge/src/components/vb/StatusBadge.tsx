import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  // success
  Active: "bg-[#E6F5EE] text-[#2D9A58]",
  Approved: "bg-[#E6F5EE] text-[#2D9A58]",
  Paid: "bg-[#E6F5EE] text-[#2D9A58]",
  Delivered: "bg-[#E6F5EE] text-[#2D9A58]",
  Shortlisted: "bg-[#E6F5EE] text-[#2D9A58]",
  // warning / pending
  Pending: "bg-[#FFF7E6] text-[#E09B2E]",
  Draft: "bg-[#EEF2F9] text-[#2E5FA3]",
  Published: "bg-[#EEF2F9] text-[#2E5FA3]",
  Submitted: "bg-[#EEF2F9] text-[#2E5FA3]",
  "Under Review": "bg-[#FFF7E6] text-[#E09B2E]",
  "Quotation Received": "bg-[#FDF4E3] text-[#9A6310]",
  Open: "bg-[#EEF2F9] text-[#2E5FA3]",
  "In Transit": "bg-[#FFF7E6] text-[#E09B2E]",
  // danger
  Rejected: "bg-[#FEF2F2] text-[#D63F3F]",
  Suspended: "bg-[#FEF2F2] text-[#D63F3F]",
  Blacklisted: "bg-[#FEF2F2] text-[#D63F3F]",
  Overdue: "bg-[#FEF2F2] text-[#D63F3F]",
};

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const cls = styles[status] ?? "bg-[#EEF2F9] text-[#2E5FA3]";
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", cls, className)}>
      {status}
    </span>
  );
}