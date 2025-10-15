import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ReactCompareSlider } from 'react-compare-slider';
import GradientText from './GradientText';

export default function EnhancedMode() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="bg-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-slate-900" strokeWidth={1.5} />
          </div>
          <h2 className="text-slate-700 mb-6 text-6xl md:text-7xl font-bold tracking-tight z-10">
            Boost Quality with{' '}
            <GradientText
              colors={["#2596be", "#4c57c8", "#478ab5", "#3892b7", "#5097c9"]}
              animationSpeed={1}
              showBorder={false}
              className="text-6xl md:text-7xl font-bold tracking-tight"
            >
              Enhanced Mode
            </GradientText>
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Higher quality video with the same number of steps.
          </p>
        </div>

        {/* Video Comparison Panel */}
        <ReactCompareSlider
          itemOne={
            <video src="./good_f1.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
          }
          itemTwo={
            <video src="./reference_video.mp4" autoPlay loop muted playsInline />
          }
        />

        {/* Caption */}
        <p className="text-center text-slate-600 mt-8 font-light">
          Drag the slider to compare video quality
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-24">
        <p className="text-2xl text-slate-900 mb-8 font-light">
          Ready to accelerate your video generation?
        </p>
        <button className="px-10 py-5 bg-slate-900 text-white text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          Get Started Today
        </button>
      </div>
    </section >
  );
}
