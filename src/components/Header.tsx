'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Media', href: '#media' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+525610700648" className="flex items-center hover:text-primary-200 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +52 56 1070 0648
              </a>
              <a href="mailto:contacto@ghc.com.mx" className="flex items-center hover:text-primary-200 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                contacto@ghc.com.mx
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/GrupoHealthCareMX" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200 transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/grupo.healthcare" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200 transition-colors">
                Instagram
              </a>
              <a href="https://www.youtube.com/@grupohealthcare" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200 transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeb6f1octKPxQ5uBOjO2CsJq2j_08YASdGA&s"
                alt="Grupo Health Care Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-display font-bold text-secondary-900">
                  Grupo Health Care
                </span>
                <span className="block text-xs text-primary-600 font-medium">
                  Más que Salud
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
                </a>
              ))}
              <a
                href="#contacto"
                className="btn-primary"
              >
                Contáctanos
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-secondary-700" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t">
                  <a href="tel:+525610700648" className="flex items-center py-2 text-secondary-600">
                    <Phone className="w-4 h-4 mr-2" />
                    +52 56 1070 0648
                  </a>
                  <a href="mailto:contacto@ghc.com.mx" className="flex items-center py-2 text-secondary-600">
                    <Mail className="w-4 h-4 mr-2" />
                    contacto@ghc.com.mx
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
