import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Fragment, type ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; to?: string }[];
  actions?: ReactNode;
}

export function PageHeader({ title, description, breadcrumbs, actions }: Props) {
  const loc = useLocation();
  const auto = breadcrumbs ?? loc.pathname.split("/").filter(Boolean).map((s, i, arr) => ({
    label: s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    to: "/" + arr.slice(0, i + 1).join("/"),
  }));

  return (
    <div className="sticky top-0 z-20 -mx-6 -mt-6 mb-6 border-b border-border bg-background/80 px-6 pb-4 pt-6 backdrop-blur">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/dashboard" className="flex items-center gap-1 hover:text-foreground"><Home className="h-3 w-3" /> Home</Link>
        {auto.map((b, i) => (
          <Fragment key={i}>
            <ChevronRight className="h-3 w-3" />
            {b.to ? <Link to={b.to} className="hover:text-foreground">{b.label}</Link> : <span>{b.label}</span>}
          </Fragment>
        ))}
      </nav>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
        {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}
