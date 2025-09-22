// app/components/About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-light">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center overflow-x-hidden">
        <motion.div
          // 1. Animation updated for LTR: slides in from the left
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* 2. Translated heading with new font class */}
          <h3 className="text-4xl font-bold mb-4 font-heading">
            <span className="gold-gradient-text">About Cloud9</span>
          </h3>
          {/* 3. Translated paragraph */}
          <p className="text-text-secondary leading-relaxed">
            Founded on the principles of precision, artistry, and luxury, Cloud9 is more than a barbershop—it's a destination for the modern gentleman. Our team of expert barbers is dedicated to providing an exceptional service that makes every visit a unique and revitalizing experience.
          </p>
        </motion.div>

        <motion.div
          className="relative h-80 w-full rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/hero1.png"
            // 4. Translated alt text
            alt="Interior of the Cloud9 Barbershop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}