import { Zap } from 'lucide-react';
import HyperSpeed from "./bits/Hyperspeed";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <HyperSpeed />

        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-10 h-10 text-slate-900" strokeWidth={2} />
              <div className="absolute inset-0 blur-xl bg-blue-400/20"></div>
            </div>
            <h1 className="text-4xl font-light tracking-tight text-slate-900">
              KISS-V
            </h1>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900 mb-8 leading-none">
          The Fastest Way to
          <br />
          <span className="font-normal">Create AI Videos</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          The most powerful inference engine for generative video delivering up to{' '}
          <span className="font-medium text-slate-900">14X speedups</span> with no loss in quality.
          <br />
          Your GPUs will thank you later.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 bg-slate-900 text-white text-lg font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Prove it</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="px-8 py-4 bg-white text-slate-900 text-lg font-medium rounded-lg border-2 border-slate-900 transition-all duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
