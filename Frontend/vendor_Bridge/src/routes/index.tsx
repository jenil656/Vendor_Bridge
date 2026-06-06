import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck, BarChart3, Workflow, Users, FileText, ShoppingCart,
  CheckCircle2, ArrowRight, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VendorBridge — Procurement & Vendor Management ERP" },
      { name: "description", content: "Enterprise procurement, RFQ management, vendor performance, approvals, POs and invoicing — all in one ERP." },
      { property: "og:title", content: "VendorBridge ERP" },
      { property: "og:description", content: "Modern procurement & vendor management for enterprises." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#1A202C]">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2E5FA3] font-bold text-white">V</div>
            <span className="font-semibold">VendorBridge</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[#4B5568] md:flex">
            <a href="#features" className="hover:text-[#1A202C]">Features</a>
            <a href="#workflow" className="hover:text-[#1A202C]">Workflow</a>
            <a href="#benefits" className="hover:text-[#1A202C]">Benefits</a>
            <a href="#testimonials" className="hover:text-[#1A202C]">Customers</a>
            <a href="#contact" className="hover:text-[#1A202C]">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="rounded-lg px-3 py-1.5 text-sm font-medium text-[#1A202C] hover:bg-[#F7F8FA]">Login</Link>
            <Link to="/register" className="rounded-lg bg-[#2E5FA3] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1B2D55]">Create Account</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[#E2E8F0] bg-[#F7F8FA]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#EEF2F9] px-3 py-1 text-xs font-medium text-[#2E5FA3]">
              Procurement & Vendor Management ERP
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Run procurement like a Fortune 500 — without the Fortune 500 setup.
            </h1>
            <p className="mt-4 max-w-xl text-base text-[#4B5568]">
              VendorBridge unifies vendor onboarding, RFQs, quotation comparison, approvals, POs and invoicing in one auditable workflow. Built for finance, procurement and suppliers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/register" className="inline-flex items-center gap-1 rounded-lg bg-[#2E5FA3] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1B2D55]">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#contact" className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-medium text-[#1A202C] hover:bg-[#F7F8FA]">
                Request Demo
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#4B5568]">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#2D9A58]" /> SOC 2 ready</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#2D9A58]" /> GST compliant</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#2D9A58]" /> Full audit trail</span>
            </div>
          </div>

          {/* Mock dashboard preview */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <div className="text-sm font-medium">Admin overview</div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#2E5FA3]" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                { l: "Active RFQs", v: "47", t: "+12%" },
                { l: "Pending Approvals", v: "9", t: "−3" },
                { l: "Monthly Spend", v: "₹ 72.4L", t: "+8%" },
              ].map((k) => (
                <div key={k.l} className="rounded-lg border border-[#E2E8F0] bg-[#F7F8FA] p-3">
                  <div className="text-[10px] text-[#4B5568]">{k.l}</div>
                  <div className="mt-1 text-lg font-semibold">{k.v}</div>
                  <div className="text-[10px] text-[#2D9A58]">{k.t}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 h-32 rounded-lg border border-[#E2E8F0] bg-[#F7F8FA] p-3">
              <div className="flex h-full items-end gap-1.5">
                {[42, 51, 47, 63, 58, 72, 65, 78, 70, 84, 79, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-[#2E5FA3]" style={{ height: `${h}%`, opacity: 0.3 + i * 0.05 }} />
                ))}
              </div>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { id: "RFQ-2024-0241", v: "Acme Supplies", s: "Submitted" },
                { id: "PO-7740", v: "Quantum Tech", s: "Approved" },
              ].map((r) => (
                <div key={r.id} className="flex items-center justify-between rounded-lg border border-[#E2E8F0] p-2.5 text-xs">
                  <div><span className="font-medium">{r.id}</span> · {r.v}</div>
                  <span className="rounded-full bg-[#E6F5EE] px-2 py-0.5 text-[10px] font-medium text-[#2D9A58]">{r.s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold">Procurement, end to end.</h2>
            <p className="mt-2 text-[#4B5568]">One thread from RFQ to invoice — with vendor and finance always in sync.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            {[
              { i: FileText, t: "RFQ", d: "Draft, publish, assign vendors" },
              { i: Users, t: "Quotations", d: "Vendors submit, you compare" },
              { i: CheckCircle2, t: "Approve", d: "Multi-level workflow & audit" },
              { i: ShoppingCart, t: "PO", d: "Auto-generate, email, sign" },
              { i: ShieldCheck, t: "Deliver", d: "Track shipment to receipt" },
              { i: BarChart3, t: "Invoice", d: "GST-ready, reconciled" },
            ].map((s, i) => (
              <div key={s.t} className="relative rounded-xl border border-[#E2E8F0] bg-white p-4">
                <div className="absolute -top-2 left-3 rounded-full bg-[#FDF4E3] px-2 py-0.5 text-[10px] font-semibold text-[#9A6310]">Step {i + 1}</div>
                <s.i className="h-5 w-5 text-[#2E5FA3]" />
                <div className="mt-3 text-sm font-semibold">{s.t}</div>
                <div className="mt-1 text-xs text-[#4B5568]">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-[#E2E8F0] bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold">Everything procurement teams need</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { i: Workflow, t: "Workflow engine", d: "Configurable multi-step approvals with delegation and SLAs." },
              { i: Users, t: "Vendor 360", d: "Performance scoring, compliance, GST, blacklist controls." },
              { i: BarChart3, t: "Spend analytics", d: "Real-time spend by category, vendor, department." },
              { i: ShieldCheck, t: "Audit & compliance", d: "Immutable logs, digital signatures, document vault." },
              { i: FileText, t: "RFQ to PO", d: "From draft RFQ to signed PO in a single thread." },
              { i: ShoppingCart, t: "Invoice & GST", d: "Auto-calculated GST, payment status, reconciliation." },
            ].map((f) => (
              <div key={f.t} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2F9] text-[#2E5FA3]"><f.i className="h-5 w-5" /></div>
                <h3 className="mt-4 text-base font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-[#4B5568]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="border-b border-[#E2E8F0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Move faster. Spend smarter.</h2>
            <p className="mt-2 text-[#4B5568]">Teams using VendorBridge close RFQs 4× faster and recover 12% of indirect spend on average.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Cut RFQ-to-PO cycle from weeks to days",
                "Score vendors on delivery, quality, and compliance",
                "Standardize approvals across every department",
                "Never miss an invoice or payment deadline",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2D9A58]" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "4×", l: "Faster RFQ cycles" },
              { v: "12%", l: "Indirect spend recovered" },
              { v: "98%", l: "On-time PO closure" },
              { v: "1,200+", l: "Vendors onboarded" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
                <div className="text-3xl font-semibold text-[#2E5FA3]">{s.v}</div>
                <div className="mt-1 text-sm text-[#4B5568]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-b border-[#E2E8F0] bg-[#F7F8FA]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold">Trusted by procurement teams</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { q: "Our RFQ cycle dropped from 11 days to 3. The approval workflow alone saved us a headcount.", n: "Riya Menon", r: "Head of Procurement, Northstar Foods" },
              { q: "Vendor scoring finally gave us objective data. We renegotiated three contracts in the first quarter.", n: "Vikram Singh", r: "CFO, Helios Manufacturing" },
              { q: "Vendors love it too — they get clear deadlines and predictable payments.", n: "Sara Khan", r: "Director of Sourcing, Aurora Retail" },
            ].map((t) => (
              <figure key={t.n} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
                <div className="flex gap-0.5 text-[#E09B2E]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-3 text-sm text-[#1A202C]">"{t.q}"</blockquote>
                <figcaption className="mt-4 text-xs text-[#4B5568]"><span className="font-medium text-[#1A202C]">{t.n}</span> · {t.r}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Talk to our team</h2>
              <p className="mt-2 text-[#4B5568]">See how VendorBridge can streamline your procurement in a 30-minute walkthrough.</p>
              <div className="mt-6 space-y-2 text-sm text-[#4B5568]">
                <div><span className="font-medium text-[#1A202C]">Email:</span> hello@vendorbridge.io</div>
                <div><span className="font-medium text-[#1A202C]">Phone:</span> +91 80 4000 1234</div>
                <div><span className="font-medium text-[#1A202C]">Address:</span> 4th Floor, Prestige Tower, Bengaluru 560001</div>
              </div>
            </div>
            <form className="rounded-xl border border-[#E2E8F0] bg-white p-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-3 md:grid-cols-2">
                <input className="h-10 rounded-lg border border-[#E2E8F0] px-3 text-sm" placeholder="Full name" />
                <input className="h-10 rounded-lg border border-[#E2E8F0] px-3 text-sm" placeholder="Work email" />
              </div>
              <input className="mt-3 h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm" placeholder="Company" />
              <textarea className="mt-3 h-24 w-full rounded-lg border border-[#E2E8F0] p-3 text-sm" placeholder="How can we help?" />
              <button className="mt-3 rounded-lg bg-[#2E5FA3] px-4 py-2 text-sm font-medium text-white hover:bg-[#1B2D55]">Request Demo</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B2D55] text-[#C4D2EA]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2E5FA3] font-bold">V</div>
              <span className="font-semibold">VendorBridge</span>
            </div>
            <p className="mt-3 text-xs">Procurement & Vendor Management ERP for modern enterprises.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="mt-3 space-y-2 text-xs">
              <li><a href="#features">Features</a></li>
              <li><a href="#workflow">Workflow</a></li>
              <li><a href="#benefits">Benefits</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-xs">
              <li>About</li><li>Customers</li><li>Careers</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Get started</div>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Create Account</Link></li>
              <li><a href="#contact">Request Demo</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2E5FA3]/40 py-4 text-center text-xs">© 2026 VendorBridge Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}
