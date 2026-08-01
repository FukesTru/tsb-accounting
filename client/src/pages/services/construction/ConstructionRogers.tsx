/**
 * Construction Accounting — Rogers, AR
 * /services/construction-accounting/rogers-ar
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
  "name": "Construction Accounting Services — Rogers, AR",
  "provider": { "@type": "AccountingService", "name": "TSB Accounting Solutions, LLC", "telephone": "+14796331206", "address": { "@type": "PostalAddress", "addressLocality": "Lowell", "addressRegion": "AR" } },
  "description": "Specialized construction accounting in Rogers, AR. Job costing, WIP reporting, and real-time project P&L for contractors.",
  "areaServed": { "@type": "City", "name": "Rogers", "containedInPlace": { "@type": "State", "name": "Arkansas" } },
};

export default function ConstructionRogers() {
  return (
    <PageLayout>
      <SEOHead
        title="CPA for Contractors Rogers Arkansas | TSB Accounting Solutions"
        description="Construction accounting in Rogers, AR — job costing, WIP reporting, real-time project P&L, and contractor tax strategy. Victoria Harris-Pelletier, CPA. Call (479) 633-1206."
        canonical="https://tsbaccountingsolutionsllc.com/services/construction-accounting/rogers-ar"
        ogTitle="CPA for Contractors in Rogers, Arkansas | TSB Accounting Solutions"
        ogDescription="Job costing, WIP reporting, and contractor tax strategy for Rogers AR construction businesses. Licensed CPA with 20+ years experience."
        schema={schema}
      />
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "/services/construction-accounting" }, { label: "Construction Accounting", href: "/services/construction-accounting" }, { label: "Rogers, AR" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Construction Accounting · Rogers, AR</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              CPA for Contractors in <span className="text-[#C9A84C]">Rogers, AR</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Rogers is one of the fastest-growing cities in Arkansas — and that growth means construction. From the Pinnacle Hills corridor to the Lake Leatherwood area, Rogers contractors are busy. TSB Accounting Solutions gives you the job costing and financial clarity to stay profitable as you scale.</p>
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
            <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Construction Accounting for Rogers Contractors</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Rogers has seen sustained commercial and residential growth driven by population migration into NWA. The Pinnacle Hills retail corridor, the expansion of Rogers Heritage High School, and the ongoing residential development in the Beaver Lake area have kept contractors busy for years. But busy doesn't always mean profitable — and that's the problem Victoria solves.</p>
            <p className="text-slate-600 leading-relaxed mb-6">Victoria Harris-Pelletier, CPA, grew up in the construction business. She structures QuickBooks around your jobs so you can see labor cost vs. budget, track subcontractor costs against your bid, and catch overruns before they eat your margin. Monthly reviews keep you current. Year-round tax strategy — including contractor-specific elections like percentage-of-completion accounting and Section 179 — keeps more of what you earn.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Job costing & real-time project P&L", "WIP schedules for bonding & banking", "QuickBooks setup & cleanup", "Monthly bookkeeping & reconciliation", "Contractor tax strategy", "Cash flow forecasting"].map(i => (
                <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{i}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/construction-accounting" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">All Construction Services <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/areas/rogers-ar" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">Rogers, AR Area Page <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Other NWA Cities We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {[{ label: "Lowell", href: "/services/construction-accounting/lowell-ar" }, { label: "Bentonville", href: "/services/construction-accounting/bentonville-ar" }, { label: "Fayetteville", href: "/services/construction-accounting/fayetteville-ar" }, { label: "Springdale", href: "/services/construction-accounting/springdale-ar" }].map(l => (
                <Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
