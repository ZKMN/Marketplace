/* eslint-disable max-len */
import { Metadata } from 'next';
import { BreadcrumbJsonLd, ImageJsonLd } from 'next-seo';

import { Home } from '@/pagesLayer/Home';

import { getServerProducts } from '@/shared/api/helpers';
import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return {
      verification: {
        other: {
          'facebook-domain-verification': 'yc7kl48yzmhmde9gi31usll6ar3ktl',
        },
      },
      ...getEnMetadata({
        url: config.urls.site,
        title: "Weestep Kids - Taking care of children's feet!",
        description: '👟💖 Dive into the world of comfort with our children\'s shoes! 💫 300+ models of orthopedic footwear - caring for your child\'s health. Find the perfect pair right now and get a -30% discount! 👣🌟. Our footwear is perforated, anti-shock, ergonomic, removable, leather, comfortable, anatomical, breathable and orthopedic.',
      }),
    };
  }

  return {
    verification: {
      other: {
        'facebook-domain-verification': 'yc7kl48yzmhmde9gi31usll6ar3ktl',
      },
    },
    ...getEsMetadata({
      url: config.urls.site,
      title: 'Weestep Kids - Cuidar los pies de los niños!',
      description: '👟💖 ¡Sumérgete en el mundo de la comodidad con nuestros zapatos para niños! 💫 Más de 300+ modelos de calzado ortopédico: cuidado de la salud de tu hijo. ¡Encuentra el par perfecto ahora y obtén un descuento del -30%! 👣🌟. Nuestro calzado es perforado, antichoque, ergonómico, extraíble, de piel, cómodo, anatómico, transpirable y ortopédico.',
    }),
  };
}

const HomePage = async ({ params: { lng } }: INextPageParams) => {
  const { items } = await getServerProducts(lng, '1');

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
    name: 'Incio',
    item: `${config.urls.site}/es`,
  }, {
    position: 1,
    name: 'Catalogo',
    item: `${config.urls.site}/es${Links.CATALOGUE}/1`,
  }, {
    position: 3,
    name: 'Contactos',
    item: `${config.urls.site}/es${Links.CONTACTS}`,
  }];

  const enBreadcrumbs = [{
    position: 1,
    name: 'Home',
    item: `${config.urls.site}/en`,
  }, {
    position: 2,
    name: 'Catalogue',
    item: `${config.urls.site}/en${Links.CATALOGUE}/1`,
  }, {
    position: 3,
    name: 'Contacts',
    item: `${config.urls.site}/en${Links.CONTACTS}`,
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

      <Home />
    </>
  );
};

export default HomePage;
