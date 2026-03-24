import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-10 h-10 bg-lacnor-blue rounded-full flex items-center justify-center text-white font-bold text-xl"
          >
            L
          </motion.div>
          <span className={cn("font-display font-black text-2xl tracking-tighter", isScrolled ? "text-lacnor-blue" : "text-lacnor-blue")}>
            LACNOR
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-bold uppercase tracking-wider transition-colors hover:text-lacnor-yellow',
                location.pathname === link.path ? 'text-lacnor-yellow' : (isScrolled ? 'text-lacnor-blue' : 'text-lacnor-blue')
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          <button className="p-2 text-lacnor-blue hover:text-lacnor-yellow transition-colors">
            <Search size={20} />
          </button>
          
          <Link to="/cart" className="relative p-2 text-lacnor-blue hover:text-lacnor-yellow transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-lacnor-yellow text-lacnor-blue text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          <Link to="/auth" className="p-2 text-lacnor-blue hover:text-lacnor-yellow transition-colors">
            <User size={20} />
          </Link>

          <button
            className="md:hidden p-2 text-lacnor-blue hover:text-lacnor-yellow transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-lacnor-blue hover:text-lacnor-yellow"
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
