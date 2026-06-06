export const vendors = [
  { id: "VEN-1001", name: "Acme Supplies Pvt Ltd", gst: "27AABCA1234F1Z5", contact: "Ravi Kumar", email: "ravi@acmesupplies.com", phone: "+91 98201 11211", category: "Electronics", status: "Active", delivery: 92, quality: 89, response: 95, compliance: 98, volume: "₹ 48.2L" },
  { id: "VEN-1002", name: "BlueOcean Logistics", gst: "29AAACB2345G1Z6", contact: "Meera Iyer", email: "meera@blueocean.in", phone: "+91 99001 32145", category: "Logistics", status: "Active", delivery: 88, quality: 84, response: 79, compliance: 92, volume: "₹ 31.7L" },
  { id: "VEN-1003", name: "Sterling Industrial", gst: "07AABCS3456H1Z7", contact: "John Mathew", email: "john@sterling.co", phone: "+91 98114 88210", category: "Industrial", status: "Suspended", delivery: 71, quality: 68, response: 60, compliance: 74, volume: "₹ 12.1L" },
  { id: "VEN-1004", name: "Northwind Office", gst: "06AAACN4567J1Z8", contact: "Sara Khan", email: "sara@northwind.in", phone: "+91 90015 76311", category: "Office Supplies", status: "Active", delivery: 95, quality: 91, response: 97, compliance: 99, volume: "₹ 22.4L" },
  { id: "VEN-1005", name: "Helix Pharma", gst: "24AAACH5678K1Z9", contact: "Anjali Verma", email: "anjali@helixpharma.com", phone: "+91 98453 11099", category: "Pharma", status: "Blacklisted", delivery: 42, quality: 51, response: 33, compliance: 28, volume: "₹ 2.3L" },
  { id: "VEN-1006", name: "Quantum Tech Pvt Ltd", gst: "27AAACQ6789L1Z0", contact: "Rahul Mehta", email: "rahul@quantumtech.io", phone: "+91 98203 41255", category: "IT Services", status: "Active", delivery: 90, quality: 93, response: 92, compliance: 96, volume: "₹ 67.5L" },
  { id: "VEN-1007", name: "Greenleaf Packaging", gst: "32AAACG7890M1Z1", contact: "Neha Reddy", email: "neha@greenleaf.in", phone: "+91 96000 11102", category: "Packaging", status: "Active", delivery: 86, quality: 88, response: 84, compliance: 90, volume: "₹ 18.9L" },
  { id: "VEN-1008", name: "Titan Machinery", gst: "08AAACT8901N1Z2", contact: "Vikram Singh", email: "vikram@titanmach.co", phone: "+91 98101 23377", category: "Industrial", status: "Active", delivery: 80, quality: 82, response: 75, compliance: 88, volume: "₹ 41.0L" },
];

export const rfqs = [
  { id: "RFQ-2024-0241", title: "Industrial Air Compressors x 12", category: "Industrial", qty: 12, deadline: "2026-06-18", status: "Published", vendors: 5, quotations: 3, value: "₹ 8.4L" },
  { id: "RFQ-2024-0240", title: "Office Furniture - 200 workstations", category: "Office Supplies", qty: 200, deadline: "2026-06-14", status: "Under Review", vendors: 6, quotations: 6, value: "₹ 32.0L" },
  { id: "RFQ-2024-0239", title: "Cloud Server Procurement - AWS Reseller", category: "IT Services", qty: 1, deadline: "2026-06-10", status: "Quotation Received", vendors: 4, quotations: 4, value: "₹ 21.5L" },
  { id: "RFQ-2024-0238", title: "Pharma Cold Chain Boxes", category: "Pharma", qty: 5000, deadline: "2026-06-22", status: "Draft", vendors: 0, quotations: 0, value: "—" },
  { id: "RFQ-2024-0237", title: "Bulk Packaging Cartons", category: "Packaging", qty: 20000, deadline: "2026-06-09", status: "Approved", vendors: 3, quotations: 3, value: "₹ 5.6L" },
  { id: "RFQ-2024-0236", title: "Annual Maintenance - HVAC", category: "Industrial", qty: 1, deadline: "2026-06-30", status: "Published", vendors: 4, quotations: 2, value: "₹ 14.2L" },
  { id: "RFQ-2024-0235", title: "Laptop Refresh - 80 units", category: "IT Services", qty: 80, deadline: "2026-06-05", status: "Rejected", vendors: 5, quotations: 5, value: "₹ 56.0L" },
];

export const quotations = [
  { id: "QUO-9012", rfq: "RFQ-2024-0241", vendor: "Acme Supplies Pvt Ltd", unitPrice: 68000, total: 816000, delivery: "14 days", rating: 4.6, status: "Submitted" },
  { id: "QUO-9013", rfq: "RFQ-2024-0241", vendor: "Sterling Industrial", unitPrice: 72500, total: 870000, delivery: "10 days", rating: 3.9, status: "Submitted" },
  { id: "QUO-9014", rfq: "RFQ-2024-0241", vendor: "Titan Machinery", unitPrice: 65500, total: 786000, delivery: "18 days", rating: 4.3, status: "Submitted" },
  { id: "QUO-9015", rfq: "RFQ-2024-0240", vendor: "Northwind Office", unitPrice: 14800, total: 2960000, delivery: "21 days", rating: 4.8, status: "Submitted" },
  { id: "QUO-9016", rfq: "RFQ-2024-0239", vendor: "Quantum Tech Pvt Ltd", unitPrice: 2150000, total: 2150000, delivery: "7 days", rating: 4.7, status: "Shortlisted" },
];

export const approvals = [
  { id: "APR-5501", reference: "RFQ-2024-0240", title: "Office Furniture - 200 workstations", requester: "Priya Sharma", value: "₹ 29.6L", date: "2026-06-04", status: "Pending" },
  { id: "APR-5502", reference: "RFQ-2024-0239", title: "AWS Cloud Servers", requester: "Priya Sharma", value: "₹ 21.5L", date: "2026-06-03", status: "Pending" },
  { id: "APR-5503", reference: "RFQ-2024-0236", title: "HVAC AMC", requester: "Arjun Patel", value: "₹ 14.2L", date: "2026-06-02", status: "Approved" },
  { id: "APR-5504", reference: "RFQ-2024-0237", title: "Packaging Cartons", requester: "Priya Sharma", value: "₹ 5.6L", date: "2026-06-01", status: "Approved" },
  { id: "APR-5505", reference: "RFQ-2024-0235", title: "Laptop Refresh", requester: "Arjun Patel", value: "₹ 56.0L", date: "2026-05-30", status: "Rejected" },
];

export const purchaseOrders = [
  { id: "PO-7740", vendor: "Acme Supplies Pvt Ltd", rfq: "RFQ-2024-0241", date: "2026-06-04", amount: "₹ 7,86,000", status: "Open" },
  { id: "PO-7739", vendor: "Northwind Office", rfq: "RFQ-2024-0240", date: "2026-06-03", amount: "₹ 29,60,000", status: "Open" },
  { id: "PO-7738", vendor: "Quantum Tech Pvt Ltd", rfq: "RFQ-2024-0239", date: "2026-06-03", amount: "₹ 21,50,000", status: "Delivered" },
  { id: "PO-7737", vendor: "Greenleaf Packaging", rfq: "RFQ-2024-0237", date: "2026-06-01", amount: "₹ 5,60,000", status: "In Transit" },
  { id: "PO-7736", vendor: "BlueOcean Logistics", rfq: "RFQ-2024-0234", date: "2026-05-28", amount: "₹ 3,12,000", status: "Delivered" },
];

export const invoices = [
  { id: "INV-3320", po: "PO-7738", vendor: "Quantum Tech Pvt Ltd", date: "2026-06-04", amount: "₹ 21,50,000", gst: "₹ 3,87,000", total: "₹ 25,37,000", status: "Pending" },
  { id: "INV-3319", po: "PO-7736", vendor: "BlueOcean Logistics", date: "2026-05-29", amount: "₹ 3,12,000", gst: "₹ 56,160", total: "₹ 3,68,160", status: "Paid" },
  { id: "INV-3318", po: "PO-7735", vendor: "Acme Supplies Pvt Ltd", date: "2026-05-22", amount: "₹ 4,40,000", gst: "₹ 79,200", total: "₹ 5,19,200", status: "Overdue" },
  { id: "INV-3317", po: "PO-7734", vendor: "Northwind Office", date: "2026-05-19", amount: "₹ 1,82,000", gst: "₹ 32,760", total: "₹ 2,14,760", status: "Paid" },
];

export const activities = [
  { time: "2 min ago", user: "Priya Sharma", action: "submitted RFQ", target: "RFQ-2024-0241" },
  { time: "18 min ago", user: "Daniel Lee", action: "approved", target: "APR-5504" },
  { time: "1 hr ago", user: "Ravi Kumar", action: "submitted quotation", target: "QUO-9012" },
  { time: "2 hr ago", user: "Alex Morgan", action: "generated PO", target: "PO-7740" },
  { time: "3 hr ago", user: "System", action: "invoice raised", target: "INV-3320" },
  { time: "5 hr ago", user: "Arjun Patel", action: "rejected", target: "APR-5505" },
  { time: "Yesterday", user: "Priya Sharma", action: "created vendor", target: "VEN-1008" },
];

export const auditLogs = [
  { time: "2026-06-05 14:22", user: "Alex Morgan", entity: "Vendor", entityId: "VEN-1005", action: "Status changed Active → Blacklisted", ip: "10.12.4.21" },
  { time: "2026-06-05 12:01", user: "Daniel Lee", entity: "Approval", entityId: "APR-5503", action: "Approved", ip: "10.12.4.55" },
  { time: "2026-06-04 17:43", user: "Priya Sharma", entity: "RFQ", entityId: "RFQ-2024-0241", action: "Published", ip: "10.12.4.18" },
  { time: "2026-06-04 11:08", user: "System", entity: "Invoice", entityId: "INV-3320", action: "Auto-generated", ip: "—" },
  { time: "2026-06-03 09:55", user: "Alex Morgan", entity: "User", entityId: "USR-208", action: "Role assigned: Procurement Officer", ip: "10.12.4.21" },
];

export const notifications = [
  { id: "N1", type: "Approval", title: "Approval needed: Office Furniture", body: "APR-5501 awaiting your action", time: "2 min ago", unread: true },
  { id: "N2", type: "RFQ", title: "New quotation received", body: "Sterling Industrial submitted for RFQ-2024-0241", time: "1 hr ago", unread: true },
  { id: "N3", type: "Invoice", title: "Invoice overdue", body: "INV-3318 from Acme Supplies is 6 days overdue", time: "3 hr ago", unread: true },
  { id: "N4", type: "System", title: "Compliance audit scheduled", body: "Quarterly audit on Jun 20, 2026", time: "Yesterday", unread: false },
  { id: "N5", type: "RFQ", title: "RFQ deadline approaching", body: "RFQ-2024-0237 closes in 2 days", time: "Yesterday", unread: false },
];

export const users = [
  { id: "USR-201", name: "Alex Morgan", email: "alex@vendorbridge.io", role: "Admin", dept: "IT", status: "Active" },
  { id: "USR-202", name: "Priya Sharma", email: "priya@vendorbridge.io", role: "Procurement Officer", dept: "Procurement", status: "Active" },
  { id: "USR-203", name: "Daniel Lee", email: "daniel@vendorbridge.io", role: "Manager", dept: "Finance", status: "Active" },
  { id: "USR-204", name: "Arjun Patel", email: "arjun@vendorbridge.io", role: "Manager", dept: "Operations", status: "Active" },
  { id: "USR-205", name: "Ravi Kumar", email: "ravi@acmesupplies.com", role: "Vendor", dept: "—", status: "Active" },
  { id: "USR-206", name: "Meera Iyer", email: "meera@blueocean.in", role: "Vendor", dept: "—", status: "Active" },
  { id: "USR-207", name: "Sara Khan", email: "sara@northwind.in", role: "Vendor", dept: "—", status: "Suspended" },
];

export const spendTrend = [
  { month: "Jan", spend: 42 }, { month: "Feb", spend: 51 }, { month: "Mar", spend: 47 },
  { month: "Apr", spend: 63 }, { month: "May", spend: 58 }, { month: "Jun", spend: 72 },
];

export const funnelData = [
  { stage: "RFQs Issued", count: 124 },
  { stage: "Quotations", count: 87 },
  { stage: "Shortlisted", count: 54 },
  { stage: "Approved", count: 38 },
  { stage: "POs Issued", count: 33 },
];

export const categorySpend = [
  { name: "IT Services", value: 320 },
  { name: "Industrial", value: 210 },
  { name: "Office", value: 140 },
  { name: "Logistics", value: 95 },
  { name: "Packaging", value: 60 },
];

export const vendorPerf = [
  { name: "Acme", delivery: 92, quality: 89 },
  { name: "BlueOcean", delivery: 88, quality: 84 },
  { name: "Northwind", delivery: 95, quality: 91 },
  { name: "Quantum", delivery: 90, quality: 93 },
  { name: "Greenleaf", delivery: 86, quality: 88 },
  { name: "Titan", delivery: 80, quality: 82 },
];