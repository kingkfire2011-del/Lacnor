import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-lacnor-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-display font-black text-lacnor-blue mb-12"
        >
          Your <span className="text-lacnor-yellow">Bag</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[32px] p-12 text-center shadow-xl shadow-lacnor-blue/5">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-lacnor-bg mb-8">
                <ShoppingBag size={40} className="text-lacnor-blue/20" />
              </div>
              <h3 className="text-3xl font-display font-black text-lacnor-blue mb-4">Your bag is empty</h3>
              <p className="text-lg text-lacnor-text/60 mb-10">
                Looks like you haven't added anything to your bag yet.
              </p>
              <Link to="/products" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[32px] p-10 shadow-xl shadow-lacnor-blue/5 sticky top-32">
              <h3 className="text-2xl font-display font-black text-lacnor-blue mb-8 uppercase tracking-wider">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lacnor-text/60 font-bold">
                  <span>Subtotal</span>
                  <span>AED 0.00</span>
                </div>
                <div className="flex justify-between text-lacnor-text/60 font-bold">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="pt-4 border-t border-lacnor-blue/10 flex justify-between text-2xl font-display font-black text-lacnor-blue">
                  <span>Total</span>
                  <span>AED 0.00</span>
                </div>
              </div>

              <button disabled className="btn-primary w-full py-5 text-lg opacity-50 cursor-not-allowed">
                Checkout Now
              </button>
              
              <p className="text-center text-xs text-lacnor-text/40 mt-6 font-bold uppercase tracking-widest">
                Secure payment powered by Lacnor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
