import React from 'react';
import { Award, ShieldAlert, Sparkles, Wifi } from 'lucide-react';

export default function Features() {
  const valueProps = [
    {
      icon: <Award className="h-6 w-6 text-terracotta" />,
      title: 'Specialty Brews',
      description: 'Sourcing single-origin beans, roasted locally in Semarang, and brewed precisely to bring out rich, complex profiles.'
    },
    {
      icon: <Wifi className="h-6 w-6 text-sage" />,
      title: 'Work-Friendly Ambience',
      description: 'Equipped with silent zones, high-speed fiber internet, and power plugs next to every seat for seamless study or remote work.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-espresso/80" />,
      title: 'Culinary Comforts',
      description: 'From premium stone-ground Kyoto matcha lattes to hot flakey butter croissants and savory meals.'
    }
  ];

  return (
    <section className="bg-cream-50 py-8 px-4 sm:px-6 lg:px-8 border-y border-espresso/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="flex flex-row md:flex-col items-start text-left p-4.5 md:p-6 bg-white rounded-2xl border border-espresso/5 shadow-sm hover:shadow-md transition-shadow duration-300 gap-4 md:gap-0"
            >
              <div className="mb-0 md:mb-4 p-2.5 md:p-3 bg-cream rounded-xl border border-espresso/[0.03] shrink-0">
                {prop.icon}
              </div>
              <div>
                <h3 className="font-serif text-sm md:text-lg font-bold text-espresso mb-1 md:mb-2">
                  {prop.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-charcoal/80 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
