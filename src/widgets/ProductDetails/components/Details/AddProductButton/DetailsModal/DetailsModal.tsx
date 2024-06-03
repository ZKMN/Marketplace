import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

import { DeleteBasketProductAction } from '@/features/DeleteBasketProductAction';

import { ProductBasketDetails } from '@/entities/Product';

import { BaseDialog, IntlButton } from '@/shared/components';
import { getPrice } from '@/shared/lib/helpers';
import { useClickRedirect } from '@/shared/lib/hooks';
import { basketStore } from '@/shared/lib/store';
import { IBaseDialogProps, Links } from '@/shared/types';

export const DetailsModal = ({ isOpen, onClose }: Pick<IBaseDialogProps, 'isOpen' | 'onClose'>) => {
  const basket = basketStore((state) => state.basket);

  const [handleRedirect] = useClickRedirect();

  useEffect(() => {
    if (!basket?.items?.length) {
      onClose?.();
    }
  }, [basket?.items?.length]);

  return (
    <BaseDialog
      fullWidth
      isOpen={isOpen}
      maxWidth="xs"
      titleIntl={{ label: 'titles.orderSummary' }}
      titleExtraNode={(
        <Typography
          color="text.white"
          fontSize={18}
          fontWeight={700}
        >
          {`(${basket?.numItems})`}
          {' '}
          {getPrice(basket?.total)}
        </Typography>
      )}
      footer={(
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <IntlButton
              intl={{ label: 'checkout' }}
              color="secondary"
              variant="outlined"
              onClick={handleRedirect(Links.CHECKOUT)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <IntlButton
              intl={{ label: 'continueShopping' }}
              onClick={handleRedirect(`${Links.CATALOGUE}/1`)}
            />
          </Grid>
        </Grid>
      )}
    >
      <Grid container spacing={1}>
        {basket?.items?.map(({ product, quantity }) => (
          <Grid item key={product.size.id} xs={12}>
            <ProductBasketDetails
              product={product}
              quantity={quantity}
              actions={<DeleteBasketProductAction sizeId={product.size.id} />}
            />
          </Grid>
        ))}
      </Grid>
    </BaseDialog>
  );
};
