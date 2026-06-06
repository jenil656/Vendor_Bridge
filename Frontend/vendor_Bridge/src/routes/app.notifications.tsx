import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { notifications } from "@/lib/mock";
import { Bell } from "lucide-react";
export const Route = createFileRoute("/app/notifications")({
  component: () => (
    <>
      <PageHeader title="Notifications" description="All alerts and updates across procurement." />
      <div className="rounded-xl border border-[#E2E8F0] bg-white">
        {notifications.map((n,i)=>(
          <div key={n.id} className={"flex items-start gap-4 p-4 "+(i?"border-t border-[#E2E8F0]":"")+(n.unread?" bg-[#EEF2F9]/40":"")}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2F9] text-[#2E5FA3]"><Bell className="h-4 w-4" /></div>
            <div className="flex-1">
              <div className="flex items-center gap-2"><span className="text-sm font-semibold text-[#1A202C]">{n.title}</span><span className="rounded-full bg-[#F7F8FA] px-2 py-0.5 text-[10px] font-medium text-[#4B5568]">{n.type}</span>{n.unread && <span className="h-1.5 w-1.5 rounded-full bg-[#D63F3F]" />}</div>
              <div className="mt-0.5 text-xs text-[#4B5568]">{n.body}</div>
            </div>
            <div className="text-[10px] text-[#4B5568]">{n.time}</div>
          </div>
        ))}
      </div>
    </>
  ),
});
