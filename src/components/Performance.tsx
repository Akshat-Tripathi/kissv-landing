import { TrendingUp } from 'lucide-react';
import GradientText from './GradientText';

export default function Performance() {
  // Mock data for the chart
  const data = [
    { label: 'Standard', value: 100, color: 'bg-slate-300' },
    { label: 'KISS-V', value: 1400, color: 'bg-slate-900' }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <section className="py-32 bg-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <TrendingUp className="w-12 h-12 text-slate-900" strokeWidth={1.5} />
          </div>
          <h2 className="text-slate-700 mb-6 text-6xl md:text-7xl font-bold tracking-tight">
            Go Fast with{' '}
            <GradientText
              colors={["#2596be", "#4c57c8", "#478ab5", "#3892b7", "#5097c9"]}
              animationSpeed={1}
              showBorder={false}
              className="text-6xl md:text-7xl font-bold tracking-tight"
            >
              KISS-V
            </GradientText>
          </h2>
          <p className="text-3xl font-normal text-slate-900 mb-4">
            Up to 14x Faster
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Faster video generation without sacrificing output quality.
            <br />
            No quantisation, no distillation, no nonsense.
          </p>
        </div>

        {/* Bar Chart */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-sm">
          <div className="space-y-8">
            {data.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-slate-900">
                    {item.label}
                  </span>
                  <span className="text-lg font-light text-slate-600">
                    {item.value === 100 ? 'Baseline' : `${item.value / 100}x faster`}
                  </span>
                </div>
                <div className="relative h-16 bg-slate-100 rounded-lg overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 ${item.color} transition-all duration-1000 ease-out rounded-lg flex items-center justify-end pr-6`}
                    style={{
                      width: `${(item.value / maxValue) * 100}%`
                    }}
                  >
                    {item.value > 200 && (
                      <span className="text-white font-medium text-lg">
                        {item.value / 100}x
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Footer */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center font-light">
              Performance measured on industry-standard benchmarks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
