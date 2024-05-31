import { create } from 'zustand';

import { CARRIERS } from '../../consts';
import { ICheckoutStore } from '../../types';

export const checkoutStoreValues: Readonly<ICheckoutStore> = {
  step: 0,
  carrier: CARRIERS[0],
  shippingDetails: null,
};

export const checkoutStore = create<ICheckoutStore>()(() => checkoutStoreValues);
