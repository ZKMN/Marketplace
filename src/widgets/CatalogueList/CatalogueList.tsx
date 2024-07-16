'use client';

import React, { Suspense, useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { useGetSWR } from '@/shared/api/hooks';
import { PRODUCTS_COUNT } from '@/shared/consts';
import { FBPixelEvents } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import { IProduct, IProductsResponse } from '@/shared/types';

import {
  CardSkeleton,
  EmptyResult,
  Filters,
  FiltersDrawer,
  Pagination,
  ProductCard,
  RemoveFilters,
  SortBy,
} from './components';

const CatalogueListComponent = ({ filters, items, ordering }: IProductsResponse) => {
  const [dataResponse, setResponse] = useState<IProduct[]>();

  const { page } = useTypedParams();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));
  const search = queryParams.toString();
  const query = search ? `?${search}` : '';

  const { data, isLoading } = useGetSWR<IProductsResponse>({
    url: `/products/list${query}`,
    queryParams: {
      page: page || 1,
      limit: PRODUCTS_COUNT,
    },
    config: {
      onSuccess: (response) => {
        setResponse(response.items);

        FBPixelEvents.pageView();
      },
      fallbackData: {
        items: dataResponse || items,
        total: 10,
        filters,
        ordering,
      },
    },
  });

  return (
    <Grid>
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
          <SortBy ordering={data?.ordering} />
        </Grid>
      </Grid>

      <Grid container spacing={3} columns={24}>
        <Grid item xs={24} md={7} lg={5} component="section">
          <Grid container spacing={{ xs: 1 }}>
            <Grid item xs={6} md={24}>
              <Grid
                sx={({ breakpoints }) => ({
                  [breakpoints.down('md')]: {
                    display: 'none',
                  },
                })}
              >
                <Filters filters={data?.filters} />
              </Grid>

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
              <SortBy ordering={data?.ordering} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item flex={1} position="relative" component="section">
          <Grid container spacing={2}>
            {!data?.items.length && !isLoading && <EmptyResult />}

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
        </Grid>
      </Grid>

      <Pagination total={data?.total} />
    </Grid>
  );
};

export const CatalogueList = ({ filters, items, ordering }: IProductsResponse) => (
  <Suspense
    fallback={(
      <Grid container spacing={3} columns={24}>
        <Grid item xs={24} md={7} lg={5} component="section">
          <Grid
            sx={({ breakpoints }) => ({
              [breakpoints.down('md')]: {
                display: 'none',
              },
            })}
          >
            <Skeleton variant="rectangular" width="100%" height={400} />
          </Grid>
        </Grid>

        <Grid item flex={1} position="relative" component="section">
          <Grid container spacing={2}>
            {Array.from({ length: 12 }).map((_, index) => (
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
    <CatalogueListComponent
      items={items}
      filters={filters}
      ordering={ordering}
    />
  </Suspense>
);
