import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const variants = [
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-2.png',
      color: 'Midnight Black',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-3.png',
      color: 'Stealth Black',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-1.png',
      color: 'Cloud Gray',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-5.png',
      color: 'Electric Green',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-6.png',
      color: 'Neon Pink',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-7.png',
      color: 'Candy Pink',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-8.png',
      color: 'Lime Green',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-9.png',
      color: 'Pure White',
    },
    {
      name: 'Kangorise Bounce Boots',
      image: '/images/product-10.png',
      color: 'Royal Blue',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % variants.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + variants.length) % variants.length);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent" />

      <div className="w-full section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Product
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Kangorise <span className="text-brand-blue">Bounce Boots</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional rebound fitness boots designed for fitness centers, 
              personal trainers, and fitness enthusiasts. Available in multiple colors.
            </p>
          </div>

          {/* Features */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {['Professional Grade', '3 Year Warranty', 'Sizes 33-44', 'NASA Technology', 'Low Joint Impact'].map((feature, idx) => (
              <span
                key={idx}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Product Carousel */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
              >
                {variants.map((variant, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div
                      className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 ${
                        index === activeIndex
                          ? 'scale-100 opacity-100'
                          : 'scale-95 opacity-70'
                      }`}
                    >
                      {/* Color Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {variant.color}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-72 bg-gradient-to-b from-gray-50 to-white p-8 flex items-center justify-center">
                        <img
                          src={variant.image}
                          alt={variant.name}
                          className="max-h-full w-auto object-contain hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900">
                          {variant.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {variants.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-brand-blue w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
