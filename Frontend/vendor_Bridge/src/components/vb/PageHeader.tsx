import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({
  title, description, actions,
}: { title: string; description?: string; actions?: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const segs = pathname.split("/").filter(Boolean);

  return (
    <div className="sticky top-0 z-10 -mx-6 -mt-6 mb-6 border-b border-[#E2E8F0] bg-[#F7F8FA]/95 px-6 pt-5 pb-4 backdrop-blur">
      <nav className="flex items-center gap-1 text-xs text-[#4B5568]">
        <Link to="/app/dashboard" className="flex items-center gap-1 hover:text-[#2E5FA3]"><Home className="h-3 w-3" /></Link>
        {segs.slice(1).map((s, i) => (
          <span key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            <span className="capitalize">{s.replace(/-/g, " ")}</span>
          </span>
        ))}
      </nav>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-[#1A202C]">{title}</h1>
          {description && <p className="mt-0.5 text-sm text-[#4B5568]">{description}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}