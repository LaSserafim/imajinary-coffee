import React from 'react';
import { MapPin, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream py-10 px-4 sm:px-6 lg:px-8 border-t border-espresso/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Logo & Location */}
        <div className="flex flex-col items-center sm:items-start space-y-1">
          <div className="flex items-center gap-1.5">
            <Compass className="h-4.5 w-4.5 text-terracotta" />
            <span className="font-serif text-sm font-bold tracking-[0.2em] text-espresso uppercase">
              IMAGINARY.
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-charcoal/60 tracking-wider">
            Pleburan, Semarang, Central Java
          </span>
        </div>

        {/* Center/Right Side: Social & Maps Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-charcoal/70 hover:text-espresso transition-colors"
            title="Follow our Instagram"
          >
            <svg 
              className="h-4 w-4 text-terracotta" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4.5 4.5 0 1 1 12.63 8 4.5 4.5 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>
          
          <a
            href="https://maps.google.com/?q=-6.9922,110.4244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-charcoal/70 hover:text-espresso transition-colors"
            title="View our location on Google Maps"
          >
            <MapPin className="h-4 w-4 text-sage" />
            Google Maps
          </a>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-[10px] tracking-wide text-charcoal/50">
          &copy; {new Date().getFullYear()} Imaginary Coffee. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
