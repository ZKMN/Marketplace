import React from 'react';

import { IProductDetails } from '@/shared/types';

import { Bread, Details } from './components';

export const ProductDetails = ({ product }: { product?: IProductDetails; }) => (
  <>
    <Bread />

    <Details product={product} />
  </>
);
