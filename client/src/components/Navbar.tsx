/**
 * TSB Accounting Solutions — Sticky Navbar
 * Design: Transparent over hero → solid navy on scroll
 * Uses CSS transitions only (no AnimatePresence) for React 19 compatibility
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Phone, ChevronDown, Menu, X, HardHat } from "lucide-react";

const services = [
  {
    category: "Accounting & Advisory",
    href: "/services/accounting-advisory",
    items: [
      { label: "Financial Statement Preparation", href: "/services/accounting-advisory/financial-statements" },
      { label: "Tax Planning & Strategy", href: "/services/accounting-advisory/tax-planning" },
      { label: "Business Advisory", href: "/services/accounting-advisory/business-advisory" },
    ],
  },
  {
    category: "Fractional CFO & Controller",
    href: "/services/fractional-cfo-controller",
    items: [
      { label: "Fractional CFO Services", href: "/services/fractional-cfo-controller/fractional-cfo" },
      { label: "Fractional Controller Services", href: "/services/fractional-cfo-controller/fractional-controller" },
      { label: "Budgeting & Forecasting", href: "/services/fractional-cfo-controller" },
    ],
  },
  {
    category: "Bookkeeping",
    href: "/services/bookkeeping",
    items: [
      { label: "Monthly Bookkeeping", href: "/services/bookkeeping/monthly-bookkeeping" },
      { label: "Cleanup & Catch-Up", href: "/services/bookkeeping/cleanup-catch-up" },
      { label: "Payroll Support", href: "/services/bookkeeping" },
      { label: "QuickBooks Setup & Support", href: "/services/bookkeeping" },
    ],
  },
];

const serviceAreas = [
  { label: "Lowell, AR", href: "/areas/lowell-ar" },
  { label: "Northwest Arkansas", href: "/areas/northwest-arkansas" },
  { label: "Bentonville, AR", href: "/areas/bentonville-ar" },
  { label: "Rogers, AR", href: "/areas/rogers-ar" },
  { label: "Virtual / Nationwide", href: "/areas/northwest-arkansas" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      className="text-white/90 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [location] = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus and scroll to top on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1E33]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <img
                src="/manus-storage/tsb-logo_bc45fde1.png"
                alt="TSB Accounting Solutions Logo"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                  TSB Accounting
                </span>
                <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">Solutions, LLC</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Home */}
              <NavLink href="/">Home</NavLink>

              {/* Construction Accounting — specialty link */}
              <Link
                href="/services/construction-accounting"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="flex items-center gap-1.5 text-[#C9A84C] hover:text-[#e0c070] text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                <HardHat className="w-3.5 h-3.5" />
                Construction
              </Link>

              {/* Services Mega Menu */}
              <div ref={servicesRef} className="relative">
                <button
                  className="flex items-center gap-1 text-white/90 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
                  onMouseEnter={() => setServicesOpen(true)}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {/* CSS-only dropdown — no AnimatePresence */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-[#0B1E33] border border-white/10 shadow-2xl rounded-sm transition-all duration-200 ${
                    servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid auto-rows-fr grid-cols-3 gap-0 p-6">
                    {services.map((cat) => (
                      <div key={cat.category} className="px-4 border-r border-white/10 last:border-r-0">
                        <Link
                          href={cat.href}
                          onClick={() => { setServicesOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }}
                          className="block text-[#C9A84C] font-semibold text-sm mb-3 hover:text-[#e0c070] transition-colors"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {cat.category}
                        </Link>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => { setServicesOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }}
                                className="text-white/70 hover:text-white text-sm transition-colors block py-0.5"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 px-6 py-3 bg-[#0a0f14]/50">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/services/construction-accounting"
                        onClick={() => { setServicesOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }}
                        className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:underline"
                      >
                        ★ Construction Accounting — Our Specialty
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => { setServicesOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }}
                        className="text-white/60 text-sm hover:text-[#C9A84C] hover:underline"
                      >
                        → Free consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink href="/about">About</NavLink>

              {/* Service Areas Dropdown */}
              <div ref={areasRef} className="relative">
                <button
                  className="flex items-center gap-1 text-white/90 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
                  onMouseEnter={() => setAreasOpen(true)}
                  onClick={() => setAreasOpen(!areasOpen)}
                >
                  Areas <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 mt-3 w-52 bg-[#0B1E33] border border-white/10 shadow-2xl rounded-sm transition-all duration-200 ${
                    areasOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  onMouseLeave={() => setAreasOpen(false)}
                >
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.label}
                      href={area.href}
                      onClick={() => { setAreasOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); }}
                      className="block px-5 py-3 text-white/80 hover:text-[#C9A84C] hover:bg-white/5 text-sm transition-colors border-b border-white/5 last:border-b-0"
                    >
                      {area.label}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+14796331206"
                className="flex items-center gap-2 text-white/80 hover:text-[#C9A84C] text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                (479) 633-1206
              </a>
              <Link
                href="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="btn-gold text-xs py-2.5 px-5"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — CSS show/hide, no AnimatePresence */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0B1E33] border-t border-white/10">
            <div className="px-4 py-4 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white/90 py-3 text-sm font-medium border-b border-white/10">
                Home
              </Link>
              <Link
                href="/services/construction-accounting"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-[#C9A84C] py-3 text-sm font-semibold border-b border-white/10"
              >
                <HardHat className="w-4 h-4" /> Construction Accounting
              </Link>
              <button
                className="w-full flex items-center justify-between text-white/90 py-3 text-sm font-medium border-b border-white/10"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pb-2 space-y-2">
                  {services.map((cat) => (
                    <div key={cat.category}>
                      <Link href={cat.href} onClick={() => setMobileOpen(false)} className="block text-[#C9A84C] text-sm font-semibold py-1">{cat.category}</Link>
                      {cat.items.map((item) => (
                        <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block text-white/70 text-sm py-1 pl-3">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white/90 py-3 text-sm font-medium border-b border-white/10">About</Link>
              <button
                className="w-full flex items-center justify-between text-white/90 py-3 text-sm font-medium border-b border-white/10"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              >
                Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {serviceAreas.map((area) => (
                    <Link key={area.label} href={area.href} onClick={() => setMobileOpen(false)} className="block text-white/70 text-sm py-1">{area.label}</Link>
                  ))}
                </div>
              )}
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white/90 py-3 text-sm font-medium border-b border-white/10">Contact</Link>
              <div className="pt-3 space-y-3">
                <a href="tel:+14796331206" className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium">
                  <Phone className="w-4 h-4" /> (479) 633-1206
                </a>
                <a
                  href="https://wa.me/14796331206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 text-sm font-medium"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-gold w-full justify-center text-center block">
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
