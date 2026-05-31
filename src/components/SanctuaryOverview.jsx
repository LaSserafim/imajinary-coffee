import React from 'react';
import { Coffee, Wifi, Heart } from 'lucide-react';

export default function SanctuaryOverview() {
  const experiences = [
    {
      icon: <Coffee className="h-5 w-5 text-terracotta" />,
      title: 'The Specialty Craft',
      subtitle: 'Artisanal Brews & Pours',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
      description: 'Our coffee is curated in collaboration with local micro-roasters in Central Java. We pull double-shots over cold creamy milk and serve stone-ground Kyoto matcha fusions that balance earthy notes with rich, chocolatey espresso.'
    },
    {
      icon: <Wifi className="h-5 w-5 text-sage" />,
      title: 'The Focus Cabin',
      subtitle: 'Workspace Sanctuary',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=600',
      description: 'Built for thinkers, creators, and students in Pleburan. We offer high-speed fiber Wi-Fi, dedicated silent zones, and abundant charging ports near warm wooden tables. It is your ultimate, distraction-free study escape.'
    },
    {
      icon: <Heart className="h-5 w-5 text-terracotta" />,
      title: 'The Green Escape',
      subtitle: 'Cozy Lounge Sanctuary',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=600',
      description: 'Settle into plush velvet sofas surrounded by cascading green houseplants. Under soft, dim, warm-amber lighting, it is a space designed for slow afternoons, deep conversations, and simple comfort.'
    }
  ];

  return (
    <section id="sanctuary-details" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
          The Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-3 mb-2">
          Inside Our Sanctuary
        </h2>
        <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
          Every corner of Imaginary Coffee is designed intentionally to offer a sensory retreat in Semarang.
        </p>
      </div>

      {/* Sensory Cards Grid */}
      <div className="space-y-12">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-espresso/5 bg-cream-200">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 h-full w-full object-cover object-center hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Description Card */}
              <div className="w-full lg:w-1/2 text-left space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-cream rounded-lg border border-espresso/[0.03]">
                    {exp.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-sage">
                      {exp.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-charcoal/90 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Cozy quote details */}
                <div className="pl-4 border-l-2 border-terracotta/40 italic text-xs text-charcoal/70">
                  Crafted for cozy Pleburan days.
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
