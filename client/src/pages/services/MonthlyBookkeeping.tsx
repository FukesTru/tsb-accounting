import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const included = ["Monthly transaction categorization and coding", "Bank and credit card reconciliations", "Accounts payable and receivable tracking", "Monthly financial reports (P&L, Balance Sheet)", "QuickBooks or software management", "Tax-ready records year-round", "Direct communication with Victoria's team"];
const faqs = [
  { q: "What's included in monthly bookkeeping?", a: "Our monthly bookkeeping service includes transaction categorization, bank reconciliations, AP/AR tracking, and delivery of monthly financial reports. Everything you need to understand your business finances." },
  { q: "How do I share my financial information with you?", a: "We use secure document sharing and connect directly to your accounting software (like QuickBooks Online). The process is simple and we handle the technical setup." },
  { q: "What if I'm behind on my books?", a: "No problem. We offer cleanup and catch-up bookkeeping to get you current before starting monthly service. We'll assess the scope and give you a clear quote." },
  { q: "Do you work with QuickBooks?", a: "Yes. We specialize in QuickBooks Online and Desktop. We can also work with other platforms or help you migrate to QuickBooks if needed." },
  { q: "How much does monthly bookkeeping cost?", a: "Pricing is based on your transaction volume and complexity. We provide a custom quote after a free discovery call — no surprises." },
  { q: "Can I cancel anytime?", a: "Yes. We work on monthly arrangements with no long-term contracts required. We earn your business every month." },
];
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button className="w-full flex items-center justify-between py-4 text-left gap-4" onClick={() => setOpen(!open)}>
        <span className="text-white font-medium text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[#C9A84C] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-white/60 text-sm leading-relaxed pb-4">{a}</p>
      </motion.div>
    </div>
  );
}
export default function MonthlyBookkeeping() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Bookkeeping", href: "/services/bookkeeping" }, { label: "Monthly Bookkeeping" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Bookkeeping</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Monthly <span className="text-[#C9A84C]">Bookkeeping</span> Services in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4">Consistent, accurate monthly bookkeeping — so your records are always current and your decisions are always informed.</p>
            <div className="flex gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call Us</a></div>
          </div>
        </div>
      </section>
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What's Included</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Stop spending your weekends on bookkeeping. Our monthly service handles everything from transaction coding to financial report delivery — so you always know where your business stands.</p>
              <ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Process</h2>
              {[{ num: "01", title: "Onboarding & Setup", desc: "We connect to your accounting software, review your chart of accounts, and set up our workflow." }, { num: "02", title: "Monthly Bookkeeping", desc: "We categorize transactions, reconcile accounts, and manage AP/AR throughout the month." }, { num: "03", title: "Monthly Report Delivery", desc: "You receive clean financial reports by the agreed deadline every month — no chasing required." }].map((step) => (
                <div key={step.num} className="flex gap-4 mb-6"><div className="text-2xl font-bold text-[#C9A84C]/40 flex-shrink-0 w-10" style={{ fontFamily: "'Playfair Display', serif" }}>{step.num}</div><div><h3 className="text-[#0B1E33] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div></div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-16"><div className="container mx-auto px-4 lg:px-8 max-w-3xl"><ScrollReveal><h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2><div className="border-t border-white/10">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div></ScrollReveal></div></section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Cleanup Bookkeeping", href: "/services/bookkeeping/cleanup-catch-up" }, { label: "Bookkeeping Overview", href: "/services/bookkeeping" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

