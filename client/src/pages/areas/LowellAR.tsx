/**
 * TSB Accounting Solutions — Lowell, AR Service Area Page
 * /areas/lowell-ar
 */
import { Link } from "wouter";
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { MapView } from "@/components/Map";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TSB Accounting Solutions, LLC",
  "description": "Accounting, bookkeeping, and fractional CFO services in Lowell, AR",
  "telephone": "+14796331206",
  "address": { "@type": "PostalAddress", "streetAddress": "1621 Harold King Ln", "addressLocality": "Lowell", "addressRegion": "AR", "postalCode": "72745", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 36.2584, "longitude": -94.1577 },
  "areaServed": { "@type": "City", "name": "Lowell", "containedInPlace": { "@type": "State", "name": "Arkansas" } },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }],
  "sameAs": ["https://maps.app.goo.gl/AFn1KEQH1HReiKPD7"],
};

export default function LowellAR() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Service Areas" }, { label: "Lowell, AR" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Service Area</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Accounting & Bookkeeping in{" "}<span className="text-[#C9A84C]">Lowell, AR</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">TSB Accounting Solutions is proudly based in Lowell, Arkansas — serving local businesses with the financial expertise they need to grow.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> (479) 633-1206</a></div>
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Serving Lowell Businesses</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Lowell, Arkansas is a growing community in the heart of Northwest Arkansas — and TSB Accounting Solutions is right here with you. We understand the local business landscape, the challenges facing NWA entrepreneurs, and the opportunities that come with operating in one of the fastest-growing regions in the country.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Whether you're a startup just getting off the ground or an established business ready to scale, we provide the bookkeeping, accounting, and financial advisory services that keep your finances solid and your decisions confident.</p>
              <ul className="space-y-3">
                {["Monthly bookkeeping and reconciliation", "Tax planning and strategy", "Financial statement preparation", "Fractional CFO and controller services", "QuickBooks setup and support", "Business advisory and cash flow management"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="bg-[#0B1E33] rounded-sm p-6">
                  <h3 className="text-white font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Lowell Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" /><span className="text-white/70 text-sm">1621 Harold King Ln, Lowell, AR 72745</span></div>
                    <div className="flex items-start gap-3"><Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" /><a href="tel:+14796331206" className="text-white/70 text-sm hover:text-[#C9A84C]">(479) 633-1206</a></div>
                    <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" /><div className="text-white/70 text-sm"><div>Mon–Fri: 9:00 AM – 5:00 PM</div><div>Sat: By Appointment</div></div></div>
                  </div>
                </div>
                <div className="h-56 rounded-sm overflow-hidden border border-slate-200">
                  <MapView onMapReady={(map) => { const pos = { lat: 36.2584, lng: -94.1577 }; map.setCenter(pos); map.setZoom(14); new google.maps.Marker({ position: pos, map, title: "TSB Accounting Solutions" }); }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Serving NWA + Remote trust block */}
      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Serving NWA Businesses + Remote Clients Nationwide</h2>
              <p className="text-white/70 max-w-2xl mx-auto">While we're based in Lowell, our services extend across all of Northwest Arkansas and virtually to clients across the United States. Distance is no barrier to great financial service.</p>
            </div>
            <div className="grid auto-rows-fr grid-cols-2 md:grid-cols-4 gap-4">
              {["Lowell, AR", "Bentonville, AR", "Rogers, AR", "Fayetteville, AR", "Springdale, AR", "Northwest Arkansas", "Virtual / Remote", "Nationwide"].map((area) => (
                <div key={area} className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-center text-white/70 text-sm">{area}</div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#0B1E33] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to work with a local Lowell accountant?</h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">Schedule a free discovery call and let's talk about how TSB can support your Lowell business.</p>
            <Link href="/contact" className="btn-gold inline-flex">Get Started <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-10"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Northwest Arkansas", href: "/areas/northwest-arkansas" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Bookkeeping", href: "/services/bookkeeping" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

