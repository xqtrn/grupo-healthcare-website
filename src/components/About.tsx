'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Users, Sparkles, TrendingUp, MapPin } from 'lucide-react';

const timeline = [
  { year: '2004', title: 'Fundación', description: 'Iniciamos con la visión de transformar la atención médica en México.' },
  { year: '2010', title: 'Expansión', description: 'Ampliamos nuestros servicios a nivel nacional.' },
  { year: '2020', title: 'Innovación Digital', description: 'Lanzamiento de nuestra plataforma digital para profesionales.' },
  { year: 'Hoy', title: 'Líderes en Innovación', description: 'Referentes en servicios médico-hospitalarios.' },
];

const values = [
  {
    icon: Heart,
    title: 'Compromiso con el Paciente',
    description: 'Cada individuo merece acceso a servicios de salud de alta calidad.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Innovación Constante',
    description: 'Desarrollo continuo de servicios médico-hospitalarios de vanguardia.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Comunidad Médica',
    description: 'Espacio para compartir, discutir y contribuir con la comunidad de doctores.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Calidad y Transparencia',
    description: 'Aseguramos el suministro brindando seguridad, transparencia y calidad.',
    color: 'from-teal-500 to-emerald-500',
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
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Más de <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">20 Años</span> Cuidando tu Salud
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Grupo Health Care fue creado con el propósito de promover la cultura de la salud
            y su valor intrínseco en la formación de una sociedad productiva.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Timeline - Modern Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Nuestra Historia</h3>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-blue-500" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.3 + index * 0.15,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="relative pl-10"
                    >
                      {/* Circle Dot with pulse animation */}
                      <motion.div
                        className="absolute left-0 top-1 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full shadow-lg border-4 border-white"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 300 }}
                      />

                      {/* Content */}
                      <div>
                        <motion.span
                          className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-bold mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.year}
                        </motion.span>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Location Card - Separate Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="text-white">
                  <h4 className="text-xl font-bold">Ciudad de México</h4>
                  <p className="text-white/80 text-sm">Sede Principal • Polanco</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Especializados en el desarrollo e innovación de servicios médico-hospitalarios,
                siempre buscando el beneficio del paciente. Aseguramos el suministro brindando
                seguridad, transparencia y calidad en cada servicio que ofrecemos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser el referente nacional en innovación de servicios de salud, creando un espacio
                donde cada individuo tenga acceso a servicios de salud de alta calidad, promoviendo
                una cultura de bienestar en toda la sociedad mexicana.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-1">CDMX</div>
                <div className="text-sm text-gray-600">Sede principal</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-default"
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
