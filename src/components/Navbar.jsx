import React, { useState } from 'react';
import { Compass, Clock, Music, Volume2, VolumeX, ShoppingBag } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, cartCount, openCart }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism px-3.5 py-3 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        
        {/* Branding Logo */}
        <div 
          className="flex items-center gap-1.5 shrink-0 cursor-pointer"
          onClick={() => setCurrentPage('overview')}
        >
          <Compass className="h-4.5 w-4.5 text-terracotta animate-spin-slow" />
          <span className="font-serif text-base sm:text-lg font-bold tracking-[0.15em] text-espresso uppercase">
            Imaginary.
          </span>
        </div>

        {/* Page Links (Center) */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setCurrentPage('overview')}
            className={`text-sm font-semibold tracking-wider uppercase transition-colors ${currentPage === 'overview' ? 'text-terracotta' : 'text-espresso/70 hover:text-espresso'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setCurrentPage('menu')}
            className={`text-sm font-semibold tracking-wider uppercase transition-colors ${currentPage === 'menu' ? 'text-terracotta' : 'text-espresso/70 hover:text-espresso'}`}
          >
            Order Menu
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Cozy Ambient Sound Player Widget */}
          <div className="hidden lg:flex items-center gap-2 bg-cream-200/50 border border-espresso/5 rounded-full px-3 py-1.5 shadow-inner select-none max-w-[150px] sm:max-w-xs truncate">
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

          {/* Cart Button */}
          {currentPage === 'menu' && (
            <button
              onClick={openCart}
              className="relative p-2 text-espresso hover:text-terracotta transition-colors bg-cream-200/50 rounded-full border border-espresso/5 shadow-sm"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-terracotta text-cream-50 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Operational Status Badge */}
          <div className="flex items-center gap-1.5 bg-espresso text-cream-50 px-2.5 py-1 rounded-full border border-white/10 shadow-sm shrink-0">
            <Clock className="h-3 w-3 text-sage" />
            <span className="text-[8px] sm:text-[10px] font-semibold tracking-wide uppercase">
              9am - 11pm
            </span>
          </div>
        </div>

      </div>
      
      {/* Mobile Page Links */}
      <div className="md:hidden flex items-center justify-center gap-6 mt-3 border-t border-espresso/10 pt-2">
        <button 
          onClick={() => setCurrentPage('overview')}
          className={`text-xs font-semibold tracking-wider uppercase transition-colors ${currentPage === 'overview' ? 'text-terracotta' : 'text-espresso/70'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setCurrentPage('menu')}
          className={`text-xs font-semibold tracking-wider uppercase transition-colors ${currentPage === 'menu' ? 'text-terracotta' : 'text-espresso/70'}`}
        >
          Order Menu
        </button>
      </div>
    </nav>
  );
}
