import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Role = "admin" | "procurement" | "vendor" | "manager";

export interface AuthUser {
  name: string;
  email: string;
  role: Role;
  company?: string;
}

interface AuthCtx {
  user: AuthUser;
  setRole: (r: Role) => void;
  logout: () => void;
}

const DEFAULT_USER: AuthUser = {
  name: "Alex Morgan",
  email: "alex.morgan@vendorbridge.io",
  role: "admin",
  company: "VendorBridge Inc.",
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(DEFAULT_USER);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("vb:user");
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {}
    }
  }, []);

  const persist = (u: AuthUser) => {
    setUser(u);
    if (typeof window !== "undefined") localStorage.setItem("vb:user", JSON.stringify(u));
  };

  return (
    <Ctx.Provider
      value={{
        user,
        setRole: (role) => {
          const profiles: Record<Role, Partial<AuthUser>> = {
            admin: { name: "Alex Morgan", email: "alex@vendorbridge.io", company: "VendorBridge Inc." },
            procurement: { name: "Priya Sharma", email: "priya@vendorbridge.io", company: "VendorBridge Inc." },
            vendor: { name: "Ravi Kumar", email: "ravi@acmesupplies.com", company: "Acme Supplies Pvt Ltd" },
            manager: { name: "Daniel Lee", email: "daniel@vendorbridge.io", company: "VendorBridge Inc." },
          };
          persist({ ...user, ...profiles[role], role });
        },
        logout: () => persist(DEFAULT_USER),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth outside provider");
  return v;
}