import { Link } from "wouter";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { MapView } from "@/components/Map";

const cities = ["Lowell", "Bentonville", "Rogers", "Fayetteville", "Springdale", "Bella Vista", "Siloam Springs", "Centerton"];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TSB Accounting Solutions, LLC",
  "description": "Accounting, bookkeeping, and fractional CFO services across Northwest Arkansas and virtually nationwide.",
  "telephone": "+14796331206",
  "address": { "@type": "PostalAddress", "streetAddress": "1621 Harold King Ln", "addressLocality": "Lowell", "addressRegion": "AR", "postalCode": "72745", "addressCountry": "US" },
  "areaServed": [{ "@type": "State", "name": "Arkansas" }, { "@type": "Country", "name": "United States" }],
};

export default function NorthwestArkansas() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Service Areas" }, { label: "Northwest Arkansas" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Service Area</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Accounting & Bookkeeping in{" "}<span className="text-[#C9A84C]">Northwest Arkansas</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">TSB Accounting Solutions serves businesses across all of Northwest Arkansas — from Bentonville to Fayetteville — and virtually anywhere in the US.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> (479) 633-1206</a></div>
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Serving All of Northwest Arkansas</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Northwest Arkansas is one of the fastest-growing regions in the United States — and the businesses here deserve financial services that match that momentum. TSB Accounting Solutions is based in Lowell and serves clients across the entire NWA corridor, from Bentonville's corporate hub to Fayetteville's startup scene.</p>
              <p className="text-slate-600 leading-relaxed mb-6">We also work with clients virtually across the United States. Whether you're a NWA local or a remote client anywhere in the country, you get the same precision, care, and expertise.</p>
              <div className="grid auto-rows-fr grid-cols-2 gap-2">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-slate-700 text-sm"><MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />{city}, AR</div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <ul className="space-y-3">
                  {["Monthly bookkeeping and reconciliation", "Tax planning and strategy", "Financial statement preparation", "Fractional CFO and controller services", "Cleanup and catch-up bookkeeping", "QuickBooks setup and support", "Business advisory", "Virtual / remote service available nationwide"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
                <div className="h-56 rounded-sm overflow-hidden border border-slate-200">
                  <MapView onMapReady={(map) => { map.setCenter({ lat: 36.35, lng: -94.2 }); map.setZoom(10); new google.maps.Marker({ position: { lat: 36.2584, lng: -94.1577 }, map, title: "TSB Accounting Solutions — Lowell, AR" }); }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Serving NWA Businesses + Remote Clients Nationwide</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">We're local to NWA and available virtually to clients anywhere in the United States. Distance is no barrier to great financial service.</p>
            <Link href="/contact" className="btn-gold inline-flex">Schedule a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Lowell, AR", href: "/areas/lowell-ar" }, { label: "Bentonville, AR", href: "/areas/bentonville-ar" }, { label: "Rogers, AR", href: "/areas/rogers-ar" }, { label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

