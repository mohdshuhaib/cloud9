// app/components/About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-light">
      {/* 👇 ADD overflow-x-hidden HERE 👇 */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: 50 }} // This was likely causing the overflow
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* ... content ... */}
          <h3 className="text-4xl font-bold mb-4">
            <span className="gold-gradient-text">عن كلاود9</span>
          </h3>
          <p className="text-text-secondary leading-relaxed">
            تأسس كلاود9 على مبدأ الدقة والفن والرفاهية. نحن لسنا مجرد صالون حلاقة، بل وجهة للرجل العصري الذي يقدر الجودة العالية والاهتمام بأدق التفاصيل. فريقنا من الخبراء مكرس لتقديم خدمة استثنائية تجعل كل زيارة تجربة فريدة من نوعها.
          </p>
        </motion.div>
        <motion.div
          className="relative h-80 w-full bg-gray-700 rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/hero1.png"
            alt="صالون كلاود9 من الداخل"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}