import { Flame } from 'lucide-react';
import { ReactCompareSlider } from 'react-compare-slider';
import GradientText from './GradientText';

export default function TurboMode() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                {/* Gradient 1: More blue */}
                <linearGradient id="flame-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#74b9ff" />
                  <stop offset="70%" stopColor="#6c5ce7" />
                  <stop offset="100%" stopColor="#7a68b8" />
                </linearGradient>

                {/* Gradient 2: Middle */}
                <linearGradient id="flame-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6c5ce7" />
                  <stop offset="70%" stopColor="#fab1a0" />
                  <stop offset="100%" stopColor="#6c5ce7" />
                </linearGradient>

                {/* Gradient 3: More peachy */}
                <linearGradient id="flame-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fab1a0" />
                  <stop offset="70%" stopColor="#6c5ce7" />
                  <stop offset="100%" stopColor="#74b9ff" />
                </linearGradient>
              </defs>
            </svg>

            <div className="inline-flex items-center justify-center mb-4">
              <Flame className="w-12 h-12" strokeWidth={2} stroke="url(#flame-gradient-1)" />
              <Flame className="w-12 h-12" strokeWidth={2} stroke="url(#flame-gradient-2)" />
              <Flame className="w-12 h-12" strokeWidth={2} stroke="url(#flame-gradient-3)" />
            </div>
          </div>
          <h2 className="text-slate-200 mb-6 text-6xl md:text-7xl font-bold tracking-tight">
            Go 2x Faster with{' '}
            <GradientText
              colors={["#74b9ff", "#6c5ce7", "#fab1a0", "#6c5ce7", "#74b9ff", "#6c5ce7", "#fab1a0", "#6c5ce7", "#74b9ff"]}
              animationSpeed={1}
              showBorder={false}
              className="text-6xl md:text-8xl font-bold tracking-tight"
            >
              Turbo Mode
            </GradientText>
          </h2>
        </div>

        {/* Video Comparison Panel */}
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-slate-200 font-medium text-center">
            Spot the difference
            <br />
            <br />
          </p>

          <ReactCompareSlider
            itemOne={
              <video src="https://duckforcover.com/kissv/watch_20_full.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} className="rounded-2xl" />
            }
            itemTwo={
              <video src="https://duckforcover.com/kissv/watch_20.mp4" autoPlay loop muted playsInline className="rounded-2xl" />
            }
          />

          {/* Caption */}
          <p className="text-center text-slate-200 mt-4 font-light">
            Both videos generated with Wan2.2, identical prompts, 20 steps, seed and other settings
          </p>
        </div>
      </div>
    </section>
  );
}
