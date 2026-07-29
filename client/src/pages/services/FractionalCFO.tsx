/**
 * TSB Accounting Solutions — Fractional CFO & Controller Parent Page
 * /services/fractional-cfo-controller
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

const subServices = [
  { title: "Fractional CFO Services", href: "/services/fractional-cfo-controller/fractional-cfo", desc: "Executive-level financial strategy and leadership without the full-time cost." },
  { title: "Fractional Controller Services", href: "/services/fractional-cfo-controller/fractional-controller", desc: "Oversight of your financial reporting, controls, and accounting operations." },
  { title: "Budgeting & Forecasting", href: "/services/fractional-cfo-controller", desc: "Detailed budgets and rolling forecasts that keep your business on track." },
  { title: "Financial Systems & Process Setup", href: "/services/fractional-cfo-controller", desc: "Build the financial infrastructure your growing business needs from day one." },
];

export default function FractionalCFOPage() {
  return (
    <PageLayout>
      <section className="bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Services" }, { label: "Fractional CFO & Controller" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fractional CFO &{" "}<span className="text-[#C9A84C]">Controller</span>{" "}Services in Northwest Arkansas
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">CFO-level financial leadership and controller oversight for growing businesses — without the full-time executive price tag.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8"><Link href="/contact" className="btn-gold">Free Consultation</Link><a href="tel:+14796331206" className="btn-outline-gold"><Phone className="w-4 h-4" /> (479) 633-1206</a></div>
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <ScrollReveal>
            <p className="text-slate-600 text-lg leading-relaxed">Most small businesses can't afford a full-time CFO or Controller — but they desperately need that level of financial leadership. TSB's Fractional CFO & Controller services give you access to executive-level financial expertise on a part-time, flexible basis. You get the strategy, oversight, and systems of a seasoned finance executive at a fraction of the cost.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0B1E33] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal><h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Services Included</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <Link href={s.href} className="block bg-white/5 border border-white/10 rounded-sm p-6 hover:border-[#C9A84C]/50 transition-all group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold">Learn More <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#0B1E33] mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Why Work with a Dedicated Fractional CFO?</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cost-Effective", desc: "Get CFO-level expertise at 20–30% of the cost of a full-time hire. Pay only for what you need." },
              { title: "Immediate Impact", desc: "No onboarding delays. We hit the ground running with proven systems and frameworks." },
              { title: "Scalable Engagement", desc: "Start with what you need today. Scale up as your business grows and demands increase." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-10 h-0.5 bg-[#C9A84C] mx-auto mb-4" />
                  <h3 className="text-[#0B1E33] font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1E33] py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready for CFO-level financial leadership?</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Schedule a free discovery call and let's talk about how fractional CFO services can transform your business finances.</p>
            <Link href="/contact" className="btn-gold inline-flex">Get Started <ArrowRight className="w-4 h-4" /></Link>
          </ScrollReveal>
        </div>
      </section>
      <section className="section-light py-12"><div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">{[{ label: "Accounting & Advisory", href: "/services/accounting-advisory" }, { label: "Bookkeeping", href: "/services/bookkeeping" }, { label: "Lowell, AR", href: "/areas/lowell-ar" }, { label: "Contact", href: "/contact" }].map((l) => (<Link key={l.label} href={l.href} className="text-[#C9A84C] border border-[#C9A84C]/30 text-sm px-4 py-1.5 rounded-sm hover:bg-[#C9A84C]/10 transition-colors">{l.label}</Link>))}</div></section>
    </PageLayout>
  );
}

