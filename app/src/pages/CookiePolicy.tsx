import { ArrowLeft, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header */}
      <div className="bg-brand-blue py-12">
        <div className="w-full section-padding">
          <div className="max-w-4xl mx-auto">
            <a href="/">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-4 -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Cookie className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-black text-white">Cookie Policy</h1>
                <p className="text-white/70">Last updated: February 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full section-padding py-12 lg:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                a website. They are widely used to make websites work more efficiently and provide information 
                to the owners of the site. Cookies help us provide you with a better experience by enabling 
                us to monitor which pages you find useful and which you do not.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kangorise uses cookies for several purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functionality Cookies:</strong> These allow the website to remember choices you make (such as your username, language, or region) and provide enhanced features.</li>
                <li><strong>Targeting Cookies:</strong> These are used to deliver advertisements more relevant to you and your interests.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 mt-4">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Cookie Name</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">session_id</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Maintains your session state</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Session</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">preferences</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Stores your preferences</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">analytics</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">Helps us improve our website</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings preferences. However, 
                if you limit the ability of websites to set cookies, you may worsen your overall user experience. 
                To manage cookies in your browser:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage 
                statistics of the website and deliver advertisements on and through the website. These third 
                parties may include analytics providers (such as Google Analytics) and advertising networks. 
                We do not control these third-party cookies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Cookie Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting 
                the new Cookie Policy on this page and updating the "Last updated" date. You are advised to 
                review this Cookie Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Consent</h2>
              <p className="text-gray-600 leading-relaxed">
                By continuing to use our website, you consent to the use of cookies as described in this 
                Cookie Policy. If you do not agree to our use of cookies, you should set your browser 
                settings accordingly or not use our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our Cookie Policy, please contact us:
              </p>
              <div className="mt-4 bg-brand-blue/5 rounded-xl p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@kangorise.com<br/>
                  <strong>Address:</strong> Kangorise, United States
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
