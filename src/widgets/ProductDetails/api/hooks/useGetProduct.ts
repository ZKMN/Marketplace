import { useQueryStates } from 'nuqs';

import { useGetSWR } from '@/shared/api/hooks';
import { FBPixelEvents } from '@/shared/lib/helpers';
import { useLngReplaceRouter, useTypedParams } from '@/shared/lib/hooks';
import { IProductDetails, Links } from '@/shared/types';

const stringParser = (defaultValue: string) => ({
  parse: (value: string) => value || defaultValue,
  stringify: (value: string) => String(value),
});

export const useGetProduct = (product?: IProductDetails) => {
  const [queries, setQuery] = useQueryStates({
    sizeId: stringParser(''),
    quantity: stringParser(''),
  });

  const [push] = useLngReplaceRouter();
  const { productId, type } = useTypedParams();

  const { data } = useGetSWR<IProductDetails>({
    url: `/products/${productId}`,
    config: {
      onSuccess: (prod) => {
        FBPixelEvents.pageView();

        if (prod.shoesType === type && !queries.sizeId) {
          setQuery({ sizeId: String(prod.sizes[0].id) });
        }

        if (prod.shoesType === type && !queries.quantity) {
          setQuery({ quantity: '1' });
        }

        if (prod.shoesType && type && prod.shoesType !== type) {
          push(`${Links.PRODUCT}/${prod.shoesType}/${productId}`);

          setQuery({ quantity: '1' });
          setQuery({ sizeId: String(prod.sizes[0].id) });

          return null;
        }

        return null;
      },
      fallbackData: product,
    },
  });

  return { data };
};
