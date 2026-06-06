import { useMemo, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
  sortable?: boolean;
  accessor?: (row: T) => string | number;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  pageSize?: number;
  searchKeys?: (keyof T)[];
  toolbar?: ReactNode;
  onRowClick?: (row: T) => void;
  emptyText?: string;
}

export function DataTable<T extends Record<string, any>>({ columns, data, pageSize = 8, searchKeys, toolbar, onRowClick, emptyText = "No records found." }: Props<T>) {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<{ key: string; dir: "asc" | "desc" } | null>(null);

  const filtered = useMemo(() => {
    let list = data;
    if (q && searchKeys?.length) {
      const term = q.toLowerCase();
      list = list.filter((r) => searchKeys.some((k) => String(r[k] ?? "").toLowerCase().includes(term)));
    }
    if (sort) {
      const col = columns.find((c) => c.key === sort.key);
      list = [...list].sort((a, b) => {
        const av = col?.accessor ? col.accessor(a) : a[sort.key];
        const bv = col?.accessor ? col.accessor(b) : b[sort.key];
        if (av === bv) return 0;
        return (av > bv ? 1 : -1) * (sort.dir === "asc" ? 1 : -1);
      });
    }
    return list;
  }, [data, q, sort, searchKeys, columns]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const rows = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        {searchKeys && (
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search…" className="pl-9" />
          </div>
        )}
        <div className="flex items-center gap-2">{toolbar}</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left">
              {columns.map((c) => (
                <th key={c.key} className={cn("px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground", c.className, c.sortable && "cursor-pointer select-none")}
                  onClick={() => c.sortable && setSort((s) => s?.key === c.key ? { key: c.key, dir: s.dir === "asc" ? "desc" : "asc" } : { key: c.key, dir: "asc" })}
                >
                  {c.header}
                  {c.sortable && sort?.key === c.key && <span className="ml-1">{sort.dir === "asc" ? "↑" : "↓"}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td colSpan={columns.length} className="px-4 py-12 text-center text-sm text-muted-foreground">{emptyText}</td></tr>
            )}
            {rows.map((r, i) => (
              <tr key={i} className={cn("border-b border-border last:border-0 hover:bg-muted/30", onRowClick && "cursor-pointer")} onClick={() => onRowClick?.(r)}>
                {columns.map((c) => (
                  <td key={c.key} className={cn("px-4 py-3 text-foreground", c.className)}>
                    {c.render ? c.render(r) : (r as any)[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border p-3 text-xs text-muted-foreground">
        <span>Showing {(safePage - 1) * pageSize + 1}–{Math.min(safePage * pageSize, filtered.length)} of {filtered.length}</span>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" disabled={safePage === 1} onClick={() => setPage((p) => p - 1)}><ChevronLeft className="h-4 w-4" /></Button>
          <span className="px-2">Page {safePage} / {totalPages}</span>
          <Button variant="outline" size="sm" disabled={safePage === totalPages} onClick={() => setPage((p) => p + 1)}><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
