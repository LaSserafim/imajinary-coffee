import React, { useState } from 'react';
import { menuData } from '../menuData';
import { Plus, Check, ShoppingBag } from 'lucide-react';

export default function MenuCatalog({ addToCart, cartCount, openCart }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [milk, setMilk] = useState('Fresh Milk');
  const [sugar, setSugar] = useState('Normal Sugar');
  const [temp, setTemp] = useState('Iced');

  // Group items by category
  const categories = {
    'Signature Coffee': menuData.filter(item => item.category === 'Signature Coffee'),
    'Non-Coffee Brews': menuData.filter(item => item.category === 'Non-Coffee Brews'),
    'Artisanal Pastries': menuData.filter(item => item.category === 'Artisanal Pastries')
  };

  const handleOpenCustomize = (item) => {
    setSelectedItem(item);
    // Reset options
    setMilk('Fresh Milk');
    setSugar('Normal Sugar');
    setTemp(item.category === 'Artisanal Pastries' ? 'Warm' : 'Iced');
  };

  const handleAddToCart = () => {
    const isDrink = selectedItem.category !== 'Artisanal Pastries' && selectedItem.name !== 'Truffle Fries & Dipping';
    
    let finalPrice = selectedItem.price;
    const modifiers = [];

    if (isDrink) {
      modifiers.push(temp);
      modifiers.push(sugar);
      if (milk === 'Oat Milk') {
        finalPrice += 5000;
        modifiers.push('Oat Milk (+Rp 5k)');
      } else {
        modifiers.push('Fresh Milk');
      }
    } else if (selectedItem.category === 'Artisanal Pastries') {
      modifiers.push(temp === 'Warm' ? 'Warmed Up' : 'Room Temp');
    }

    addToCart({
      id: `${selectedItem.id}-${modifiers.join('-')}`,
      baseId: selectedItem.id,
      name: selectedItem.name,
      price: finalPrice,
      image: selectedItem.image,
      modifiers,
      quantity: 1
    });

    setSelectedItem(null);
  };

  return (
    <section id="digital-menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 border-b border-espresso/10 pb-6 text-left">
        <div className="space-y-1.5 max-w-xl">
          <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
            Specialty Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
            Order Coffee & Pastries
          </h2>
          <p className="font-sans text-xs sm:text-sm text-espresso/70">
            Craft your order, select your preferences, and pay securely via QRIS. Served straight to your table.
          </p>
        </div>

        {/* Floating Cart Button */}
        <button
          onClick={openCart}
          className="relative inline-flex items-center gap-2.5 px-5 py-3 bg-espresso hover:bg-terracotta text-cream-50 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md cursor-pointer select-none active:scale-95"
        >
          <ShoppingBag className="h-4.5 w-4.5" />
          <span>My Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-terracotta text-cream-50 text-[10px] font-bold h-5.5 w-5.5 rounded-full flex items-center justify-center border-2 border-cream shadow-sm animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Menu Categories */}
      <div className="space-y-12">
        {Object.entries(categories).map(([categoryName, items]) => (
          <div key={categoryName} className="space-y-6 text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso border-l-3 border-terracotta pl-3 uppercase tracking-wide">
              {categoryName}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-cream-50 rounded-2xl overflow-hidden border border-espresso/10 hover:border-espresso/30 transition-all duration-300 shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    {/* Item Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-cream-200 border-b border-espresso/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                      />
                      {item.tag && (
                        <span className="absolute top-3 left-3 text-[8px] uppercase font-bold tracking-widest bg-espresso text-cream-50 px-2.5 py-0.5 rounded border border-white/10 shadow-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Item Metadata */}
                    <div className="p-5 space-y-2">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="font-serif text-base font-bold text-espresso">
                          {item.name}
                        </h4>
                        <span className="font-serif text-sm font-bold text-terracotta shrink-0">
                          Rp {(item.price).toLocaleString('id-ID')}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] sm:text-xs text-espresso/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Add Action */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => handleOpenCustomize(item)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-cream border border-espresso/10 hover:bg-espresso hover:text-cream-50 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Add & Customize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Customize Modifiers Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream border border-espresso/20 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-scale-up text-left">
            {/* Modal Header */}
            <div className="relative aspect-[16/9] bg-cream-200 border-b border-espresso/10">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                <span className="text-[9px] uppercase font-bold tracking-wider text-cream-200">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  {selectedItem.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 h-7 w-7 rounded-full bg-espresso/50 text-cream hover:bg-espresso flex items-center justify-center text-xs font-bold transition-colors shadow-md cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Customizer Body */}
            <div className="p-6 space-y-5 max-h-[300px] overflow-y-auto">
              
              {/* If Coffee or Drink */}
              {(selectedItem.category !== 'Artisanal Pastries' && selectedItem.name !== 'Truffle Fries & Dipping') ? (
                <>
                  {/* Temp Selector */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-espresso/50">Serve Choice</span>
                    <div className="flex gap-2.5">
                      {['Iced', 'Hot'].map(t => (
                        <button
                          key={t}
                          onClick={() => setTemp(t)}
                          className={`flex-1 py-2 text-center text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                            temp === t 
                              ? 'bg-espresso text-cream border-transparent shadow-sm' 
                              : 'bg-cream-50 text-espresso border-espresso/10 hover:bg-cream-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sugar Selector */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-espresso/50">Sweetness</span>
                    <div className="flex gap-2.5">
                      {['Normal Sugar', 'Less Sugar'].map(s => (
                        <button
                          key={s}
                          onClick={() => setSugar(s)}
                          className={`flex-1 py-2 text-center text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                            sugar === s 
                              ? 'bg-espresso text-cream border-transparent shadow-sm' 
                              : 'bg-cream-50 text-espresso border-espresso/10 hover:bg-cream-200'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Milk Selector */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-espresso/50">Milk Variant</span>
                    <div className="flex gap-2.5">
                      {['Fresh Milk', 'Oat Milk'].map(m => (
                        <button
                          key={m}
                          onClick={() => setMilk(m)}
                          className={`flex-1 py-2 text-center text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                            milk === m 
                              ? 'bg-espresso text-cream border-transparent shadow-sm' 
                              : 'bg-cream-50 text-espresso border-espresso/10 hover:bg-cream-200'
                          }`}
                        >
                          {m} {m === 'Oat Milk' && '(+Rp 5k)'}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : selectedItem.category === 'Artisanal Pastries' ? (
                /* Pastry Temperature Modifier */
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-espresso/50">Preparation</span>
                  <div className="flex gap-2.5">
                    {['Warm', 'Room Temp'].map(t => (
                      <button
                        key={t}
                        onClick={() => setTemp(t)}
                        className={`flex-1 py-2 text-center text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                          temp === t 
                            ? 'bg-espresso text-cream border-transparent shadow-sm' 
                            : 'bg-cream-50 text-espresso border-espresso/10 hover:bg-cream-200'
                        }`}
                      >
                        {t === 'Warm' ? 'Serve Warmed Up' : 'Serve Room Temp'}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-xs text-espresso/60 italic">No custom modifiers needed for this item.</p>
              )}

            </div>

            {/* Modal Bottom Actions */}
            <div className="p-6 bg-cream-200 border-t border-espresso/10 flex justify-between items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-espresso/50 font-bold">Total Price</span>
                <span className="font-serif text-base font-extrabold text-terracotta">
                  Rp {(selectedItem.price + (milk === 'Oat Milk' && selectedItem.category !== 'Artisanal Pastries' && selectedItem.name !== 'Truffle Fries & Dipping' ? 5000 : 0)).toLocaleString('id-ID')}
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-espresso hover:bg-terracotta text-cream-50 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md cursor-pointer select-none active:scale-95"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
