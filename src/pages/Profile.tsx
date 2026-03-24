import React from 'react';
import { motion } from 'motion/react';
import { User, Settings, ShoppingBag, Heart, LogOut, ChevronRight, MapPin, CreditCard } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-lacnor-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-lacnor-blue/5 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-lacnor-blue flex items-center justify-center text-white font-black text-5xl">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 p-3 bg-lacnor-yellow text-lacnor-blue rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Settings size={20} />
                </button>
              </div>
              <h2 className="text-2xl font-display font-black text-lacnor-blue mb-2">John Doe</h2>
              <p className="text-sm text-lacnor-text/40 font-bold uppercase tracking-widest mb-8">Member since 2023</p>
              
              <button className="flex items-center justify-center gap-3 w-full py-4 text-red-500 font-black uppercase tracking-widest text-sm hover:bg-red-50 rounded-full transition-colors">
                <LogOut size={20} />
                Log Out
              </button>
            </div>

            <nav className="bg-white rounded-[40px] p-6 shadow-xl shadow-lacnor-blue/5">
              {[
                { icon: <ShoppingBag size={20} />, label: 'My Orders', active: true },
                { icon: <Heart size={20} />, label: 'Wishlist', active: false },
                { icon: <MapPin size={20} />, label: 'Addresses', active: false },
                { icon: <CreditCard size={20} />, label: 'Payments', active: false },
                { icon: <Settings size={20} />, label: 'Settings', active: false },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-between w-full p-5 rounded-3xl transition-all ${
                    item.active ? 'bg-lacnor-blue text-white shadow-lg shadow-lacnor-blue/20' : 'text-lacnor-blue hover:bg-lacnor-bg'
                  }`}
                >
                  <div className="flex items-center gap-4 font-black uppercase tracking-widest text-sm">
                    {item.icon}
                    {item.label}
                  </div>
                  <ChevronRight size={18} className={item.active ? 'opacity-100' : 'opacity-20'} />
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[40px] p-12 shadow-xl shadow-lacnor-blue/5"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-display font-black text-lacnor-blue uppercase tracking-wider">Recent <span className="text-lacnor-yellow">Orders</span></h2>
                <button className="text-lacnor-blue font-bold hover:text-lacnor-yellow transition-colors">View All</button>
              </div>

              <div className="space-y-6">
                {[
                  { id: '#LC-9821', date: 'Oct 12, 2023', status: 'Delivered', total: 'AED 145.50' },
                  { id: '#LC-9754', date: 'Sep 28, 2023', status: 'Processing', total: 'AED 89.00' },
                ].map((order, index) => (
                  <div key={index} className="p-8 rounded-[32px] bg-lacnor-bg flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-white rounded-2xl text-lacnor-blue">
                        <ShoppingBag size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-black text-lacnor-blue mb-1">{order.id}</h3>
                        <p className="text-sm text-lacnor-text/40 font-bold uppercase tracking-widest">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-12">
                      <div className="text-right">
                        <div className="text-lg font-black text-lacnor-blue mb-1">{order.total}</div>
                        <div className={`text-xs font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'text-green-500' : 'text-lacnor-yellow'}`}>
                          {order.status}
                        </div>
                      </div>
                      <button className="p-4 rounded-full bg-white text-lacnor-blue hover:text-lacnor-yellow shadow-lg transition-all hover:scale-110">
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[40px] p-12 shadow-xl shadow-lacnor-blue/5"
              >
                <h3 className="text-2xl font-display font-black text-lacnor-blue mb-8 uppercase tracking-wider">Default <span className="text-lacnor-yellow">Address</span></h3>
                <div className="space-y-4 text-lg text-lacnor-text/60 font-bold">
                  <p className="text-lacnor-blue">John Doe</p>
                  <p>Industrial Area 1, Sharjah</p>
                  <p>United Arab Emirates</p>
                  <p>+971 50 123 4567</p>
                </div>
                <button className="mt-8 text-lacnor-blue font-black uppercase tracking-widest text-sm hover:text-lacnor-yellow transition-colors">Edit Address</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[40px] p-12 shadow-xl shadow-lacnor-blue/5"
              >
                <h3 className="text-2xl font-display font-black text-lacnor-blue mb-8 uppercase tracking-wider">Payment <span className="text-lacnor-yellow">Method</span></h3>
                <div className="flex items-center gap-6 p-6 rounded-3xl bg-lacnor-bg">
                  <div className="p-4 bg-white rounded-2xl text-lacnor-blue">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-lacnor-blue">Visa ending in 4242</p>
                    <p className="text-sm text-lacnor-text/40 font-bold uppercase tracking-widest">Expires 12/25</p>
                  </div>
                </div>
                <button className="mt-8 text-lacnor-blue font-black uppercase tracking-widest text-sm hover:text-lacnor-yellow transition-colors">Manage Payments</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
