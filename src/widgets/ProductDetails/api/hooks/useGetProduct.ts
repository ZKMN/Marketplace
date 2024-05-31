import { useState } from 'react';
import { useQueryStates } from 'nuqs';

import { useGetSWR } from '@/shared/api/hooks';
import { useTypedParams } from '@/shared/lib/hooks';
import { IProductDetails } from '@/shared/types';

const stringParser = (defaultValue: string) => ({
  parse: (value: string) => value || defaultValue,
  stringify: (value: string) => String(value),
});

export const useGetProduct = (product?: IProductDetails) => {
  const [queries, setQuery] = useQueryStates({
    sizeId: stringParser(''),
    quantity: stringParser(''),
  });

  const [productResponse, setProductResponse] = useState<IProductDetails>();

  const { productId } = useTypedParams();

  const { data } = useGetSWR<IProductDetails>({
    url: `/products/${productId}`,
    config: {
      onSuccess: (prod) => {
        setProductResponse(prod);

        if (!queries.sizeId) {
          setQuery({ sizeId: String(prod.sizes[0].id) });
        }

        if (!queries.quantity) {
          setQuery({ quantity: '1' });
        }
      },
      fallbackData: productResponse || product,
    },
  });

  return { data };
};
