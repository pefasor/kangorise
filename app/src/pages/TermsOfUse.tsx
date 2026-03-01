import { useEffect } from "react";
import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using Kangorise.com, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Website</h2>
              <p>You agree to use our website for lawful purposes only. You may not use our site in any way that could damage, disable, or impair our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Product Information</h2>
              <p>We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, or current.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Orders and Payment</h2>
              <p>All orders are subject to acceptance and availability. We reserve the right to refuse any order. Prices are subject to change without notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Shipping and Returns</h2>
              <p>Shipping times are estimates and may vary. Please refer to our Shipping Policy for details. Returns are accepted within 14 days of delivery for unused products.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Kangorise and protected by copyright laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p>Kangorise shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Turkey.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p>For questions about these Terms, please contact us at info@kangorise.com.</p>
            </section>

            <p className="text-sm text-gray-500 pt-4">Last updated: February 2025</p>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}