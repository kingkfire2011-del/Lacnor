import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { ArrowLeft, ShoppingBag, Heart, Share2, CheckCircle2, Leaf, ShieldCheck } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === slug);
  }, [slug]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-4xl font-display font-black text-lacnor-blue mb-6">Product Not Found</h2>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-lacnor-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <Link to="/products" className="inline-flex items-center gap-2 text-lacnor-blue font-bold hover:text-lacnor-yellow transition-colors">
            <ArrowLeft size={20} />
            Back to All Products
          </Link>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-[40px] overflow-hidden bg-white shadow-2xl shadow-lacnor-blue/5 group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8 flex flex-col gap-3">
              {product.tags.map((tag) => (
                <span key={tag} className="px-5 py-2 rounded-full bg-lacnor-yellow text-lacnor-blue text-sm font-black uppercase tracking-wider shadow-lg">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-lacnor-yellow font-black uppercase tracking-widest mb-4">
              {product.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-black text-lacnor-blue mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl text-lacnor-text/60 mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-6 mb-12">
              <span className="text-4xl font-display font-black text-lacnor-blue">
                AED {product.price.toFixed(2)}
              </span>
              <span className="text-sm text-lacnor-text/40 font-bold uppercase tracking-wider">
                Inclusive of VAT
              </span>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <CheckCircle2 className="text-lacnor-yellow" />, text: '100% Natural' },
                { icon: <Leaf className="text-lacnor-yellow" />, text: 'No Preservatives' },
                { icon: <ShieldCheck className="text-lacnor-yellow" />, text: 'Quality Guaranteed' },
                { icon: <CheckCircle2 className="text-lacnor-yellow" />, text: 'Freshly Sourced' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-lacnor-blue font-bold">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-grow flex items-center justify-center gap-3 py-5 text-lg">
                <ShoppingBag size={24} />
                Add to Bag
              </button>
              <button className="p-5 rounded-full bg-white text-lacnor-blue hover:text-lacnor-yellow shadow-xl shadow-lacnor-blue/5 transition-all hover:scale-110">
                <Heart size={24} />
              </button>
              <button className="p-5 rounded-full bg-white text-lacnor-blue hover:text-lacnor-yellow shadow-xl shadow-lacnor-blue/5 transition-all hover:scale-110">
                <Share2 size={24} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs (Simplified) */}
        <div className="mb-24">
          <div className="flex border-b border-lacnor-blue/10 mb-12">
            <button className="px-8 py-4 border-b-4 border-lacnor-yellow text-lacnor-blue font-black text-lg uppercase tracking-wider">
              Description
            </button>
            <button className="px-8 py-4 text-lacnor-text/40 font-black text-lg uppercase tracking-wider hover:text-lacnor-blue transition-colors">
              Nutrition
            </button>
            <button className="px-8 py-4 text-lacnor-text/40 font-black text-lg uppercase tracking-wider hover:text-lacnor-blue transition-colors">
              Reviews
            </button>
          </div>
          <div className="prose prose-lg max-w-none text-lacnor-text/70">
            <p className="mb-6">
              Our {product.name} is crafted with the utmost care, using only the finest ingredients sourced from nature. Whether you're starting your day or looking for a healthy snack, this is the perfect choice for you and your family.
            </p>
            <p>
              Lacnor has been a household name in the UAE since 1978, and we continue to uphold our commitment to quality and health. Every drop is packed with essential nutrients to keep you energized and healthy.
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-display font-black text-lacnor-blue">
                Related <span className="text-lacnor-yellow">Products</span>
              </h2>
              <Link to="/products" className="text-lacnor-blue font-bold hover:text-lacnor-yellow transition-colors">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
