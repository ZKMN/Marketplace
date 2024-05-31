import { create } from 'zustand';

import { getParsedStorage } from '@/shared/lib/helpers';
import { ILocalBasketStore } from '@/shared/types';

export const localBasketStoreValues: Readonly<ILocalBasketStore> = {
  products: [],
};

export const localBasketStore = create<ILocalBasketStore>()(() => {
  const storage = getParsedStorage();

  return {
    ...localBasketStoreValues,
    products: storage?.products || [],
  };
});
