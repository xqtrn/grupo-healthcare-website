'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Users, Sparkles, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compromiso con el Paciente',
    description: 'Cada individuo merece acceso a servicios de salud de alta calidad.',
  },
  {
    icon: Sparkles,
    title: 'Innovación Constante',
    description: 'Desarrollo continuo de servicios médico-hospitalarios de vanguardia.',
  },
  {
    icon: Users,
    title: 'Comunidad Médica',
    description: 'Espacio para compartir, discutir y contribuir con la comunidad de doctores.',
  },
  {
    icon: TrendingUp,
    title: 'Calidad y Transparencia',
    description: 'Aseguramos el suministro brindando seguridad, transparencia y calidad.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Sobre Nosotros
          </span>
          <h2 className="section-heading">
            Más de <span className="gradient-text">20 Años</span> Cuidando tu Salud
          </h2>
          <p className="section-subheading">
            Grupo Health Care fue creado con el propósito de promover la cultura de la salud
            y su valor intrínseco en la formación de una sociedad productiva.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image/Infographic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Nuestra Historia</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">2004</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Fundación</h4>
                      <p className="text-white/80 text-sm">Iniciamos con la visión de transformar la atención médica en México.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">2010</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Expansión</h4>
                      <p className="text-white/80 text-sm">Ampliamos nuestros servicios a nivel nacional.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">2020</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Innovación Digital</h4>
                      <p className="text-white/80 text-sm">Lanzamiento de nuestra plataforma digital para profesionales de la salud.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">Hoy</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Líderes en Innovación</h4>
                      <p className="text-white/80 text-sm">Continuamos siendo referentes en servicios médico-hospitalarios.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">Ciudad de México</div>
                  <div className="text-secondary-600 text-sm">Sede Principal</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900">Nuestra Misión</h3>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                Especializados en el desarrollo e innovación de servicios médico-hospitalarios,
                siempre buscando el beneficio del paciente. Aseguramos el suministro brindando
                seguridad, transparencia y calidad en cada servicio que ofrecemos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-accent-500">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900">Nuestra Visión</h3>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                Ser el referente nacional en innovación de servicios de salud, creando un espacio
                donde cada individuo tenga acceso a servicios de salud de alta calidad, promoviendo
                una cultura de bienestar en toda la sociedad mexicana.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-secondary-900 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2">{value.title}</h4>
                <p className="text-secondary-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
