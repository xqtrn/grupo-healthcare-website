import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grupo Health Care | Más que Salud',
  description: 'Más de 20 años especializados en el desarrollo e innovación de servicios médico-hospitalarios. Promovemos la cultura de la salud y su valor intrínseco.',
  keywords: 'salud, healthcare, médico, hospital, México, servicios médicos, innovación médica, Grupo Health Care, GHC',
  authors: [{ name: 'Grupo Health Care' }],
  openGraph: {
    title: 'Grupo Health Care | Más que Salud',
    description: 'Especialistas en desarrollo e innovación de servicios médico-hospitalarios en México.',
    url: 'https://ghc.com.mx',
    siteName: 'Grupo Health Care',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Health Care | Más que Salud',
    description: 'Especialistas en desarrollo e innovación de servicios médico-hospitalarios en México.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
