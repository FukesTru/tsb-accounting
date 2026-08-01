import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const included = ["Cash flow forecasting and management", "Financial strategy and goal alignment", "Board and investor reporting", "Fundraising and capital strategy support", "M&A financial due diligence", "KPI development and dashboard creation", "Monthly financial review and executive summary"];
const faqs = [
  { q: "What does a fractional CFO do?", a: "A fractional CFO provides the same strategic financial leadership as a full-time CFO — forecasting, investor relations, financial strategy, and executive guidance — but on a part-time or project basis. You get the expertise without the full-time salary." },
  { q: "How is a fractional CFO different from a bookkeeper or accountant?", a: "Bookkeepers and accountants handle historical data — recording transactions and preparing reports. A CFO works on the future — strategy, forecasting, fundraising, and high-level financial decision-making." },
  { q: "How many hours per month does this require?", a: "It varies by engagement. Some clients need 10 hours/month for strategic oversight; others need 40+ during growth phases or fundraising. We scope each engagement based on your actual needs." },
  { q: "When does a business need a fractional CFO?", a: "Typically when revenue exceeds $500K–$1M, when you're raising capital, when you're preparing for an acquisition, or when you simply need a financial co-pilot to help navigate growth." },
  { q: "Do you work with startups?", a: "Yes. We work with early-stage startups that need financial infrastructure from day one, as well as established businesses looking for strategic financial leadership." },
  { q: "How does pricing work?", a: "Fractional CFO engagements are priced based on scope and hours. We provide a clear monthly retainer quote after a free discovery call." },
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
export default function FractionalCFOService() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Fractional CFO & Controller", href: "/services/fractional-cfo-controller" }, { label: "Fractional CFO" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Fractional CFO & Controller</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fractional <span className="text-[#C9A84C]">CFO Services</span> in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4">Executive-level financial strategy and leadership — without the full-time executive cost.</p>
            <div className="flex gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call Us</a></div>
          </div>
        </div>
      </section>
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What's Included</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Our Fractional CFO service gives you a seasoned financial executive in your corner — available when you need strategic guidance, financial modeling, or investor-ready reporting.</p>
              <ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Process</h2>
              {[{ num: "01", title: "Financial Audit & Onboarding", desc: "We review your current financial state, systems, and goals to build a clear picture." }, { num: "02", title: "Strategy & Systems", desc: "We establish financial infrastructure, KPIs, and a strategic roadmap aligned with your goals." }, { num: "03", title: "Ongoing CFO Partnership", desc: "Monthly reviews, proactive guidance, and executive-level support as your business grows." }].map((step) => (
                <div key={step.num} className="flex gap-4 mb-6"><div className="text-2xl font-bold text-[#C9A84C]/40 flex-shrink-0 w-10" style={{ fontFamily: "'Playfair Display', serif" }}>{step.num}</div><div><h3 className="text-[#0B1E33] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div></div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-16"><div className="container mx-auto px-4 lg:px-8 max-w-3xl"><ScrollReveal><h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2><div className="border-t border-white/10">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div></ScrollReveal></div></section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Fractional Controller", href: "/services/fractional-cfo-controller/fractional-controller" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

