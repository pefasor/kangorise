import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TermsOfUse() {
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
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-black text-white">Terms of Use</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the Kangorise website and services, you agree to be bound by these 
                Terms of Use. If you disagree with any part of these terms, you may not access the website 
                or use our services. These Terms of Use apply to all visitors, users, and others who access 
                or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                The Kangorise name, logo, and all related names, logos, product and service names, designs, 
                and slogans are trademarks of Kangorise or its affiliates. You may not use such marks without 
                the prior written permission of Kangorise. All content on this website, including text, graphics, 
                logos, images, and software, is the property of Kangorise and is protected by copyright and 
                other intellectual property laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subject to your compliance with these Terms of Use, Kangorise grants you a limited, non-exclusive, 
                non-transferable, revocable license to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Access and view the content on our website for personal, non-commercial use</li>
                <li>Download materials for temporary caching to improve browsing experience</li>
                <li>Share links to our website on social media platforms</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, 
                create derivative works from, transfer, or sell any information, software, products, or services 
                obtained from this website without our express written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Representations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By using our website, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>You are at least 18 years of age or have parental consent</li>
                <li>You have the legal capacity and agree to comply with these Terms of Use</li>
                <li>All information you provide is accurate, current, and complete</li>
                <li>You will not use the website for any illegal or unauthorized purpose</li>
                <li>Your use will not violate any applicable law or regulation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not access or use the website for any purpose other than that for which we make the 
                website available. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Systematically retrieving data or content to create a database</li>
                <li>Tricking, defrauding, or misleading us or other users</li>
                <li>Circumventing security features of the website</li>
                <li>Interfering with the proper working of the website</li>
                <li>Using the website in a manner inconsistent with applicable laws</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed">
                The website and its content are provided on an "as is" and "as available" basis. Kangorise 
                makes no representations or warranties of any kind, express or implied, as to the operation 
                of the website or the information, content, materials, or products included on the website. 
                To the full extent permissible by applicable law, Kangorise disclaims all warranties, express 
                or implied, including but not limited to implied warranties of merchantability and fitness 
                for a particular purpose.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Kangorise, its directors, employees, partners, agents, suppliers, or 
                affiliates be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your access to or use of or inability to access or 
                use the website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and defined following the laws of the United States. 
                Kangorise and yourself irrevocably consent that the courts of the United States shall 
                have exclusive jurisdiction to resolve any dispute which may arise in connection with 
                these terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days' notice prior to any 
                new terms taking effect. What constitutes a material change will be determined at our 
                sole discretion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="mt-4 bg-brand-blue/5 rounded-xl p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@kangorise.com<br/>
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
