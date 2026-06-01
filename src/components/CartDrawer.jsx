import React, { useState } from 'react';
import { X, Trash2, ArrowRight, Table, Clock, User, Phone } from 'lucide-react';

export default function CartDrawer({ isOpen, closeCart, cart, updateQuantity, removeFromCart, placeOrder }) {
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' or 'takeaway'
  const [tableNo, setTableNo] = useState('Table 1');
  const [pickupTime, setPickupTime] = useState('15 Minutes');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }
    setErrorMsg('');

    const details = orderType === 'dine-in' ? tableNo : `Pickup in ${pickupTime}`;
    placeOrder({
      name,
      phone,
      orderType,
      details,
      items: cart,
      total
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-espresso/60 backdrop-blur-xs animate-fade-in text-left font-sans">
      {/* Background overlay click handler */}
      <div className="absolute inset-0 cursor-pointer" onClick={closeCart}></div>

      {/* Cart Container */}
      <div className="relative w-full max-w-md h-full bg-cream shadow-2xl border-l border-espresso/15 flex flex-col justify-between animate-slide-in">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-espresso/10 flex items-center justify-between bg-cream-200">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso">
              Your Order Cart
            </h3>
            <span className="bg-espresso text-cream-50 text-[10px] font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} Items
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1 rounded-lg hover:bg-cream-300 text-espresso transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-grow overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Cart Items List */}
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="text-espresso/40 flex justify-center text-4xl">🛒</div>
              <p className="text-sm font-medium text-espresso/60 italic">Your cart is currently empty.</p>
              <button
                onClick={closeCart}
                className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-terracotta hover:underline cursor-pointer"
              >
                Start adding items
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <div className="space-y-4.5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 pb-4 border-b border-espresso/10 items-center justify-between"
                >
                  {/* Photo and Details */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-lg object-cover border border-espresso/10 shrink-0"
                    />
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-espresso">
                        {item.name}
                      </h4>
                      {item.modifiers && item.modifiers.length > 0 && (
                        <p className="text-[10px] text-espresso/50 italic leading-normal">
                          {item.modifiers.join(', ')}
                        </p>
                      )}
                      <p className="text-xs font-bold text-terracotta mt-0.5">
                        Rp {(item.price).toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-cream-200 border border-espresso/10 rounded-lg overflow-hidden shrink-0 select-none">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-cream-300 text-xs font-extrabold text-espresso transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-espresso">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-cream-300 text-xs font-extrabold text-espresso transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:text-red-600 text-espresso/40 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Checkout Info Form (Only if items exist) */}
          {cart.length > 0 && (
            <form onSubmit={handleCheckout} className="space-y-4.5 pt-6 border-t border-espresso/10">
              <h4 className="font-serif text-sm font-bold text-espresso uppercase tracking-wider">
                Checkout Details
              </h4>

              {/* Order Type Dine In vs Takeaway */}
              <div className="space-y-1.5">
                <span className="text-[9px] uppercase font-bold tracking-widest text-espresso/50">Order Type</span>
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`flex-1 py-2 flex items-center justify-center gap-1.5 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                      orderType === 'dine-in'
                        ? 'bg-espresso text-cream border-transparent shadow-sm'
                        : 'bg-cream-50 text-espresso border-espresso/10 hover:bg-cream-200'
                    }`}
                  >
                    <Table className="h-3.5 w-3.5" />
                    Dine-In
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`flex-1 py-2 flex items-center justify-center gap-1.5 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-espresso text-cream border-transparent shadow-sm'
                        : 'bg-cream-50 text-espresso border-espresso/10 hover:bg-cream-200'
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    Takeaway
                  </button>
                </div>
              </div>

              {/* Dynamic input depending on order type */}
              {orderType === 'dine-in' ? (
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-espresso/50">Select Table Number</label>
                  <select
                    value={tableNo}
                    onChange={(e) => setTableNo(e.target.value)}
                    className="w-full p-2.5 bg-cream-50 border border-espresso/10 rounded-xl text-xs text-espresso font-semibold focus:outline-none focus:border-espresso"
                  >
                    {Array.from({ length: 12 }, (_, i) => `Table ${i + 1}`).map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-espresso/50">Estimated Pickup Time</label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full p-2.5 bg-cream-50 border border-espresso/10 rounded-xl text-xs text-espresso font-semibold focus:outline-none focus:border-espresso"
                  >
                    {['15 Minutes', '30 Minutes', '45 Minutes', '1 Hour'].map(t => (
                      <option key={t} value={t}>In {t}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Guest Information */}
              <div className="space-y-3">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-espresso/50 flex items-center gap-1">
                    <User className="h-3 w-3" /> Guest Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dimas"
                    className="w-full p-2.5 bg-cream-50 border border-espresso/10 rounded-xl text-xs text-espresso focus:outline-none focus:border-espresso placeholder-espresso/30"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-bold tracking-widest text-espresso/50 flex items-center gap-1">
                    <Phone className="h-3 w-3" /> WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 08123456789"
                    className="w-full p-2.5 bg-cream-50 border border-espresso/10 rounded-xl text-xs text-espresso focus:outline-none focus:border-espresso placeholder-espresso/30"
                  />
                </div>
              </div>

              {/* Validations */}
              {errorMsg && (
                <p className="text-[10px] text-red-600 font-bold bg-red-50 border border-red-100 p-2.5 rounded-lg text-center animate-pulse">
                  {errorMsg}
                </p>
              )}
            </form>
          )}

        </div>

        {/* Footer Actions (Only if items exist) */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-espresso/10 bg-cream-200 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] uppercase font-bold tracking-widest text-espresso/60">Total Cost:</span>
              <span className="font-serif text-lg sm:text-xl font-extrabold text-espresso">
                Rp {total.toLocaleString('id-ID')}
              </span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-terracotta hover:bg-espresso text-cream-50 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
            >
              Proceed to QRIS Payment
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
