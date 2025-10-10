import { Box, Cpu, Palette } from 'lucide-react';

export default function HowItWorks() {
  const features = [
    {
      icon: Box,
      title: 'Bring your own Model',
      description: 'Create with all your favourite open source video models, like Wan, Ovi, Mochi etc'
    },
    {
      icon: Cpu,
      title: 'Bring your own GPUs',
      description: 'Effortlessly deploy KISS-V on Nvidia and AMD GPUs'
    },
    {
      icon: Palette,
      title: 'Bring your own Style',
      description: 'Tailor your models with any LoRAs or Controlnets you can think of'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900 mb-4">
            How it works
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-block">
                <div className="relative">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 bg-slate-900 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {feature.description}
              </p>

              {/* Subtle underline accent */}
              <div className="mt-6 h-0.5 w-12 bg-slate-900 origin-left transition-all duration-300 group-hover:w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
