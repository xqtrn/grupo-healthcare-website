'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, ExternalLink, Youtube, Facebook, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

// YouTube Videos - based on Grupo Health Care channel
const videos = [
  {
    id: 'video1',
    title: 'Innovación en Servicios de Salud',
    description: 'Descubre cómo GHC está transformando la atención médica en México.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual videos
    category: 'Innovación',
  },
  {
    id: 'video2',
    title: 'Tecnología Médica Avanzada',
    description: 'Las últimas tecnologías en diagnóstico y tratamiento.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Tecnología',
  },
  {
    id: 'video3',
    title: 'Nuestro Compromiso con la Salud',
    description: 'Conoce la misión y valores de Grupo Health Care.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Institucional',
  },
];

// News/Posts based on social media
const news = [
  {
    id: 'news1',
    title: 'Nuevo Convenio con Hospitales Líderes',
    excerpt: 'Grupo Health Care firma alianza estratégica para expandir servicios de salud en la región centro del país.',
    date: '2024-01-15',
    category: 'Noticias',
  },
  {
    id: 'news2',
    title: 'Lanzamiento de Nueva Plataforma Digital',
    excerpt: 'Nuestra app móvil ahora disponible con nuevas funcionalidades para profesionales de la salud.',
    date: '2024-01-10',
    category: 'Tecnología',
  },
  {
    id: 'news3',
    title: 'Reconocimiento a la Excelencia en Salud',
    excerpt: 'GHC recibe premio por innovación en servicios médico-hospitalarios durante congreso nacional.',
    date: '2024-01-05',
    category: 'Premios',
  },
  {
    id: 'news4',
    title: 'Programa de Capacitación Médica 2024',
    excerpt: 'Iniciamos el nuevo año con un programa completo de formación para profesionales de la salud.',
    date: '2024-01-01',
    category: 'Educación',
  },
];

const socialLinks = [
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@grupohealthcare', color: 'bg-red-600 hover:bg-red-700' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/GrupoHealthCareMX', color: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/grupo.healthcare', color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' },
];

export default function MediaCenter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <section id="media" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Centro de Medios
          </span>
          <h2 className="section-heading">
            <span className="gradient-text">Contenido</span> y Noticias
          </h2>
          <p className="section-subheading">
            Mantente informado sobre las últimas novedades en salud y nuestras actividades.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-16"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              <social.icon className="w-5 h-5" />
              <span className="font-medium">{social.name}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-secondary-900 flex items-center">
                    <Youtube className="w-6 h-6 text-red-600 mr-2" />
                    Videos Recientes
                  </h3>
                  <a
                    href="https://www.youtube.com/@grupohealthcare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 flex items-center text-sm font-medium"
                  >
                    Ver todo
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-secondary-900">
                {activeVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-lg font-medium">Selecciona un video para reproducir</p>
                      <p className="text-white/70 text-sm mt-2">O visita nuestro canal de YouTube</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Thumbnails */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setCurrentVideoIndex(Math.max(0, currentVideoIndex - 1))}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    disabled={currentVideoIndex === 0}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex gap-4 transition-transform duration-300" style={{ transform: `translateX(-${currentVideoIndex * 33.333}%)` }}>
                      {videos.map((video) => (
                        <button
                          key={video.id}
                          onClick={() => setActiveVideo(video.youtubeId)}
                          className={`flex-shrink-0 w-1/3 group ${activeVideo === video.youtubeId ? 'ring-2 ring-primary-500' : ''} rounded-xl overflow-hidden`}
                        >
                          <div className="relative aspect-video bg-gray-200">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-primary-700/80 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="p-2 text-left">
                            <p className="text-sm font-medium text-secondary-900 line-clamp-1">{video.title}</p>
                            <span className="text-xs text-primary-600">{video.category}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentVideoIndex(Math.min(videos.length - 1, currentVideoIndex + 1))}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    disabled={currentVideoIndex >= videos.length - 1}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* News Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-secondary-900 flex items-center">
                  <Facebook className="w-6 h-6 text-blue-600 mr-2" />
                  Últimas Noticias
                </h3>
              </div>
              <div className="divide-y max-h-[500px] overflow-y-auto">
                {news.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                      <time className="text-xs text-secondary-400">
                        {new Date(item.date).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })}
                      </time>
                    </div>
                    <h4 className="font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-secondary-600 text-sm line-clamp-2">
                      {item.excerpt}
                    </p>
                  </motion.article>
                ))}
              </div>
              <div className="p-4 border-t bg-gray-50">
                <a
                  href="https://www.facebook.com/GrupoHealthCareMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ver más en Facebook
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Instagram Grid CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
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
