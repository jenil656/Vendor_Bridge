import { PageHeader } from "@/components/common/PageHeader";
import { DataTable, type Column } from "@/components/common/DataTable";
import { StatusBadge, statusTone } from "@/components/common/StatusBadge";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { VENDORS } from "@/lib/mockData";
import { Plus, Download, Filter } from "lucide-react";

export default function VendorList() {
  const nav = useNavigate();
  const cols: Column<typeof VENDORS[number]>[] = [
    { key: "id", header: "Vendor ID", sortable: true },
    { key: "company", header: "Company", sortable: true, render: (r) => <div><p className="font-medium">{r.company}</p><p className="text-xs text-muted-foreground">{r.contact}</p></div> },
    { key: "category", header: "Category", sortable: true },
    { key: "city", header: "City" },
    { key: "gst", header: "GST", className: "text-xs font-mono" },
    { key: "volume", header: "Volume", sortable: true, render: (r) => `₹${(r.volume / 100000).toFixed(1)}L` },
    { key: "status", header: "Status", render: (r) => <StatusBadge tone={statusTone(r.status)}>{r.status}</StatusBadge> },
  ];
  return (
    <>
      <PageHeader
        title="Vendor Management"
        description="Onboard, monitor and manage your vendor master"
        breadcrumbs={[{ label: "Vendors" }]}
        actions={
          <>
            <Button variant="outline" size="sm"><Filter className="mr-1.5 h-4 w-4" /> Filters</Button>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" /> Export</Button>
            <Link to="/vendors/add"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark"><Plus className="mr-1.5 h-4 w-4" /> Add Vendor</Button></Link>
          </>
        }
      />
      <DataTable
        columns={cols}
        data={VENDORS}
        searchKeys={["company", "contact", "category", "city", "id"]}
        onRowClick={(r) => nav(`/vendors/${r.id}`)}
        toolbar={<Link to="/vendors/performance"><Button variant="outline" size="sm">Performance Overview</Button></Link>}
      />
    </>
  );
}
