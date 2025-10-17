import { NotepadTextDashed } from 'lucide-react';
import { ReactCompareSlider } from 'react-compare-slider';
import GradientText from './GradientText';

export default function DraftMode() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <NotepadTextDashed className="w-12 h-12 text-slate-200" strokeWidth={2} />
          </div>
          <h2 className="text-slate-200 mb-6 text-6xl md:text-7xl font-bold tracking-tight">
            Go Even Faster with{' '}
            <GradientText
              colors={["#2596be", "#4c57c8", "#478ab5", "#3892b7", "#5097c9"]}
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
              <video src="/assets/watch_20_full.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} className="rounded-2xl" />
            }
            itemTwo={
              <video src="/assets/watch_20.mp4" autoPlay loop muted playsInline className="rounded-2xl" />
            }
          />

          {/* Caption */}
          <p className="text-center text-slate-200 mt-8 font-light">
            Drag the slider to compare video quality
          </p>
        </div>
      </div>
    </section>
  );
}
