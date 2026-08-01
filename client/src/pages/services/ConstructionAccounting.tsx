/**
 * TSB Accounting Solutions — Construction Accounting Service Page
 * Victoria's specialty: job costing, real-time P&L per project, construction niche CPA
 */
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";
import { CheckCircle, HardHat, TrendingUp, Calculator, FileText, Clock, Phone } from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Construction Accounting Services",
  "provider": {
    "@type": "AccountingService",
    "name": "TSB Accounting Solutions, LLC",
    "telephone": "+14796331206",
    "address": { "@type": "PostalAddress", "addressLocality": "Lowell", "addressRegion": "AR" }
  },
  "description": "Specialized construction accounting services including job costing, WIP reporting, and real-time project P&L for contractors in Northwest Arkansas.",
  "areaServed": "Northwest Arkansas"
};

const benefits = [
  { icon: Calculator, title: "Job Costing That Actually Works", desc: "Know exactly what each project costs — labor, materials, subs, overhead — in real time. No more guessing at margins after the job is done." },
  { icon: TrendingUp, title: "Real-Time Project P&L", desc: "See profit and loss per project as work progresses. Catch overruns early and protect your margins before it's too late to course-correct." },
  { icon: FileText, title: "WIP Schedules & Overbilling Reports", desc: "Accurate Work-in-Progress reporting for bonding, banking, and owner visibility. We prepare the schedules your surety and lender require." },
  { icon: Clock, title: "Cash Flow Forecasting", desc: "Construction cash flow is unpredictable. We model your receivables, retainage, and payables so you always know what's coming — and when." },
  { icon: HardHat, title: "Contractor-Specific Tax Strategy", desc: "Percentage-of-completion vs. completed-contract method, equipment depreciation, Section 179 elections — we know the elections that save contractors money." },
  { icon: CheckCircle, title: "QuickBooks for Construction", desc: "Setup, cleanup, and ongoing support for QuickBooks structured around your jobs, not generic chart-of-accounts templates that don't fit how you build." },
];

const whoWeServe = [
  "General Contractors",
  "Subcontractors (Electrical, Plumbing, HVAC, Framing)",
  "Specialty Trade Contractors",
  "Residential Builders & Developers",
  "Commercial Construction Firms",
  "Owner-Operators & Small Crews",
];

const painPoints = [
  { q: "You win jobs but don't know if you made money until months later", a: "Job costing and real-time project P&L give you the answer during the job, not after." },
  { q: "Your books are a mess because your accountant doesn't understand construction", a: "Victoria grew up in construction. She speaks your language and structures your books around how you actually operate." },
  { q: "You're leaving money on the table at tax time", a: "Contractor-specific tax elections, equipment strategies, and proactive planning throughout the year — not just in April." },
  { q: "Your bank or bonding company wants financials you can't produce", a: "We prepare the WIP schedules, reviewed financials, and cash flow statements your lender and surety require." },
];

export default function ConstructionAccounting() {
  return (
    <PageLayout
      title="Construction Accounting Services | TSB Accounting Solutions — Northwest Arkansas"
      description="Specialized construction accounting in Lowell, AR. Job costing, WIP reporting, real-time project P&L, and proactive tax strategy for contractors in Northwest Arkansas. Victoria Harris-Pelletier, CPA."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero */}
      <section className="relative bg-[#0B1E33] py-32 pt-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[#0B1E33]/70" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-0.5 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em]">Our Specialty</span>
            <span className="block w-8 h-0.5 bg-[#C9A84C]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Construction Accounting<br />
            <span className="text-[#C9A84C]">Built for Contractors</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Victoria Harris-Pelletier, CPA, grew up in the construction business. She brings 20+ years of accounting expertise and a lifetime of industry knowledge to contractors across Northwest Arkansas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold px-8 py-4">Book a Free Consultation</Link>
            <a href="tel:+14796331206" className="flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all duration-200">
              <Phone className="w-4 h-4" /> (479) 633-1206
            </a>
          </div>
        </div>
      </section>

      {/* Why Construction Accounting is Different */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="grid auto-rows-fr lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Construction Accounting Is Not Like Other Accounting
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most accountants treat a construction company like a retail store. They don't understand job costing, retainage, percentage-of-completion, or the cash flow timing that makes construction uniquely challenging.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Victoria grew up around construction. She understands the difference between a change order and a contract modification, why your WIP schedule matters to your bonding company, and how to structure your books so you actually know if you're making money on each job.
                </p>
                <div className="space-y-3">
                  {["Job-based profit tracking", "Retainage management", "Subcontractor 1099 compliance", "Equipment & fleet accounting", "Bonding & banking support"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="bg-[#0B1E33] rounded-sm p-8 text-white">
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">Victoria's Background</p>
                  <blockquote className="text-white/90 text-lg leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "I grew up around construction. I know what it feels like to win a bid and then wonder if you actually made money. That's why I built TSB around giving contractors real answers — not just year-end tax returns."
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 border-2 border-[#C9A84C] flex items-center justify-center">
                      <span className="text-[#C9A84C] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>VH</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Victoria Harris-Pelletier, CPA</p>
                      <p className="text-white/60 text-xs">Founder, TSB Accounting Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#f7f5f0] py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E33]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Construction Accounting Services
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={Math.min(i * 0.08, 0.15)}>
                <div className="bg-white p-8 rounded-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 bg-[#0B1E33] rounded-sm flex items-center justify-center mb-5">
                    <b.icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1E33] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Who We Work With</p>
              <h2 className="text-3xl font-bold text-[#0B1E33]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Built for Every Type of Contractor
              </h2>
            </div>
            <div className="grid auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoWeServe.map((type) => (
                <div key={type} className="flex items-center gap-3 p-4 bg-[#f7f5f0] rounded-sm">
                  <HardHat className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                  <span className="text-[#0B1E33] font-medium text-sm">{type}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[#0B1E33] py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Sound Familiar?</p>
              <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Common Contractor Accounting Problems — Solved
              </h2>
            </div>
            <div className="space-y-6">
              {painPoints.map((p, i) => (
                <div key={i} className="border border-white/10 rounded-sm p-6">
                  <p className="text-[#C9A84C] font-semibold mb-2 text-sm">✗ {p.q}</p>
                  <p className="text-white/80 text-sm leading-relaxed">✓ {p.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">Ready to Get Started?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Talk About Your Business
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Book a free 30-minute consultation with Victoria. No sales pitch — just a real conversation about your numbers and what's possible when your accounting actually works for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold px-10 py-4">Book a Free Consultation</Link>
              <a
                href="https://wa.me/14796331206"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border-2 border-[#0B1E33] text-[#0B1E33] text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-[#0B1E33] hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Victoria
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
