import { NotepadTextDashed } from 'lucide-react';
import { ReactCompareSlider } from 'react-compare-slider';
import GradientText from './GradientText';

export default function DraftMode() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <svg className="w-12 h-12">
              <linearGradient id="notepad-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#74b9ff" offset="0%" />
                <stop stopColor="#6c5ce7" offset="20%" />
                <stop stopColor="#fab1a0" offset="40%" />
              </linearGradient>
              <NotepadTextDashed size="100%" strokeWidth={2} stroke="url(#notepad-gradient)" />
            </svg>
          </div>
          <h2 className="text-slate-200 mb-6 text-6xl md:text-7xl font-bold tracking-tight">
            Go Even Faster with{' '}
            <GradientText
              colors={["#74b9ff", "#6c5ce7", "#fab1a0", "#6c5ce7", "#74b9ff", "#6c5ce7", "#fab1a0", "#6c5ce7", "#74b9ff"]}
              animationSpeed={1}
              showBorder={false}
              className="text-6xl md:text-7xl font-bold tracking-tight"
            >
              Draft Mode
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
              <video src="https://insights.krai.ai/assets/watch_20_full.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} className="rounded-2xl" />
            }
            itemTwo={
              <video src="https://insights.krai.ai/assets/watch_20.mp4" autoPlay loop muted playsInline className="rounded-2xl" />
            }
          />

          {/* Caption */}
          <p className="text-center text-slate-200 mt-4 font-light">
            *Both videos generated with the same prompts, number of steps, Wan2.2 model, seed and other settings.
          </p>
        </div>
      </div>
    </section>
  );
}
