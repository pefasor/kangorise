import { useEffect } from "react";
import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollY={0} />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including name, email address, phone number, shipping address, and payment information when you make a purchase.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use your information to process orders, communicate with you about your purchases, send promotional materials (with your consent), and improve our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p>We do not sell your personal information. We share information with third-party service providers only as necessary to fulfill orders and operate our business.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us at info@kangorise.com for any privacy-related requests.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <p>We use cookies to enhance your browsing experience and analyze site traffic. You can disable cookies in your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at info@kangorise.com.</p>
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