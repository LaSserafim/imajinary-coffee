import React from 'react';
import { Quote } from 'lucide-react';

export default function Guestbook() {
  const reviews = [
    {
      text: "The individual cabins inside the Study zone are perfect. It's the only place in Pleburan where I can write code for hours without any disruption. Plus, the Kyoto Matcha Latte is simply unmatched.",
      author: "Sonia G.",
      role: "Freelance Software Engineer"
    },
    {
      text: "As a roaster myself, I appreciate their dedication to the craft. The Signature Iced White is pulled beautifully, and the warm industrial styling makes it feel like a luxury editorial lounge.",
      author: "Dimas R.",
      role: "Semarang Coffee Roaster"
    },
    {
      text: "The sunlit Greenhouse corner is my weekly escape. Settle down with a hot double-shot espresso, surround yourself with plants, and let the soft jazz wash over you. Thesis writing becomes a pleasant ritual here.",
      author: "Rian K.",
      role: "Undip College Student"
    }
  ];

  return (
    <section className="bg-espresso text-cream-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta bg-terracotta/10 px-3.5 py-1.5 rounded-full">
          Voices of the Sanctuary
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50 mt-4.5 mb-10 tracking-tight">
          Words From Our Guests
        </h2>

        {/* Reviews Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <Quote className="h-6 w-6 text-terracotta transform rotate-180 opacity-70" />
                <p className="font-sans text-xs sm:text-sm text-cream-200/90 leading-relaxed font-normal">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col">
                <span className="font-serif text-sm font-bold text-cream-50">
                  {rev.author}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-sage font-semibold mt-0.5">
                  {rev.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
