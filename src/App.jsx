import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SanctuaryOverview from './components/SanctuaryOverview';
import SeatTracker from './components/SeatTracker';
import Guestbook from './components/Guestbook';
import BookingSystem from './components/BookingSystem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans select-none selection:bg-terracotta/10 selection:text-terracotta">
      {/* Sticky Glassmorphism Navigation & Ambient Lofi Player */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Editorial Split Hero Section */}
        <Hero />

        {/* Value Proposition feature grid */}
        <Features />

        {/* Sensory Sanctuary Details & Images */}
        <SanctuaryOverview />

        {/* Live Seat Availability Map */}
        <SeatTracker />

        {/* Testimonials and customer reviews panel (Rich Cozy Contrast Block) */}
        <Guestbook />

        {/* Reservations & Space bookings CTA */}
        <BookingSystem />
      </main>

      {/* Editorial footer */}
      <Footer />
    </div>
  );
}

export default App;
