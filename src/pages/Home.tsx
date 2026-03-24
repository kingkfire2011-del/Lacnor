import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data';
import { ArrowRight, Leaf, ShieldCheck, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-black text-lacnor-blue mb-4"
            >
              Explore Our <span className="text-lacnor-yellow">Categories</span>
            </motion.h2>
            <p className="text-lg text-lacnor-text/60 max-w-2xl mx-auto">
              From fresh dairy to 100% natural juices, we bring the best of nature to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-xl shadow-lacnor-blue/5"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lacnor-blue/90 via-lacnor-blue/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-display font-black text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                  <button className="flex items-center gap-2 text-lacnor-yellow font-bold group-hover:gap-4 transition-all">
                    Shop Now <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-lacnor-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Leaf className="text-lacnor-yellow" size={40} />,
                title: '100% Natural',
                desc: 'Selectively sourced from where fruit trees naturally thrive.',
              },
              {
                icon: <ShieldCheck className="text-lacnor-yellow" size={40} />,
                title: 'Grass-Fed Cows',
                desc: 'Our dairy products come from healthy, grass-fed cows.',
              },
              {
                icon: <Zap className="text-lacnor-yellow" size={40} />,
                title: 'Enriched Nutrition',
                desc: 'Enriched with essential vitamins and minerals for your health.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg shadow-lacnor-blue/5"
              >
                <div className="mb-6 p-4 bg-lacnor-bg rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-black text-lacnor-blue mb-4">{feature.title}</h3>
                <p className="text-lacnor-text/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-display font-black text-lacnor-blue mb-4"
              >
                Featured <span className="text-lacnor-yellow">Products</span>
              </motion.h2>
              <p className="text-lg text-lacnor-text/60">
                Discover our most loved products, crafted with care and nature's best ingredients.
              </p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              View All Products <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-lacnor-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-lacnor-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-lacnor-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
            Stay Healthy, <span className="text-lacnor-yellow">Stay Informed</span>
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Subscribe to our newsletter for healthy tips, new product launches, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-lacnor-yellow"
            />
            <button type="submit" className="btn-secondary px-8 py-4">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
