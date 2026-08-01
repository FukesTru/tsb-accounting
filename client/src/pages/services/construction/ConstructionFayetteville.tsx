/**
 * Construction Accounting — Fayetteville, AR
 * /services/construction-accounting/fayetteville-ar
 */
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Construction Accounting Services — Fayetteville, AR",
  "provider": { "@type": "AccountingService", "name": "TSB Accounting Solutions, LLC", "telephone": "+14796331206", "address": { "@type": "PostalAddress", "addressLocality": "Lowell", "addressRegion": "AR" } },
  "description": "Specialized construction accounting in Fayetteville, AR. Job costing, WIP reporting, and real-time project P&L for contractors.",
  "areaServed": { "@type": "City", "name": "Fayetteville", "containedInPlace": { "@type": "State", "name": "Arkansas" } },
};

export default function ConstructionFayetteville() {
  return (
    <PageLayout>
      <SEOHead
        title="Construction Accountant Fayetteville AR | TSB Accounting Solutions"
        description="Construction accounting in Fayetteville, AR — job costing, WIP reporting, real-time project P&L, and contractor tax strategy. Victoria Harris-Pelletier, CPA. Call (479) 633-1206."
        canonical="https://tsbaccountingsolutionsllc.com/services/construction-accounting/fayetteville-ar"
        ogTitle="Construction Accountant in Fayetteville, AR | TSB Accounting Solutions"
        ogDescription="Job costing, WIP reporting, and contractor tax strategy for Fayetteville AR construction businesses. Licensed CPA with 20+ years experience."
        schema={schema}
      />
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "/services/construction-accounting" }, { label: "Construction Accounting", href: "/services/construction-accounting" }, { label: "Fayetteville, AR" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Construction Accounting · Fayetteville, AR</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Construction Accountant in <span className="text-[#C9A84C]">Fayetteville, AR</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Fayetteville's construction market is driven by the University of Arkansas, a growing tech sector, and sustained residential demand. TSB Accounting Solutions gives Fayetteville contractors real-time job costing and financial clarity — so you know which projects are profitable before you bid the next one.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/contact" className="btn-gold">Free Consultation</Link>
              <a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> (479) 633-1206</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Construction Accounting for Fayetteville Contractors</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Fayetteville contractors are often working on complex, multi-phase projects — U of A campus renovations, student housing developments, and the commercial growth around the Dickson Street and MLK Boulevard corridors. These projects require accurate WIP reporting, tight cost tracking, and the financial statements that lenders and sureties demand.</p>
            <p className="text-slate-600 leading-relaxed mb-6">Victoria Harris-Pelletier, CPA, grew up in the construction business and has spent 20+ years building accounting systems for contractors. She structures your QuickBooks around your jobs — not generic templates — so that job-level profitability is visible in real time. Monthly reviews, WIP schedules, and year-round tax strategy are all part of the engagement.</p>
            <ul className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Job costing & real-time project P&L", "WIP schedules for bonding & banking", "QuickBooks setup & cleanup", "Monthly bookkeeping & reconciliation", "Contractor tax strategy", "Cash flow forecasting"].map(i => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{i}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/construction-accounting" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">All Construction Services <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/areas/fayetteville-ar" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">Fayetteville, AR Area Page <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Other NWA Cities We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {[{ label: "Lowell", href: "/services/construction-accounting/lowell-ar" }, { label: "Bentonville", href: "/services/construction-accounting/bentonville-ar" }, { label: "Rogers", href: "/services/construction-accounting/rogers-ar" }, { label: "Springdale", href: "/services/construction-accounting/springdale-ar" }].map(l => (
                <Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
