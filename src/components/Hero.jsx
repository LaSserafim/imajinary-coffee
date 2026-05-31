import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleScrollToMenu = () => {
    const menuElement = document.getElementById('digital-menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative bg-cream px-4 py-8 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        
        {/* Left Side: Premium Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-[9px] uppercase font-bold tracking-widest text-sage bg-sage/10 rounded-full">
            <Coffee className="h-3 w-3" /> Cozy Lifestyle Sanctuary
          </span>
          
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-[1.15] tracking-tight">
            Your Escape from the Ordinary.
          </h1>
          
          <p className="font-sans text-xs sm:text-base text-espresso/80 leading-relaxed max-w-xl">
            A cozy aesthetic hideout in the heart of Pleburan, Semarang. Crafted for deep focus, warm conversations, and artisanal brews.
          </p>

          <button
            onClick={handleScrollToMenu}
            className="inline-flex items-center gap-2 px-5 py-3 bg-espresso hover:bg-espresso-100 text-cream-50 font-semibold text-[10px] sm:text-xs uppercase tracking-widest rounded-xl transition-all duration-300 transform active:scale-95 shadow-sm cursor-pointer hover:shadow-md"
          >
            Explore the Menu
            <ArrowRight className="h-3 w-3 text-sage" />
          </button>
        </div>

        {/* Right Side: Split-screen Ambient Image */}
        <div className="lg:col-span-6 w-full">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-espresso/5 bg-cream-200">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200"
              alt="Cozy aesthetic cafe sanctuary in Pleburan, Semarang"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Subtle elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </header>
  );
}
