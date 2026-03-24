import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-lacnor-blue text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-lacnor-yellow rounded-full flex items-center justify-center text-lacnor-blue font-black text-xl">
              L
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-white">
              LACNOR
            </span>
          </Link>
          <p className="text-base text-white/60 leading-relaxed font-medium">
            Nurturing health and happiness since 1978. Lacnor is committed to providing the highest quality dairy and juice products for your family.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-lacnor-yellow transition-all hover:scale-110"><Facebook size={24} /></a>
            <a href="#" className="text-white/40 hover:text-lacnor-yellow transition-all hover:scale-110"><Instagram size={24} /></a>
            <a href="#" className="text-white/40 hover:text-lacnor-yellow transition-all hover:scale-110"><Twitter size={24} /></a>
            <a href="#" className="text-white/40 hover:text-lacnor-yellow transition-all hover:scale-110"><Youtube size={24} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-black text-lg uppercase tracking-widest text-lacnor-yellow mb-8">Products</h4>
          <ul className="space-y-4 text-base text-white/70 font-medium">
            <li><Link to="/products?category=Dairy" className="hover:text-lacnor-yellow transition-colors">Milk & Dairy</Link></li>
            <li><Link to="/products?category=Juices" className="hover:text-lacnor-yellow transition-colors">Fruit Juices</Link></li>
            <li><Link to="/products?category=Condiments" className="hover:text-lacnor-yellow transition-colors">Condiments</Link></li>
            <li><Link to="/products" className="hover:text-lacnor-yellow transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black text-lg uppercase tracking-widest text-lacnor-yellow mb-8">Company</h4>
          <ul className="space-y-4 text-base text-white/70 font-medium">
            <li><Link to="/about" className="hover:text-lacnor-yellow transition-colors">About Us</Link></li>
            <li><Link to="/about#sustainability" className="hover:text-lacnor-yellow transition-colors">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-lacnor-yellow transition-colors">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-lacnor-yellow transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black text-lg uppercase tracking-widest text-lacnor-yellow mb-8">Newsletter</h4>
          <p className="text-base text-white/70 mb-6 font-medium">Subscribe to get the latest updates and health tips.</p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lacnor-yellow"
            />
            <button className="btn-secondary w-full py-3">
              Join Now
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 space-y-6 md:space-y-0 font-medium">
        <p>© 2026 Lacnor. All rights reserved.</p>
        <div className="flex space-x-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
