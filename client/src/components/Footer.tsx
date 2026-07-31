/**
 * TSB Accounting Solutions — Site Footer
 * Design: Dark navy, gold accents, 4-column layout
 * Columns: Logo+blurb, Services, Service Areas, Contact+Hours
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f14] text-white/80">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + Blurb + Trust Chips */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src="/manus-storage/tsb-logo_bc45fde1.png" alt="TSB Logo" className="h-9 w-9 object-contain" />
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>TSB Accounting Solutions</div>
                <div className="text-[#C9A84C] text-xs tracking-widest uppercase">LLC</div>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Precision financial services for growing businesses in Northwest Arkansas and beyond. Bookkeeping, fractional CFO, and advisory — handled like your own.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Licensed CPA", "QuickBooks ProAdvisor", "Construction Specialist", "NWA Local"].map((chip) => (
                <span key={chip} className="text-xs border border-[#C9A84C]/40 text-[#C9A84C]/80 px-2.5 py-1 rounded-sm">
                  {chip}
                </span>
              ))}
            </div>
            <a
              href="https://www.facebook.com/people/TSB-Accounting-Solutions-LLC/61580898571123/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A84C] transition-colors text-sm"
            >
              <Facebook className="w-4 h-4" /> Follow on Facebook
            </a>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">Services</h4>
            <ul className="space-y-2.5">
              {[
               { label: "Accounting & Advisory", href: "/services/accounting-advisory" },
               { label: "Construction Accounting", href: "/services/construction-accounting" },
               { label: "Tax Planning & Strategy", href: "/services/accounting-advisory/tax-planning" },
                { label: "Financial Statements", href: "/services/accounting-advisory/financial-statements" },
                { label: "Fractional CFO", href: "/services/fractional-cfo-controller/fractional-cfo" },
                { label: "Fractional Controller", href: "/services/fractional-cfo-controller/fractional-controller" },
                { label: "Monthly Bookkeeping", href: "/services/bookkeeping/monthly-bookkeeping" },
                { label: "Cleanup Bookkeeping", href: "/services/bookkeeping/cleanup-catch-up" },
                { label: "QuickBooks Support", href: "/services/bookkeeping" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">Service Areas</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Lowell, AR", href: "/areas/lowell-ar" },
                { label: "Northwest Arkansas", href: "/areas/northwest-arkansas" },
                { label: "Bentonville, AR", href: "/areas/bentonville-ar" },
                { label: "Rogers, AR", href: "/areas/rogers-ar" },
                { label: "Fayetteville, AR", href: "/areas/northwest-arkansas" },
                { label: "Springdale, AR", href: "/areas/northwest-arkansas" },
                { label: "Virtual / Nationwide", href: "/areas/northwest-arkansas" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="tel:+14796331206" className="flex items-start gap-2.5 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                  (479) 633-1206
                </a>
              </li>
              <li>
                <a href="mailto:victoria@tsbaccountingsolutionsllc.com" className="flex items-start gap-2.5 text-white/60 hover:text-[#C9A84C] text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                  victoria@tsbaccountingsolutionsllc.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/AFn1KEQH1HReiKPD7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/60 hover:text-[#C9A84C] text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C9A84C]" />
                  1621 Harold King Ln<br />Lowell, AR 72745
                </a>
              </li>
            </ul>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C9A84C]" /> Hours
            </h4>
            <ul className="space-y-1.5 text-sm text-white/60">
              <li className="flex justify-between"><span>Mon – Fri</span><span>9:00 AM – 5:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>By Appointment</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} TSB Accounting Solutions, LLC. All rights reserved. | 1621 Harold King Ln, Lowell, AR 72745 | (479) 633-1206
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-[#C9A84C] transition-colors">Terms</Link>
            <Link href="/sitemap" className="text-xs text-white/40 hover:text-[#C9A84C] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
