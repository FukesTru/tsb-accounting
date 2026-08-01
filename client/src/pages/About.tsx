/**
 * TSB Accounting Solutions — About Page
 * /about — Meet Victoria Harris-Pelletier & the firm
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { title: "Accuracy First", desc: "Every number matters. We verify, reconcile, and double-check so your financials are always trustworthy." },
  { title: "Radical Clarity", desc: "No jargon, no confusion. We translate complex financial data into clear insights you can act on." },
  { title: "Your Finances, Our Priority", desc: "We treat every client's books as if they were our own — with the same care, urgency, and precision." },
  { title: "Long-Term Partnership", desc: "We're not a one-time service. We grow with your business and adapt as your needs evolve." },
];

const credentials = [
  "10+ Years of Accounting Experience",
  "QuickBooks Certified ProAdvisor",
  "Expertise in Small Business & Startup Finance",
  "Fractional CFO & Controller Experience",
  "Northwest Arkansas Local Business",
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Victoria Harris-Pelletier",
  "jobTitle": "Owner & Principal Accountant",
  "worksFor": {
    "@type": "AccountingService",
    "name": "TSB Accounting Solutions, LLC",
    "url": "https://tsbaccountingsolutionsllc.com",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lowell",
    "addressRegion": "AR",
    "addressCountry": "US",
  },
};

export default function About() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero */}
      <section className="bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "About" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Meet{" "}
              <span className="relative inline-block text-[#C9A84C]">
                Victoria
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-[#C9A84C]/60" />
              </span>{" "}
              Harris-Pelletier
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Founder of TSB Accounting Solutions, LLC — bringing CFO-level financial expertise to small businesses across Northwest Arkansas and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Founder portrait — editorial finance treatment */}
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#0B1E33] via-[#112840] to-[#0d2238] rounded-sm shadow-2xl overflow-hidden relative">
                  {/* Decorative gold grid lines */}
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                  {/* Monogram portrait */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full border-2 border-[#C9A84C]/50 flex items-center justify-center bg-[#C9A84C]/10 shadow-[0_0_60px_rgba(201,168,76,0.15)]">
                        <span className="text-[#C9A84C] text-6xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>VH</span>
                      </div>
                      {/* Outer ring */}
                      <div className="absolute -inset-3 rounded-full border border-[#C9A84C]/20" />
                    </div>
                    <div className="mt-8 text-center px-8">
                      <div className="w-12 h-0.5 bg-[#C9A84C] mx-auto mb-4" />
                      <p className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Victoria Harris-Pelletier</p>
                      <p className="text-[#C9A84C] text-sm mt-1 uppercase tracking-widest">Founder & Principal</p>
                      <p className="text-white/40 text-xs mt-3">TSB Accounting Solutions, LLC</p>
                    </div>
                  </div>
                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#C9A84C] text-[#0B1E33] px-4 py-2 rounded-sm shadow-lg">
                  <div className="text-xs font-bold uppercase tracking-wider">TSB Accounting Solutions</div>
                  <div className="text-xs">Lowell, AR · Est. 2022</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Financial Partner in Northwest Arkansas
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Victoria Harris-Pelletier founded TSB Accounting Solutions, LLC with a clear purpose: to give small businesses and growing companies the financial clarity and strategic support they need to thrive. With over a decade of experience in accounting, bookkeeping, and financial advisory, Victoria brings a rare combination of technical precision and genuine care to every client relationship.
                </p>
                <p>
                  Based in Lowell, AR, TSB serves the entire Northwest Arkansas region — from Bentonville to Fayetteville — and works with clients virtually across the United States. Whether you're a startup founder who needs clean books from day one, or an established business owner who's ready for CFO-level financial leadership, Victoria and her team are ready to be the financial partner you've been looking for.
                </p>
                <p>
                  Victoria's philosophy is simple: treat every client's finances as if they were her own. That means accuracy without shortcuts, communication without jargon, and a commitment to your long-term success — not just your next tax deadline.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8">
                <h3 className="text-[#0B1E33] font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Credentials & Experience</h3>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-gold">Schedule a Consultation</Link>
                <a href="tel:+14796331206" className="btn-outline-gold">
                  <Phone className="w-4 h-4" /> (479) 633-1206
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0B1E33] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={Math.min(i * 0.1, 0.15)}>
                <div className="text-center">
                  <div className="w-12 h-0.5 bg-[#C9A84C] mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Who We Serve
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We work with small businesses, startups, and growing companies across Northwest Arkansas and virtually nationwide. Our clients are founders, entrepreneurs, and business owners who want financial clarity without the overhead of a full-time finance team.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Small Businesses", "Startups & Founders", "E-Commerce", "Service Businesses", "Real Estate", "Professional Services", "Remote / Virtual Clients"].map((tag) => (
                  <span key={tag} className="bg-[#0B1E33]/5 border border-[#0B1E33]/20 text-[#0B1E33] text-sm px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="btn-gold inline-flex">
                Let's Work Together <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
