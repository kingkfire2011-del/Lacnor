import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Zap, Heart, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-lacnor-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-display font-black text-lacnor-blue mb-8"
          >
            Nurturing <span className="text-lacnor-yellow">Health</span> Since 1978
          </motion.h1>
          <p className="text-xl text-lacnor-text/60 max-w-3xl mx-auto leading-relaxed">
            From our humble beginnings in Sharjah, UAE, Lacnor has grown to become a household name, synonymous with quality, health, and natural goodness.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl shadow-lacnor-blue/10"
          >
            <img
              src="https://picsum.photos/seed/lacnor-story/1200/800"
              alt="Lacnor Story"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-black text-lacnor-blue mb-8 uppercase tracking-wider">
              Our <span className="text-lacnor-yellow">Journey</span>
            </h2>
            <div className="space-y-6 text-lg text-lacnor-text/70 leading-relaxed">
              <p>
                Lacnor is a part of NFPC (National Food Products Company), one of the largest food and beverage companies in the Middle East. Our journey began with a simple mission: to provide the freshest, most nutritious dairy and juice products to the people of the UAE.
              </p>
              <p>
                Over the decades, we have expanded our product range, incorporating the latest technology and sustainable practices to ensure that every product that reaches your table is of the highest standard.
              </p>
              <p>
                Today, Lacnor is not just a brand; it's a commitment to health and happiness for millions of families across the region and beyond.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black text-lacnor-blue mb-4 uppercase tracking-wider">
              Our <span className="text-lacnor-yellow">Core Values</span>
            </h2>
            <p className="text-lg text-lacnor-text/60">The principles that guide everything we do at Lacnor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="text-lacnor-yellow" size={40} />,
                title: 'Quality First',
                desc: 'We never compromise on the quality of our ingredients or our processes.',
              },
              {
                icon: <ShieldCheck className="text-lacnor-yellow" size={40} />,
                title: 'Health Focused',
                desc: 'Our products are designed to support a healthy and active lifestyle.',
              },
              {
                icon: <Zap className="text-lacnor-yellow" size={40} />,
                title: 'Innovation',
                desc: 'We constantly seek new ways to improve our products and sustainability.',
              },
              {
                icon: <Heart className="text-lacnor-yellow" size={40} />,
                title: 'Community',
                desc: 'We are proud to be a part of the local community and support its growth.',
              },
              {
                icon: <Globe className="text-lacnor-yellow" size={40} />,
                title: 'Sustainability',
                desc: 'We are committed to reducing our environmental footprint for a better future.',
              },
              {
                icon: <Users className="text-lacnor-yellow" size={40} />,
                title: 'Family',
                desc: 'We treat our customers and employees like family, with respect and care.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[32px] bg-white shadow-xl shadow-lacnor-blue/5 text-center"
              >
                <div className="mb-6 inline-flex p-4 bg-lacnor-bg rounded-2xl">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-black text-lacnor-blue mb-4">{value.title}</h3>
                <p className="text-lacnor-text/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-lacnor-blue rounded-[40px] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-lacnor-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-lacnor-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Years of Heritage', value: '45+' },
              { label: 'Products', value: '150+' },
              { label: 'Countries', value: '30+' },
              { label: 'Happy Families', value: '1M+' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-display font-black text-lacnor-yellow mb-2">{stat.value}</div>
                <div className="text-sm font-black uppercase tracking-widest text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
