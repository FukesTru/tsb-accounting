import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const included = [
  "Income Statement (Profit & Loss)",
  "Balance Sheet preparation",
  "Cash Flow Statement",
  "Statement of Changes in Equity",
  "Notes and disclosures",
  "Lender-ready and investor-ready formatting",
  "Monthly, quarterly, or annual cadence",
];

const faqs = [
  { q: "Why do I need formal financial statements?", a: "Lenders, investors, and even potential buyers require accurate financial statements. They also help you understand your business's true financial health and make better decisions." },
  { q: "What's the difference between compiled and reviewed statements?", a: "Compiled statements are prepared from information you provide without verification. Reviewed statements involve analytical procedures to provide limited assurance. We prepare compiled statements and can refer you to a CPA for reviewed or audited statements if needed." },
  { q: "How often should statements be prepared?", a: "For most small businesses, monthly or quarterly statements provide the best visibility. We tailor the cadence to your needs and budget." },
  { q: "Can you work with my existing accounting software?", a: "Yes. We work with QuickBooks and other major platforms. We can also set up or clean up your books before preparing statements." },
  { q: "Are your statements GAAP-compliant?", a: "Yes. We prepare statements in accordance with Generally Accepted Accounting Principles (GAAP) to ensure they meet lender and investor standards." },
  { q: "How long does it take?", a: "Timeline depends on the state of your books and the complexity of your business. After a discovery call, we'll give you a clear timeline and quote." },
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

export default function FinancialStatements() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Financial Statements" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Accounting & Advisory</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Financial Statement <span className="text-[#C9A84C]">Preparation</span> in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4">Accurate, professional financial statements that give you, your lenders, and your investors a clear picture of your business.</p>
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
              <p className="text-slate-600 leading-relaxed mb-6">Your financial statements are the language of your business. We prepare them with precision and care — whether you need them for a bank loan, investor pitch, or simply to understand where your business stands.</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Process</h2>
              {[
                { num: "01", title: "Data Gathering", desc: "We collect and organize your financial data from your accounting system or raw records." },
                { num: "02", title: "Reconciliation & Review", desc: "We reconcile all accounts and verify accuracy before preparing any statements." },
                { num: "03", title: "Statement Preparation", desc: "We prepare your statements in a professional, lender-ready format with full notes." },
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
            <div className="border-t border-white/10">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
          </ScrollReveal>
        </div>
      </section>
      <section className="section-light py-12">
        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">
          {[{ label: "Tax Planning", href: "/services/accounting-advisory/tax-planning" }, { label: "Business Advisory", href: "/services/accounting-advisory/business-advisory" }, { label: "Fractional CFO", href: "/services/fractional-cfo-controller" }, { label: "Contact Us", href: "/contact" }].map((l) => (
            <Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

