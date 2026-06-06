import { PageHeader } from "./PageHeader";
import { StatusBadge } from "./StatusBadge";
import { Download, Filter, Plus, Search } from "lucide-react";
import type { ReactNode } from "react";

export function DataPage({
  title, description, columns, rows, statusKey, actionLabel = "New",
  extraActions, renderRow,
}: {
  title: string;
  description?: string;
  columns: string[];
  rows: Record<string, any>[];
  statusKey?: string;
  actionLabel?: string;
  extraActions?: ReactNode;
  renderRow?: (row: Record<string, any>) => ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} description={description} actions={
        <>
          <button className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#1A202C] hover:bg-[#F7F8FA]"><Download className="h-3.5 w-3.5" /> Export</button>
          {extraActions}
          <button className="inline-flex items-center gap-1 rounded-lg bg-[#2E5FA3] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#1B2D55]"><Plus className="h-3.5 w-3.5" /> {actionLabel}</button>
        </>
      } />
      <div className="rounded-xl border border-[#E2E8F0] bg-white">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E8F0] p-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#4B5568]" />
            <input className="h-9 w-full rounded-lg border border-[#E2E8F0] bg-[#F7F8FA] pl-8 pr-3 text-sm outline-none focus:border-[#2E5FA3] focus:bg-white" placeholder="Search…" />
          </div>
          <button className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] px-3 py-1.5 text-xs font-medium text-[#1A202C] hover:bg-[#F7F8FA]"><Filter className="h-3.5 w-3.5" /> Filters</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F7F8FA] text-left text-xs font-medium text-[#4B5568]">
              <tr>{columns.map((c) => <th key={c} className="px-4 py-3">{c}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-[#E2E8F0] hover:bg-[#F7F8FA]">
                  {renderRow ? renderRow(r) : (
                    Object.keys(r).map((k) => (
                      <td key={k} className="px-4 py-3">
                        {statusKey && k === statusKey ? <StatusBadge status={r[k]} /> : String(r[k])}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-[#E2E8F0] p-4 text-xs text-[#4B5568]">
          <span>Showing {rows.length} of {rows.length} results</span>
          <div className="flex gap-1">
            <button className="rounded border border-[#E2E8F0] px-2.5 py-1 hover:bg-[#F7F8FA]">Previous</button>
            <button className="rounded bg-[#2E5FA3] px-2.5 py-1 text-white">1</button>
            <button className="rounded border border-[#E2E8F0] px-2.5 py-1 hover:bg-[#F7F8FA]">2</button>
            <button className="rounded border border-[#E2E8F0] px-2.5 py-1 hover:bg-[#F7F8FA]">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}