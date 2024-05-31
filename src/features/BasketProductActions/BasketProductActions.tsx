import React from 'react';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { Grid } from '@mui/material';

import { useDeleteRequest } from '@/shared/api/hooks';
import { BasePopup, IntlButton } from '@/shared/components';
import { addQueryParamsToURL } from '@/shared/lib/helpers';
import { useLngRouter } from '@/shared/lib/hooks';
import { IBasketProduct, Links } from '@/shared/types';

export const BasketProductActions = ({
  // sizeId,
  quantity,
  shoesType,
  productId,
  onEdit,
}: Pick<IBasketProduct, 'shoesType' | 'productId'> & {
  // sizeId: number;
  quantity: number;
  onEdit?: () => void;
}) => {
  const [handleRedirect] = useLngRouter();

  const [handleDeleteProduct] = useDeleteRequest({ url: `/basket/${productId}` });

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
                  `${Links.CATALOGUE}/${shoesType}/${productId}`,
                  {
                    quantity,
                    edit: true,
                    // size: sizeId,
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
