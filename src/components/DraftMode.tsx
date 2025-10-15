import { useState } from 'react';
import { ReactCompareSlider } from 'react-compare-slider';
import GradientText from './GradientText';

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
    <section className="py-32 bg-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-slate-700 mb-6 text-6xl md:text-7xl font-bold tracking-tight">
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
          <p className="text-xl text-slate-600 font-medium text-center">
            Spot the difference
            <br />
            <br />
          </p>

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
      </div>
    </section>
  );
}
