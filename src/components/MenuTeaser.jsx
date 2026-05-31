import React, { useState, useMemo } from 'react';
import { menuData } from '../menuData';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function MenuTeaser() {
  const categories = ['Signature Coffee', 'Non-Coffee Brews', 'Artisanal Pastries'];
  const [selectedCategory, setSelectedCategory] = useState('Signature Coffee');
  const [imageErrors, setImageErrors] = useState({});

  // Format currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price).replace(/\u00A0/, ' ');
  };

  // Filtered menu list based on selected category tab
  const filteredItems = useMemo(() => {
    return menuData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Image fallback handler
  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Generate WA Order Link for specific item
  const getWhatsAppOrderLink = (itemName, price) => {
    const phoneNumber = '6282231367091';
    const message = `Hello Imaginary Coffee, I would like to order one ${itemName} (${formatPrice(price)}) for pickup/takeaway. Please process my order. Thank you!`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="digital-menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
          The Collection
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-3 mb-2">
          Explore Our Specialties
        </h2>
        <p className="font-sans text-xs sm:text-sm text-charcoal/80">
          Handcrafted espresso drinks, shade-grown matcha latte, and freshly laminated croissants.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-cream-200/50 rounded-xl border border-espresso/5 overflow-x-auto max-w-full no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-[1.02] ${
                  isActive
                    ? 'bg-espresso text-cream-50 shadow-sm'
                    : 'text-charcoal/70 hover:text-espresso hover:bg-cream-200/30'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Grid (Prevents layout shifting by using fixed height or minimal layout flex) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[380px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-espresso/5"
          >
            {/* Image banner with tag overlay */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
              {imageErrors[item.id] ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-cream-50 text-sage/60 select-none">
                  <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-serif">IMAGINARY.</span>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.name}
                  onError={() => handleImageError(item.id)}
                  className="h-full w-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              )}

              {/* Tag Badge */}
              {item.tag && (
                <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-espresso text-cream-50 rounded">
                  {item.tag}
                </span>
              )}
            </div>

            {/* Content Details */}
            <div className="flex flex-col flex-1 p-5">
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-espresso group-hover:text-terracotta transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="font-sans font-bold text-sm text-sage whitespace-nowrap bg-cream-50 px-2 py-0.5 rounded border border-espresso/5">
                  {formatPrice(item.price)}
                </span>
              </div>
              
              <p className="text-xs text-charcoal/80 leading-relaxed font-normal mb-5 flex-grow">
                {item.description}
              </p>

              {/* Discreet conversion trigger */}
              <div className="pt-2 border-t border-espresso/5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-espresso/40">
                  Pleburan branch
                </span>
                
                <a
                  href={getWhatsAppOrderLink(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-espresso hover:text-terracotta group/link transition-colors duration-300"
                >
                  Order Now
                  <ArrowRight className="h-3 w-3 text-sage group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
