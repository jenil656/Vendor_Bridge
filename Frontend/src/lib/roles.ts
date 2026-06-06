export type Role = "admin" | "procurement" | "vendor" | "manager";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  company?: string;
  avatar?: string;
}

export const ROLE_LABELS: Record<Role, string> = {
  admin: "Administrator",
  procurement: "Procurement Officer",
  vendor: "Vendor",
  manager: "Manager / Approver",
};

export const DEMO_USERS: Record<Role, User> = {
  admin: { id: "U-001", name: "Aarav Mehta", email: "aarav.admin@vendorbridge.io", role: "admin" },
  procurement: { id: "U-002", name: "Priya Sharma", email: "priya.po@vendorbridge.io", role: "procurement" },
  vendor: { id: "U-003", name: "Rohan Verma", email: "rohan@steelcoindustries.com", role: "vendor", company: "SteelCo Industries" },
  manager: { id: "U-004", name: "Neha Iyer", email: "neha.manager@vendorbridge.io", role: "manager" },
};
