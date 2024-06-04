import React from 'react';
import { Grid, Typography } from '@mui/material';

import { BaseImage, IntlLink, IntlTypography } from '@/shared/components';
import { getShoesType } from '@/shared/lib/helpers';
import { useClickRedirect } from '@/shared/lib/hooks';
import { IBasketProduct, Links } from '@/shared/types';

import { ProductColor, ProductPrice } from '..';

export const ProductBasketDetails = ({
  actions,
  product,
  quantity,
}: {
  actions: React.ReactNode;
  product: IBasketProduct;
  quantity: number;
}) => {
  const {
    img,
    size,
    code,
    price,
    color,
    discount,
    shoesType,
    productId,
    priceInitial,
  } = product;

  const [handleRedirect] = useClickRedirect();

  return (
    <Grid
      container
      height="100%"
      bgcolor="background.default"
      border="1px solid"
      position="relative"
      overflow="hidden"
      borderColor="border.main"
      borderRadius={2}
    >
      <Grid position="absolute" right={0} zIndex={5}>
        {actions}
      </Grid>

      <Grid item p={1} bgcolor="background.paper">
        <Grid container height="100%" alignItems="center">
          <BaseImage
            alt={shoesType}
            src={img}
            width={80}
            height={80}
            onClick={handleRedirect(`${Links.PRODUCT}/${shoesType}/${productId}?sizeId=${size.id}`)}
            objectFit="contain"
          />
        </Grid>
      </Grid>

      <Grid item flex={1} p={1}>
        <Grid container>
          <IntlLink
            to={`${Links.PRODUCT}/${shoesType}/${productId}?sizeId=${size.id}`}
            color="text.black"
            fontSize="1.1rem"
            fontWeight={700}
          >
            {code}
          </IntlLink>
        </Grid>

        <Grid container>
          <Typography color="text.grey">
            {`${quantity} x ${getShoesType(shoesType)}`}
          </Typography>
        </Grid>

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid container alignItems="center">
              <Grid item mr={2}>
                <Grid container alignItems="center">
                  <IntlTypography
                    mr={1}
                    intl={{ label: 'titles.size' }}
                    fontSize="0.9rem"
                    textAlign="left"
                  />

                  <Grid
                    width={30}
                    padding="2px 0"
                    bgcolor="background.paper"
                    borderRadius="4px"
                  >
                    <Typography textAlign="center" fontSize="0.9rem">
                      {size.value}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container alignItems="center">
                  <IntlTypography
                    mr={1}
                    intl={{ label: 'titles.color' }}
                    fontSize="0.9rem"
                    textAlign="left"
                  />

                  <ProductColor color={color.value} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <ProductPrice
              price={price * quantity}
              priceInitial={priceInitial * quantity}
              withDiscount={!!discount}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
