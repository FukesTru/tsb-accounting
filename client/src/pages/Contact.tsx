/**
 * TSB Accounting Solutions — Contact Page
 * /contact — Form + Map + Contact Info
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
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
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = new FormData(e.target as HTMLFormElement);
      const res = await fetch("https://formspree.io/f/xpwzgqvb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us directly at (479) 633-1206.");
      }
    } catch {
      setError("Network error. Please call us directly at (479) 633-1206.");
    } finally {
      setLoading(false);
    }
  };

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
              {submitted ? (
                <div className="bg-[#0B1E33] rounded-sm p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-[#C9A84C] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Message Received!
                  </h2>
                  <p className="text-white/70">
                    Thank you for reaching out. Victoria will be in touch within one business day. In the meantime, feel free to call us at{" "}
                    <a href="tel:+14796331206" className="text-[#C9A84C] hover:underline">(479) 633-1206</a>.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-[#0B1E33] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Send Us a Message
                  </h2>
                    <form onSubmit={handleSubmit} className="space-y-5" name="contact">
                      {/* Honeypot spam protection */}
                      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                      <div>
                      <label className="block text-sm font-medium text-[#0B1E33] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full border border-slate-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                        placeholder="Your full name"
                        name="name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1E33] mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full border border-slate-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                        placeholder="(479) 000-0000"
                        name="phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1E33] mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full border border-slate-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                        placeholder="you@example.com"
                        name="email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0B1E33] mb-1.5">Message</label>
                      <textarea
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full border border-slate-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors resize-none"
                        placeholder="Tell us about your business and what you need help with..."
                        name="message"
                      />
                    </div>
                    <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-3.5">
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <p className="text-xs text-slate-400 text-center">
                      We respond within one business day. Your information is kept strictly confidential.
                    </p>
                  </form>
                </div>
              )}
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
