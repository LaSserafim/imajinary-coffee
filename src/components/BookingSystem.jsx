import React from 'react';
import { Calendar, Users, MapPin, ArrowUpRight } from 'lucide-react';

export default function BookingSystem() {
  const getWhatsAppBookingLink = () => {
    const phoneNumber = '6282231367091';
    const message = "Hello Imaginary Coffee, I would like to inquire about seat reservation / space booking at your Pleburan branch. Please let me know the availability. Thank you!";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const bookingOptions = [
    {
      icon: <Users className="h-5 w-5 text-terracotta" />,
      title: 'Group Space Rental',
      description: 'Host study groups, creative workshops, or community projects in our designated workspace layout. Features screen casting and dedicated power hubs.',
      badge: 'Min. 5 People'
    },
    {
      icon: <Calendar className="h-5 w-5 text-sage" />,
      title: 'Weekend Table Booking',
      description: 'Guarantee your cozy spot for coffee chats or quiet reading during high-occupancy weekends. Highly recommended for students and remote workers.',
      badge: 'Free RSVP'
    }
  ];

  return (
    <section id="reservations" className="bg-cream-200 py-12 px-4 sm:px-6 lg:px-8 border-y border-espresso/10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <span className="text-[10px] uppercase font-bold tracking-widest text-sage-dark bg-sage/10 px-3 py-1 rounded-full">
          Sanctuary Bookings
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-3 mb-3">
          Reserve Your Spot
        </h2>
        <p className="font-sans text-xs sm:text-sm text-espresso/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Need a silent table for study sessions, or looking to host a creative class? Secure your place in our Pleburan sanctuary.
        </p>

        {/* Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-8">
          {bookingOptions.map((opt, idx) => (
            <div
              key={idx}
              className="bg-cream-50 rounded-2xl p-5 border border-espresso/15 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3.5">
                <div className="p-2.5 bg-cream rounded-xl border border-espresso/5">
                  {opt.icon}
                </div>
                <span className="text-[9px] uppercase font-bold tracking-wider text-espresso bg-cream-200 px-2.5 py-1 rounded border border-espresso/10">
                  {opt.badge}
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-espresso mb-1">
                {opt.title}
              </h3>
              <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                {opt.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="bg-espresso rounded-3xl p-6 sm:p-8 border border-white/5 max-w-xl mx-auto shadow-md text-cream-50">
          <h4 className="font-serif text-base sm:text-lg font-bold text-cream-50 mb-2">
            Instant Inquiry via WhatsApp
          </h4>
          <p className="font-sans text-xs text-cream-200/80 mb-5 leading-relaxed">
            Directly connect with our Pleburan concierge to check availability or custom catering options.
          </p>
          <a
            href={getWhatsAppBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cream hover:bg-cream-200 text-espresso text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
          >
            Inquire Availability
            <ArrowUpRight className="h-4 w-4 text-terracotta" />
          </a>
        </div>

      </div>
    </section>
  );
}
