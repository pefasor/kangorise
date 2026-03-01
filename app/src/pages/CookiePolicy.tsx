import { useEffect } from "react";
import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p>We use cookies to remember your preferences, analyze site traffic, personalize content, and provide social media features. We also use cookies for advertising purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p>We may use third-party services that use cookies, such as Google Analytics and social media platforms. These third parties have their own privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p>We may update our Cookie Policy from time to time. Any changes will be posted on this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us at info@kangorise.com.</p>
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