import React, { useState, useEffect } from 'react';
import { ShieldCheck, RefreshCw, Users, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function SeatTracker() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [zones, setZones] = useState([
    {
      id: 'greenhouse',
      name: 'The Greenhouse',
      capacity: 20,
      occupied: 16,
      description: 'Bright sunlit area filled with houseplants. Best for casual chats and coffee pairings.',
    },
    {
      id: 'cabin',
      name: 'The Study Cabin',
      capacity: 15,
      occupied: 13,
      description: 'Individual silent work desks, high-speed plugs, and strict quiet rules for deep focus.',
    },
    {
      id: 'bar',
      name: 'The Bar Stools',
      capacity: 10,
      occupied: 4,
      description: 'Stools facing the espresso machine. Chat with our baristas and enjoy quick shots.',
    },
    {
      id: 'lounge',
      name: 'The Velvet Lounge',
      capacity: 12,
      occupied: 8,
      description: 'Comfy low velvet sofas and warm, dimmed ambient lighting. Designed for slow reading.',
    }
  ]);

  // Calculations
  const totalCapacity = zones.reduce((sum, zone) => sum + zone.capacity, 0);
  const totalOccupied = zones.reduce((sum, zone) => sum + zone.occupied, 0);
  const globalOccupancyRate = Math.round((totalOccupied / totalCapacity) * 100);

  // Trigger simulated live refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setZones((prevZones) =>
        prevZones.map((zone) => {
          // Add a random variation of +/- 1 or 2 occupied seats, capping at capacity and min 1
          const change = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
          let newOccupied = zone.occupied + change;
          if (newOccupied > zone.capacity) newOccupied = zone.capacity;
          if (newOccupied < 1) newOccupied = 1;
          return { ...zone, occupied: newOccupied };
        })
      );
      setIsRefreshing(false);
    }, 900);
  };

  // Generate WA Reservation Link for specific zone
  const getWAReservationLink = (zoneName) => {
    const phoneNumber = '6282231367091';
    const message = `Hello Imaginary Coffee, I see on the live map that ${zoneName} has seats available. I would like to book a seat/table now. My name is...`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // Get color code based on seat occupancy rate
  const getOccupancyBadge = (occupied, capacity) => {
    const rate = (occupied / capacity) * 100;
    if (rate >= 90) return { label: 'Almost Full', style: 'text-red-600 bg-red-50 border-red-100' };
    if (rate >= 70) return { label: 'Filling Fast', style: 'text-amber-600 bg-amber-50 border-amber-100' };
    return { label: 'Seats Available', style: 'text-emerald-600 bg-emerald-50 border-emerald-100' };
  };

  return (
    <section id="seat-map" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-sage bg-sage/10 px-3 py-1 rounded-full">
          Live Tracker
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-3 mb-2">
          Sanctuary Seat Map
        </h2>
        <p className="font-sans text-xs sm:text-sm text-charcoal/80">
          Check real-time table occupancy before heading to our Pleburan hideout.
        </p>
      </div>

      {/* Global Occupancy Dashboard Panel */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-espresso/5 shadow-sm mb-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center sm:items-start space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">
            Overall Occupancy
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-4xl sm:text-5xl font-extrabold text-espresso font-outfit">
              {globalOccupancyRate}%
            </span>
            <span className="text-xs font-semibold text-charcoal/70 uppercase tracking-wide">
              {globalOccupancyRate >= 80 ? '🔥 Very Crowded' : globalOccupancyRate >= 60 ? '⚡ Cozy & Active' : '🟢 Plenty of Space'}
            </span>
          </div>
          <span className="text-[10px] text-charcoal/60 leading-normal flex items-center gap-1 mt-1">
            <ShieldCheck className="h-3.5 w-3.5 text-sage" /> Verified Live Map (updated just now)
          </span>
        </div>

        {/* Refresh Control */}
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-cream hover:bg-cream-200 text-espresso text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 border border-espresso/10 hover:border-espresso/30 disabled:opacity-50 cursor-pointer shadow-sm active:scale-95"
        >
          <RefreshCw className={`h-3.5 w-3.5 text-terracotta ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Updating Map...' : 'Refresh Status'}
        </button>
      </div>

      {/* Zones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {zones.map((zone) => {
          const badge = getOccupancyBadge(zone.occupied, zone.capacity);
          const percent = Math.round((zone.occupied / zone.capacity) * 100);
          return (
            <div
              key={zone.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-espresso/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-espresso">
                    {zone.name}
                  </h3>
                  <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${badge.style}`}>
                    {badge.label}
                  </span>
                </div>
                
                <p className="text-[11px] sm:text-xs text-charcoal/80 leading-relaxed font-normal mb-5">
                  {zone.description}
                </p>
              </div>

              {/* Progress and Actions */}
              <div className="space-y-4 pt-4 border-t border-espresso/5">
                {/* Seat capacity bar */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-espresso/70 mb-1.5 font-outfit uppercase tracking-wider">
                    <span>Seats: {zone.occupied} / {zone.capacity}</span>
                    <span>{percent}% Full</span>
                  </div>
                  <div className="w-full h-1.5 bg-cream-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        percent >= 90 ? 'bg-red-500' : percent >= 70 ? 'bg-amber-500' : 'bg-sage'
                      }`}
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Reservation WA Button */}
                <a
                  href={getWAReservationLink(zone.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 px-4 py-2.5 bg-cream hover:bg-espresso text-espresso hover:text-cream-50 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 border border-espresso/10 hover:border-transparent cursor-pointer"
                >
                  Reserve Here
                  <ArrowUpRight className="h-3 w-3 text-terracotta" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
