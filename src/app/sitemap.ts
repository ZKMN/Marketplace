import { MetadataRoute } from 'next';

import { getAllProducts, getProductsTotal } from '@/shared/api/helpers';
import { PRODUCTS_COUNT } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { Links, TLanguages } from '@/shared/types';

const getCatalogSitemapPages = async (): Promise<MetadataRoute.Sitemap> => {
  const total = await getProductsTotal('es');

  const baseCount = Math.ceil(Number(total) / PRODUCTS_COUNT);

  return Array.from({ length: baseCount }).map((_, index) => ({
    url: `${config.urls.site}/es${Links.CATALOGUE}/${index + 1}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: {
        en: `${config.urls.site}/en${Links.CATALOGUE}/${index + 1}`,
      },
    },
  }));
};

const getProductSitemap = async (lng: TLanguages): Promise<MetadataRoute.Sitemap> => {
  const products = await getAllProducts(lng);

  return products.map((product) => ({
    url: `${config.urls.site}/${lng}${Links.PRODUCT}/${product.shoesType}/${product.productId}`,
    priority: 1,
    lastModified: new Date(),
    changeFrequency: 'monthly',
  }));
};

export default async function generateSitemaps(): Promise<MetadataRoute.Sitemap> {
  const catalogue = await getCatalogSitemapPages();
  const productsES = await getProductSitemap('es');
  const productsEN = await getProductSitemap('en');

  return [
    {
      url: `${config.urls.site}/es`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: `${config.urls.site}/en`,
        },
      },
    },
    ...catalogue,
    ...productsES,
    ...productsEN,
    {
      url: `${config.urls.site}/es${Links.CONTACTS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${config.urls.site}/en${Links.CONTACTS}`,
        },
      },
    },
    {
      url: `${config.urls.site}/es${Links.BLOG}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${config.urls.site}/en${Links.BLOG}`,
        },
      },
    },
    {
      url: `${config.urls.site}/es${Links.FAQ}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${config.urls.site}/en${Links.FAQ}`,
        },
      },
    },
    {
      url: `${config.urls.site}/es${Links.RETURNS_REFUNDS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${config.urls.site}/en${Links.RETURNS_REFUNDS}`,
        },
      },
    },
    {
      url: `${config.urls.site}/es${Links.TERMS_CONDITIONS}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${config.urls.site}/en${Links.TERMS_CONDITIONS}`,
        },
      },
    },
  ];
}
