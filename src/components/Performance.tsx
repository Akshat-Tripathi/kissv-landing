import { Flame } from 'lucide-react';
import GradientText from './GradientText';

export default function Performance() {
  // Mock data for the chart
  const data = [
    { label: 'Diffusers', value: 100, color: 'bg-yellow-500' },
    { label: 'KISS-V', value: 1400, color: 'bg-green-600' }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <section className="bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <svg width="0" height="0">
            <linearGradient id="flame-gradient" x1="100%" y1="100%" x2="100%" y2="0%">
              <stop stopColor="#e15f41" offset="0%" />
              <stop stopColor="#f19066" offset="70%" />
              <stop stopColor="#f5cd79" offset="100%" />
            </linearGradient>
          </svg>

          <div className="inline-flex items-center justify-center mb-6">
            <Flame className="w-12 h-12 text-slate-200" strokeWidth={2} stroke="url(#flame-gradient)" />
          </div>
          <h2 className="text-slate-200 mb-6 text-6xl md:text-7xl font-bold tracking-tight">
            Go Fast with
            <GradientText
              colors={["#e15f41", "#f19066", "#f5cd79", "#f19066", "#e15f41", "#f19066", "#f5cd79", "#f19066", "#e15f41"]}
              animationSpeed={1}
              showBorder={false}
              className="text-6xl md:text-7xl font-bold tracking-tight"
            >
              KISS-V
            </GradientText>
          </h2>
          <p className="text-3xl font-normal text-slate-200 mb-4">
            Up to 14x Faster
          </p>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto font-normal">
            Faster video generation without sacrificing output quality.
            <br />
          </p>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto font-medium">
            No Quantisation, No Distillation, No Nonsense.
          </p>
        </div>

        {/* Bar Chart */}
        <div className="max-w-4xl mx-auto bg-neutral-900 rounded-2xl p-12 shadow-sm">
          <div className="space-y-8">
            {data.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-slate-200">
                    {item.label}
                  </span>
                  <span className="text-lg font-light text-slate-200">
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
            <p className="text-sm text-slate-200 text-center font-light">
              * Measured using Wan2.2-T2V-A14B on 8xH100. 720x1280 video, 81 frames, 20 steps.
              <br /> KISS-V achieved 58.3s E2E latency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
