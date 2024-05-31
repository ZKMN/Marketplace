import { IBasketStoreActions } from '@/shared/types';

import { basketStore } from './basketStore';

export const initBasketSuccessAction: IBasketStoreActions['initBasketSuccessAction'] = (basket) => {
  basketStore.setState({ basket, isBasketLoading: false });
};
