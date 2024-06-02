import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['Googlebot', 'Applebot', 'Bingbot'],
        allow: [
          '/producto/*',
          '/catalogo/*',
          '/contactos',
          '/blog',
          '/preguntas-frecuentes',
        ],
        disallow: [
          '/checkout',
          '/devoluciones-y-reembolsos',
          '/terminos-y-condiciones',
          '/*?selected_facets=*',
        ],
      },
    ],
  };
}
