import React from 'react';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { Grid } from '@mui/material';

import { useDeleteRequest } from '@/shared/api/hooks';
import { BasePopup, IntlButton } from '@/shared/components';
import { addQueryParamsToURL } from '@/shared/lib/helpers';
import { useLngPushRouter } from '@/shared/lib/hooks';
import { initBasketSuccessAction } from '@/shared/lib/store';
import { IBasketProduct, IBasketResponse, Links } from '@/shared/types';

export const BasketProductActions = ({
  quantity,
  shoesType,
  productId,
  sizeId,
  onEdit,
}: Pick<IBasketProduct, 'shoesType' | 'productId'> & {
  sizeId: number;
  quantity: number;
  onEdit?: () => void;
}) => {
  const [handleRedirect] = useLngPushRouter();

  const [handleDeleteProduct] = useDeleteRequest<IBasketResponse>({
    url: `/basket/${sizeId}`,
    withCredentials: true,
    config: {
      onSuccess: ({ data }) => initBasketSuccessAction(data),
    },
  });

  return (
    <BasePopup icon={<MoreVert />}>
      <Grid container>
        <Grid item xs={12}>
          <IntlButton
            sx={{ justifyContent: 'flex-start' }}
            size="small"
            color="baseBlack"
            intl={{ label: 'edit' }}
            variant="text"
            startIcon={<Edit />}
            aria-label="Añadir producto"
            onClick={() => {
              onEdit?.();
              handleRedirect(
                addQueryParamsToURL(
                  `${Links.PRODUCT}/${shoesType}/${productId}`,
                  {
                    sizeId,
                    quantity,
                    edit: true,
                  },
                ),
              );
            }}
          />
        </Grid>

        <Grid item>
          <IntlButton
            size="small"
            intl={{ label: 'remove' }}
            color="error"
            variant="text"
            startIcon={<Delete />}
            onClick={() => handleDeleteProduct()}
            aria-label="Eliminar producto"
          />
        </Grid>
      </Grid>
    </BasePopup>
  );
};
