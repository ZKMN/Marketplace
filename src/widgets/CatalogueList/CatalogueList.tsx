'use client';

import React, { Suspense, useState } from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { useGetSWR } from '@/shared/api/hooks';
import { Loading } from '@/shared/components';
import { PRODUCTS_COUNT } from '@/shared/consts';
import { useTypedParams } from '@/shared/lib/hooks';
import { IFilter, IProduct } from '@/shared/types';

import {
  CardSkeleton,
  Filters,
  FiltersDrawer,
  Pagination,
  ProductCard,
  RemoveFilters,
  SortBy,
} from './components';

const CatalogueListComponent = ({ filters, products }: { filters: IFilter[]; products: IProduct[]; }) => {
  const [dataResponse, setResponse] = useState<IProduct[]>();

  const { page } = useTypedParams();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));
  const search = queryParams.toString();
  const query = search ? `?${search}` : '';

  const { data, isLoading } = useGetSWR<{ items: IProduct[]; filters: IFilter[]; total: number; }>({
    url: `/products/list${query}`,
    queryParams: {
      page: page || 1,
      limit: PRODUCTS_COUNT,
    },
    config: {
      onSuccess: (response) => setResponse(response.items),
      fallbackData: { items: dataResponse || products, filters, total: 10 },
    },
  });

  return (
    <Box minHeight={700}>
      <Grid
        container
        justifyContent="space-between"
        sx={({ breakpoints }) => ({
          mb: 3,
          [breakpoints.down('md')]: {
            display: 'none',
          },
        })}
      >
        <Grid item flex={1}>
          <RemoveFilters />
        </Grid>

        <Grid item xs={2}>
          <SortBy />
        </Grid>
      </Grid>

      <Grid container spacing={3} columns={24}>
        <Grid item xs={24} md={7} lg={5} component="section">
          <Grid container spacing={{ xs: 1 }}>
            <Grid item xs={6} md={24}>
              <Box
                sx={({ breakpoints }) => ({
                  [breakpoints.down('md')]: {
                    display: 'none',
                  },
                })}
              >
                <Filters filters={data?.filters} />
              </Box>

              <FiltersDrawer filters={data?.filters} />
            </Grid>

            <Grid
              item
              xs={6}
              sx={({ breakpoints }) => ({
                [breakpoints.up('md')]: {
                  display: 'none',
                },
              })}
            >
              <SortBy />
            </Grid>
          </Grid>
        </Grid>

        <Grid item flex={1} position="relative" component="section">
          <Loading toTop blurred height="100%" loading={isLoading}>
            <Grid container spacing={2}>
              {data?.items.map((product) => (
                <Grid
                  item
                  key={product.productId}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Loading>
        </Grid>
      </Grid>

      <Pagination total={data?.total} />
    </Box>
  );
};

export const CatalogueList = ({ filters, products }: { filters: IFilter[]; products: IProduct[]; }) => (
  <Suspense
    fallback={(
      <Grid container spacing={3} columns={24}>
        <Grid item xs={24} md={7} lg={5} component="section">
          <Box
            sx={({ breakpoints }) => ({
              [breakpoints.down('md')]: {
                display: 'none',
              },
            })}
          >
            <Skeleton variant="rectangular" width="100%" height={400} />
          </Box>
        </Grid>

        <Grid item flex={1} position="relative" component="section">
          <Grid container spacing={2}>

            {Array.from({ length: 8 }).map((_, index) => (
              <Grid
                item
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <CardSkeleton />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  )}
  >
    <CatalogueListComponent filters={filters} products={products} />
  </Suspense>
);
