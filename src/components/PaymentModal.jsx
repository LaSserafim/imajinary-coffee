import React, { useState, useEffect } from 'react';
import { ShieldCheck, RefreshCw, X, AlertCircle } from 'lucide-react';

export default function PaymentModal({ order, onPaymentSuccess, onPaymentCancel }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isProcessing, setIsProcessing] = useState(false);
  const [txId, setTxId] = useState('');

  // Format countdown
  useEffect(() => {
    // Generate transaction ID once
    setTxId(`IMAG-QRIS-${Math.floor(100000 + Math.random() * 900000)}`);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onPaymentCancel();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSimulateSuccess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess(txId);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/75 backdrop-blur-sm animate-fade-in font-sans text-left">
      
      {/* Main Snap Modal Container */}
      <div className="bg-white border border-espresso/15 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col justify-between animate-scale-up">
        
        {/* Header Block */}
        <div className="p-4 border-b border-espresso/10 flex items-center justify-between bg-cream">
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-extrabold select-none">
              ✓
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xs font-bold text-espresso tracking-wide">Secure Checkout</span>
              <span className="text-[8px] text-espresso/50 uppercase tracking-widest font-semibold">Imaginary Coffee</span>
            </div>
          </div>
          <button
            onClick={onPaymentCancel}
            className="p-1 text-espresso/40 hover:text-espresso rounded-lg hover:bg-espresso/5 transition-all cursor-pointer"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Transaction Summary Panel */}
        <div className="p-4 bg-cream-50/50 border-b border-espresso/5 flex justify-between items-center">
          <div className="space-y-0.5">
            <span className="text-[8px] uppercase tracking-widest text-espresso/45 font-bold">Total Amount</span>
            <p className="font-serif text-base font-extrabold text-espresso">
              Rp {order.total.toLocaleString('id-ID')}
            </p>
          </div>
          <div className="text-right">
            <span className="text-[8px] uppercase tracking-widest text-espresso/45 font-bold">Expires In</span>
            <p className="font-mono text-xs font-extrabold text-terracotta tracking-wider">
              {formatTime(timeLeft)}
            </p>
          </div>
        </div>

        {/* Payment QRIS Panel */}
        <div className="p-5 flex flex-col items-center space-y-4">
          {/* QRIS Logo */}
          <div className="flex items-center gap-1.5 border border-espresso/10 rounded-lg px-3 py-1 bg-cream shadow-inner select-none">
            <span className="font-serif text-[10px] font-extrabold tracking-wider text-espresso">QRIS</span>
            <span className="h-1 w-1 bg-terracotta rounded-full"></span>
            <span className="text-[7px] text-espresso/60 uppercase tracking-widest font-bold">National Standard</span>
          </div>

          {/* SVG QR Code Simulation */}
          <div className="relative p-3 bg-white border border-espresso/10 rounded-2xl shadow-inner select-none">
            {isProcessing ? (
              <div className="h-44 w-44 flex flex-col items-center justify-center space-y-2.5 bg-white/90 absolute inset-0 z-10 rounded-2xl">
                <RefreshCw className="h-6 w-6 text-terracotta animate-spin" />
                <span className="text-[9px] uppercase tracking-widest font-bold text-espresso/70 animate-pulse">Confirming Payment...</span>
              </div>
            ) : null}
            
            <svg 
              className="h-44 w-44 text-espresso" 
              viewBox="0 0 100 100" 
              fill="currentColor"
            >
              {/* Fake QR code grid patterns */}
              <rect x="0" y="0" width="22" height="22" fill="currentColor" />
              <rect x="2" y="2" width="18" height="18" fill="white" />
              <rect x="6" y="6" width="10" height="10" fill="currentColor" />

              <rect x="78" y="0" width="22" height="22" fill="currentColor" />
              <rect x="80" y="2" width="18" height="18" fill="white" />
              <rect x="84" y="6" width="10" height="10" fill="currentColor" />

              <rect x="0" y="78" width="22" height="22" fill="currentColor" />
              <rect x="2" y="80" width="18" height="18" fill="white" />
              <rect x="6" y="84" width="10" height="10" fill="currentColor" />

              <rect x="25" y="4" width="8" height="8" fill="currentColor" />
              <rect x="35" y="1" width="12" height="6" fill="currentColor" />
              <rect x="50" y="5" width="6" height="14" fill="currentColor" />
              <rect x="65" y="2" width="10" height="8" fill="currentColor" />

              <rect x="4" y="25" width="12" height="10" fill="currentColor" />
              <rect x="18" y="30" width="6" height="12" fill="currentColor" />
              <rect x="28" y="24" width="14" height="6" fill="currentColor" />
              <rect x="45" y="28" width="8" height="8" fill="currentColor" />
              <rect x="58" y="25" width="12" height="12" fill="currentColor" />
              <rect x="74" y="24" width="22" height="6" fill="currentColor" />

              <rect x="25" y="42" width="10" height="10" fill="currentColor" />
              <rect x="38" y="45" width="24" height="6" fill="currentColor" />
              <rect x="65" y="40" width="10" height="14" fill="currentColor" />
              
              <rect x="2" y="58" width="14" height="8" fill="currentColor" />
              <rect x="20" y="60" width="12" height="12" fill="currentColor" />
              <rect x="35" y="58" width="6" height="18" fill="currentColor" />
              <rect x="45" y="64" width="12" height="8" fill="currentColor" />
              <rect x="62" y="58" width="22" height="12" fill="currentColor" />

              <rect x="76" y="74" width="8" height="8" fill="currentColor" />
              <rect x="86" y="78" width="12" height="4" fill="currentColor" />
              <rect x="60" y="78" width="12" height="12" fill="currentColor" />
              <rect x="30" y="82" width="25" height="6" fill="currentColor" />

              {/* QRIS Center badge */}
              <rect x="40" y="40" width="20" height="20" rx="3" fill="white" stroke="currentColor" strokeWidth="2" />
              <text x="50" y="52" fontSize="7" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="currentColor">QR</text>
            </svg>
          </div>

          <div className="text-center space-y-1">
            <p className="text-[10px] text-espresso/70 leading-relaxed max-w-[240px] mx-auto">
              Scan the QR code above using GoPay, OVO, Dana, LinkAja, or any mobile banking app.
            </p>
            <p className="font-mono text-[8px] text-espresso/40">
              ID: {txId}
            </p>
          </div>
        </div>

        {/* Sandbox Simulation Bar (Dev Tools Panel) */}
        <div className="p-4 bg-espresso-300 border-t border-espresso-200 text-cream-100 space-y-2.5">
          <div className="flex items-center gap-1.5 justify-center">
            <AlertCircle className="h-3.5 w-3.5 text-terracotta shrink-0 animate-bounce" />
            <span className="text-[8px] uppercase tracking-widest font-extrabold text-cream-200">Sandbox Simulator Tools</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSimulateSuccess}
              disabled={isProcessing}
              className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-sm cursor-pointer active:scale-95 text-center"
            >
              Simulate Pay Success
            </button>
            <button
              onClick={onPaymentCancel}
              disabled={isProcessing}
              className="px-3.5 py-2.5 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-cream-100 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer text-center"
            >
              Fail/Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
