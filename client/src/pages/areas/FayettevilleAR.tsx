/**
 * TSB Accounting Solutions — Fayetteville, AR Service Area Page
 * /areas/fayetteville-ar
 */
import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Phone, Clock, CheckCircle, ChevronDown, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

const schema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "TSB Accounting Solutions, LLC",
  "description": "CPA and construction accounting services for Fayetteville, AR businesses. Job costing, bookkeeping, fractional CFO, and tax strategy.",
  "telephone": "+14796331206",
  "address": { "@type": "PostalAddress", "streetAddress": "1621 Harold King Ln", "addressLocality": "Lowell", "addressRegion": "AR", "postalCode": "72745", "addressCountry": "US" },
  "areaServed": { "@type": "City", "name": "Fayetteville", "containedInPlace": { "@type": "State", "name": "Arkansas" } },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }],
  "sameAs": ["https://maps.app.goo.gl/AFn1KEQH1HReiKPD7"],
};

const faqs = [
  { q: "Do you work with Fayetteville construction contractors?", a: "Yes. Victoria specializes in construction accounting — job costing, WIP reporting, and real-time project P&L. Many of our Fayetteville clients are general contractors, subcontractors, and specialty trade firms working on the U of A campus, Dickson Street corridor, and surrounding commercial developments." },
  { q: "Can I work with TSB remotely from Fayetteville?", a: "Absolutely. We serve Fayetteville clients both in-person and fully remote. Discovery calls, monthly reviews, and advisory sessions all happen via video or phone — no commute required." },
  { q: "What accounting software do you use for Fayetteville clients?", a: "We primarily work in QuickBooks Online, which we set up and structure around your specific business — whether you're a contractor tracking jobs or a retail business managing inventory. We're also a QuickBooks ProAdvisor." },
  { q: "How is TSB different from a Fayetteville CPA firm I could find locally?", a: "Most generalist CPA firms focus on tax returns. Victoria focuses on proactive, year-round advisory — especially for contractors who need to know which jobs are making money before they bid the next one, not 12 months after the fact." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button className="w-full flex items-center justify-between py-4 text-left gap-4" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="text-[#0B1E33] font-medium text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[#C9A84C] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-slate-600 text-sm pb-4 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FayettevilleAR() {
  return (
    <PageLayout>
      <SEOHead
        title="CPA & Accounting Services Fayetteville AR | TSB Accounting Solutions"
        description="TSB Accounting Solutions serves Fayetteville, AR businesses with bookkeeping, construction accounting, tax planning, and fractional CFO services. Licensed CPA, 20+ years experience."
        canonical="https://tsbaccountingsolutionsllc.com/areas/fayetteville-ar"
        ogTitle="CPA & Accounting Services in Fayetteville, AR | TSB Accounting Solutions"
        ogDescription="Construction accounting, bookkeeping, and fractional CFO for Fayetteville AR businesses. Victoria Harris-Pelletier, CPA — proactive, year-round financial advisory."
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Service Areas", href: "/areas/northwest-arkansas" }, { label: "Fayetteville, AR" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Service Area</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Accounting & CPA Services in{" "}<span className="text-[#C9A84C]">Fayetteville, AR</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Fayetteville is the economic and cultural hub of Northwest Arkansas — home to the University of Arkansas, a booming tech corridor, and one of the region's most active construction markets. TSB Accounting Solutions brings licensed CPA expertise and construction-industry specialization to businesses operating in and around Fayetteville.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/contact" className="btn-gold">Free Consultation</Link>
              <a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> (479) 633-1206</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  The Fayetteville Business Landscape
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fayetteville sits at the southern end of the I-49 corridor and operates on a different economic rhythm than Bentonville or Rogers. The University of Arkansas drives a year-round cycle of construction, renovation, and commercial development — from student housing projects along Maple Street to the ongoing expansion of the Walton College of Business and the Razorback athletic facilities. That means contractors here are often juggling multiple public and private jobs simultaneously, with complex billing requirements and tight bonding thresholds.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Beyond construction, Fayetteville has become a magnet for tech startups, creative agencies, and professional services firms drawn by the Startup Junkie ecosystem and the talent pipeline from U of A. These businesses face a different set of financial challenges: managing rapid headcount growth, navigating equity compensation, and building the financial infrastructure that investors and lenders expect to see.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  TSB Accounting Solutions works with both kinds of Fayetteville businesses — the contractor who needs to know which jobs are profitable before bidding the next one, and the growing company that needs a fractional CFO to build financial systems that scale. We're based in nearby Lowell and serve Fayetteville clients both in-person and fully remote.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Construction Accounting for Fayetteville Contractors
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you're a contractor working in Fayetteville — whether that's a general contractor on a U of A project, a subcontractor serving the residential boom in south Fayetteville, or a specialty trade firm covering the whole NWA corridor — you already know that standard bookkeeping doesn't cut it. You need job costing that tells you where your margin went on the last project before you bid the next one.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Victoria Harris-Pelletier, CPA, grew up in the construction business. She understands the difference between percentage-of-completion and completed-contract accounting, why your WIP schedule matters to your surety, and how to structure your QuickBooks so that job-level P&L is visible in real time — not reconstructed six months after the project closes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  For Fayetteville contractors specifically, we offer job costing setup and cleanup, monthly WIP reporting, cash flow forecasting around retainage and draws, and year-round tax strategy that accounts for the elections available to construction businesses. The goal is simple: you should know which jobs made money, and you should know it while you can still do something about it.
                </p>
                <div className="mt-6">
                  <Link href="/services/construction-accounting" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">
                    Learn more about our Construction Accounting services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Services We Offer in Fayetteville
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Construction accounting & job costing",
                    "Monthly bookkeeping & reconciliation",
                    "Tax planning & strategy",
                    "Financial statement preparation",
                    "Fractional CFO & controller services",
                    "QuickBooks setup, cleanup & support",
                    "Cash flow forecasting",
                    "Business advisory & growth planning",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Fayetteville FAQ
                </h2>
                <div className="space-y-1">
                  {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <div className="bg-[#0B1E33] rounded-sm p-6 sticky top-28">
                  <h3 className="text-white font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" /><span className="text-white/70 text-sm">1621 Harold King Ln, Lowell, AR 72745<br/><span className="text-white/40 text-xs">Serving Fayetteville in-person & remote</span></span></div>
                    <div className="flex items-start gap-3"><Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" /><a href="tel:+14796331206" className="text-white/70 text-sm hover:text-[#C9A84C]">(479) 633-1206</a></div>
                    <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" /><span className="text-white/70 text-sm">Mon–Fri: 9 AM – 5 PM</span></div>
                  </div>
                  <Link href="/contact" className="btn-gold w-full justify-center text-center block py-3">Book Free Consultation</Link>
                  <a href="tel:+14796331206" className="btn-outline-gold w-full justify-center text-center block py-3 mt-3">Call (479) 633-1206</a>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="bg-slate-50 border border-slate-200 rounded-sm p-5">
                  <h4 className="text-[#0B1E33] font-bold text-sm mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Nearby Areas We Serve</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Springdale, AR", href: "/areas/springdale-ar" },
                      { label: "Rogers, AR", href: "/areas/rogers-ar" },
                      { label: "Bentonville, AR", href: "/areas/bentonville-ar" },
                      { label: "Lowell, AR", href: "/areas/lowell-ar" },
                      { label: "Northwest Arkansas", href: "/areas/northwest-arkansas" },
                    ].map((l) => (
                      <Link key={l.label} href={l.href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#C9A84C] transition-colors">
                        <ArrowRight className="w-3 h-3" />{l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to work with a <span className="text-[#C9A84C]">Fayetteville-area CPA?</span>
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Start with a free discovery call. No pitch, no pressure — just a conversation about your business and where the numbers need to be.</p>
            <Link href="/contact" className="btn-gold inline-flex">Schedule Your Free Call <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
