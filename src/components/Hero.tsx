import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden bg-lacnor-blue">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/lacnor-hero/1920/1080"
          alt="Lacnor Banner"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lacnor-blue/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl text-white"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 bg-lacnor-yellow text-lacnor-blue rounded-full font-bold text-sm mb-6"
          >
            NEW ARRIVAL
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white">
            Healthier Choice <br />
            <span className="text-lacnor-yellow">You'll Love</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-lg">
            Lacnor brings you the best of nature through its wide variety of juices and dairy products from grass-fed cows.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
              Explore Products <ArrowRight size={20} />
            </button>
            <button className="flex items-center gap-3 text-white font-bold hover:text-lacnor-yellow transition-colors px-6 py-4">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <Play size={20} fill="currentColor" />
              </div>
              Watch Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="w-64 h-64 bg-lacnor-yellow/20 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};
