'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Media', href: '#media' },
    { name: 'Contacto', href: '#contacto' },
  ],
  services: [
    { name: 'Hospitales', href: '#servicios' },
    { name: 'Médicos', href: '#servicios' },
    { name: 'Industria Farmacéutica', href: '#servicios' },
    { name: 'App Móvil GHC', href: '#servicios' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/GrupoHealthCareMX' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/grupo.healthcare' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@grupohealthcare' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/healthgrupo' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeb6f1octKPxQ5uBOjO2CsJq2j_08YASdGA&s"
                alt="Grupo Health Care Logo"
                width={48}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <span className="text-xl font-display font-bold">
                  Grupo Health Care
                </span>
                <span className="block text-xs text-primary-400 font-medium">
                  Más que Salud
                </span>
              </div>
            </Link>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              Más de 20 años especializados en el desarrollo e innovación de servicios médico-hospitalarios,
              siempre buscando el beneficio del paciente.
            </p>
            <div className="flex space-x-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Manuel+Avila+Camacho+37+Polanco+CDMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-secondary-400 hover:text-primary-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Manuel Ávila Camacho 37, Col. Polanco, CDMX 11560</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+525610700648"
                  className="flex items-center space-x-3 text-secondary-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+52 56 1070 0648</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@ghc.com.mx"
                  className="flex items-center space-x-3 text-secondary-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contacto@ghc.com.mx</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Grupo Health Care. Todos los derechos reservados.
            </p>
            <p className="text-secondary-500 text-sm flex items-center">
              Hecho con <Heart className="w-4 h-4 mx-1 text-accent-500" /> en México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
