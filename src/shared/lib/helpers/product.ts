import { startCase, toLower } from 'lodash';

import { ILocalBasketProduct } from '@/shared/types';

export const getProductsPrice = (products?: ILocalBasketProduct[]) => products?.reduce((acc, item) => {
  let price = acc;

  price += item.price * item.quantity;

  return price;
}, 0) as number;

export const getProductsQuantity = (products?: ILocalBasketProduct[]) => products?.reduce((acc, item) => {
  let qty = acc;

  qty += item.quantity;

  return qty;
}, 0) as number;

export const getShoesType = (shoesType?: string) => startCase(toLower(shoesType));
