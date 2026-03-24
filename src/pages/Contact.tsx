import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-lacnor-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-display font-black text-lacnor-blue mb-8"
          >
            Get in <span className="text-lacnor-yellow">Touch</span>
          </motion.h1>
          <p className="text-xl text-lacnor-text/60 max-w-3xl mx-auto leading-relaxed">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {[
              {
                icon: <Phone className="text-lacnor-yellow" size={32} />,
                title: 'Call Us',
                desc: 'Our customer support team is available 24/7.',
                info: '+971 6 533 1111',
              },
              {
                icon: <Mail className="text-lacnor-yellow" size={32} />,
                title: 'Email Us',
                desc: 'We usually respond within 24 hours.',
                info: 'info@lacnor.com',
              },
              {
                icon: <MapPin className="text-lacnor-yellow" size={32} />,
                title: 'Visit Us',
                desc: 'Headquarters located in Sharjah, UAE.',
                info: 'Industrial Area 1, Sharjah, United Arab Emirates',
              },
              {
                icon: <Clock className="text-lacnor-yellow" size={32} />,
                title: 'Working Hours',
                desc: 'Our office hours are from 9:00 AM to 6:00 PM.',
                info: 'Monday - Friday',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[32px] bg-white shadow-xl shadow-lacnor-blue/5 flex items-start gap-6"
              >
                <div className="p-4 bg-lacnor-bg rounded-2xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-black text-lacnor-blue mb-2">{item.title}</h3>
                  <p className="text-sm text-lacnor-text/40 mb-2 font-bold uppercase tracking-widest">{item.desc}</p>
                  <p className="text-lg text-lacnor-blue font-black">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-12 shadow-2xl shadow-lacnor-blue/10"
            >
              <h2 className="text-4xl font-display font-black text-lacnor-blue mb-8 uppercase tracking-wider">
                Send a <span className="text-lacnor-yellow">Message</span>
              </h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-lacnor-blue ml-6">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-8 py-4 rounded-full bg-lacnor-bg border-none focus:ring-2 focus:ring-lacnor-yellow text-lg font-bold text-lacnor-blue placeholder:text-lacnor-blue/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-lacnor-blue ml-6">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-8 py-4 rounded-full bg-lacnor-bg border-none focus:ring-2 focus:ring-lacnor-yellow text-lg font-bold text-lacnor-blue placeholder:text-lacnor-blue/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-lacnor-blue ml-6">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-8 py-4 rounded-full bg-lacnor-bg border-none focus:ring-2 focus:ring-lacnor-yellow text-lg font-bold text-lacnor-blue placeholder:text-lacnor-blue/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-lacnor-blue ml-6">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full px-8 py-6 rounded-[32px] bg-lacnor-bg border-none focus:ring-2 focus:ring-lacnor-yellow text-lg font-bold text-lacnor-blue placeholder:text-lacnor-blue/20 resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                  Send Message
                  <Send size={24} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
