/**
 * TSB Accounting Solutions — Contact Page
 * /contact — Form + Map + Contact Info
 */
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import LeadConnectorForm from "@/components/LeadConnectorForm";
import { MapView } from "@/components/Map";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TSB Accounting Solutions, LLC",
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
};

export default function Contact() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero */}
      <section className="bg-[#0B1E33] pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="mt-8 max-w-2xl">
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Talk About{" "}
              <span className="text-[#C9A84C]">Your Numbers</span>
            </h1>
            <p className="text-white/70 text-lg mt-4">
              Schedule a free discovery call or send us a message. We'll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Send Us a Message
                </h2>
                <LeadConnectorForm
                  formId="Hkp1qNjcnBasg0990Le0"
                  formName="Website Form (TSB Acounting Solutions, LLC)"
                  height={542}
                />
                <p className="text-xs text-slate-400 text-center mt-4">
                  We respond within one business day. Your information is kept strictly confidential.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Info + Map */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Contact Information
                  </h2>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: "(479) 633-1206", href: "tel:+14796331206" },
                      { icon: Mail, label: "Email", value: "victoria@tsbaccountingsolutionsllc.com", href: "mailto:victoria@tsbaccountingsolutionsllc.com" },
                      { icon: MapPin, label: "Address", value: "1621 Harold King Ln, Lowell, AR 72745", href: "https://maps.app.goo.gl/AFn1KEQH1HReiKPD7" },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#C9A84C]" />
                        </div>
                        <div>
                          <div className="text-[#0B1E33] font-semibold text-sm mb-0.5">{label}</div>
                          <a href={href} className="text-slate-600 hover:text-[#C9A84C] text-sm transition-colors">{value}</a>
                        </div>
                      </div>
                    ))}
                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-50 rounded-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </div>
                      <div>
                        <div className="text-[#0B1E33] font-semibold text-sm mb-0.5">WhatsApp</div>
                        <a
                          href="https://wa.me/14796331206"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 text-sm transition-colors font-medium"
                        >
                          Message Victoria on WhatsApp
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#C9A84C]" />
                      </div>
                      <div>
                        <div className="text-[#0B1E33] font-semibold text-sm mb-2">Business Hours</div>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li className="flex justify-between gap-8"><span>Mon – Fri</span><span>9:00 AM – 5:00 PM</span></li>
                          <li className="flex justify-between gap-8"><span>Saturday</span><span>By Appointment</span></li>
                          <li className="flex justify-between gap-8"><span>Sunday</span><span>Closed</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Map */}
                <div className="h-64 rounded-sm overflow-hidden shadow-md border border-slate-200">
                  <MapView
                    onMapReady={(map) => {
                      const pos = { lat: 36.2584, lng: -94.1577 };
                      map.setCenter(pos);
                      map.setZoom(15);
                      new google.maps.Marker({ position: pos, map, title: "TSB Accounting Solutions, LLC" });
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
