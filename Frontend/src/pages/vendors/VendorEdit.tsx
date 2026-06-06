import { PageHeader } from "@/components/common/PageHeader";
import VendorAdd from "./VendorAdd";

export default function VendorEdit() {
  return (
    <>
      <PageHeader title="Edit Vendor" description="Update vendor details" breadcrumbs={[{ label: "Vendors", to: "/vendors" }, { label: "Edit" }]} />
      <VendorAdd />
    </>
  );
}
