import { create } from 'zustand';

import { CARRIERS } from '@/shared/consts';
import { IBasketStore } from '@/shared/types';

export const basketStoreValues: Readonly<IBasketStore> = {
  step: 0,
  basket: null,
  orderId: null,
  carrier: CARRIERS[0],
  carriers: CARRIERS,
  shippingDetails: null,
  isBasketLoading: true,
};

export const basketStore = create<IBasketStore>()(() => basketStoreValues);
