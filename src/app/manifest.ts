/* eslint-disable max-len */
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Weestep Kids',
    short_name: 'Weestep',
    theme_color: '#ffffff',
    description: '👟💖 ¡Sumérgete en el mundo del confort con nuestro calzado infantil! 💫 Más de 300+ modelos de calzado ortopédico: cuidado de la salud de tu hijo. ¡Encuentra el par perfecto ahora y obtén un descuento del -50%! 👣🌟',
    background_color: '#ffffff',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/images/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
