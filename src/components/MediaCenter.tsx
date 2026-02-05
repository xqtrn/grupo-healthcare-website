'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, ExternalLink, Youtube, Facebook, Instagram, ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';

// All YouTube Videos from Grupo Health Care channel
const videos = [
  { id: '3cOPOPIAKH8', title: 'Salud y Bienestar', category: 'Salud General' },
  { id: '9DB7YViWEd0', title: 'Cuidado de la Salud', category: 'Prevención' },
  { id: '-Q5rk90Ux-U', title: 'Información Médica', category: 'Educación' },
  { id: '-VAMAKkR--4', title: 'Consejos de Salud', category: 'Prevención' },
  { id: '0BXlwv72h9w', title: 'Atención Médica', category: 'Servicios' },
  { id: 'AVtfX2D2Kqk', title: 'Tratamientos Médicos', category: 'Tratamiento' },
  { id: 'Ccpj1suIQRI', title: 'Salud Preventiva', category: 'Prevención' },
  { id: 'Cr9zYKXqM08', title: 'Bienestar Integral', category: 'Bienestar' },
  { id: 'D33JyJtMo5A', title: 'Cuidados Especiales', category: 'Especialidades' },
  { id: 'Mqrk3QaZkYM', title: 'Salud Familiar', category: 'Familia' },
  { id: 'Qg2j6nv6w7o', title: 'Medicina Preventiva', category: 'Prevención' },
  { id: 'VOfMnKk2gpE', title: 'Consejos Médicos', category: 'Educación' },
  { id: 'YBwiASdX_tY', title: 'Vida Saludable', category: 'Bienestar' },
  { id: 'bU6QsI5a_Wk', title: 'Atención Especializada', category: 'Especialidades' },
  { id: 'bbAbjOOqrUY', title: 'Salud Mental', category: 'Psicología' },
  { id: 'ev7UPQHdDoU', title: 'Nutrición y Salud', category: 'Nutrición' },
  { id: 'f22ZepMZeFU', title: 'Ejercicio y Salud', category: 'Fitness' },
  { id: 'guWW-958vZA', title: 'Prevención de Enfermedades', category: 'Prevención' },
  { id: 'jCFNOVD-NKA', title: 'Cuidado Personal', category: 'Bienestar' },
  { id: 'jCNEWohjSl0', title: 'Medicina Moderna', category: 'Innovación' },
  { id: 'k8wcrDCWuHM', title: 'Tratamientos Avanzados', category: 'Tratamiento' },
  { id: 'oW_0si_Gcz0', title: 'Salud Cardiovascular', category: 'Cardiología' },
  { id: 'ownnYDzfUvU', title: 'Sistema Inmunológico', category: 'Inmunología' },
  { id: 'pafWswAX4PU', title: 'Salud Digestiva', category: 'Gastroenterología' },
  { id: 'uST1QiXVpB0', title: 'Cuidado de la Piel', category: 'Dermatología' },
  { id: 'ulWuqYUfaYs', title: 'Salud Ósea', category: 'Traumatología' },
  { id: '-XNxII9UHYY', title: 'Rehabilitación', category: 'Rehabilitación' },
  { id: '2ssWRukDCIY', title: 'Medicina Deportiva', category: 'Deportes' },
  { id: '4NZA9W4e3_o', title: 'Salud Respiratoria', category: 'Neumología' },
  { id: '4dwFR0evEFQ', title: 'Control de Peso', category: 'Nutrición' },
  { id: '6MQSbx5ykOc', title: 'Diabetes', category: 'Endocrinología' },
  { id: 'C53pf5LiNdE', title: 'Hipertensión', category: 'Cardiología' },
  { id: 'M2UvCM2ytYw', title: 'Colesterol', category: 'Cardiología' },
  { id: 'OK1GfKzLvsA', title: 'Artritis', category: 'Reumatología' },
  { id: 'PI0EoxuHzj4', title: 'Osteoporosis', category: 'Reumatología' },
  { id: 'RcfpC72I9VI', title: 'Alergias', category: 'Alergología' },
  { id: 'Sx4whxWX4gE', title: 'Insomnio', category: 'Neurología' },
  { id: 'WEZgNEhNcWY', title: 'Estrés', category: 'Psicología' },
  { id: '_TwQmmmSrqk', title: 'Ansiedad', category: 'Psicología' },
  { id: 'bUjymK1ld_c', title: 'Depresión', category: 'Psicología' },
  { id: 'bcI0oAOCVtA', title: 'Migraña', category: 'Neurología' },
  { id: 'butIRLdHOi0', title: 'Dolor de Espalda', category: 'Traumatología' },
  { id: 'hqP3dvMYrMw', title: 'Lesiones Deportivas', category: 'Deportes' },
  { id: 'izDITQN0ZNE', title: 'Recuperación Postoperatoria', category: 'Rehabilitación' },
  { id: 'nnbG0GW8k4s', title: 'Cuidado del Corazón', category: 'Cardiología' },
  { id: 'rr6JsZYkto4', title: 'Salud Renal', category: 'Nefrología' },
  { id: 'vzKbDFhY37Y', title: 'Salud Hepática', category: 'Hepatología' },
  { id: 'zhFWtFIBYm8', title: 'Tiroides', category: 'Endocrinología' },
  { id: 'tZpeFtaJ4r4', title: 'Menopausia', category: 'Ginecología' },
  { id: 'u042rBmeQZg', title: 'Salud Masculina', category: 'Urología' },
  { id: '-Crk-NucEZ8', title: 'Salud Femenina', category: 'Ginecología' },
  { id: '-__pAD9epgc', title: 'Pediatría', category: 'Pediatría' },
  { id: '-lAmuosz-Uc', title: 'Geriatría', category: 'Geriatría' },
  { id: '1h9phfUbrL0', title: 'Vacunación', category: 'Prevención' },
  { id: '2Nfv3EnYo0o', title: 'Check-up Médico', category: 'Prevención' },
  { id: '57z_0I3cYzU', title: 'Exámenes de Laboratorio', category: 'Diagnóstico' },
  { id: '7TXoSbDktNM', title: 'Estudios de Imagen', category: 'Diagnóstico' },
  { id: '7Yz3bBqIvd0', title: 'Telemedicina', category: 'Innovación' },
  { id: '8tbwXUCkRlk', title: 'Medicina Personalizada', category: 'Innovación' },
  { id: 'BbZLBzD9HjQ', title: 'Tecnología Médica', category: 'Innovación' },
  { id: 'CaTNWYJ6TS0', title: 'Cirugía Mínimamente Invasiva', category: 'Cirugía' },
  { id: 'CzcluGV8lBg', title: 'Procedimientos Ambulatorios', category: 'Servicios' },
  { id: 'EjPxHFnX9Q4', title: 'Urgencias Médicas', category: 'Urgencias' },
  { id: 'G3I6jtT6U6k', title: 'Primeros Auxilios', category: 'Urgencias' },
  { id: 'Ic5uJe7R1tk', title: 'Signos de Alerta', category: 'Prevención' },
  { id: 'K-3mkbzT6mc', title: 'Medicamentos', category: 'Farmacología' },
  { id: 'Xz5sTpDDX_8', title: 'Efectos Secundarios', category: 'Farmacología' },
  { id: 'cOjqXVZHWa8', title: 'Interacciones Medicamentosas', category: 'Farmacología' },
  { id: 'h6rCAFjtzGg', title: 'Suplementos', category: 'Nutrición' },
  { id: 's4aKwo5PVko', title: 'Vitaminas', category: 'Nutrición' },
  { id: 'ulfy7UCgQ7s', title: 'Minerales', category: 'Nutrición' },
  { id: '0jRp9kWogHI', title: 'Dieta Balanceada', category: 'Nutrición' },
  { id: 'CnEjsyF5NfA', title: 'Hidratación', category: 'Bienestar' },
  { id: 'ERTTWioWkGs', title: 'Sueño Saludable', category: 'Bienestar' },
  { id: 'GgXazgMJ9iM', title: 'Rutinas de Ejercicio', category: 'Fitness' },
  { id: 'aLtICJ-zYSc', title: 'Yoga y Meditación', category: 'Bienestar' },
  { id: 'jxJz8ciYjmM', title: 'Mindfulness', category: 'Psicología' },
  { id: 'vfMHTaPilVY', title: 'Manejo del Dolor', category: 'Tratamiento' },
  { id: 'yqQqljXKThc', title: 'Terapias Alternativas', category: 'Tratamiento' },
  { id: '1WjppP1VT8I', title: 'Acupuntura', category: 'Tratamiento' },
  { id: '5YeuTo4ktWI', title: 'Fisioterapia', category: 'Rehabilitación' },
  { id: '9saE_cE7M-M', title: 'Terapia Ocupacional', category: 'Rehabilitación' },
  { id: 'EvGa43D6l-E', title: 'Logopedia', category: 'Rehabilitación' },
  { id: 'K76dFw7GTVY', title: 'Psicoterapia', category: 'Psicología' },
  { id: 'NpZ9TZ0YW2s', title: 'Apoyo Emocional', category: 'Psicología' },
  { id: 'cfKGU2mg9pM', title: 'Grupos de Apoyo', category: 'Comunidad' },
  { id: 'l8AqAmyAPBo', title: 'Cuidadores', category: 'Familia' },
  { id: 'oOk2H2LL1ZE', title: 'Calidad de Vida', category: 'Bienestar' },
];

// Get unique categories
const categories = ['Todos', ...Array.from(new Set(videos.map(v => v.category)))];

const socialLinks = [
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@grupohealthcare', color: 'bg-red-600 hover:bg-red-700' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/GrupoHealthCareMX', color: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/grupo.healthcare', color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' },
];

const VIDEOS_PER_PAGE = 12;

export default function MediaCenter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter videos by category
  const filteredVideos = selectedCategory === 'Todos'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const paginatedVideos = filteredVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  // Reset page when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="media" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Centro de Medios
          </span>
          <h2 className="section-heading">
            <span className="gradient-text">Videos</span> Educativos
          </h2>
          <p className="section-subheading">
            Más de {videos.length} videos educativos sobre salud y bienestar de nuestro canal de YouTube.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base`}
            >
              <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">{social.name}</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 hidden xs:block" />
            </a>
          ))}
        </motion.div>

        {/* Video Player Modal */}
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-lg font-medium"
              >
                Cerrar ✕
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}

        {/* Filters and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Category Filter - Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-2 flex-nowrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* View Toggle & Count */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-600">
              {filteredVideos.length} videos encontrados
            </span>
            <div className="flex bg-gray-100 rounded-xl p-1.5 shadow-inner">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
          }
        >
          {paginatedVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (index % 8) }}
              className={`group cursor-pointer ${
                viewMode === 'list'
                  ? 'flex gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4'
                  : ''
              }`}
              onClick={() => setActiveVideo(video.id)}
            >
              {/* Thumbnail */}
              <div className={`relative overflow-hidden rounded-xl ${
                viewMode === 'list' ? 'w-48 flex-shrink-0' : ''
              }`}>
                <div className="aspect-video bg-gray-200">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
                {/* Category Badge */}
                <span className="absolute top-2 left-2 px-2 py-1 bg-black/70 text-white text-xs rounded-md">
                  {video.category}
                </span>
              </div>

              {/* Info */}
              <div className={viewMode === 'list' ? 'flex-1' : 'mt-3'}>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Grupo Health Care
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => {
                if (totalPages <= 7) return true;
                if (page === 1 || page === totalPages) return true;
                if (Math.abs(page - currentPage) <= 1) return true;
                return false;
              })
              .map((page, index, arr) => {
                const showEllipsis = index > 0 && page - arr[index - 1] > 1;
                return (
                  <span key={page} className="flex items-center">
                    {showEllipsis && <span className="px-2 text-gray-400">...</span>}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all ${
                        currentPage === page
                          ? 'bg-primary-500 text-white shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  </span>
                );
              })}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 lg:p-12 text-center">
            <Instagram className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Síguenos en Instagram
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Descubre contenido exclusivo, historias inspiradoras y las últimas actualizaciones
              de Grupo Health Care en nuestra cuenta de Instagram.
            </p>
            <a
              href="https://www.instagram.com/grupo.healthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              @grupo.healthcare
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
