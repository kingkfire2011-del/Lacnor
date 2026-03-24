import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-lacnor-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-black text-lacnor-blue mb-6"
          >
            Our <span className="text-lacnor-yellow">Products</span>
          </motion.h1>
          <p className="text-xl text-lacnor-text/60 max-w-2xl">
            Explore our wide range of healthy, delicious, and 100% natural products.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-lacnor-blue/40" size={24} />
            <input
              type="text"
              placeholder="Search for juices, milk, or condiments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 rounded-3xl bg-white shadow-xl shadow-lacnor-blue/5 border-none focus:ring-2 focus:ring-lacnor-yellow text-lg"
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-center gap-3 px-8 py-5 rounded-3xl bg-white shadow-xl shadow-lacnor-blue/5 font-bold text-lacnor-blue hover:bg-lacnor-yellow transition-colors"
          >
            <SlidersHorizontal size={24} />
            Filters
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              selectedCategory === null
                ? 'bg-lacnor-blue text-white shadow-lg shadow-lacnor-blue/20'
                : 'bg-white text-lacnor-blue hover:bg-lacnor-blue/5'
            }`}
          >
            All Products
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                selectedCategory === category.name
                  ? 'bg-lacnor-blue text-white shadow-lg shadow-lacnor-blue/20'
                  : 'bg-white text-lacnor-blue hover:bg-lacnor-blue/5'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl mb-8">
                <Search size={40} className="text-lacnor-blue/20" />
              </div>
              <h3 className="text-3xl font-display font-black text-lacnor-blue mb-4">No products found</h3>
              <p className="text-lg text-lacnor-text/60 mb-8">
                We couldn't find any products matching your search. Try different keywords or categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;
