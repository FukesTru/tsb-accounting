import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

export default function BentonvilleAR() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Service Areas" }, { label: "Bentonville, AR" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Service Area</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Accounting & Bookkeeping in{" "}<span className="text-[#C9A84C]">Bentonville, AR</span>
            </h1>
            <p className="text-white/70 text-lg mt-4">Professional accounting, bookkeeping, and fractional CFO services for Bentonville businesses — from startups to established companies.</p>
            <div className="flex gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call Us</a></div>
          </div>
        </div>
      </section>
      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Serving Bentonville Businesses</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Bentonville is the economic heart of Northwest Arkansas — home to Walmart's global headquarters and a thriving ecosystem of suppliers, startups, and service businesses. TSB Accounting Solutions serves Bentonville businesses with the same precision and care we bring to every client.</p>
            <p className="text-slate-600 leading-relaxed mb-8">From monthly bookkeeping to fractional CFO services, we help Bentonville businesses build the financial foundation they need to compete and grow in one of the country's most dynamic markets.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Monthly bookkeeping", "Tax planning & strategy", "Financial statement preparation", "Fractional CFO services", "Fractional controller services", "Cleanup & catch-up bookkeeping", "QuickBooks setup & support", "Business advisory"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />{item}</div>
              ))}
            </div>
            <div className="mt-8"><Link href="/contact" className="btn-gold inline-flex">Schedule a Free Consultation <ArrowRight className="w-4 h-4" /></Link></div>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-[#0B1E33] py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Lowell, AR", href: "/areas/lowell-ar" }, { label: "Northwest Arkansas", href: "/areas/northwest-arkansas" }, { label: "Rogers, AR", href: "/areas/rogers-ar" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

