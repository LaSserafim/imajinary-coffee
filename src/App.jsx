import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuTeaser from './components/MenuTeaser';
import BookingSystem from './components/BookingSystem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans select-none selection:bg-terracotta/10 selection:text-terracotta">
      {/* Sticky Glassmorphism Navigation */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Editorial Split Hero Section */}
        <Hero />

        {/* Value Proposition feature grid */}
        <Features />

        {/* Category-filtered Menu teaser */}
        <MenuTeaser />

        {/* Reservations & Space rental systems */}
        <BookingSystem />
      </main>

      {/* Editorial footer */}
      <Footer />
    </div>
  );
}

export default App;
