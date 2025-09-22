// app/components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* 1. Translated heading with new font */}
          <h3 className="text-4xl font-bold font-heading">
            <span className="gold-gradient-text">Get In Touch</span>
          </h3>
          {/* 2. Translated subheading */}
          <p className="text-text-secondary mt-2">
            Have a question or want to book an appointment? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* 3. Removed 'space-x-reverse' for LTR layout */}
            <div className="flex items-start space-x-4">
              <MapPin className="text-accent-gold h-8 w-8 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Our Location</h4>
                <p className="text-text-secondary">
                  Ras Al Khor Industrial Area, <br />
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-accent-gold h-6 w-6" />
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <a
                  href="tel:+971000000000"
                  className="text-text-secondary hover:text-accent-gold transition-colors"
                >
                  +971 00 000 0000
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-accent-gold h-6 w-6" />
              <div>
                <h4 className="font-bold text-lg">Email</h4>
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
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/map.png')"}}>
              <div className="w-full h-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                {/* 4. Translated map text */}
                <p className="text-white text-lg font-semibold">Map Will Be Displayed Here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}