import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqCategories = [
    {
      title: 'Partnership & Business',
      questions: [
        {
          q: 'Do I need a physical location to become a partner?',
          a: 'No, a physical store is not required. You can operate from home, online, or from your existing business location. However, a physical showroom can significantly boost your class bookings.',
        },
        {
          q: 'Is there a minimum order requirement?',
          a: 'To maximize efficiency at your fitness studio, we recommend ordering between 10 to 20 pairs. This range allows you to accommodate different class sizes while maintaining optimal inventory. However, you can order as many products as you need and benefit from special discounts on bulk purchases.',
        },
        {
          q: 'Can I set my own class prices?',
          a: 'Yes, you set your own class prices completely. To maintain market balance, we inform you of recommended retail prices. The average profit margin is between 35-50%.',
        },
        {
          q: 'Do you provide marketing support?',
          a: 'Yes, we provide comprehensive marketing support: Professional product photos, social media graphics, brochure and catalog designs, website content, and advertising copy are provided free of charge.',
        },
      ],
    },
    {
      title: 'Product & Quality',
      questions: [
        {
          q: 'Are the products original?',
          a: 'Yes, all our products are 100% original rebound fitness boots. Each product has a serial number and hologram on it. Delivered with an authenticity certificate.',
        },
        {
          q: 'What is the warranty period?',
          a: 'The warranty period varies depending on the product model: Entry-level models have 1 year, mid-level models have 2 years, and professional models have 3 years warranty. The warranty covers the spring system and main body.',
        },
        {
          q: 'Are spare parts available?',
          a: 'Yes, we stock all spare parts. We provide fast delivery for spare spring sets, straps, buckles, and inner linings. We offer special prices to our partners for spare parts.',
        },
        {
          q: 'What size range is available?',
          a: 'Our products are available in sizes ranging from 33 to 44. We provide detailed size charts for each model.',
        },
      ],
    },
    {
      title: 'Sales & Training',
      questions: [
        {
          q: 'Do you provide training support?',
          a: 'Yes, we offer free training programs for new partners. We provide comprehensive training on product knowledge, sales techniques, customer relations, and technical service.',
        },
        {
          q: 'How much can I earn?',
          a: 'Your earnings depend entirely on your sales volume. On average, with 20 monthly customers, you can earn $2,000-3,000 net profit. With active marketing and a broad customer base, you can multiply this figure.',
        },
      ],
    },
    {
      title: 'Shipping & Delivery',
      questions: [
        {
          q: 'What is the shipping cost?',
          a: 'We offer free shipping to everywhere in the United States. Your orders are shipped within 1-3 business days. Same-day delivery option is also available in major cities.',
        },
        {
          q: 'What is the stock status?',
          a: 'Our popular models are always in stock. Special orders and rare sizes have a delivery time of 7-14 days. You can track stock status in real-time.',
        },
        {
          q: 'What is the return and exchange policy?',
          a: 'Unused products with unopened packaging can be returned unconditionally within 14 days. We have a 30-day period for exchanges. We apply flexible return policies for our partners.',
        },
      ],
    },
    {
      title: 'Financial Matters',
      questions: [
        {
          q: 'What are the payment options?',
          a: 'Bank transfer, credit card (single payment or installments), and PayPal options are available. We offer 30-60-90 day payment terms to our partners. Special payment terms apply to regular partners.',
        },
        {
          q: 'Do you issue invoices?',
          a: 'Yes, all our sales are invoiced. Corporate sales include VAT invoice, individual sales include retail invoice. We use the e-invoice system.',
        },
      ],
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-blue/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent" />
      </div>

      <div className="w-full section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <HelpCircle className="w-4 h-4 inline mr-2" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              All Your <span className="text-brand-blue">Questions</span> Answered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have compiled the most frequently asked questions about partnership, 
              products, sales, and financial matters.
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <span className="text-brand-blue text-sm font-black">
                      {catIndex + 1}
                    </span>
                  </span>
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = catIndex * 10 + qIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={qIndex}
                        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                      >
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : globalIndex)
                          }
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 bg-brand-blue rounded-3xl p-8 lg:p-12 text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Have a Question?
            </h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Could not find the answer you were looking for? Contact us and our 
              expert team will help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@kangorise.com">
                <Button className="bg-white text-brand-blue hover:bg-brand-cream font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
