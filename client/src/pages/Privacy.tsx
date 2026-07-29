import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Privacy() {
  return (
    <PageLayout>
      <section className="bg-[#0B1E33] pt-32 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="mt-8 text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>
      <section className="section-light py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-slate">
          <h2>Information We Collect</h2>
          <p>TSB Accounting Solutions, LLC ("we," "us," or "our") collects information you provide directly to us, such as when you fill out a contact form, call us, or email us. This may include your name, phone number, email address, and details about your business.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide accounting and financial services, communicate with you about your account, and improve our services. We do not sell, trade, or rent your personal information to third parties.</p>
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All financial data is handled in accordance with applicable professional standards.</p>
          <h2>Cookies</h2>
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
          <h2>Third-Party Services</h2>
          <p>We may use third-party services such as Google Analytics and Google Maps. These services have their own privacy policies governing the use of your information.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:victoria@tsbaccountingsolutionsllc.com">victoria@tsbaccountingsolutionsllc.com</a> or call <a href="tel:+14796331206">(479) 633-1206</a>.</p>
          <p>TSB Accounting Solutions, LLC · 1621 Harold King Ln, Lowell, AR 72745</p>
        </div>
      </section>
    </PageLayout>
  );
}

