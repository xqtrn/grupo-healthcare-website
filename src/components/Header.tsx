'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Only apply show/hide logic on mobile
      if (window.innerWidth < 1024) {
        if (currentScrollY < 100) {
          setIsMobileHeaderVisible(true);
        } else if (currentScrollY < lastScrollY.current) {
          setIsMobileHeaderVisible(true);
        } else if (currentScrollY > lastScrollY.current + 10) {
          setIsMobileHeaderVisible(false);
          setIsMobileMenuOpen(false);
        }

        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
          setIsMobileHeaderVisible(true);
        }, 1500);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
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
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isMobile && !isMobileHeaderVisible ? -100 : 0,
          opacity: isMobile && !isMobileHeaderVisible ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed lg:sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeb6f1octKPxQ5uBOjO2CsJq2j_08YASdGA&s"
                  alt="Grupo Health Care Logo"
                  width={48}
                  height={48}
                  className="h-9 sm:h-10 lg:h-12 w-auto"
                />
              </motion.div>
              <div>
                <span className="text-sm sm:text-lg lg:text-xl font-display font-bold text-secondary-900">
                  Grupo Health Care
                </span>
                <span className="block text-[10px] sm:text-xs text-primary-600 font-medium">
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
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-primary-500 text-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block py-3 px-4 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl font-medium transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="pt-4 border-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a href="tel:+525610700648" className="flex items-center py-2 text-secondary-600 hover:text-primary-600 transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    +52 56 1070 0648
                  </a>
                  <a href="mailto:contacto@ghc.com.mx" className="flex items-center py-2 text-secondary-600 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    contacto@ghc.com.mx
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header - only on mobile */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
