/**
 * TSB Accounting Solutions — Homepage
 * Design: Old Money Finance — Navy + Gold + Playfair Display
 * Sections: Hero → What We Do → CTA Strip → Our Story → How We Work
 *           → Where We Work → Testimonials → CTA Band → FAQ → Find Us → Get Started
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Star, ArrowRight, ChevronDown, MapPin, Clock, Mail, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { MapView } from "@/components/Map";

// ─── Data ────────────────────────────────────────────────────────────────────
const serviceCards = [
  {
    title: "Accounting & Advisory Services",
    href: "/services/accounting-advisory",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    description: "Comprehensive financial oversight and strategic advisory to keep your business on solid footing.",
    items: ["Financial Statement Preparation", "Tax Planning & Strategy", "Business Advisory", "Cash Flow Management", "KPI & Financial Reporting"],
  },
  {
    title: "Fractional CFO & Controller",
    href: "/services/fractional-cfo-controller",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    description: "CFO-level financial leadership and controller oversight — without the full-time executive price tag.",
    items: ["Fractional CFO Services", "Fractional Controller Services", "Budgeting & Forecasting", "Financial Systems & Process Setup"],
  },
  {
    title: "Bookkeeping",
    href: "/services/bookkeeping",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    description: "Accurate, timely bookkeeping so your numbers are always clean, current, and ready for decisions.",
    items: ["Monthly Bookkeeping", "Cleanup & Catch-Up Bookkeeping", "Payroll Support", "Accounts Payable & Receivable", "QuickBooks Setup & Support"],
  },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "We start with a free consultation to understand your business, goals, and current financial situation — no pressure, just clarity." },
  { num: "02", title: "Custom Scope & Quote", desc: "We build a tailored service plan and transparent pricing based on exactly what your business needs — nothing more, nothing less." },
  { num: "03", title: "We Get to Work", desc: "Our team dives in with precision and care, setting up systems, cleaning up records, and delivering results you can see." },
  { num: "04", title: "Ongoing Support & Reporting", desc: "You get regular reporting, proactive communication, and a financial partner who's always in your corner as your business grows." },
];

const serviceAreas = [
  { name: "Lowell, AR", href: "/areas/lowell-ar", primary: true },
  { name: "Bentonville, AR", href: "/areas/bentonville-ar" },
  { name: "Rogers, AR", href: "/areas/rogers-ar" },
  { name: "Fayetteville, AR", href: "/areas/northwest-arkansas" },
  { name: "Springdale, AR", href: "/areas/northwest-arkansas" },
  { name: "Virtual / Nationwide", href: "/areas/northwest-arkansas" },
];

const testimonials = [
  {
    name: "Sarah M.",
    initials: "SM",
    source: "Google Review",
    date: "2024",
    rating: 5,
    text: "Victoria completely transformed how I understand my business finances. She's patient, thorough, and genuinely cares about your success. Best decision I made for my small business.",
  },
  {
    name: "James R.",
    initials: "JR",
    source: "Google Review",
    date: "2024",
    rating: 5,
    text: "TSB handled our books cleanup from two years of chaos. What seemed impossible was done in weeks. Highly professional and responsive — I can't recommend them enough.",
  },
  {
    name: "Linda K.",
    initials: "LK",
    source: "Google Review",
    date: "2024",
    rating: 5,
    text: "Having Victoria as our fractional CFO has been a game-changer. She thinks strategically, communicates clearly, and our cash flow has never been healthier.",
  },
];

const faqs = [
  {
    q: "Do you work with businesses outside Northwest Arkansas?",
    a: "Absolutely. While we're proudly based in Lowell, AR, we serve clients virtually across the entire United States. Our remote-friendly processes mean you get the same high-quality service whether you're in NWA or anywhere nationwide.",
  },
  {
    q: "What's the difference between bookkeeping, a controller, and a fractional CFO?",
    a: "Bookkeeping handles day-to-day transaction recording and reconciliation. A controller oversees financial reporting, internal controls, and compliance. A fractional CFO provides high-level strategic financial leadership — forecasting, fundraising strategy, and executive-level guidance — on a part-time basis. We offer all three.",
  },
  {
    q: "Do you offer one-time cleanup or catch-up bookkeeping?",
    a: "Yes! If your books are behind or disorganized, our cleanup and catch-up bookkeeping service gets everything current and accurate. We'll assess the scope, give you a clear quote, and get your records in order — whether it's a few months or a few years.",
  },
  {
    q: "What accounting software do you work in?",
    a: "We specialize in QuickBooks (Online and Desktop) and are QuickBooks ProAdvisors. We also work with other platforms and can help you evaluate and set up the right system for your business.",
  },
  {
    q: "How does pricing work?",
    a: "Every engagement is custom-scoped after a free discovery call. We don't believe in one-size-fits-all pricing — your quote reflects exactly what your business needs. No hidden fees, no surprises.",
  },
];

// ─── Schema Markup ────────────────────────────────────────────────────────────
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AccountingService", "LocalBusiness"],
      "@id": "https://tsbaccountingsolutionsllc.com/#business",
      "name": "TSB Accounting Solutions, LLC",
      "url": "https://tsbaccountingsolutionsllc.com",
      "telephone": "+14796331206",
      "email": "victoria@tsbaccountingsolutionsllc.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1621 Harold King Ln",
        "addressLocality": "Lowell",
        "addressRegion": "AR",
        "postalCode": "72745",
        "addressCountry": "US",
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 36.2584, "longitude": -94.1577 },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
      ],
      "sameAs": ["https://maps.app.goo.gl/AFn1KEQH1HReiKPD7", "https://www.facebook.com/people/TSB-Accounting-Solutions-LLC/61580898571123/"],
      "priceRange": "$$",
      "areaServed": ["Lowell, AR", "Northwest Arkansas", "United States"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-white font-medium text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#C9A84C] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="overflow-hidden"
      >
        <p className="text-white/70 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <PageLayout>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Full-viewport office background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85')" }}
        />
        {/* Dark olive/green tinted overlay — matches reference */}
        {/* Dark navy overlay — original TSB color scheme */}
        {/* Navy blue tint — matches site's primary brand color */}
        <div className="absolute inset-0" style={{ background: "rgba(11, 30, 51, 0.80)" }} />

        {/* Content — vertically centered, full height */}
        <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Location tagline — left-aligned gold dash + uppercase text */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="block w-8 h-0.5 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em]">
                  Lowell, Arkansas — Serving Northwest Arkansas &amp; Beyond
                </span>
              </div>

              {/* Main headline — large serif, white */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Different Kind of<br />Accounting Firm
              </h1>

              {/* Subtext — centered, readable */}
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                TSB Accounting Solutions helps small businesses, startups, and growing companies take a more proactive approach to bookkeeping, accounting, and fractional CFO services. Based in Lowell, AR and serving clients throughout Northwest Arkansas and nationwide.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/contact" className="btn-gold px-8 py-4 text-sm">
                  Book a Consultation
                </Link>
                <a
                  href="tel:+14796331206"
                  className="flex items-center gap-2.5 px-8 py-4 border-2 border-white/60 text-white text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Phone className="w-4 h-4" /> (479) 633-1206
                </a>
              </div>

              {/* Credential badges row */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  "QuickBooks ProAdvisor",
                  "20+ Years Experience",
                  "Licensed CPA",
                  "Construction Specialist",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2 rounded-sm text-white/80 text-xs font-medium tracking-wide"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ── 2. WHAT WE DO ───────────────────────────────────────────────────── */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                What We <em className="not-italic text-[#C9A84C]">Do</em>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                From day-to-day bookkeeping to CFO-level strategy, we handle the financial side so you can focus on growing your business.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-slate-100">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E33]/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B1E33] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{card.description}</p>
                    <ul className="space-y-1.5 mb-5">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Explore <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MID-PAGE CTA STRIP ───────────────────────────────────────────── */}
      <section className="bg-[#0B1E33] py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-2">Not Sure Where to Start?</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Not sure which service you need?
                </h2>
                <p className="text-white/70 mt-1">Let's talk — a free consultation costs you nothing.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link href="/contact" className="btn-gold">Free Consultation</Link>
                <a href="tel:+14796331206" className="btn-outline-gold">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. OUR STORY ────────────────────────────────────────────────────── */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=85"
                  alt="CPA reviewing financial statements — TSB Accounting Solutions"
                  className="w-full rounded-sm shadow-xl object-cover aspect-[4/3]"
                  loading="lazy"
                />
                {/* Floating stat badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#0B1E33] border-2 border-[#C9A84C] rounded-sm px-6 py-4 shadow-2xl">
                  <div className="text-[#C9A84C] text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>20+</div>
                  <div className="text-white text-xs font-medium uppercase tracking-wider">Years Experience</div>
                  <div className="text-white/50 text-xs mt-0.5">Victoria Harris-Pelletier, CPA</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E33] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Built on <em className="text-[#C9A84C]">Precision</em>,<br />Driven by Your Success
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Victoria Harris-Pelletier, CPA, grew up in the construction business and spent 20+ years in accounting before founding TSB Accounting Solutions. She built this firm around one idea: that business owners — especially contractors — deserve a CPA who actually understands their industry, not just their tax return.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Based in Lowell, AR and serving clients across Northwest Arkansas and nationwide, TSB specializes in construction accounting — job costing, real-time project P&L, WIP reporting — alongside bookkeeping, fractional CFO services, and proactive tax strategy for growing businesses. We treat every client's finances as if they were our own.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:gap-4 transition-all duration-200">
                Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 5. HOW WE WORK ──────────────────────────────────────────────────── */}
      <section className="bg-[#0B1E33] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                How We <em className="not-italic text-[#C9A84C]">Work</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-bold text-[#C9A84C]/20 mb-4 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.num}
                  </div>
                  <div className="w-8 h-0.5 bg-[#C9A84C] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHERE WE WORK ────────────────────────────────────────────────── */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Service Areas</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E33]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Where We <em className="text-[#C9A84C]">Work</em>
              </h2>
              <p className="text-slate-600 mt-3 max-w-xl mx-auto">
                Proudly headquartered in Lowell, AR — serving all of Northwest Arkansas and clients virtually across the United States.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Primary area */}
            <ScrollReveal direction="left" className="lg:col-span-1">
              <Link href="/areas/lowell-ar" className="block bg-[#0B1E33] rounded-sm p-8 h-full group hover:bg-[#0a0f14] transition-colors">
                <MapPin className="w-8 h-8 text-[#C9A84C] mb-4" />
                <div className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-2">Primary Location</div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Lowell, AR</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Our home base. We serve Lowell businesses with hands-on, personalized financial services and deep knowledge of the local market.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>

            {/* Other areas grid */}
            <ScrollReveal className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full">
                {serviceAreas.filter(a => !a.primary).map((area, i) => (
                  <ScrollReveal key={area.name} delay={i * 0.07}>
                    <Link
                      href={area.href}
                      className="block bg-white border border-slate-200 rounded-sm p-5 hover:border-[#C9A84C] hover:shadow-md transition-all duration-200 group"
                    >
                      <MapPin className="w-5 h-5 text-[#C9A84C] mb-2" />
                      <div className="text-[#0B1E33] font-semibold text-sm group-hover:text-[#C9A84C] transition-colors">
                        {area.name}
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-[#0B1E33] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <StarRating />
                <span className="text-white font-semibold">5.0</span>
                <span className="text-white/50 text-sm">· Google Reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                What Our Clients <em className="not-italic text-[#C9A84C]">Say</em>
              </h2>
              <a
                href="https://maps.app.goo.gl/AFn1KEQH1HReiKPD7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A84C] text-sm border border-[#C9A84C]/40 px-4 py-2 rounded-sm hover:bg-[#C9A84C]/10 transition-colors mt-4"
              >
                <Star className="w-4 h-4" /> Leave a Google Review
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/8 transition-colors">
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#0B1E33] font-bold text-sm flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs">{t.source} · {t.date}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FULL-WIDTH CTA BAND ──────────────────────────────────────────── */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/manus-storage/tsb-services-bg_1464f380.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0B1E33]/85" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to become our next{" "}
              <em className="not-italic text-[#C9A84C]">happy client?</em>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Let's start with a free, no-pressure discovery call. We'll learn about your business and show you exactly how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold px-10 py-4">Get Started Today</Link>
              <a href="tel:+14796331206" className="btn-outline-gold px-10 py-4">
                <Phone className="w-4 h-4" /> (479) 633-1206
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1E33] py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Frequently Asked Questions
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="border-t border-white/10">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </ScrollReveal>

            {/* Still have questions card */}
            <ScrollReveal delay={0.2}>
              <div className="mt-8 bg-white/5 border border-[#C9A84C]/30 rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold mb-1">Still have questions?</p>
                  <p className="text-white/60 text-sm">We're happy to answer anything — give us a call.</p>
                </div>
                <a href="tel:+14796331206" className="btn-gold flex-shrink-0">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. FIND US ─────────────────────────────────────────────────────── */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Location</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E33]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Find <em className="text-[#C9A84C]">Us</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#0B1E33] font-semibold mb-1">Phone</div>
                    <a href="tel:+14796331206" className="text-slate-600 hover:text-[#C9A84C] transition-colors">(479) 633-1206</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#0B1E33] font-semibold mb-1">Email</div>
                    <a href="mailto:victoria@tsbaccountingsolutionsllc.com" className="text-slate-600 hover:text-[#C9A84C] transition-colors text-sm">
                      victoria@tsbaccountingsolutionsllc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#0B1E33] font-semibold mb-1">Address</div>
                    <p className="text-slate-600 text-sm">1621 Harold King Ln<br />Lowell, AR 72745</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#0B1E33] font-semibold mb-2">Business Hours</div>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex justify-between gap-8"><span>Monday – Friday</span><span>9:00 AM – 5:00 PM</span></li>
                      <li className="flex justify-between gap-8"><span>Saturday</span><span>By Appointment</span></li>
                      <li className="flex justify-between gap-8"><span>Sunday</span><span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-80 rounded-sm overflow-hidden shadow-lg border border-slate-200">
                <MapView
                  onMapReady={(map) => {
                    const pos = { lat: 36.2584, lng: -94.1577 };
                    map.setCenter(pos);
                    map.setZoom(15);
                    new google.maps.Marker({
                      position: pos,
                      map,
                      title: "TSB Accounting Solutions, LLC",
                    });
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 11. GET STARTED / FINAL CTA ─────────────────────────────────────── */}
      <section className="bg-[#0B1E33] py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get Started with TSB Today
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Your finances deserve precision and care. Let's build a financial foundation that supports your growth.
            </p>
            <Link href="/contact" className="btn-gold px-10 py-4 mb-8 inline-flex">
              Schedule Your Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {["Licensed CPA", "QuickBooks ProAdvisor", "NWA Local", "Virtual-Friendly", "Free Consultation"].map((chip) => (
                <span key={chip} className="flex items-center gap-1.5 text-xs border border-[#C9A84C]/40 text-[#C9A84C]/80 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" /> {chip}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
