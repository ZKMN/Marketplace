/* eslint-disable max-len */
import { Metadata } from 'next';
import { BreadcrumbJsonLd, ImageJsonLd } from 'next-seo';

import { Catalogue } from '@/pagesLayer/Catalogue';

import { getServerProducts } from '@/shared/api/helpers';
import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng, page } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: `${config.urls.site}/${lng}${Links.CATALOGUE}/${page}`,
      title: 'Look at these cool shoes - Weestep Kids',
      description: '👟💖 Immerse yourself in the world of comfort with our children\'s footwear! 💫 300+ models of orthopedic footwear - caring for your child\'s health. Find the perfect pair right now and get a -30% discount! 👣🌟',
    });
  }

  return getEsMetadata({
    url: `${config.urls.site}/${lng}${Links.CATALOGUE}/${page}`,
    title: 'Mira qué zapatos tan chulos - Weestep Kids',
    description: '👟💖 ¡Sumérgete en el mundo del confort con nuestro calzado infantil! 💫 Más de 300+ modelos de calzado ortopédico: cuidado de la salud de tu hijo. ¡Encuentra el par perfecto ahora y obtén un descuento del -30%! 👣🌟',
  });
}

const CataloguePage = async ({ params: { lng, page } }: INextPageParams) => {
  const { items, filters } = await getServerProducts(lng, page);

  const images = items.map((product) => ({
    contentUrl: product.img,
    creditText: 'Weestep Kids',
    copyrightNotice: '© Weestep Kids',
    creator: {
      '@type': 'Organization',
      name: 'Weestep Kids',
    },
  })) as ImageJsonLd[];

  const esBreadcrumbs = [{
    position: 1,
    name: 'Catalogo',
    item: `${config.urls.site}/catalogo`,
  }, {
    position: 2,
    name: 'Zapatos',
    item: `${config.urls.site}/catalogo/zapatos/pagina/${page}`,
  }];

  const enBreadcrumbs = [{
    position: 1,
    name: 'Catalogue',
    item: `${config.urls.site}/catalogo`,
  }, {
    position: 2,
    name: 'Shoes',
    item: `${config.urls.site}/catalogo/zapatos/pagina/${page}`,
  }];

  const itemListBreadcrumbs = lng === 'es' ? esBreadcrumbs : enBreadcrumbs;

  return (
    <>
      <ImageJsonLd
        useAppDir
        images={images}
      />

      <BreadcrumbJsonLd
        useAppDir
        itemListElements={itemListBreadcrumbs}
      />

      <Catalogue
        items={items}
        filters={filters}
      />
    </>
  );
};

export default CataloguePage;
