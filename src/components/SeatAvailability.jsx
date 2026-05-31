import React from 'react';
import { Compass, Sparkles, MapPin, Eye, ArrowUpRight, Wifi, ShieldAlert } from 'lucide-react';

export default function SeatAvailability() {
  const zones = [
    {
      id: 'cabin',
      name: 'The Study Cabin',
      description: 'Tucked away in our quietest wood-paneled corner. Features individual study desks, warm directional task lamps, and multi-socket power strips at every seat. Built strictly for uninterrupted remote work or deep study.',
      capacity: '15 Dedicated Desks',
      typicalOccupancy: 'High (80% - 90% full)',
      vibe: 'Warm Cedar, Soft Shadows & Deep Focus',
      specials: 'Strict Quiet Rules • High-Speed Fiber • Multi-Plugs',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'lounge',
      name: 'The Velvet Lounge',
      description: 'Settle into plush, low-slung chocolate velvet sofas surrounded by cascading green houseplants. Illuminated by soft, dim, warm-amber lighting. Designed for slow reading, intimate chat sessions, and peaceful coffee sips.',
      capacity: '12 Lounge Seats',
      typicalOccupancy: 'Medium (60% - 70% full)',
      vibe: 'Dim Amber, Leafy Shadows & Soft Jazz',
      specials: 'Low Sofas • Chill Ambient Music • Warm Lighting',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'window-bar',
      name: 'The Window Bar',
      description: 'Solid teak wood stools facing the tall glass panes looking out onto Pleburan. Ideal for watching the afternoon rain, writing in your journal, or enjoying quick double espresso shots next to the brewing counter.',
      capacity: '8 Teak Stools',
      typicalOccupancy: 'Balanced (50% - 60% full)',
      vibe: 'Active Street View, Steaming Espresso Chatter',
      specials: 'Street View • Barista Chats • Power Plugs Available',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'patio',
      name: 'The Cedar Patio',
      description: 'An indoor-outdoor deck crafted from local warm-toned timber and shaded by lush trees. Enjoy the cool morning breeze or pleasant sunset shadows. A dog-friendly outdoor space for casual group catch-ups.',
      capacity: '16 Patio Chairs',
      typicalOccupancy: 'High (70% - 85% full)',
      vibe: 'Breezy Shade, Leafy Greens & Natural Air',
      specials: 'Dog-Friendly • Semi-Outdoor Shade • Group Friendly',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const getWhatsAppReservationLink = (zoneName) => {
    const phoneNumber = '6282231367091';
    const message = `Hello Imaginary Coffee, I would like to inquire about seat reservation / space booking at your Pleburan branch. Please let me know the availability. Thank you!`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="seat-availability" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
          Cafe Overviews
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-3 mb-2">
          Seating Nooks & Availability
        </h2>
        <p className="font-sans text-xs sm:text-sm text-espresso/80 leading-relaxed">
          Find your perfect environment in our Pleburan sanctuary. Below is our typical daily availability guide to help you plan your visit.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {zones.map((zone) => (
          <div 
            key={zone.id} 
            className="bg-cream-50 rounded-3xl overflow-hidden border border-espresso/10 hover:border-espresso/30 transition-all duration-300 shadow-sm flex flex-col group"
          >
            {/* Image Container with Title Overlay */}
            <div className="relative aspect-[16/10] overflow-hidden bg-cream-300 border-b border-espresso/10">
              <img 
                src={zone.image} 
                alt={zone.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[9px] uppercase font-bold tracking-wider text-cream-200 bg-espresso/60 px-2 py-0.5 rounded border border-cream-200/10">
                  {zone.typicalOccupancy}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-cream-50 mt-1.5">
                  {zone.name}
                </h3>
              </div>
            </div>

            {/* Description Body */}
            <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between text-left space-y-4">
              <div className="space-y-3.5">
                <p className="font-sans text-xs sm:text-[13px] text-espresso/80 leading-relaxed">
                  {zone.description}
                </p>

                {/* Technical Specs List */}
                <div className="space-y-1.5 pt-3 border-t border-espresso/10">
                  <div className="flex items-center gap-2 text-[10px] text-espresso/70">
                    <span className="font-bold w-20 shrink-0 uppercase tracking-wider">Capacity:</span>
                    <span>{zone.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-espresso/70">
                    <span className="font-bold w-20 shrink-0 uppercase tracking-wider">Vibe Profile:</span>
                    <span className="italic">{zone.vibe}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-espresso/70">
                    <span className="font-bold w-20 shrink-0 uppercase tracking-wider">Highlights:</span>
                    <span className="font-medium text-sage-dark">{zone.specials}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppReservationLink(zone.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-espresso hover:bg-terracotta text-cream-50 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  Book Seat in {zone.name}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cozy Notice Info */}
      <div className="mt-8 p-5 bg-espresso text-cream-100 rounded-2xl border border-espresso-100 flex items-start gap-3.5 max-w-2xl mx-auto text-left shadow-sm">
        <ShieldAlert className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-serif text-sm font-bold text-cream-50">Note on Availability</h4>
          <p className="font-sans text-[11px] text-cream-200/80 leading-relaxed">
            Our seating spaces operate primarily on a walk-in basis. For deep focus work, we recommend arriving before 11:00 AM. For guaranteed seats, please make a WhatsApp reservation ahead of your visit.
          </p>
        </div>
      </div>

    </section>
  );
}
