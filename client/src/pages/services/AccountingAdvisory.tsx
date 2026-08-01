/**
 * TSB Accounting Solutions — Accounting & Advisory Services Parent Page
 * /services/accounting-advisory
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

const subServices = [
  { title: "Tax Planning & Strategy", href: "/services/accounting-advisory/tax-planning", desc: "Proactive tax strategies that minimize your liability and keep more money in your business." },
  { title: "Financial Statement Preparation", href: "/services/accounting-advisory/financial-statements", desc: "Accurate, GAAP-compliant financial statements that give you and your stakeholders a clear picture." },
  { title: "Business Advisory", href: "/services/accounting-advisory/business-advisory", desc: "Strategic financial guidance to help you make better decisions and grow with confidence." },
  { title: "Cash Flow Management", href: "/services/accounting-advisory", desc: "Monitor, forecast, and optimize your cash flow so you're never caught off guard." },
  { title: "KPI & Financial Reporting", href: "/services/accounting-advisory", desc: "Custom dashboards and reports that track the metrics that matter most to your business." },
];

const processSteps = [
  { num: "01", title: "Financial Assessment", desc: "We review your current financial position, identify gaps, and understand your business goals." },
  { num: "02", title: "Custom Service Plan", desc: "We design a tailored accounting and advisory plan that fits your specific needs and budget." },
  { num: "03", title: "Implementation", desc: "We set up systems, prepare statements, and deliver the financial clarity you've been missing." },
  { num: "04", title: "Ongoing Advisory", desc: "Regular reviews, proactive communication, and strategic guidance as your business evolves." },
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accounting & Advisory Services",
  "provider": { "@type": "AccountingService", "name": "TSB Accounting Solutions, LLC" },
  "areaServed": "Northwest Arkansas",
  "description": "Comprehensive accounting and financial advisory services for small businesses in Northwest Arkansas, including tax planning, financial statements, and business advisory.",
};

export default function AccountingAdvisory() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16" style={{ backgroundImage: "url('/manus-storage/tsb-services-bg_1464f380.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#0B1E33]/85" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "/" }, { label: "Accounting & Advisory" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Accounting &{" "}
              <span className="text-[#C9A84C]">Advisory Services</span>{" "}
              in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Comprehensive financial oversight, tax strategy, and advisory services designed to give your business the financial foundation it needs to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/contact" className="btn-gold">Free Consultation</Link>
              <a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> (479) 633-1206</a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <p className="text-slate-600 text-lg leading-relaxed">
              At TSB Accounting Solutions, our Accounting & Advisory Services go beyond basic number-crunching. We provide the financial clarity, strategic insight, and proactive guidance that growing businesses need to make confident decisions. Whether you need clean financial statements for a lender, a tax strategy that minimizes your liability, or a trusted advisor to help you navigate your next growth phase — we're here for it all.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sub-service cards */}
      <section className="bg-[#0B1E33] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>What We Handle</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <Link href={s.href} className="block bg-white/5 border border-white/10 rounded-sm p-6 hover:border-[#C9A84C]/50 hover:bg-white/8 transition-all group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold">Learn More <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#0B1E33] mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Our Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div>
                  <div className="text-5xl font-bold text-[#C9A84C]/20 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{step.num}</div>
                  <div className="w-6 h-0.5 bg-[#C9A84C] mb-3" />
                  <h3 className="text-[#0B1E33] font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to get your finances in order?</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Schedule a free discovery call and let's talk about how we can support your business.</p>
            <Link href="/contact" className="btn-gold inline-flex">Get Started <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Internal links */}
      <section className="section-light py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-slate-500 text-sm text-center mb-4">Related Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Fractional CFO", href: "/services/fractional-cfo-controller" },
              { label: "Bookkeeping", href: "/services/bookkeeping" },
              { label: "Lowell, AR Service Area", href: "/areas/lowell-ar" },
              { label: "Northwest Arkansas", href: "/areas/northwest-arkansas" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

