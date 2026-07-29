import PageLayout from "@/components/PageLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Terms() {
  return (
    <PageLayout>
      <section className="bg-[#0B1E33] pt-32 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Terms & Disclaimer" }]} />
          <h1 className="mt-8 text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Terms of Use & Disclaimer</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>
      <section className="section-light py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-slate">
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using the TSB Accounting Solutions, LLC website (tsbaccountingsolutionsllc.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.</p>
          <h2>Professional Disclaimer</h2>
          <p>The information provided on this website is for general informational purposes only and does not constitute professional accounting, tax, legal, or financial advice. No client relationship is created by visiting this website or submitting a contact form. Always consult a qualified professional for advice specific to your situation.</p>
          <h2>Limitation of Liability</h2>
          <p>TSB Accounting Solutions, LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information contained herein.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of TSB Accounting Solutions, LLC and is protected by applicable intellectual property laws.</p>
          <h2>External Links</h2>
          <p>This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.</p>
          <h2>Governing Law</h2>
          <p>These terms shall be governed by the laws of the State of Arkansas, without regard to its conflict of law provisions.</p>
          <h2>Contact</h2>
          <p>Questions about these terms? Contact us at <a href="mailto:victoria@tsbaccountingsolutionsllc.com">victoria@tsbaccountingsolutionsllc.com</a>.</p>
        </div>
      </section>
    </PageLayout>
  );
}

