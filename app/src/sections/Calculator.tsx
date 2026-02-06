import { useEffect, useRef, useState } from 'react';
import { Calculator as CalculatorIcon, TrendingUp, Users, Calendar, DollarSign, Percent } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export function Calculator() {
  const [isVisible, setIsVisible] = useState(false);
  const [monthlyStudents, setMonthlyStudents] = useState(20);
  const [classFee, setClassFee] = useState(20);
  const [totalClasses, setTotalClasses] = useState(20);
  const [profitMargin, setProfitMargin] = useState(50);
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

  // Calculation: students × class fee × total classes × profit margin
  const monthlyRevenue = monthlyStudents * classFee * totalClasses;
  const monthlyProfit = monthlyRevenue * (profitMargin / 100);
  const yearlyRevenue = monthlyRevenue * 12;
  const yearlyProfit = monthlyProfit * 12;

  return (
    <section
      id="calculator"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-blue">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-dark" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
      </div>

      <div className="w-full section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CalculatorIcon className="w-4 h-4 inline mr-2" />
              Earnings Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              How Much Can You <span className="text-brand-cream">Earn?</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Calculate your potential earnings based on your student count, 
              class fee, number of classes, and profit margin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calculator Inputs */}
            <div
              className={`bg-white rounded-3xl shadow-2xl p-6 lg:p-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Adjust Parameters
              </h3>

              {/* Monthly Students */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <Users className="w-5 h-5 text-brand-blue" />
                    Students per Class
                  </label>
                  <span className="text-2xl font-black text-brand-blue">
                    {monthlyStudents}
                  </span>
                </div>
                <Slider
                  value={[monthlyStudents]}
                  onValueChange={(value) => setMonthlyStudents(value[0])}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>5 students</span>
                  <span>50 students</span>
                </div>
              </div>

              {/* Class Fee */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <DollarSign className="w-5 h-5 text-brand-blue" />
                    Fee per Class (per student)
                  </label>
                  <span className="text-2xl font-black text-brand-blue">
                    ${classFee}
                  </span>
                </div>
                <Slider
                  value={[classFee]}
                  onValueChange={(value) => setClassFee(value[0])}
                  max={100}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>$10</span>
                  <span>$100</span>
                </div>
              </div>

              {/* Total Classes */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <Calendar className="w-5 h-5 text-brand-blue" />
                    Classes per Month
                  </label>
                  <span className="text-2xl font-black text-brand-blue">
                    {totalClasses}
                  </span>
                </div>
                <Slider
                  value={[totalClasses]}
                  onValueChange={(value) => setTotalClasses(value[0])}
                  max={50}
                  min={4}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>4 classes</span>
                  <span>50 classes</span>
                </div>
              </div>

              {/* Profit Margin */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <Percent className="w-5 h-5 text-brand-blue" />
                    Profit Margin
                  </label>
                  <span className="text-2xl font-black text-brand-blue">
                    {profitMargin}%
                  </span>
                </div>
                <Slider
                  value={[profitMargin]}
                  onValueChange={(value) => setProfitMargin(value[0])}
                  max={80}
                  min={30}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>30%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Formula Display */}
              <div className="mt-6 bg-brand-blue/5 p-4 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  <strong className="text-brand-blue">{monthlyStudents}</strong> students × 
                  <strong className="text-brand-blue"> ${classFee}</strong> × 
                  <strong className="text-brand-blue"> {totalClasses}</strong> classes × 
                  <strong className="text-brand-blue"> {profitMargin}%</strong> = 
                  <strong className="text-brand-blue"> ${monthlyProfit.toLocaleString()}/month profit</strong>
                </p>
              </div>
            </div>

            {/* Results */}
            <div
              className={`space-y-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Monthly Revenue */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/70 text-sm mb-1">Monthly Revenue</div>
                    <div className="text-3xl lg:text-4xl font-black text-white">
                      ${monthlyRevenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Profit */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-500 text-sm mb-1">Monthly Net Profit</div>
                    <div className="text-3xl lg:text-4xl font-black text-green-600">
                      ${monthlyProfit.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Yearly Revenue */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <CalculatorIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/70 text-sm mb-1">Yearly Revenue</div>
                    <div className="text-3xl lg:text-4xl font-black text-white">
                      ${yearlyRevenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Yearly Profit */}
              <div className="bg-brand-cream rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                    <Percent className="w-7 h-7 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-500 text-sm mb-1">Yearly Net Profit</div>
                    <div className="text-3xl lg:text-4xl font-black text-brand-blue">
                      ${yearlyProfit.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Breakdown */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-cream/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CalculatorIcon className="w-5 h-5 text-brand-cream" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Example Breakdown
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      With <strong className="text-brand-cream">{monthlyStudents} students</strong> paying 
                      <strong className="text-brand-cream"> ${classFee}</strong> per class, conducting 
                      <strong className="text-brand-cream"> {totalClasses} classes</strong> per month at 
                      <strong className="text-brand-cream"> {profitMargin}%</strong> profit margin:
                    </p>
                    <div className="mt-3 bg-white/10 rounded-lg p-3">
                      <p className="text-white text-sm">
                        Per Class Revenue: ${(monthlyStudents * classFee).toLocaleString()}<br/>
                        Weekly Revenue: ${((monthlyStudents * classFee * totalClasses) / 4).toLocaleString()}<br/>
                        Monthly Profit: ${monthlyProfit.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
