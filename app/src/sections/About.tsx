import { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Flame, Sparkles } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const benefits = [
    {
      icon: Heart,
      title: 'Cardiovascular Health',
      description: 'Strengthens heart health and improves blood circulation.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Flame,
      title: 'High Calorie Burn',
      description: 'Burns 800-1200 calories per hour of exercise.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Shield,
      title: 'Joint-Friendly',
      description: '80% less joint impact, safe exercise for all ages.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Sparkles,
      title: 'Fun Fitness',
      description: 'Makes exercise enjoyable and boosts motivation.',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent" />
      
      <div className="w-full section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About The Product
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              What is <span className="text-brand-blue">Rebound Fitness?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rebound fitness boots are specially designed spring-loaded footwear 
              for low-impact, high-efficiency exercise. Developed with NASA technology, 
              these boots reduce joint stress while maximizing workout benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image Grid */}
            <div
              className={`relative transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/lifestyle-3.png"
                  alt="Rebound Exercise"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/images/lifestyle-5.png"
                  alt="Group Training"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8 hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/images/lifestyle-6.png"
                  alt="Jumping Exercise"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8 hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/images/lifestyle-7.png"
                  alt="Studio Workout"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 z-10">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-brand-blue">20+</div>
                    <div className="text-xs text-gray-500">Years Experience</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-3xl font-black text-brand-blue">50+</div>
                    <div className="text-xs text-gray-500">Countries</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-3xl font-black text-brand-blue">1M+</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Rebound Fitness?
              </h3>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div
                      className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Target Audience */}
              <div className="mt-8 bg-brand-blue/5 rounded-2xl p-6 border border-brand-blue/10">
                <h4 className="font-bold text-brand-blue mb-3">
                  Who Can Use It?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full" />
                    Fitness centers and gyms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full" />
                    Personal trainers and coaches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full" />
                    Individual fitness enthusiasts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-blue rounded-full" />
                    Physical therapy centers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
