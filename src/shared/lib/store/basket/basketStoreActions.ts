import { CARRIERS } from '@/shared/consts';
import { IBasketStoreActions } from '@/shared/types';

import { basketStore } from './basketStore';

export const setShippingDetailsAction: IBasketStoreActions['setShippingDetailsAction'] = (shippingDetails) => {
  basketStore.setState({ shippingDetails });
};

export const incrStepAction: IBasketStoreActions['incrStepAction'] = () => {
  basketStore.setState(({ step }) => ({ step: step + 1 }));
};

export const decrStepAction: IBasketStoreActions['decrStepAction'] = () => {
  basketStore.setState(({ step }) => ({ step: step - 1 }));
};

export const setOrderIdAction: IBasketStoreActions['setOrderIdAction'] = (orderId) => {
  basketStore.setState({ orderId });
};

export const initBasketSuccessAction: IBasketStoreActions['initBasketSuccessAction'] = (basket) => {
  basketStore.setState({
    basket,
    carrier: basket.total >= 60 ? { ...CARRIERS[0], price: 0 } : CARRIERS[0],
    carriers: basket.total >= 60 ? CARRIERS.map((carrier) => ({ ...carrier, price: 0 })) : CARRIERS,
    isBasketLoading: false,
  });
};

export const resetBasketAction: IBasketStoreActions['resetBasketAction'] = () => {
  basketStore.setState({ basket: null });
};

export const resetPaymentInfoAction: IBasketStoreActions['resetPaymentInfoAction'] = () => {
  basketStore.setState({
    step: 0,
    carrier: CARRIERS[0],
    shippingDetails: null,
  });
};

export const setCarrierAction: IBasketStoreActions['setCarrierAction'] = (carrier) => {
  basketStore.setState((state) => ({
    carrier,
    shippingDetails: !carrier ? null : state.shippingDetails,
  }));
};
