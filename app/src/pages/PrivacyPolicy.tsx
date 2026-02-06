import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PrivacyPolicy() {
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
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-black text-white">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Kangorise ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services. Please read this privacy policy carefully. If you do not agree with the terms 
                of this privacy policy, please do not access the site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and business address when you fill out our contact form or request information.</li>
                <li><strong>Business Information:</strong> Company name, fitness studio details, and partnership inquiries.</li>
                <li><strong>Communication Data:</strong> Records of your correspondence with us, including emails and phone calls.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Processing your partnership applications and orders</li>
                <li>Communicating with you about our products, services, and promotions</li>
                <li>Improving our website and customer experience</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information with trusted service providers who assist us in operating our website, conducting 
                our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can set your browser to refuse all or some browser cookies, or to alert you when cookies 
                are being sent. If you disable or refuse cookies, please note that some parts of this site 
                may become inaccessible or not function properly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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
