import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const included = ["Full review and assessment of existing books", "Transaction categorization and correction", "Bank and credit card reconciliation for all periods", "Duplicate entry removal and error correction", "Chart of accounts cleanup and optimization", "Tax-ready records upon completion", "Transition to ongoing monthly bookkeeping (optional)"];
const faqs = [
  { q: "How far back can you go?", a: "We can clean up books going back as far as needed — months or years. We'll assess the scope during a free discovery call and give you a clear timeline and quote." },
  { q: "How long does cleanup take?", a: "Timeline depends on how far behind you are and the complexity of your transactions. A few months of cleanup might take 1–2 weeks; multiple years could take 4–8 weeks. We'll give you a realistic estimate upfront." },
  { q: "Will you need access to my bank statements?", a: "Yes. We'll need bank and credit card statements for the periods being cleaned up. We use secure document sharing to protect your information." },
  { q: "What software do you use for cleanup?", a: "We primarily use QuickBooks (Online and Desktop). If you're using a different platform, we can work with it or help you migrate to QuickBooks." },
  { q: "Can I start monthly bookkeeping after cleanup?", a: "Absolutely — and we recommend it. Once your books are clean and current, transitioning to monthly bookkeeping keeps them that way." },
  { q: "How is cleanup priced?", a: "Cleanup is priced based on the number of months/years to be cleaned and transaction volume. We provide a fixed-price quote after reviewing your situation — no hourly billing surprises." },
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
export default function CleanupBookkeeping() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Bookkeeping", href: "/services/bookkeeping" }, { label: "Cleanup & Catch-Up" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Bookkeeping</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cleanup & Catch-Up <span className="text-[#C9A84C]">Bookkeeping</span> in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4">Behind on your books? We'll get you current — no matter how far back you need to go.</p>
            <div className="flex gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call Us</a></div>
          </div>
        </div>
      </section>
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What's Included</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Whether your books haven't been touched in months or you've never had proper bookkeeping at all, we'll get everything cleaned up, reconciled, and tax-ready. No judgment — just results.</p>
              <ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Process</h2>
              {[{ num: "01", title: "Assessment & Quote", desc: "We review your existing records, assess the scope of cleanup needed, and provide a fixed-price quote." }, { num: "02", title: "Systematic Cleanup", desc: "We work through your records period by period — categorizing, reconciling, and correcting errors." }, { num: "03", title: "Delivery & Handoff", desc: "You receive clean, current, tax-ready books — and the option to transition to monthly bookkeeping." }].map((step) => (
                <div key={step.num} className="flex gap-4 mb-6"><div className="text-2xl font-bold text-[#C9A84C]/40 flex-shrink-0 w-10" style={{ fontFamily: "'Playfair Display', serif" }}>{step.num}</div><div><h3 className="text-[#0B1E33] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div></div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-16"><div className="container mx-auto px-4 lg:px-8 max-w-3xl"><ScrollReveal><h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2><div className="border-t border-white/10">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div></ScrollReveal></div></section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Monthly Bookkeeping", href: "/services/bookkeeping/monthly-bookkeeping" }, { label: "Bookkeeping Overview", href: "/services/bookkeeping" }, { label: "Tax Planning", href: "/services/accounting-advisory/tax-planning" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

