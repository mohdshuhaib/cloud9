// app/components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold">
            <span className="gold-gradient-text">تواصل معنا</span>
          </h3>
          <p className="text-text-secondary mt-2">
            هل لديك سؤال أو ترغب في الحجز؟ نحن هنا للمساعدة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 overflow-x-hidden">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-start space-x-4 space-x-reverse">
              <MapPin className="text-accent-gold h-8 w-8 mt-1" />
              <div>
                <h4 className="font-bold text-lg">موقعنا</h4>
                <p className="text-text-secondary">
                  المنطقة الصناعية في رأس الخور، <br />
                  دبي، الإمارات العربية المتحدة
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Phone className="text-accent-gold h-6 w-6" />
              <div>
                <h4 className="font-bold text-lg">الهاتف</h4>
                <a
                  href="tel:+971000000000"
                  className="text-text-secondary hover:text-accent-gold transition-colors"
                >
                  +971 00 000 0000
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Mail className="text-accent-gold h-6 w-6" />
              <div>
                <h4 className="font-bold text-lg">البريد الإلكتروني</h4>
                <a
                  href="mailto:contact@cloud9.ae"
                  className="text-text-secondary hover:text-accent-gold transition-colors"
                >
                  contact@cloud9.ae
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-80 w-full bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* This is a placeholder for your map.
              For a real project, you would use the Google Maps Embed API.
              Example: <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" ...></iframe>
              For this demo, we use a stylish placeholder.
            */}
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/map.png')"}}>
                <div className="w-full h-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">سيتم عرض الخريطة هنا</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}