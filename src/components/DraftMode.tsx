import { MoveHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function DraftMode() {
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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-6">
            Go Even Faster with{' '}
            <span className="font-normal">Draft Mode</span>
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Spot the difference:
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
            {/* Standard Video (Left Side) */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
              <div className="text-center">
                <p className="text-2xl font-medium text-slate-700 mb-2">Standard Mode</p>
                <p className="text-slate-600 font-light">Video placeholder</p>
              </div>
            </div>

            {/* Draft Mode Video (Right Side) - Clipped */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <div className="text-center">
                <p className="text-2xl font-medium text-white mb-2">Draft Mode</p>
                <p className="text-slate-300 font-light">Video placeholder</p>
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
            <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-white">Draft Mode</p>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-slate-600 mt-8 font-light">
            Drag the slider to compare video quality
          </p>
        </div>
      </div>
    </section>
  );
}
