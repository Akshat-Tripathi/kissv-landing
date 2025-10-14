import { MoveHorizontal, Sparkles } from 'lucide-react';
import { useState } from 'react';
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
    <section className="py-32 bg-slate-200">
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
        <div className="max-w-5xl mx-auto">
          <div
            className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-xl cursor-col-resize"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Standard Quality (Left Side) */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
              <div className="text-center">
                <p className="text-2xl font-medium text-blue-900 mb-2">Standard Quality</p>
                <p className="text-blue-700 font-light">Video placeholder</p>
              </div>
            </div>

            {/* Enhanced Mode Video (Right Side) - Clipped */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="text-center">
                <p className="text-2xl font-medium text-white mb-2">Enhanced Mode</p>
                <p className="text-blue-200 font-light">Video placeholder</p>
              </div>
            </div>

            {/* Slider */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <MoveHorizontal className="w-6 h-6 text-slate-900" strokeWidth={2} />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-slate-900">Standard</p>
            </div>
            <div className="absolute top-6 right-6 bg-blue-900/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-white">Enhanced</p>
            </div>
          </div>

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
      </div>
    </section>
  );
}
