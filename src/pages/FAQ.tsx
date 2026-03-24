import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Are Lacnor products 100% natural?',
      answer: 'Yes, our juices are made from 100% natural fruit concentrates with no added sugar or preservatives. Our dairy products are also sourced from high-quality farms and processed with care to maintain their natural goodness.',
    },
    {
      question: 'Where are Lacnor products manufactured?',
      answer: 'Lacnor products are manufactured in our state-of-the-art facilities in Sharjah, United Arab Emirates, following the highest international standards of quality and safety.',
    },
    {
      question: 'Do your products contain any preservatives?',
      answer: 'Most of our core products, including our 100% juices and fresh milk, do not contain any added preservatives. We use advanced packaging technology (UHT) to ensure a long shelf life while maintaining nutritional value.',
    },
    {
      question: 'Are your dairy products suitable for vegetarians?',
      answer: 'Yes, our dairy products are suitable for vegetarians as they do not contain any animal-derived rennet or other non-vegetarian ingredients.',
    },
    {
      question: 'How should I store Lacnor juices after opening?',
      answer: 'Once opened, Lacnor juices should be kept refrigerated and consumed within 3-4 days for the best taste and quality.',
    },
    {
      question: 'Where can I buy Lacnor products?',
      answer: 'Lacnor products are available in all major supermarkets, convenience stores, and online grocery platforms across the UAE and many other countries in the region.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-lacnor-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-display font-black text-lacnor-blue mb-8"
          >
            Frequently Asked <span className="text-lacnor-yellow">Questions</span>
          </motion.h1>
          <p className="text-xl text-lacnor-text/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our products, quality, and heritage.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-16">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-lacnor-blue/40" size={24} />
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full pl-20 pr-8 py-6 rounded-[32px] bg-white shadow-xl shadow-lacnor-blue/5 border-none focus:ring-2 focus:ring-lacnor-yellow text-xl font-bold text-lacnor-blue placeholder:text-lacnor-blue/20"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl shadow-lacnor-blue/5"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-lacnor-bg/50 transition-colors"
              >
                <span className="text-xl md:text-2xl font-display font-black text-lacnor-blue pr-8">
                  {faq.question}
                </span>
                <div className={`shrink-0 p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-lacnor-yellow text-lacnor-blue rotate-180' : 'bg-lacnor-bg text-lacnor-blue'}`}>
                  {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 pt-0 text-lg text-lacnor-text/60 leading-relaxed border-t border-lacnor-blue/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-24 p-12 rounded-[40px] bg-lacnor-blue text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-lacnor-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-lacnor-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10">
            <HelpCircle size={48} className="text-lacnor-yellow mx-auto mb-6" />
            <h2 className="text-3xl font-display font-black mb-4">Still have questions?</h2>
            <p className="text-lg text-white/70 mb-10">
              Our customer support team is always here to help you.
            </p>
            <button className="btn-secondary px-12 py-4">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
