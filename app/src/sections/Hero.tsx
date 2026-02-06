import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <img
          src="/images/product-2.png"
          alt=""
          className="absolute top-32 left-10 w-48 opacity-20 animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <img
          src="/images/product-3.png"
          alt=""
          className="absolute bottom-32 right-10 w-56 opacity-20 animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`text-center lg:text-left transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                The Future of Fitness is Here
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight mb-6">
                Bounce Into{' '}
                <span className="text-brand-blue">Fitness</span>
                <br />
                Business!
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                <strong className="text-brand-blue">Kangorise</strong> helps you build your own 
                fitness business with rebound exercise boots. Low investment,{' '}
                <strong>high profit margins</strong>, and a growing market.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-black text-brand-blue">300%</div>
                    <div className="text-xs text-gray-500">Profit Margin</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-black text-brand-blue">50+</div>
                    <div className="text-xs text-gray-500">Happy Partners</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('#calculator')}
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-lg px-8 py-6 rounded-2xl transition-all duration-300 hover:shadow-glow-lg hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Calculate Earnings
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={() => scrollToSection('#faq')}
                  variant="outline"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold text-lg px-8 py-6 rounded-2xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-3xl scale-75 animate-pulse" />
                
                {/* Main Image */}
                <img
                  src="/images/lifestyle-4.png"
                  alt="Rebound Fitness Training"
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl animate-bounce-slow"
                />

                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Monthly Income</div>
                      <div className="text-lg font-black text-brand-blue">$5,000+</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Active Users</div>
                      <div className="text-lg font-black text-brand-blue">10,000+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-brand-blue/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-brand-blue rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
