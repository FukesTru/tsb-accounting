import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

const subServices = [
  { title: "Monthly Bookkeeping", href: "/services/bookkeeping/monthly-bookkeeping", desc: "Consistent, accurate monthly bookkeeping so your records are always current and decision-ready." },
  { title: "Cleanup & Catch-Up Bookkeeping", href: "/services/bookkeeping/cleanup-catch-up", desc: "Get your books current no matter how far behind — weeks, months, or years." },
  { title: "Payroll Support", href: "/services/bookkeeping", desc: "Accurate, timely payroll processing and reporting for your team." },
  { title: "Accounts Payable & Receivable", href: "/services/bookkeeping", desc: "Keep your cash flow healthy with organized AP/AR management." },
  { title: "QuickBooks Setup & Support", href: "/services/bookkeeping", desc: "Get set up right from the start or optimize your existing QuickBooks setup." },
];

export default function BookkeepingPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Bookkeeping" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bookkeeping <span className="text-[#C9A84C]">Services</span> in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Accurate, timely bookkeeping that keeps your numbers clean, current, and ready for every decision your business needs to make.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> (479) 633-1206</a></div>
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <p className="text-slate-600 text-lg leading-relaxed">Good bookkeeping is the foundation of every healthy business. Without accurate, up-to-date records, you can't make confident decisions, prepare for tax season, or understand where your money is going. TSB's bookkeeping services give you that foundation — handled with precision, delivered on time, every month.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0B1E33] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal><h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Bookkeeping Services</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <Link href={s.href} className="block bg-white/5 border border-white/10 rounded-sm p-6 hover:border-[#C9A84C]/50 transition-all group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold">Learn More <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#0B1E33] mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Why Work with a Dedicated Bookkeeper?</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Save Time", desc: "Stop spending your evenings on receipts and reconciliations. Focus on running your business." },
              { title: "Avoid Costly Errors", desc: "Accurate books prevent tax penalties, missed deductions, and financial surprises." },
              { title: "Make Better Decisions", desc: "Clean, current financials give you the clarity to make confident business decisions." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-10 h-0.5 bg-[#C9A84C] mx-auto mb-4" />
                  <h3 className="text-[#0B1E33] font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready for clean, current books?</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Schedule a free discovery call and let's talk about getting your bookkeeping handled properly.</p>
            <Link href="/contact" className="btn-gold inline-flex">Get Started <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Fractional CFO", href: "/services/fractional-cfo-controller" }, { label: "Lowell, AR", href: "/areas/lowell-ar" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

