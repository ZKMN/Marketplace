import React from 'react';

import { ProductDetails } from '@/widgets/ProductDetails';

import { BaseContainer } from '@/shared/components';
import { IProductDetails } from '@/shared/types';

export const Product = ({ product }: { product?: IProductDetails; }) => (
  <BaseContainer mt={3} mb={3}>

    <ProductDetails product={product} />

  </BaseContainer>
);
