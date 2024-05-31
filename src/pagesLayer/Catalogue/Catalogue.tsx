import React from 'react';

import { CatalogueList } from '@/widgets/CatalogueList';

import { BaseContainer } from '@/shared/components';
import { IProductsResponse } from '@/shared/types';

import { Title } from './components';

export const Catalogue = ({
  items,
  filters,
}: IProductsResponse) => (
  <BaseContainer mt={3} mb={3} maxWidth={1500}>
    <Title />

    <CatalogueList
      filters={filters}
      products={items}
    />
  </BaseContainer>
);
