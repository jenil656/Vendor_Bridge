import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, CheckCircle2, BarChart3, ShieldCheck, Workflow, Users, FileText, Receipt, Building2, Mail, Phone, MapPin } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Boxes className="h-5 w-5" /></div>
            <span className="text-lg font-bold">VendorBridge</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#workflow" className="hover:text-foreground">Workflow</a>
            <a href="#benefits" className="hover:text-foreground">Benefits</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login"><Button variant="ghost" size="sm">Login</Button></Link>
            <Link to="/register"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark">Create Account</Button></Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-primary-lightest">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary border border-border">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Trusted by 200+ procurement teams
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Enterprise procurement,<br /><span className="text-primary">without the chaos.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              VendorBridge unifies RFQs, vendor management, multi-step approvals, purchase orders and GST invoicing in one auditable workspace built for modern B2B teams.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/register"><Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark">Start free trial <ArrowRight className="ml-1.5 h-4 w-4" /></Button></Link>
              <Link to="/login"><Button size="lg" variant="outline">Request demo</Button></Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {["GST-compliant", "ISO 27001 ready", "Audit trail by default", "Role-based access"].map((x) => (
                <span key={x} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> {x}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Procurement Dashboard</p>
                <p className="text-sm font-semibold">June 2026 snapshot</p>
              </div>
              <span className="rounded-full bg-success-fill px-2.5 py-1 text-xs font-medium text-success">Live</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { l: "Active RFQs", v: "24", t: "+12%" },
                { l: "Pending approvals", v: "8", t: "−3" },
                { l: "Monthly spend", v: "₹6.8Cr", t: "+8%" },
                { l: "Avg cycle time", v: "11d", t: "−2d" },
              ].map((k) => (
                <div key={k.l} className="rounded-lg border border-border bg-background p-3">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{k.l}</p>
                  <p className="mt-1 text-xl font-bold">{k.v}</p>
                  <p className="text-[11px] text-success">{k.t}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {["RFQ-2026-0142 — Steel sheets", "RFQ-2026-0141 — Industrial laptops", "PO-2026-0418 dispatched"].map((r, i) => (
                <div key={r} className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm">
                  <span>{r}</span>
                  <span className={`text-xs ${i === 2 ? "text-success" : "text-warning"}`}>{i === 2 ? "Dispatched" : "Open"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product overview */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Product overview</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Everything procurement, in one workspace.</h2>
          <p className="mt-3 text-muted-foreground">From vendor onboarding to invoice reconciliation — built for procurement officers, vendors, managers and admins.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Building2, t: "Vendor Management", d: "Centralized vendor master with performance scoring, compliance and lifecycle tracking." },
            { icon: FileText, t: "RFQ & Quotations", d: "Publish RFQs, collect quotations and compare offers across price, delivery and quality." },
            { icon: Workflow, t: "Approval Workflows", d: "Multi-step approvals with digital signatures, remarks and full audit history." },
            { icon: Receipt, t: "POs & Invoices", d: "Auto-numbered POs and GST-compliant invoicing with tax breakdown and payment status." },
            { icon: BarChart3, t: "Reports & Analytics", d: "Spend analysis, vendor scorecards, RFQ funnels and procurement KPIs." },
            { icon: ShieldCheck, t: "Audit & Compliance", d: "Tamper-evident audit logs, role-based access and exportable evidence packs." },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-lightest text-primary"><f.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 text-lg font-semibold">{f.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Procurement workflow</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Source to pay, end to end.</h2>
          </div>
          <div className="mt-12 grid gap-3 lg:grid-cols-6">
            {["RFQ created", "Quotations received", "Comparison & shortlisting", "Manager approval", "PO generated", "Invoice & delivery"].map((s, i) => (
              <div key={s} className="rounded-xl border border-border bg-background p-4 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</div>
                <p className="mt-3 text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why VendorBridge</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Cut procurement cycle time by up to 42%.</h2>
            <p className="mt-3 text-muted-foreground">Standardize how you source, approve, order and pay — with visibility every stakeholder can trust.</p>
            <ul className="mt-6 space-y-3">
              {["Single source of truth for vendor data", "Automated approval routing with remarks", "Real-time delivery tracking with timeline", "GST-ready invoicing and reconciliation", "Audit-ready exports for compliance reviews"].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {b}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "42%", l: "Faster cycle time" },
              { v: "18%", l: "Cost savings on average" },
              { v: "200+", l: "Procurement teams" },
              { v: "₹1,800Cr+", l: "Spend managed" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card p-6">
                <p className="text-3xl font-bold text-primary">{s.v}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">What teams say</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built for the people who actually do the work.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { q: "Approval lead time dropped from 9 days to under 48 hours. Our managers finally have visibility.", a: "Procurement Lead, Manufacturing Co." },
              { q: "Vendor scorecards changed how we negotiate. Best procurement decision we've made in years.", a: "CFO, Retail Group" },
              { q: "The audit trail alone is worth the switch. Compliance reviews are a non-event now.", a: "Head of Operations, FMCG" },
            ].map((t) => (
              <div key={t.a} className="rounded-xl border border-border bg-background p-6">
                <p className="text-sm text-foreground">"{t.q}"</p>
                <p className="mt-4 text-xs font-medium text-muted-foreground">— {t.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-primary-dark text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary"><Boxes className="h-5 w-5" /></div>
              <span className="text-lg font-bold">VendorBridge</span>
            </div>
            <p className="mt-3 text-sm text-primary-light">Procurement & vendor management ERP for modern B2B teams.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-light">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#workflow" className="hover:text-white">Workflow</a></li>
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
              <li><Link to="/register" className="hover:text-white">Create account</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-light">
              <li>About</li><li>Security</li><li>Privacy</li><li>Terms</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-light">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@vendorbridge.io</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 22 6100 8800</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai · Bengaluru · Delhi</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary/40 py-5 text-center text-xs text-primary-light">
          © 2026 VendorBridge ERP. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
