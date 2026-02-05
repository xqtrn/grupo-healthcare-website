'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Users, Award } from 'lucide-react';

const stats = [
  { icon: Heart, value: '20+', label: 'Años de Experiencia', color: 'from-rose-500 to-pink-500' },
  { icon: Users, value: '10K+', label: 'Profesionales Médicos', color: 'from-blue-500 to-cyan-500' },
  { icon: Shield, value: '100%', label: 'Compromiso', color: 'from-teal-500 to-emerald-500' },
  { icon: Award, value: '#1', label: 'En Innovación', color: 'from-amber-500 to-orange-500' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600" />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Decorative Blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl"
        animate={floatAnimation}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 md:w-80 md:h-80 bg-cyan-300/30 rounded-full blur-3xl"
        animate={{
          ...floatAnimation,
          y: [10, -10, 10],
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6 border border-white/30"
            >
              Más de 20 años de excelencia en salud
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-white"
            >
              Más que Salud,{' '}
              <motion.span
                className="text-cyan-200 inline-block"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(165, 243, 252, 0)',
                    '0 0 40px rgba(165, 243, 252, 0.3)',
                    '0 0 20px rgba(165, 243, 252, 0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Tu Bienestar
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl"
            >
              Especializados en el desarrollo e innovación de servicios médico-hospitalarios,
              siempre buscando el beneficio del paciente. Promovemos una cultura de salud
              con servicios de alta calidad para cada individuo.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#servicios"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Nuestros Servicios
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#contacto"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-semibold rounded-full"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contáctanos
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats Cards - Modern White Cards with Animations */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-xl border border-white/50 cursor-default"
              >
                <motion.div
                  className={`w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
