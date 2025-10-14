import { LiquidGlass } from '@liquidglass/react';
import { Zap } from 'lucide-react';
import Iridescence from './Iridescence';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-screen h-full">
        <Iridescence
          color={[0.3, 0.6, 0.8]}
          mouseReact={false}
          speed={0.2}
        />
      </div>

      {/* Content - with relative positioning to appear above background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-10 h-10 text-slate-200" strokeWidth={2} opacity={"75%"} />
              <div className="absolute inset-0 blur-xl bg-blue-400/20"></div>
            </div>
            <h1 className="text-4xl font-medium tracking-tight text-slate-200 text-opacity-75">
              KISS-V
            </h1>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-opacity-75 text-slate-200 mb-8 leading-none">
          The Fastest Way to
          <br />
          <span className="font-medium text-slate-200 text-opacity-75">Create AI Videos</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto mb-12 leading-relaxed font-normal mt-40">
          The most powerful inference engine for generative video delivering up to{' '}
          <span className="font-medium text-slate-200">14X speedups</span> with no loss in quality.
          <br />
          Your GPUs will thank you later.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <LiquidGlass
            borderRadius={10}
            blur={0.5}
            contrast={1.2}
            brightness={1.1}
            saturation={1.2}
            className='max-w-48'
          >
            <button className="py-2 text-slate-200 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105">
              <span className="relative z-10 text-lg">Prove it</span>
            </button>
          </LiquidGlass>

          <LiquidGlass
            borderRadius={10}
            blur={0.5}
            contrast={1.2}
            brightness={1.1}
            saturation={1.2}
            className='max-w-48'
          >

            <button className="py-2 text-slate-200 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105">
              Let's Talk
            </button>
          </LiquidGlass>
        </div>
      </div>
    </section>
  );
}
