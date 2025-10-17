import { Sparkles } from 'lucide-react';
import { ReactCompareSlider } from 'react-compare-slider';
import GradientText from './GradientText';

export default function EnhancedMode() {
  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <svg className="w-12 h-12">
              <linearGradient id="sparkles-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#f8a5c2" offset="0%" />
                <stop stopColor="#f78fb3" offset="20%" />
                <stop stopColor="#3dc1d3" offset="30%" />
                <stop stopColor="#63cdda" offset="40%" />
              </linearGradient>
              <Sparkles size="100%" strokeWidth={2} stroke="url(#sparkles-gradient)" />
            </svg>

          </div>
          <h2 className="text-slate-200 mb-6 text-6xl md:text-7xl font-bold tracking-tight z-10">
            Boost Quality with
            <GradientText
              colors={["#f8a5c2", "#f78fb3", "#3dc1d3", "#63cdda", "#3dc1d3", "#f78fb3", "#f8a5c2", "#f78fb3", "#3dc1d3", "#63cdda", "#3dc1d3"]}
              animationSpeed={1}
              showBorder={false}
              className="text-6xl md:text-8xl font-bold tracking-tight"
            >
              Enhanced Mode
            </GradientText>
          </h2>
          <p className="text-xl text-slate-200 font-light">
            Enjoy higher quality video with the same number of steps.
          </p>
        </div>

        {/* Video Comparison Panel */}
        <div className="max-w-5xl mx-auto">

          <ReactCompareSlider
            itemOne={
              <video src="https://insights.krai.ai/assets/baking.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} className="rounded-2xl" />
            }
            itemTwo={
              <video src="https://insights.krai.ai/assets/baking_enhanced.mp4" autoPlay loop muted playsInline className="rounded-2xl" />
            }
          />
        </div>

        {/* Caption */}
        <p className="text-center text-slate-200 mt-4 font-light">
          *Both videos generated with the same prompts, number of steps, Wan2.2 model, seed and other settings.
        </p>
      </div>

      {/* Bottom CTA */}
      {/* <div className="text-center mt-24">
        <p className="text-2xl text-slate-200 mb-8 font-light">
          Ready to accelerate your video generation?
        </p>
        <button className="px-10 py-5 bg-slate-200 text-slate-900 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          Get Started Today
        </button>
      </div> */}
    </section >
  );
}
