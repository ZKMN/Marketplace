import { create } from 'zustand';

import { IBasketStore } from '@/shared/types';

export const basketStoreValues: Readonly<IBasketStore> = {
  basket: null,
  orderId: null,
  isBasketLoading: true,
};

export const basketStore = create<IBasketStore>()(() => basketStoreValues);
