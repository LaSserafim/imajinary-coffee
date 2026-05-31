import React from 'react';
import { Compass, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism px-3.5 py-3 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Branding Logo */}
        <div className="flex items-center gap-1.5">
          <Compass className="h-4.5 w-4.5 text-terracotta animate-spin-slow" />
          <span className="font-serif text-base sm:text-lg font-bold tracking-[0.15em] text-espresso uppercase">
            Imaginary.
          </span>
        </div>

        {/* Operational Badge */}
        <div className="flex items-center gap-1.5 bg-espresso text-cream-50 px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
          <Clock className="h-3 w-3 text-sage animate-pulse" />
          <span className="text-[9px] sm:text-xs font-semibold tracking-wide uppercase">
            Open Daily: 9am - 11pm
          </span>
        </div>

      </div>
    </nav>
  );
}
