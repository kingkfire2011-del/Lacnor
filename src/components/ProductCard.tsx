import React from 'react';
import { motion } from 'motion/react';
import { Plus, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card group relative"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-lacnor-bg/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lacnor-blue shadow-md hover:bg-lacnor-yellow transition-colors">
            <Heart size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lacnor-blue shadow-md hover:bg-lacnor-yellow transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-lacnor-blue/60 uppercase tracking-widest">
            {product.category}
          </span>
          <div className="flex gap-1">
            {product.tags?.map((tag) => (
              <span key={tag} className="text-[10px] bg-lacnor-blue/5 text-lacnor-blue px-2 py-0.5 rounded-full font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-display font-black text-lacnor-blue mb-2 group-hover:text-lacnor-yellow transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-lacnor-text/70 line-clamp-2 mb-6">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-lacnor-text/50 font-bold uppercase">Price</span>
            <span className="text-lg font-black text-lacnor-blue">AED 12.50</span>
          </div>
          <button className="w-12 h-12 bg-lacnor-blue text-white rounded-2xl flex items-center justify-center hover:bg-lacnor-yellow hover:text-lacnor-blue transition-all active:scale-90 shadow-lg shadow-lacnor-blue/20">
            <Plus size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
