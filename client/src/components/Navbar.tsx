/**
 * TSB Accounting Solutions — Sticky Navbar
 * Design: Transparent over hero → solid navy on scroll
 * Left: Logo | Center-Right: Services (mega-menu), About, Service Areas, Contact | Far Right: Phone + CTA
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X } from "lucide-react";

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

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
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
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
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
            <nav className="hidden lg:flex items-center gap-8">
              {/* Services Mega Menu */}
              <div ref={servicesRef} className="relative">
                <button
                  className="flex items-center gap-1 text-white/90 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
                  onMouseEnter={() => setServicesOpen(true)}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-[#0B1E33] border border-white/10 shadow-2xl rounded-sm"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="grid grid-cols-3 gap-0 p-6">
                        {services.map((cat) => (
                          <div key={cat.category} className="px-4 border-r border-white/10 last:border-r-0">
                            <Link
                              href={cat.href}
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
                        <Link href="/contact" className="text-[#C9A84C] text-sm hover:underline">
                          → Schedule a free consultation
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="text-white/90 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200">
                About
              </Link>

              {/* Service Areas Dropdown */}
              <div ref={areasRef} className="relative">
                <button
                  className="flex items-center gap-1 text-white/90 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
                  onMouseEnter={() => setAreasOpen(true)}
                  onClick={() => setAreasOpen(!areasOpen)}
                >
                  Service Areas <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {areasOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-52 bg-[#0B1E33] border border-white/10 shadow-2xl rounded-sm"
                      onMouseLeave={() => setAreasOpen(false)}
                    >
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.label}
                          href={area.href}
                          className="block px-5 py-3 text-white/80 hover:text-[#C9A84C] hover:bg-white/5 text-sm transition-colors border-b border-white/5 last:border-b-0"
                        >
                          {area.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className="text-white/90 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200">
                Contact
              </Link>
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
              <Link href="/contact" className="btn-gold text-xs py-2.5 px-5">
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#0B1E33] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
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
                        <Link href={cat.href} className="block text-[#C9A84C] text-sm font-semibold py-1">{cat.category}</Link>
                        {cat.items.map((item) => (
                          <Link key={item.label} href={item.href} className="block text-white/70 text-sm py-1 pl-3">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                <Link href="/about" className="block text-white/90 py-3 text-sm font-medium border-b border-white/10">About</Link>
                <button
                  className="w-full flex items-center justify-between text-white/90 py-3 text-sm font-medium border-b border-white/10"
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                >
                  Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAreasOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    {serviceAreas.map((area) => (
                      <Link key={area.label} href={area.href} className="block text-white/70 text-sm py-1">{area.label}</Link>
                    ))}
                  </div>
                )}
                <Link href="/contact" className="block text-white/90 py-3 text-sm font-medium border-b border-white/10">Contact</Link>
                <div className="pt-3 space-y-3">
                  <a href="tel:+14796331206" className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium">
                    <Phone className="w-4 h-4" /> (479) 633-1206
                  </a>
                  <Link href="/contact" className="btn-gold w-full justify-center text-center block">
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

