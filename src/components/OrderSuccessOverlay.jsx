import React, { useState, useEffect } from 'react';
import { CheckCircle2, Coffee, Sparkles, ChefHat, CheckSquare } from 'lucide-react';

export default function OrderSuccessOverlay({ order, txId, onClose }) {
  const [prepStatus, setPrepStatus] = useState(0); // 0: Confirmed, 1: Brewing, 2: Ready

  useEffect(() => {
    // Stage transition timers to simulate real-time barista kitchen preparation
    const timer1 = setTimeout(() => setPrepStatus(1), 5000); // 5s -> Preparing
    const timer2 = setTimeout(() => setPrepStatus(2), 12000); // 12s -> Ready

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const steps = [
    {
      label: 'Order Confirmed',
      desc: 'Queued in Pleburan kitchen.',
      icon: <CheckSquare className="h-5 w-5 text-emerald-500" />
    },
    {
      label: 'Brewing & Preparing',
      desc: 'Barista is crafting your order.',
      icon: <Coffee className="h-5 w-5 text-terracotta" />
    },
    {
      label: 'Ready to Serve',
      desc: 'On the way to your table/counter.',
      icon: <ChefHat className="h-5 w-5 text-sage" />
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-sm animate-fade-in font-sans text-left">
      
      {/* Scrollable Receipt Ticket Container */}
      <div className="bg-cream border border-espresso/15 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col justify-between max-h-[90vh] animate-scale-up">
        
        {/* Ticket Header Banner */}
        <div className="p-6 bg-espresso text-cream text-center space-y-2 border-b border-espresso-100">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
              <CheckCircle2 className="h-6 w-6 animate-pulse" />
            </div>
          </div>
          <div className="space-y-0.5">
            <h3 className="font-serif text-lg font-bold text-cream-50">Payment Successful</h3>
            <p className="text-[10px] text-cream-200/60 uppercase tracking-widest font-semibold">Imaginary Coffee Pleburan</p>
          </div>
        </div>

        {/* Dynamic Order Prep Tracker Widget */}
        <div className="p-5 border-b border-espresso/10 bg-cream-200/50 space-y-4">
          <h4 className="font-serif text-xs font-bold text-espresso uppercase tracking-wider text-center">
            Kitchen Preparation Tracker
          </h4>

          {/* Progress Indicators */}
          <div className="flex flex-col space-y-4 max-w-xs mx-auto">
            {steps.map((step, idx) => {
              const isActive = prepStatus >= idx;
              const isCurrent = prepStatus === idx;
              
              return (
                <div 
                  key={idx}
                  className={`flex items-start gap-3 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg border transition-all ${
                    isCurrent 
                      ? 'bg-cream border-terracotta scale-105 shadow-sm ring-2 ring-terracotta/10' 
                      : isActive 
                        ? 'bg-cream border-espresso/10' 
                        : 'bg-cream-300 border-espresso/5'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="space-y-0.5 text-left">
                    <p className={`text-xs font-bold ${isActive ? 'text-espresso' : 'text-espresso/45'}`}>
                      {step.label} {isCurrent && idx < 2 && '...'}
                    </p>
                    <p className="text-[10px] text-espresso/60 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Receipt Details Section */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          <div className="flex justify-between items-baseline border-b border-espresso/10 pb-3">
            <span className="font-serif text-sm font-bold text-espresso">Receipt Details</span>
            <span className="text-[9px] font-mono text-espresso/40">ID: {txId}</span>
          </div>

          {/* Customer Metadata */}
          <div className="grid grid-cols-2 gap-y-2 border-b border-espresso/10 pb-3 font-semibold text-espresso/70">
            <div>
              <p className="text-[8px] uppercase text-espresso/40">Guest Name</p>
              <p>{order.name}</p>
            </div>
            <div>
              <p className="text-[8px] uppercase text-espresso/40">Allocation / Method</p>
              <p className="capitalize">{order.orderType}: {order.details}</p>
            </div>
            <div>
              <p className="text-[8px] uppercase text-espresso/40">Contact Info</p>
              <p>{order.phone}</p>
            </div>
            <div>
              <p className="text-[8px] uppercase text-espresso/40">Timestamp</p>
              <p>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
            </div>
          </div>

          {/* Receipt Items list */}
          <div className="space-y-2.5 max-h-[140px] overflow-y-auto pr-1">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start gap-4">
                <div className="space-y-0.5">
                  <p className="font-serif font-bold text-espresso text-xs">
                    {item.quantity}x {item.name}
                  </p>
                  {item.modifiers && item.modifiers.length > 0 && (
                    <p className="text-[9px] text-espresso/50 italic leading-normal">
                      {item.modifiers.join(', ')}
                    </p>
                  )}
                </div>
                <span className="font-bold text-espresso shrink-0 text-right">
                  Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                </span>
              </div>
            ))}
          </div>

          {/* Checkout Final Total */}
          <div className="border-t border-dashed border-espresso/20 pt-3 flex justify-between items-baseline font-bold">
            <span className="text-[10px] uppercase tracking-wider text-espresso/60">Total Charged</span>
            <span className="font-serif text-base text-terracotta">
              Rp {order.total.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* Bottom Action Drawer */}
        <div className="p-5 bg-cream-200 border-t border-espresso/10 text-center">
          <button
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-1 px-5 py-3 bg-espresso hover:bg-terracotta text-cream-50 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md cursor-pointer select-none active:scale-95"
          >
            Order Something Else
          </button>
        </div>

      </div>
    </div>
  );
}
