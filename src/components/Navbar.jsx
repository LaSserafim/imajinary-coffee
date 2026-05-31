import React from 'react';
import { Compass, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism px-4 py-3.5 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Branding Logo */}
        <div className="flex items-center gap-2">
          <Compass className="h-5 w-5 text-terracotta animate-spin-slow" />
          <span className="font-serif text-lg font-bold tracking-[0.2em] text-espresso uppercase">
            Imaginary.
          </span>
        </div>

        {/* Operational Badge */}
        <div className="flex items-center gap-2 bg-espresso text-cream-50 px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
          <Clock className="h-3.5 w-3.5 text-sage animate-pulse" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wide">
            Open Daily: 09:00 AM - 11:00 PM
          </span>
        </div>

      </div>
    </nav>
  );
}
