import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const included = ["Monthly financial close and reporting", "Internal controls design and implementation", "Accounts payable and receivable oversight", "Bank and account reconciliations", "Compliance and audit preparation", "Staff accounting supervision", "Financial reporting package preparation"];
const faqs = [
  { q: "What's the difference between a controller and a CFO?", a: "A controller focuses on the accuracy and integrity of your financial records — the past and present. A CFO focuses on strategy and the future. Many businesses need both, which is why we offer both as fractional services." },
  { q: "Do I need a controller if I already have a bookkeeper?", a: "A bookkeeper records transactions. A controller reviews, reconciles, and ensures the accuracy and completeness of your financial records. If you have a bookkeeper, a controller adds an essential layer of oversight and quality control." },
  { q: "What size business needs a fractional controller?", a: "Typically businesses with $1M+ in revenue, multiple employees, or complex financial operations benefit most. But any business that needs reliable financial reporting can benefit." },
  { q: "Can you work with our existing team?", a: "Absolutely. We often work alongside existing bookkeepers, accountants, and finance staff — providing oversight, training, and quality control." },
  { q: "Is this service available remotely?", a: "Yes. We serve clients virtually across the US. All work can be done remotely with secure document sharing." },
  { q: "How is pricing structured?", a: "Fractional controller services are priced as a monthly retainer based on scope. We provide a clear quote after a free discovery call." },
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
export default function FractionalController() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Fractional CFO & Controller", href: "/services/fractional-cfo-controller" }, { label: "Fractional Controller" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Fractional CFO & Controller</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fractional <span className="text-[#C9A84C]">Controller Services</span> in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4">Financial reporting oversight and internal controls — the backbone of a well-run finance function.</p>
            <div className="flex gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call Us</a></div>
          </div>
        </div>
      </section>
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What's Included</h2>
              <p className="text-slate-600 leading-relaxed mb-6">A fractional controller provides the oversight layer that ensures your financial records are accurate, your processes are sound, and your reporting is reliable — without the cost of a full-time hire.</p>
              <ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Process</h2>
              {[{ num: "01", title: "Systems Assessment", desc: "We review your current accounting processes, software, and reporting to identify gaps and inefficiencies." }, { num: "02", title: "Controls & Processes", desc: "We implement internal controls, standardize processes, and set up reliable reporting workflows." }, { num: "03", title: "Monthly Oversight", desc: "We manage the monthly close, review all reconciliations, and deliver clean financial reports on time." }].map((step) => (
                <div key={step.num} className="flex gap-4 mb-6"><div className="text-2xl font-bold text-[#C9A84C]/40 flex-shrink-0 w-10" style={{ fontFamily: "'Playfair Display', serif" }}>{step.num}</div><div><h3 className="text-[#0B1E33] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div></div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-16"><div className="container mx-auto px-4 lg:px-8 max-w-3xl"><ScrollReveal><h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2><div className="border-t border-white/10">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div></ScrollReveal></div></section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Fractional CFO", href: "/services/fractional-cfo-controller/fractional-cfo" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Bookkeeping", href: "/services/bookkeeping" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

