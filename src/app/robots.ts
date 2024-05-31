import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['Googlebot', 'Applebot', 'Bingbot'],
        allow: ['/catalogo', '/catalogo/zapatos', '/catalogo/zapatos/pagina', '/contactos', '/blog', '/preguntas-frecuentes'],
        disallow: ['/checkout', '/devoluciones-y-reembolsos', '/terminos-y-condiciones'],
      },
    ],
  };
}
