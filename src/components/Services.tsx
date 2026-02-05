'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  Stethoscope,
  Pill,
  Smartphone,
  TrendingUp,
  Users,
  Shield,
  HeartPulse,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Hospitales',
    description: 'Desarrollo e innovación de servicios médico-hospitalarios de vanguardia para instituciones de salud.',
    features: ['Gestión integral', 'Optimización de recursos', 'Tecnología avanzada'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Stethoscope,
    title: 'Médicos',
    description: 'Plataforma especializada que conecta a profesionales de la salud con recursos y contenido de alta especialidad.',
    features: ['Contenido especializado', 'Red profesional', 'Actualización continua'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Pill,
    title: 'Industria Farmacéutica',
    description: 'Aliado eficiente para comunicar hallazgos y avances médicos con estrategias sólidas y éticas.',
    features: ['Estrategias de marketing', 'Comunicación ética', 'Estudios reconocidos'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Smartphone,
    title: 'App Móvil GHC',
    description: 'Aplicación que facilita procesos médico-hospitalarios y brinda contenido relevante a doctores.',
    features: ['Procesos ágiles', 'Contenido exclusivo', 'Acceso 24/7'],
    color: 'from-emerald-500 to-teal-500',
  },
];

const additionalServices = [
  { icon: TrendingUp, title: 'Marketing Médico', description: 'Estrategias digitales para profesionales de la salud' },
  { icon: Users, title: 'Capacitación', description: 'Programas de formación continua para personal médico' },
  { icon: Shield, title: 'Consultoría', description: 'Asesoría especializada en gestión hospitalaria' },
  { icon: HeartPulse, title: 'Telemedicina', description: 'Soluciones de atención médica a distancia' },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="py-24 bg-white">
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
            Nuestros Servicios
          </span>
          <h2 className="section-heading">
            Soluciones <span className="gradient-text">Integrales</span> de Salud
          </h2>
          <p className="section-subheading">
            Ofrecemos servicios especializados para hospitales, médicos e industria farmacéutica,
            siempre con el enfoque en la innovación y el beneficio del paciente.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-secondary-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
                  >
                    Más información
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Servicios Adicionales
            </h3>
            <p className="text-secondary-300 max-w-2xl mx-auto">
              Complementamos nuestra oferta con servicios especializados para el sector salud.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                <p className="text-secondary-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 mb-6 text-lg">
            ¿Interesado en nuestros servicios? Contáctanos para una consulta personalizada.
          </p>
          <a href="#contacto" className="btn-primary text-lg px-8 py-4">
            Solicitar Información
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
