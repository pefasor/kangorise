import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', city: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(585) 534-8578',
      subContent: 'Mon-Sat 9AM-6PM EST',
      href: 'tel:+15855348578',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@kangorise.com',
      subContent: 'Reply within 24 hours',
      href: 'mailto:info@kangorise.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Sat: 9AM - 6PM',
      subContent: 'Sunday: Closed',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-blue/5" />

      <div className="w-full section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Get In <span className="text-brand-blue">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? Fill out the form and our expert team will get back 
              to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Information Request Form
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600">
                      Your message has been received. We will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                          placeholder="example@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                          placeholder="Your City"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                        rows={4}
                        placeholder="Write your questions and requests here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      * Fields marked with an asterisk are required.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-brand-blue font-semibold">{info.content}</p>
                    <p className="text-sm text-gray-500">{info.subContent}</p>
                  </a>
                ))}
              </div>

              {/* Quick Contact Card */}
              <div className="bg-brand-blue rounded-3xl p-6 lg:p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Quick Contact</h4>
                <p className="text-white/80 mb-6">
                  Have an urgent question? Reach out to us via email. 
                  Our support team is available 24/7.
                </p>
                <a
                  href="mailto:info@kangorise.com"
                >
                  <Button className="w-full bg-white text-brand-blue hover:bg-brand-cream font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
