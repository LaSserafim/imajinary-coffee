import React, { useState } from 'react';
import { Compass, Clock, Music, Volume2, VolumeX } from 'lucide-react';

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism px-3.5 py-3 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        
        {/* Branding Logo */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Compass className="h-4.5 w-4.5 text-terracotta animate-spin-slow" />
          <span className="font-serif text-base sm:text-lg font-bold tracking-[0.15em] text-espresso uppercase">
            Imaginary.
          </span>
        </div>

        {/* Cozy Ambient Sound Player Widget */}
        <div className="flex items-center gap-2 bg-cream-200/50 border border-espresso/5 rounded-full px-3 py-1.5 shadow-inner select-none max-w-[150px] sm:max-w-xs truncate">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 text-espresso hover:text-terracotta transition-colors text-[9px] sm:text-xs font-bold uppercase tracking-widest cursor-pointer shrink-0"
            title={isPlaying ? "Mute ambient music" : "Play cozy lofi cafe music"}
          >
            {isPlaying ? (
              <Volume2 className="h-3.5 w-3.5 text-terracotta animate-bounce" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 text-espresso/60" />
            )}
            <span className="hidden xs:inline">
              {isPlaying ? "Ambient On" : "Ambience"}
            </span>
          </button>
          
          {/* Animated Visualizer Sound Waves */}
          <div className="flex items-end gap-[2px] h-3.5 shrink-0 px-1">
            <span className={`visualizer-bar bar-1 ${!isPlaying && '!animate-none scale-y-[0.3]'}`}></span>
            <span className={`visualizer-bar bar-2 ${!isPlaying && '!animate-none scale-y-[0.3]'}`}></span>
            <span className={`visualizer-bar bar-3 ${!isPlaying && '!animate-none scale-y-[0.3]'}`}></span>
            <span className={`visualizer-bar bar-4 ${!isPlaying && '!animate-none scale-y-[0.3]'}`}></span>
            <span className={`visualizer-bar bar-5 ${!isPlaying && '!animate-none scale-y-[0.3]'}`}></span>
          </div>
        </div>

        {/* Operational Status Badge */}
        <div className="flex items-center gap-1.5 bg-espresso text-cream-50 px-2.5 py-1 rounded-full border border-white/10 shadow-sm shrink-0">
          <Clock className="h-3 w-3 text-sage" />
          <span className="text-[8px] sm:text-[10px] font-semibold tracking-wide uppercase">
            9am - 11pm
          </span>
        </div>

      </div>
    </nav>
  );
}
