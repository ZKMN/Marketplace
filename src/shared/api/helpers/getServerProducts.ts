import { PRODUCTS_COUNT } from '@/shared/consts';
import {
  IProduct, IProductDetails, IProductsResponse, TLanguages,
} from '@/shared/types';

import { apiGet } from '../instance';

export const getServerProducts = async (lng: TLanguages, page: string) => {
  try {
    const { data } = await apiGet<IProductsResponse>({
      url: `/${lng}/v1/products/list?page=${page || 1}&limit=${PRODUCTS_COUNT}`,
    });

    return data;
  } catch (error) {
    console.warn(error);

    return {
      items: [], filters: [], ordering: null, total: 0,
    };
  }
};

export const getAllProducts = async (lng: TLanguages) => {
  try {
    const { data } = await apiGet<{ items: IProduct[]; total: number; }>({ url: `/${lng}/v1/products/list` });

    return data.items;
  } catch (error) {
    console.warn(error);

    return [];
  }
};

export const getServerProduct = async (lng: TLanguages, productId: string) => {
  try {
    const { data } = await apiGet<IProductDetails>({ url: `/${lng}/v1/products/${productId}` });

    return data;
  } catch (error) {
    console.warn(error);

    return undefined;
  }
};

export const getProductsTotal = async (lng: TLanguages) => {
  try {
    const { data } = await apiGet<IProductsResponse>({ url: `/${lng}/v1/products/list?page=1&limit=1` });

    return data.total;
  } catch (error) {
    console.warn(error);

    return 0;
  }
};
