import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
    >
      <Link to={`/products/${product.slug}`} className="block aspect-square overflow-hidden bg-slate-50">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold text-brand-secondary uppercase tracking-widest mb-1">
              {product.category}
            </p>
            <Link to={`/products/${product.slug}`}>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>
          <button className="text-slate-300 hover:text-red-500 transition-colors">
            <Heart size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-display font-bold text-slate-900">
            AED {product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors shadow-lg shadow-slate-200"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
