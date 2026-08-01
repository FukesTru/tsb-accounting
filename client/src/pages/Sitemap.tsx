import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

const sitemapData = [
  { section: "Core Pages", links: [
    { label: "Homepage", href: "/" },
    { label: "About Victoria & TSB", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Disclaimer", href: "/terms" },
  ]},
  { section: "Accounting & Advisory Services", links: [
    { label: "Accounting & Advisory — Overview", href: "/services/accounting-advisory" },
    { label: "Tax Planning & Strategy", href: "/services/accounting-advisory/tax-planning" },
    { label: "Financial Statement Preparation", href: "/services/accounting-advisory/financial-statements" },
    { label: "Business Advisory", href: "/services/accounting-advisory/business-advisory" },
  ]},
  { section: "Fractional CFO & Controller", links: [
    { label: "Fractional CFO & Controller — Overview", href: "/services/fractional-cfo-controller" },
    { label: "Fractional CFO Services", href: "/services/fractional-cfo-controller/fractional-cfo" },
    { label: "Fractional Controller Services", href: "/services/fractional-cfo-controller/fractional-controller" },
  ]},
  { section: "Bookkeeping Services", links: [
    { label: "Bookkeeping — Overview", href: "/services/bookkeeping" },
    { label: "Monthly Bookkeeping", href: "/services/bookkeeping/monthly-bookkeeping" },
    { label: "Cleanup & Catch-Up Bookkeeping", href: "/services/bookkeeping/cleanup-catch-up" },
  ]},
  { section: "Service Areas", links: [
    { label: "Lowell, AR", href: "/areas/lowell-ar" },
    { label: "Northwest Arkansas", href: "/areas/northwest-arkansas" },
    { label: "Bentonville, AR", href: "/areas/bentonville-ar" },
    { label: "Rogers, AR", href: "/areas/rogers-ar" },
    { label: "Bella Vista, AR", href: "/areas/bella-vista-ar" },
  ]},
];

export default function Sitemap() {
  return (
    <PageLayout>
      <section className="bg-[#0B1E33] pt-32 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Sitemap" }]} />
          <h1 className="mt-8 text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Sitemap</h1>
          <p className="text-white/60 mt-2">A complete directory of all pages on tsbaccountingsolutionsllc.com</p>
        </div>
      </section>
      <section className="section-light py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sitemapData.map((group) => (
              <div key={group.section}>
                <h2 className="text-[#0B1E33] font-bold text-lg mb-4 pb-2 border-b border-slate-200" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {group.section}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-600 hover:text-[#C9A84C] text-sm transition-colors flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

