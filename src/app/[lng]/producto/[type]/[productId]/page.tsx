import { upperFirst } from 'lodash';
import { Metadata } from 'next';
import { BreadcrumbJsonLd, ProductJsonLd } from 'next-seo';

import { Product } from '@/pagesLayer/Product';

import { getServerProduct } from '@/shared/api/helpers';
import { config } from '@/shared/lib/config';
import { getShoesType } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng, productId } }: INextPageParams): Promise<Metadata> {
  const product = await getServerProduct(lng, productId);

  if (lng === 'en') {
    const discountText = product?.discount ? `, DISCOUNT -${product?.discount.toFixed(0)}%❗❗❗` : ' 👣🌟';

    return {
      title: `👟💖 Look at these cool ${getShoesType(product?.shoesType)}${discountText}`,
      metadataBase: new URL(config.urls.site),
      description: upperFirst(product?.details.map((detail) => `${detail.title} - ${detail.description}🌟`).join(', ')),
      alternates: {
        canonical: `${config.urls.site}/${lng}${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
        languages: {
          'es-ES': `${config.urls.site}/es${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
          'en-US': `${config.urls.site}/en${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
        },
      },
      openGraph: {
        url: `${config.urls.site}/${lng}${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
        type: 'website',
        title: `👟💖 Look at these cool ${getShoesType(product?.shoesType)}${discountText}`,
        locale: lng,
        description: upperFirst(product?.details.map((detail) => `${detail.title} - ${detail.description}🌟`).join(', ')),
        images: {
          url: product?.images[0] as string,
          width: 50,
          height: 50,
        },
      },
      twitter: {
        site: `${config.urls.site}/${lng}${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
        title: `👟💖 Look at these cool ${getShoesType(product?.shoesType)}${discountText}`,
        description: upperFirst(product?.details.map((detail) => `${detail.title} - ${detail.description}🌟`).join(', ')),
        images: {
          url: product?.images[0] as string,
          width: 50,
          height: 50,
        },
      },
    };
  }

  const discountText = product?.discount ? `, DESCUENTO -${product?.discount.toFixed(0)}%❗❗❗` : ' 👣🌟';

  return {
    title: `👟💖 Mira qué ${getShoesType(product?.shoesType)} tan chulos${discountText}`,
    metadataBase: new URL(config.urls.site),
    description: upperFirst(product?.details.map((detail) => `${detail.title} - ${detail.description}🌟`).join(', ')),
    alternates: {
      canonical: `${config.urls.site}/${lng}${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
      languages: {
        'es-ES': `${config.urls.site}/es${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
        'en-US': `${config.urls.site}/en${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
      },
    },
    openGraph: {
      url: `${config.urls.site}/${lng}${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
      type: 'website',
      title: `👟💖 Mira qué ${getShoesType(product?.shoesType)} tan chulos${discountText}`,
      locale: lng,
      images: {
        url: product?.images[0] as string,
        width: 50,
        height: 50,
      },
    },
    twitter: {
      site: `${config.urls.site}/${lng}${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
      title: `👟💖 Mira qué ${getShoesType(product?.shoesType)} tan chulos${discountText}`,
      description: upperFirst(product?.details.map((detail) => `${detail.title} - ${detail.description}🌟`).join(', ')),
      images: {
        url: product?.images[0] as string,
        width: 50,
        height: 50,
      },
    },
  };
}

// {/* <meta property="product:retailer_item_id" content="107437" />
// <meta property="product:item_group_id" content="107437" />
// <meta property="product:condition" content="new" />
// <meta property="product:availability" content="in stock" />
// <meta property="brand" content="Batilas" />
// <meta property="product:category" content="0" />
// <meta property="product:sale_price:amount" content="15" />
// <meta property="product:sale_price:currency" content="EUR" /> */}

const ProductPage = async ({ params: { lng, type, productId } }: INextPageParams) => {
  const product = await getServerProduct(lng, productId);

  const esBreadcrumbs = [{
    position: 1,
    name: 'Catalogo',
    item: `${config.urls.site}/es${Links.CATALOGUE}/1`,
  }, {
    position: 2,
    name: getShoesType(type),
    item: `${config.urls.site}/es${Links.PRODUCT}/${type}`,
  }, {
    position: 3,
    name: 'Producto ID',
    item: `${config.urls.site}/es${Links.PRODUCT}/${type}/${productId}`,
  }];

  const enBreadcrumbs = [{
    position: 1,
    name: 'Catalogue',
    item: `${config.urls.site}/en${Links.CATALOGUE}/1`,
  }, {
    position: 2,
    name: getShoesType(type),
    item: `${config.urls.site}/en${Links.PRODUCT}/${type}`,
  }, {
    position: 3,
    name: 'Product ID',
    item: `${config.urls.site}/en${Links.PRODUCT}/${type}/${productId}`,
  }];

  const itemListBreadcrumbs = lng === 'es' ? esBreadcrumbs : enBreadcrumbs;

  return (
    <>
      <BreadcrumbJsonLd
        useAppDir
        itemListElements={itemListBreadcrumbs}
      />

      <ProductJsonLd
        useAppDir
        id={product?.productId}
        mpn={product?.productId}
        brand="Weestep"
        color={product?.color.value}
        sizes={product?.sizes.map((size) => size.value)}
        images={product?.images}
        colors={product?.colors}
        discount={product?.discount ? `${product?.discount.toFixed(0)}%` : undefined}
        productName={getShoesType(product?.shoesType)}
        description={upperFirst(product?.details.map((detail) => `${detail.title} - ${detail.description}`).join(', '))}
        aggregateRating={{
          ratingValue: '4.6',
          reviewCount: '89',
        }}
        reviews={[{
          author: 'Jim',
          datePublished: '2024-05-06T03:37:40Z',
          reviewBody: 'This is my favorite product yet!',
          name: 'So awesome!!!',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '4.5',
          },
          publisher: {
            type: 'Organization',
            name: 'TwoVit',
          },
        }]}
        offers={[{
          price: product?.price,
          priceCurrency: 'EUR',
          priceValidUntil: '2024-10-01',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          url: `${config.urls.site}/${lng}${Links.PRODUCT}/${product?.shoesType}/${product?.productId}`,
          seller: {
            name: 'Weestep Kids',
          },
        }]}
      />

      <Product product={product} />
    </>
  );
};

export default ProductPage;
