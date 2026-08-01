/**
 * Construction Accounting — Bentonville, AR
 * /services/construction-accounting/bentonville-ar
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
  "name": "Construction Accounting Services — Bentonville, AR",
  "provider": { "@type": "AccountingService", "name": "TSB Accounting Solutions, LLC", "telephone": "+14796331206", "address": { "@type": "PostalAddress", "addressLocality": "Lowell", "addressRegion": "AR" } },
  "description": "Specialized construction accounting in Bentonville, AR. Job costing, WIP reporting, and real-time project P&L for contractors.",
  "areaServed": { "@type": "City", "name": "Bentonville", "containedInPlace": { "@type": "State", "name": "Arkansas" } },
};

export default function ConstructionBentonville() {
  return (
    <PageLayout>
      <SEOHead
        title="Construction Accountant Bentonville AR | TSB Accounting Solutions"
        description="Construction accounting in Bentonville, AR — job costing, WIP reporting, real-time project P&L, and contractor tax strategy. Victoria Harris-Pelletier, CPA. Call (479) 633-1206."
        canonical="https://tsbaccountingsolutionsllc.com/services/construction-accounting/bentonville-ar"
        ogTitle="Construction Accountant in Bentonville, AR | TSB Accounting Solutions"
        ogDescription="Job costing, WIP reporting, and contractor tax strategy for Bentonville AR construction businesses. Licensed CPA with 20+ years experience."
        schema={schema}
      />
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "/services/construction-accounting" }, { label: "Construction Accounting", href: "/services/construction-accounting" }, { label: "Bentonville, AR" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Construction Accounting · Bentonville, AR</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Construction Accountant in <span className="text-[#C9A84C]">Bentonville, AR</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Bentonville's construction market is unlike anywhere else in Arkansas. The Walmart effect has driven a decade of commercial development — hotels, retail, mixed-use, and the Crystal Bridges expansion — that shows no signs of slowing. TSB Accounting Solutions gives Bentonville contractors the financial visibility to bid confidently and build profitably.</p>
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
            <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Construction Accounting Built for the Bentonville Market</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Bentonville contractors are often working on high-profile, high-scrutiny projects with tight schedules and demanding owners. Walmart suppliers, corporate campus expansions, and the hospitality boom around the Bike Park all require contractors who can produce clean financials, accurate WIP schedules, and real-time cost reporting. That starts with having your books structured correctly.</p>
            <p className="text-slate-600 leading-relaxed mb-6">Victoria Harris-Pelletier, CPA, specializes in construction accounting for NWA contractors. She sets up your QuickBooks around your jobs, maintains job costing monthly, and gives you the financial reports your lender, surety, and project owners require. The result: you know which Bentonville jobs are making money — and you know it while you can still do something about it.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Job costing & real-time project P&L", "WIP schedules for bonding & banking", "QuickBooks setup & cleanup", "Monthly bookkeeping & reconciliation", "Contractor tax strategy", "Cash flow forecasting"].map(i => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{i}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/construction-accounting" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">All Construction Services <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/areas/bentonville-ar" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">Bentonville, AR Area Page <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Other NWA Cities We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {[{ label: "Lowell", href: "/services/construction-accounting/lowell-ar" }, { label: "Rogers", href: "/services/construction-accounting/rogers-ar" }, { label: "Fayetteville", href: "/services/construction-accounting/fayetteville-ar" }, { label: "Springdale", href: "/services/construction-accounting/springdale-ar" }].map(l => (
                <Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
