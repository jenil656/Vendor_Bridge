export const VENDORS = [
  { id: "VB-V-001", company: "SteelCo Industries", gst: "27AABCS1234R1Z5", contact: "Rohan Verma", email: "rohan@steelcoindustries.com", phone: "+91 98200 11122", category: "Raw Materials", city: "Mumbai", status: "Active", delivery: 92, quality: 88, response: 94, compliance: 96, volume: 4820000 },
  { id: "VB-V-002", company: "Apex Logistics Pvt Ltd", gst: "29AAFCA9876P1Z2", contact: "Meera Nair", email: "meera@apexlog.com", phone: "+91 99001 23456", category: "Logistics", city: "Bengaluru", status: "Active", delivery: 87, quality: 81, response: 90, compliance: 92, volume: 2150000 },
  { id: "VB-V-003", company: "Bluewave Components", gst: "07AABCB5678N1Z9", contact: "Karan Singh", email: "karan@bluewave.in", phone: "+91 98765 43210", category: "Electronics", city: "Delhi", status: "Active", delivery: 78, quality: 84, response: 72, compliance: 88, volume: 1640000 },
  { id: "VB-V-004", company: "GreenLeaf Packaging", gst: "33AAACG2345Q1Z1", contact: "Anita Krishnan", email: "anita@greenleaf.co", phone: "+91 90876 54321", category: "Packaging", city: "Chennai", status: "Suspended", delivery: 64, quality: 71, response: 60, compliance: 70, volume: 580000 },
  { id: "VB-V-005", company: "Titan Hardware Supply", gst: "24AAACT8765K1Z4", contact: "Sandeep Patel", email: "sandeep@titanhw.com", phone: "+91 99887 66554", category: "Hardware", city: "Ahmedabad", status: "Active", delivery: 95, quality: 92, response: 88, compliance: 94, volume: 3920000 },
  { id: "VB-V-006", company: "Nimbus Cloud Services", gst: "29AAJCN1122F1Z6", contact: "Divya Rao", email: "divya@nimbus.io", phone: "+91 98453 22110", category: "IT Services", city: "Bengaluru", status: "Active", delivery: 90, quality: 95, response: 96, compliance: 97, volume: 5210000 },
  { id: "VB-V-007", company: "RedRock Office Supplies", gst: "27AAECR4422L1Z3", contact: "Vikram Joshi", email: "vikram@redrock.in", phone: "+91 90011 22334", category: "Office Supplies", city: "Pune", status: "Blacklisted", delivery: 42, quality: 50, response: 38, compliance: 45, volume: 120000 },
  { id: "VB-V-008", company: "Sapphire Chemicals", gst: "06AAGCS9988M1Z7", contact: "Pooja Bansal", email: "pooja@sapphire.com", phone: "+91 98711 88990", category: "Chemicals", city: "Gurgaon", status: "Active", delivery: 85, quality: 89, response: 82, compliance: 91, volume: 2890000 },
];

export const RFQS = [
  { id: "RFQ-2026-0142", title: "Steel sheets — 5mm cold rolled", qty: 1200, unit: "kg", deadline: "2026-06-18", vendors: 6, responses: 4, status: "Published", value: 720000, created: "2026-06-01" },
  { id: "RFQ-2026-0141", title: "Industrial laptops — Q3 refresh", qty: 35, unit: "units", deadline: "2026-06-12", vendors: 4, responses: 4, status: "Under Review", value: 2450000, created: "2026-05-28" },
  { id: "RFQ-2026-0140", title: "Cardboard packaging — 200x150x100", qty: 8000, unit: "units", deadline: "2026-06-09", vendors: 3, responses: 2, status: "Quotation Received", value: 180000, created: "2026-05-25" },
  { id: "RFQ-2026-0139", title: "Annual office stationery contract", qty: 1, unit: "contract", deadline: "2026-06-15", vendors: 5, responses: 5, status: "Approved", value: 640000, created: "2026-05-20" },
  { id: "RFQ-2026-0138", title: "Datacenter UPS — 10kVA", qty: 8, unit: "units", deadline: "2026-06-05", vendors: 3, responses: 3, status: "Rejected", value: 1280000, created: "2026-05-18" },
  { id: "RFQ-2026-0137", title: "Logistics partnership — Q3", qty: 1, unit: "contract", deadline: "2026-06-22", vendors: 5, responses: 1, status: "Draft", value: 3600000, created: "2026-06-04" },
];

export const QUOTATIONS = [
  { id: "Q-9821", rfq: "RFQ-2026-0142", vendor: "SteelCo Industries", unitPrice: 580, total: 696000, delivery: 14, rating: 4.5, status: "Submitted", submitted: "2026-06-04" },
  { id: "Q-9820", rfq: "RFQ-2026-0142", vendor: "Titan Hardware Supply", unitPrice: 595, total: 714000, delivery: 10, rating: 4.7, status: "Submitted", submitted: "2026-06-04" },
  { id: "Q-9819", rfq: "RFQ-2026-0142", vendor: "Bluewave Components", unitPrice: 612, total: 734400, delivery: 18, rating: 4.0, status: "Submitted", submitted: "2026-06-03" },
  { id: "Q-9818", rfq: "RFQ-2026-0142", vendor: "Sapphire Chemicals", unitPrice: 605, total: 726000, delivery: 12, rating: 4.3, status: "Draft", submitted: "—" },
  { id: "Q-9810", rfq: "RFQ-2026-0141", vendor: "Nimbus Cloud Services", unitPrice: 68000, total: 2380000, delivery: 21, rating: 4.8, status: "Approved", submitted: "2026-05-30" },
  { id: "Q-9809", rfq: "RFQ-2026-0141", vendor: "Bluewave Components", unitPrice: 71000, total: 2485000, delivery: 18, rating: 4.0, status: "Submitted", submitted: "2026-05-30" },
];

export const APPROVALS = [
  { id: "AP-5521", title: "RFQ-2026-0141 — Industrial laptops", requestor: "Priya Sharma", value: 2380000, type: "Quotation Approval", submitted: "2026-06-02", status: "Pending", priority: "High" },
  { id: "AP-5520", title: "RFQ-2026-0139 — Stationery contract", requestor: "Priya Sharma", value: 640000, type: "PO Generation", submitted: "2026-06-01", status: "Approved", priority: "Medium" },
  { id: "AP-5519", title: "Vendor onboarding — Nimbus Cloud", requestor: "Aarav Mehta", value: 0, type: "Vendor Approval", submitted: "2026-05-31", status: "Approved", priority: "Low" },
  { id: "AP-5518", title: "RFQ-2026-0138 — Datacenter UPS", requestor: "Priya Sharma", value: 1280000, type: "Quotation Approval", submitted: "2026-05-29", status: "Rejected", priority: "High" },
  { id: "AP-5517", title: "Invoice INV-2026-0418 — SteelCo", requestor: "Priya Sharma", value: 696000, type: "Invoice Approval", submitted: "2026-05-28", status: "Pending", priority: "Medium" },
];

export const PURCHASE_ORDERS = [
  { id: "PO-2026-0418", vendor: "SteelCo Industries", value: 696000, items: 1, status: "Dispatched", created: "2026-06-03", expected: "2026-06-17" },
  { id: "PO-2026-0417", vendor: "Nimbus Cloud Services", value: 2380000, items: 35, status: "In Transit", created: "2026-06-01", expected: "2026-06-22" },
  { id: "PO-2026-0416", vendor: "Apex Logistics Pvt Ltd", value: 420000, items: 1, status: "Delivered", created: "2026-05-28", expected: "2026-06-05" },
  { id: "PO-2026-0415", vendor: "Titan Hardware Supply", value: 980000, items: 24, status: "Ordered", created: "2026-05-26", expected: "2026-06-12" },
  { id: "PO-2026-0414", vendor: "Sapphire Chemicals", value: 1140000, items: 8, status: "Delivered", created: "2026-05-22", expected: "2026-05-30" },
];

export const INVOICES = [
  { id: "INV-2026-0418", po: "PO-2026-0418", vendor: "SteelCo Industries", amount: 696000, tax: 125280, total: 821280, due: "2026-06-30", status: "Pending" },
  { id: "INV-2026-0416", po: "PO-2026-0416", vendor: "Apex Logistics Pvt Ltd", amount: 420000, tax: 75600, total: 495600, due: "2026-06-12", status: "Paid" },
  { id: "INV-2026-0414", po: "PO-2026-0414", vendor: "Sapphire Chemicals", amount: 1140000, tax: 205200, total: 1345200, due: "2026-06-08", status: "Overdue" },
  { id: "INV-2026-0410", po: "PO-2026-0411", vendor: "Titan Hardware Supply", amount: 560000, tax: 100800, total: 660800, due: "2026-06-25", status: "Pending" },
  { id: "INV-2026-0405", po: "PO-2026-0405", vendor: "Nimbus Cloud Services", amount: 980000, tax: 176400, total: 1156400, due: "2026-05-31", status: "Paid" },
];

export const USERS = [
  { id: "U-001", name: "Aarav Mehta", email: "aarav.admin@vendorbridge.io", role: "Admin", department: "IT", status: "Active", lastLogin: "2026-06-05 09:14" },
  { id: "U-002", name: "Priya Sharma", email: "priya.po@vendorbridge.io", role: "Procurement Officer", department: "Procurement", status: "Active", lastLogin: "2026-06-05 10:02" },
  { id: "U-003", name: "Rohan Verma", email: "rohan@steelcoindustries.com", role: "Vendor", department: "External", status: "Active", lastLogin: "2026-06-04 18:48" },
  { id: "U-004", name: "Neha Iyer", email: "neha.manager@vendorbridge.io", role: "Manager", department: "Operations", status: "Active", lastLogin: "2026-06-05 08:21" },
  { id: "U-005", name: "Karan Singh", email: "karan@bluewave.in", role: "Vendor", department: "External", status: "Suspended", lastLogin: "2026-05-28 13:11" },
  { id: "U-006", name: "Suresh Babu", email: "suresh.po@vendorbridge.io", role: "Procurement Officer", department: "Procurement", status: "Active", lastLogin: "2026-06-04 17:35" },
];

export const ACTIVITY = [
  { id: 1, user: "Priya Sharma", action: "Created RFQ-2026-0142", type: "rfq", time: "2 hours ago" },
  { id: 2, user: "Rohan Verma", action: "Submitted quotation Q-9821 for RFQ-2026-0142", type: "quotation", time: "1 hour ago" },
  { id: 3, user: "Neha Iyer", action: "Approved AP-5520 — Stationery contract", type: "approval", time: "4 hours ago" },
  { id: 4, user: "System", action: "Auto-generated PO-2026-0418 for SteelCo Industries", type: "po", time: "5 hours ago" },
  { id: 5, user: "Aarav Mehta", action: "Onboarded vendor Nimbus Cloud Services", type: "vendor", time: "yesterday" },
  { id: 6, user: "Priya Sharma", action: "Generated invoice INV-2026-0418", type: "invoice", time: "yesterday" },
  { id: 7, user: "Suresh Babu", action: "Logged in from Pune, IN", type: "auth", time: "yesterday" },
  { id: 8, user: "Neha Iyer", action: "Rejected AP-5518 — Datacenter UPS", type: "approval", time: "2 days ago" },
];

export const NOTIFICATIONS = [
  { id: 1, title: "New quotation received", desc: "SteelCo submitted Q-9821 on RFQ-2026-0142", time: "15m", read: false, type: "rfq" },
  { id: 2, title: "Approval pending", desc: "AP-5521 awaiting your review (₹23.8L)", time: "1h", read: false, type: "approval" },
  { id: 3, title: "Invoice overdue", desc: "INV-2026-0414 from Sapphire Chemicals is past due", time: "3h", read: false, type: "invoice" },
  { id: 4, title: "PO dispatched", desc: "PO-2026-0418 — expected delivery 2026-06-17", time: "5h", read: true, type: "po" },
  { id: 5, title: "Vendor blacklisted", desc: "RedRock Office Supplies status changed", time: "1d", read: true, type: "vendor" },
];

export const MONTHLY_SPEND = [
  { month: "Jan", spend: 4.2, target: 5.0 },
  { month: "Feb", spend: 5.8, target: 5.0 },
  { month: "Mar", spend: 4.9, target: 5.2 },
  { month: "Apr", spend: 6.4, target: 5.5 },
  { month: "May", spend: 7.1, target: 6.0 },
  { month: "Jun", spend: 6.8, target: 6.5 },
];

export const PROCUREMENT_FUNNEL = [
  { stage: "RFQs Created", value: 142 },
  { stage: "Quotations Received", value: 118 },
  { stage: "Under Review", value: 86 },
  { stage: "Approved", value: 64 },
  { stage: "PO Generated", value: 58 },
  { stage: "Delivered", value: 49 },
];

export const VENDOR_PERFORMANCE = [
  { name: "SteelCo", score: 92 },
  { name: "Titan HW", score: 95 },
  { name: "Nimbus", score: 96 },
  { name: "Apex Log", score: 87 },
  { name: "Sapphire", score: 89 },
  { name: "Bluewave", score: 78 },
  { name: "GreenLeaf", score: 64 },
];

export const CATEGORY_SPLIT = [
  { name: "IT Services", value: 32 },
  { name: "Raw Materials", value: 24 },
  { name: "Logistics", value: 14 },
  { name: "Hardware", value: 12 },
  { name: "Chemicals", value: 10 },
  { name: "Other", value: 8 },
];

export const DELIVERY_TIMELINE = [
  { step: "Ordered", date: "2026-06-03 09:00", done: true, note: "PO confirmed by SteelCo Industries" },
  { step: "Dispatched", date: "2026-06-05 14:20", done: true, note: "Shipment picked up by Apex Logistics" },
  { step: "In Transit", date: "2026-06-07 06:00", done: true, note: "Currently at Pune hub, ETA 36 hours" },
  { step: "Delivered", date: "2026-06-17 (Expected)", done: false, note: "Awaiting delivery confirmation" },
];

export const AUDIT_LOGS = [
  { id: "AL-9981", user: "Aarav Mehta", action: "UPDATED user role", target: "U-006 → Procurement Officer", ip: "10.42.18.5", time: "2026-06-05 09:14" },
  { id: "AL-9980", user: "Neha Iyer", action: "APPROVED purchase order", target: "PO-2026-0418", ip: "10.42.18.21", time: "2026-06-05 08:48" },
  { id: "AL-9979", user: "Priya Sharma", action: "CREATED RFQ", target: "RFQ-2026-0142", ip: "10.42.18.9", time: "2026-06-04 17:02" },
  { id: "AL-9978", user: "System", action: "BLACKLISTED vendor", target: "RedRock Office Supplies", ip: "system", time: "2026-06-04 03:00" },
  { id: "AL-9977", user: "Rohan Verma", action: "SUBMITTED quotation", target: "Q-9821", ip: "203.0.113.18", time: "2026-06-04 19:21" },
];
