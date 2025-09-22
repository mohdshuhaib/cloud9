// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image - Replace with your own */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/gallery5.png')" }}></div>

      <motion.div
        className="relative z-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="gold-gradient-text">حيث يلتقي الأناقة بالتميز</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-text-secondary">
          في قلب رأس الخور، دبي، نقدم تجربة حلاقة لا مثيل لها تتجاوز التوقعات.
        </p>
        <motion.a
          href="#contact"
          className="mt-8 inline-block bg-accent-gold text-background-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-accent-gold-hover transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          احجز موعدك الآن
        </motion.a>
      </motion.div>
    </section>
  );
}