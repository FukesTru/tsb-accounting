/**
 * TSB Accounting Solutions — Springdale, AR Service Area Page
 * /areas/springdale-ar
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
  "description": "CPA and construction accounting services for Springdale, AR businesses. Job costing, bookkeeping, fractional CFO, and tax strategy.",
  "telephone": "+14796331206",
  "address": { "@type": "PostalAddress", "streetAddress": "1621 Harold King Ln", "addressLocality": "Lowell", "addressRegion": "AR", "postalCode": "72745", "addressCountry": "US" },
  "areaServed": { "@type": "City", "name": "Springdale", "containedInPlace": { "@type": "State", "name": "Arkansas" } },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }],
  "sameAs": ["https://maps.app.goo.gl/AFn1KEQH1HReiKPD7"],
};

const faqs = [
  { q: "Do you work with contractors in Springdale?", a: "Yes — construction accounting is Victoria's specialty. Springdale has a dense concentration of subcontractors, framing crews, and specialty trade firms. We work with contractors of all sizes on job costing, WIP reporting, and real-time project P&L so you know which jobs are making money before you bid the next one." },
  { q: "What's the difference between a bookkeeper and a CPA for my Springdale business?", a: "A bookkeeper records transactions. A CPA interprets them, plans around them, and helps you make decisions based on them. Victoria does both — she handles the books and provides the advisory layer that most Springdale businesses are missing." },
  { q: "I'm a Springdale subcontractor. Can you help me with bonding financials?", a: "Absolutely. We prepare the WIP schedules, reviewed financial statements, and cash flow reports that surety companies and lenders require. Getting your bonding capacity right starts with having your books structured correctly — which is exactly what we do." },
  { q: "How quickly can you clean up my QuickBooks?", a: "Cleanup timelines depend on how far back the books are and how complex the transactions are. Most Springdale clients see a clean, current set of books within 4-6 weeks. We'll give you a specific timeline after reviewing your current file." },
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

export default function SpringdaleAR() {
  return (
    <PageLayout>
      <SEOHead
        title="Bookkeeping & CPA Services Springdale AR | TSB Accounting Solutions"
        description="TSB Accounting Solutions serves Springdale, AR with construction accounting, bookkeeping, tax planning, and fractional CFO services. Licensed CPA with 20+ years experience."
        canonical="https://tsbaccountingsolutionsllc.com/areas/springdale-ar"
        ogTitle="CPA & Bookkeeping Services in Springdale, AR | TSB Accounting Solutions"
        ogDescription="Construction accounting, bookkeeping, and fractional CFO for Springdale AR contractors and businesses. Victoria Harris-Pelletier, CPA — proactive year-round advisory."
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Service Areas", href: "/areas/northwest-arkansas" }, { label: "Springdale, AR" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Service Area</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Accounting & CPA Services in{" "}<span className="text-[#C9A84C]">Springdale, AR</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Springdale is the industrial backbone of Northwest Arkansas — home to Tyson Foods' global headquarters, a large and growing Hispanic business community, and one of the most active subcontractor markets in the region. TSB Accounting Solutions brings construction-specialized CPA services to Springdale businesses that need more than a tax return once a year.
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
                  The Springdale Business Landscape
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Springdale operates at a different pace than the rest of Northwest Arkansas. While Bentonville draws corporate headquarters and Rogers handles retail, Springdale is where the work gets done. The city is home to a dense network of subcontractors — framing crews, concrete subs, HVAC and plumbing outfits, and electrical contractors — who collectively power the construction boom happening across the entire NWA corridor.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The food processing and manufacturing sector anchored by Tyson Foods has also created a secondary economy of suppliers, logistics companies, and professional services firms. Many of these businesses are owner-operated, growing fast, and working with accounting systems that were set up years ago and never properly structured for where the business is today.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  TSB Accounting Solutions works with Springdale businesses at both ends of that spectrum — the contractor who needs job-level profitability visible in real time, and the established business that needs a fractional CFO to build financial systems that can support the next phase of growth. We're based in Lowell, just minutes from Springdale, and serve clients both in-person and fully remote.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Construction Accounting for Springdale Contractors
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Springdale has one of the highest concentrations of subcontractors in Arkansas. If you're running a framing crew, a concrete sub, or a specialty trade operation — you're probably bidding work 12-18 months out while waiting to find out if the last job actually made money. That gap is the problem Victoria built her practice around solving.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Job costing isn't just a bookkeeping feature — it's a management tool. When your QuickBooks is structured correctly, you can see labor cost vs. budget per job, track subcontractor costs against your bid, and catch overruns before they eat your margin. Victoria sets up and maintains that structure for Springdale contractors, and she reviews it with you monthly so you always know where you stand.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  For subcontractors working on bonded projects, we also prepare the WIP schedules and reviewed financial statements your surety company requires. Getting your bonding capacity right — and keeping it — starts with having your books in order. That's what we do.
                </p>
                <div className="mt-6">
                  <Link href="/services/construction-accounting" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">
                    Learn more about our Construction Accounting services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Services We Offer in Springdale
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Construction accounting & job costing",
                    "Monthly bookkeeping & reconciliation",
                    "Tax planning & strategy",
                    "Financial statement preparation",
                    "Fractional CFO & controller services",
                    "QuickBooks setup, cleanup & support",
                    "WIP schedules & bonding financials",
                    "Cash flow forecasting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Springdale FAQ
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
                    <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" /><span className="text-white/70 text-sm">1621 Harold King Ln, Lowell, AR 72745<br/><span className="text-white/40 text-xs">Serving Springdale in-person & remote</span></span></div>
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
                      { label: "Fayetteville, AR", href: "/areas/fayetteville-ar" },
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
              Ready to work with a <span className="text-[#C9A84C]">Springdale-area CPA?</span>
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Start with a free discovery call. No pitch, no pressure — just a conversation about your business and where the numbers need to be.</p>
            <Link href="/contact" className="btn-gold inline-flex">Schedule Your Free Call <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
