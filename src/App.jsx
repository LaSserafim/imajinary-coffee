import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SanctuaryOverview from './components/SanctuaryOverview';
import SeatAvailability from './components/SeatAvailability';
import Guestbook from './components/Guestbook';
import BookingSystem from './components/BookingSystem';
import Footer from './components/Footer';

// Payment Stack Components
import MenuCatalog from './components/MenuCatalog';
import CartDrawer from './components/CartDrawer';
import PaymentModal from './components/PaymentModal';
import OrderSuccessOverlay from './components/OrderSuccessOverlay';

function App() {
  const [currentPage, setCurrentPage] = useState('overview'); // 'overview' | 'menu'
  
  // Payment Flow State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [currentOrder, setCurrentOrder] = useState(null); 
  const [paymentStatus, setPaymentStatus] = useState('idle'); // 'idle' | 'processing' | 'success'
  const [txId, setTxId] = useState(null);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(i => 
        i.id === item.id && 
        i.milk === item.milk && 
        i.sugar === item.sugar && 
        i.temp === item.temp
      );
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (index, delta) => {
    setCart(prev => {
      const newCart = [...prev];
      const newQty = newCart[index].quantity + delta;
      if (newQty <= 0) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity = newQty;
      }
      return newCart;
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const placeOrder = (orderDetails) => {
    setCurrentOrder(orderDetails);
    setPaymentStatus('processing');
    setIsCartOpen(false);
  };

  const handlePaymentSuccess = (transactionId) => {
    setTxId(transactionId);
    setPaymentStatus('success');
    setCart([]); 
  };

  const handlePaymentCancel = () => {
    setPaymentStatus('idle');
    setCurrentOrder(null);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans select-none selection:bg-terracotta/10 selection:text-terracotta">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow flex flex-col">
        {currentPage === 'overview' ? (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Features />
            <SanctuaryOverview />
            <SeatAvailability />
            <Guestbook />
            <BookingSystem />
          </>
        ) : (
          <MenuCatalog 
            addToCart={addToCart} 
            cartCount={cartCount} 
            openCart={() => setIsCartOpen(true)} 
          />
        )}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        placeOrder={placeOrder}
      />

      {paymentStatus === 'processing' && (
        <PaymentModal 
          order={currentOrder}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentCancel={handlePaymentCancel}
        />
      )}

      {paymentStatus === 'success' && (
        <OrderSuccessOverlay
          order={currentOrder}
          txId={txId}
          onClose={() => {
            setPaymentStatus('idle');
            setCurrentOrder(null);
            setTxId(null);
            setCurrentPage('overview');
          }}
        />
      )}
    </div>
  );
}

export default App;
