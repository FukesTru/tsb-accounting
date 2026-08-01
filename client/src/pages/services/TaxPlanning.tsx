import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const included = [
  "Year-round proactive tax planning (not just April)",
  "Entity structure analysis and optimization",
  "Deduction identification and maximization",
  "Estimated tax payment planning",
  "Multi-year tax projection modeling",
  "Coordination with your CPA or tax preparer",
  "Tax-efficient business decision support",
];

const faqs = [
  { q: "When should I start tax planning?", a: "Tax planning is most effective when done year-round, not just at tax time. We work with you throughout the year to identify opportunities and avoid surprises." },
  { q: "Do you prepare tax returns?", a: "Our focus is on tax planning and strategy — helping you minimize your tax liability through proactive decisions. We can coordinate with your tax preparer or refer you to a trusted CPA for filing." },
  { q: "How much can tax planning save me?", a: "Savings vary by business, but proactive planning consistently identifies opportunities that reactive filing misses. Many clients save thousands annually through proper entity structure and deduction strategy alone." },
  { q: "Do you work with S-Corps and LLCs?", a: "Yes. We work with sole proprietors, LLCs, S-Corps, and other business structures. We can also help you evaluate whether your current structure is optimal for your tax situation." },
  { q: "Is this service available virtually?", a: "Absolutely. We serve clients across the US virtually. All consultations and document sharing can be done remotely." },
  { q: "How does pricing work?", a: "Tax planning is scoped after a free discovery call. Pricing depends on the complexity of your business and the services needed. We provide a clear quote before any work begins." },
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

export default function TaxPlanning() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "/" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Tax Planning & Strategy" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Accounting & Advisory</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tax Planning &{" "}<span className="text-[#C9A84C]">Strategy</span>{" "}in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4">Proactive, year-round tax strategies that keep more money in your business and eliminate April surprises.</p>
            <div className="flex gap-3 mt-8">
              <Link href="/contact" className="btn-gold">Free Consultation</Link>
              <a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What's Included</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Most business owners only think about taxes when it's time to file — and by then, most of the opportunities are gone. TSB's tax planning service works with you throughout the year to identify strategies, optimize your structure, and make sure every legitimate deduction is captured.</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our 3-Step Process</h2>
              {[
                { num: "01", title: "Tax Position Review", desc: "We analyze your current tax situation, entity structure, and prior returns to identify immediate opportunities." },
                { num: "02", title: "Strategy Development", desc: "We build a custom tax strategy tailored to your business model, income level, and growth plans." },
                { num: "03", title: "Ongoing Monitoring", desc: "We track changes throughout the year and adjust your strategy as your business evolves." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 mb-6">
                  <div className="text-2xl font-bold text-[#C9A84C]/40 flex-shrink-0 w-10" style={{ fontFamily: "'Playfair Display', serif" }}>{step.num}</div>
                  <div>
                    <h3 className="text-[#0B1E33] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2>
            <div className="border-t border-white/10">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Financial Statements", href: "/services/accounting-advisory/financial-statements" },
              { label: "Business Advisory", href: "/services/accounting-advisory/business-advisory" },
              { label: "Accounting & Advisory Overview", href: "/services/accounting-advisory" },
              { label: "Contact Us", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

