import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const included = ["Strategic financial planning and goal-setting", "Business performance analysis", "Profitability improvement strategies", "Growth planning and scenario modeling", "Vendor and expense optimization", "Financial decision support for major purchases or hires", "Exit planning and business valuation guidance"];
const faqs = [
  { q: "What does a business advisor actually do?", a: "A business advisor helps you make better financial decisions by providing objective analysis, strategic insight, and a clear picture of your numbers. Think of it as having a financially-savvy partner in your corner." },
  { q: "Is this the same as a fractional CFO?", a: "Business advisory is broader and often less intensive than fractional CFO services. Advisory can be project-based or periodic, while fractional CFO typically involves ongoing, deeper financial leadership. We can help you determine which fits your needs." },
  { q: "Do I need to be a certain size to benefit?", a: "No. Even solo founders and small teams benefit from strategic financial guidance. The earlier you build good financial habits and strategy, the better positioned you'll be for growth." },
  { q: "How often do we meet?", a: "That depends on your needs. Some clients want monthly strategy calls; others prefer quarterly reviews. We tailor the engagement to what works for you." },
  { q: "Can you help with a specific decision, like hiring or a major purchase?", a: "Absolutely. We can do project-based advisory for specific decisions — modeling the financial impact, analyzing options, and helping you make a confident choice." },
  { q: "How is pricing structured?", a: "Advisory services are scoped after a free discovery call. We offer both ongoing retainer arrangements and project-based engagements." },
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
export default function BusinessAdvisory() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Business Advisory" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Accounting & Advisory</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Business <span className="text-[#C9A84C]">Advisory</span> Services in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4">Strategic financial guidance to help you make better decisions, grow with confidence, and build a more profitable business.</p>
            <div className="flex gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call Us</a></div>
          </div>
        </div>
      </section>
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What's Included</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Running a business is hard. Making the right financial decisions shouldn't be. Our business advisory service gives you a trusted financial partner who understands your numbers and helps you use them to grow.</p>
              <ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Process</h2>
              {[{ num: "01", title: "Business Deep-Dive", desc: "We get to know your business, your goals, your challenges, and your current financial situation." }, { num: "02", title: "Strategy & Roadmap", desc: "We identify opportunities, flag risks, and build a financial roadmap aligned with your goals." }, { num: "03", title: "Ongoing Partnership", desc: "Regular check-ins, proactive insights, and a trusted advisor available when you need guidance." }].map((step) => (
                <div key={step.num} className="flex gap-4 mb-6"><div className="text-2xl font-bold text-[#C9A84C]/40 flex-shrink-0 w-10" style={{ fontFamily: "'Playfair Display', serif" }}>{step.num}</div><div><h3 className="text-[#0B1E33] font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div></div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <ScrollReveal><h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2><div className="border-t border-white/10">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div></ScrollReveal>
        </div>
      </section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Tax Planning", href: "/services/accounting-advisory/tax-planning" }, { label: "Fractional CFO", href: "/services/fractional-cfo-controller" }, { label: "Bookkeeping", href: "/services/bookkeeping" }, { label: "Contact Us", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

