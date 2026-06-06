import { useEffect, useState } from "react";

export default function ClientApp() {
  const [mounted, setMounted] = useState(false);
  const [App, setApp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    setMounted(true);
    import("./App").then((mod) => setApp(() => mod.default));
  }, []);

  if (!mounted || !App) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-light border-t-primary" />
          <p className="text-sm text-muted-foreground">Loading VendorBridge…</p>
        </div>
      </div>
    );
  }
  return <App />;
}
