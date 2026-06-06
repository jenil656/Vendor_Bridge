import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEMO_USERS, type Role, type User } from "@/lib/roles";

interface AuthCtx {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
  setRole: (role: Role) => void;
}

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("vb_user");
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch { /* ignore */ }
    }
  }, []);

  const persist = (u: User | null) => {
    setUser(u);
    if (u) localStorage.setItem("vb_user", JSON.stringify(u));
    else localStorage.removeItem("vb_user");
  };

  return (
    <Ctx.Provider
      value={{
        user,
        login: (role) => persist(DEMO_USERS[role]),
        logout: () => persist(null),
        setRole: (role) => persist(DEMO_USERS[role]),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
}
