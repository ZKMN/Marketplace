import React from 'react';
import { Add, Remove } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';
import { ILocalBasketProduct } from '@/shared/types';

export const ProductQuantity = ({
  quantity,
  available,
  onPlus,
  onMinus,
}: Pick<ILocalBasketProduct, 'available' | 'quantity'> & { onPlus: () => void; onMinus: () => void; }) => {
  const { isLessSm } = useMediaSizes();

  const disablePlus = available === Number(quantity);
  const disableMinus = quantity === 1;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          height={isLessSm ? 25 : 30}
        >
          <IconButton
            sx={{ cursor: disableMinus ? 'default' : 'pointer', height: '100%' }}
            size={isLessSm ? 'small' : 'medium'}
            onClick={onMinus}
            disabled={disableMinus}
            aria-label="Cantidad menos"
          >
            <Remove />
          </IconButton>

          <Grid
            item
            width={40}
            height="100%"
          >
            <Grid
              container
              height="100%"
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor="border.main"
              borderRadius="4px"
            >
              {quantity}
            </Grid>
          </Grid>

          <IconButton
            sx={{ cursor: disablePlus ? 'default' : 'pointer', height: '100%' }}
            size={isLessSm ? 'small' : 'medium'}
            onClick={onPlus}
            disabled={disablePlus}
            aria-label="Cantidad añadir"
          >
            <Add />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
