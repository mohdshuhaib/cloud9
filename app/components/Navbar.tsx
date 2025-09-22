// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Translate navigation links to English
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 2. Translate brand name */}
        <h1 className="text-2xl font-bold tracking-wider text-accent-gold font-heading">
          Cloud9
        </h1>

        {/* Desktop Menu - Note space-x is correct for LTR */}
        <div className="hidden md:flex space-x-8 lg:space-x-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-primary hover:text-accent-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-text-primary" /> : <Menu className="h-6 w-6 text-text-primary" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background-light">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-primary hover:text-accent-gold transition-colors duration-300 text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}