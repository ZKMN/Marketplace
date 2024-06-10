import { IBasketStoreActions } from '@/shared/types';

import { basketStore } from './basketStore';

export const initBasketSuccessAction: IBasketStoreActions['initBasketSuccessAction'] = (basket) => {
  basketStore.setState({ basket, isBasketLoading: false });
};

export const setOrderIdAction: IBasketStoreActions['setOrderIdAction'] = (orderId) => {
  basketStore.setState({ orderId });
};

export const resetBasketAction: IBasketStoreActions['resetBasketAction'] = () => {
  basketStore.setState({ basket: null });
};
