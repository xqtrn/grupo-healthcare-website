'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Users, Award } from 'lucide-react';

const stats = [
  { icon: Heart, value: '20+', label: 'Años de Experiencia' },
  { icon: Users, value: '10K+', label: 'Profesionales Médicos' },
  { icon: Shield, value: '100%', label: 'Compromiso' },
  { icon: Award, value: '#1', label: 'En Innovación' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - Dark teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d3d] via-[#063030] to-[#042525]" />
      <div className="absolute inset-0 animated-gradient pattern-overlay opacity-50" />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl floating" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl floating-delayed" />

      {/* Medical Cross Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="medical-cross" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect x="20" y="10" width="10" height="30" fill="white" />
            <rect x="10" y="20" width="30" height="10" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#medical-cross)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              Más de 20 años de excelencia en salud
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Más que Salud,{' '}
              <span className="text-primary-200">
                Tu Bienestar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Especializados en el desarrollo e innovación de servicios médico-hospitalarios,
              siempre buscando el beneficio del paciente. Promovemos una cultura de salud
              con servicios de alta calidad para cada individuo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#servicios"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Nuestros Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contáctanos
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <stat.icon className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
