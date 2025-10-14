import { Box, Cpu, Palette } from 'lucide-react';
import GradientText from './GradientText';

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
    <section className="py-32 bg-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-20">
          <GradientText
            colors={["#2596be", "#4c57c8", "#478ab5", "#3892b7", "#5097c9"]}
            animationSpeed={1}
            showBorder={false}
            className="text-6xl md:text-7xl font-bold tracking-tight mb-4"
          >
            How it works
          </GradientText>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* <Iridescence
                color={[0.3, 0.6, 0.8]}
                mouseReact={false}
                speed={0}
                amplitude={index*0.1}
              /> */}
              {/* Icon Container */}
              <div className="mb-6 inline-block">
                <div className="relative">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-white text-opacity-75" strokeWidth={1.5} />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
