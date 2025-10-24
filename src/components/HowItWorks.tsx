import { Box, Cpu, Palette } from 'lucide-react';
import GradientText from './GradientText';

export default function HowItWorks() {
  const features = [
    {
      icon: Box,
      title: 'Any Model',
      description: 'Create stunning content using your favorite open-source video models Wan, Ovi, Mochi, and more!',
      colours: ["#ff7675", "#0984e3"],
      offsets: [0, 0.8]
    },
    {
      icon: Cpu,
      title: 'Any GPU',
      description: 'Effortlessly deploy across a wide range of Nvidia and AMD GPUs to match your precise performance and latency requirements.',
      colours: ["#0984e3", "#ff7675"],
      offsets: [0, 0.4]
    },
    {
      icon: Palette,
      title: 'Any Style',
      description: 'Personalize your models with any LoRAs or ControlNets you can imagine.',
      colours: ["#74b9ff", "#00b894", "#fdcb6e", "#ff7675"],
      offsets: [0.01, 0.2, 0.4, 0.9]
    }
  ];

  return (
    <section className="py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-20">
          <GradientText
            colors={["#FFFFFF"]}
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
              className="group relative h-full flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-block">
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16  rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-0 h-0">
                      <linearGradient id={feature.title.replace(" ", "-")} x1="100%" y1="100%" x2="100%" y2="0%">
                        {feature.colours.map((colour, idx) => (
                          <stop stopColor={colour} offset={feature.offsets[idx]} />
                        )
                        )}
                      </linearGradient>
                    </svg>
                    <feature.icon className="w-16 h-16 text-slate-200 text-opacity-75" strokeWidth={2} stroke={`url(#${feature.title.replace(' ', '-')})`} />
                  </div>
                  <div className="absolute inset-0 bg-neutral-900 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-medium text-slate-200 mb-3 tracking-tight text-center">
                {feature.title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
