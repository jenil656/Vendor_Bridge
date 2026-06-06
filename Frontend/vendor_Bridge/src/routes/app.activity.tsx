import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/vb/PageHeader";
import { activities } from "@/lib/mock";
export const Route = createFileRoute("/app/activity")({
  component: () => (
    <>
      <PageHeader title="Activity Logs" description="Recent activities across users and workflows." />
      <div className="rounded-xl border border-[#E2E8F0] bg-white p-6">
        <ol className="relative space-y-5 border-l border-[#E2E8F0] pl-6">
          {activities.map((a,i)=>(
            <li key={i} className="relative">
              <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[#2E5FA3]" />
              <div className="text-sm"><span className="font-medium">{a.user}</span> <span className="text-[#4B5568]">{a.action}</span> <span className="font-medium text-[#2E5FA3]">{a.target}</span></div>
              <div className="text-[10px] text-[#4B5568]">{a.time}</div>
            </li>
          ))}
        </ol>
      </div>
    </>
  ),
});
