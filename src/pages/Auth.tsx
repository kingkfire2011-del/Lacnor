import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pt-40 pb-24 bg-lacnor-bg min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[40px] p-12 shadow-2xl shadow-lacnor-blue/10 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lacnor-blue mb-8 text-white font-black text-3xl">
            L
          </div>
          
          <h1 className="text-4xl font-display font-black text-lacnor-blue mb-4">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-lg text-lacnor-text/60 mb-10">
            {isLogin ? 'Log in to your Lacnor account to continue.' : 'Join the Lacnor family for a healthier life.'}
          </p>

          <form className="space-y-6 text-left">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-lacnor-blue/40" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-16 pr-6 py-4 rounded-full bg-lacnor-bg border-none focus:ring-2 focus:ring-lacnor-yellow text-lg font-bold text-lacnor-blue placeholder:text-lacnor-blue/20"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-lacnor-blue/40" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-16 pr-6 py-4 rounded-full bg-lacnor-bg border-none focus:ring-2 focus:ring-lacnor-yellow text-lg font-bold text-lacnor-blue placeholder:text-lacnor-blue/20"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-lacnor-blue/40" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full pl-16 pr-16 py-4 rounded-full bg-lacnor-bg border-none focus:ring-2 focus:ring-lacnor-yellow text-lg font-bold text-lacnor-blue placeholder:text-lacnor-blue/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-lacnor-blue/40 hover:text-lacnor-blue transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-sm font-black text-lacnor-blue hover:text-lacnor-yellow transition-colors uppercase tracking-widest">
                  Forgot Password?
                </button>
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
              {isLogin ? 'Log In' : 'Sign Up'}
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-lacnor-blue/5">
            <p className="text-lg text-lacnor-text/60">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-black text-lacnor-blue hover:text-lacnor-yellow transition-colors uppercase tracking-widest text-sm"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
