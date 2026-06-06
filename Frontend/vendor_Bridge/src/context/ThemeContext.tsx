import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
const Ctx = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const stored = (localStorage.getItem("vb_theme") as Theme) || "light";
    setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("vb_theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}
export function useTheme() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useTheme outside provider");
  return c;
}
