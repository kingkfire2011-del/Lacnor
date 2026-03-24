import React from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Things We Make', href: '#' },
    { name: 'Where To Buy', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-lacnor-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-lacnor-blue rounded-full flex items-center justify-center text-white font-bold text-2xl">
                L
              </div>
              <span className="text-2xl font-display font-black text-lacnor-blue tracking-tighter">
                LACNOR
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lacnor-blue font-semibold hover:text-lacnor-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-lacnor-blue hover:text-lacnor-yellow transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-lacnor-blue hover:text-lacnor-yellow transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="btn-primary">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-lacnor-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-lacnor-blue/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-semibold text-lacnor-blue hover:bg-lacnor-bg rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button className="btn-primary w-full">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
