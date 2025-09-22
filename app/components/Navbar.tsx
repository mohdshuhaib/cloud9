// app/components/Navbar.tsx
'use client'; // Required for components with user interaction like useState

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For menu icons, run: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'من نحن', href: '#about' },
    { name: 'أعمالنا', href: '#gallery' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider text-accent-gold">
          كلاود9
        </h1>

        {/* Desktop Menu */}
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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