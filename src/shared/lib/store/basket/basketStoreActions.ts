import { CARRIERS, FREE_DELIVERY_PRICE, PROMO_CODES } from '@/shared/consts';
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
    carrier: basket.total >= FREE_DELIVERY_PRICE ? { ...CARRIERS[0], price: 0 } : CARRIERS[0],
    carriers: basket.total >= FREE_DELIVERY_PRICE ? CARRIERS.map((carrier) => ({ ...carrier, price: 0 })) : CARRIERS,
    isBasketLoading: false,
  });
};

export const setFastDelivery: IBasketStoreActions['setFastDelivery'] = (isFastDelivery) => {
  if (isFastDelivery) {
    return basketStore.setState((state) => ({
      isFastDelivery,
      carrier: state.carrier
        ? { ...state.carrier, price: Number(CARRIERS.find(({ id }) => id === state.carrier?.id)?.price) + 5 }
        : null,
      carriers: CARRIERS.map((carrier) => ({ ...carrier, price: carrier.price + 5 })),
    }));
  }

  return basketStore.setState((state) => ({
    isFastDelivery,
    carrier: Number(state.basket?.total) >= FREE_DELIVERY_PRICE ? { ...CARRIERS[0], price: 0 } : CARRIERS[0],
    carriers: Number(state.basket?.total) >= FREE_DELIVERY_PRICE
      ? CARRIERS.map((carrier) => ({ ...carrier, price: 0 }))
      : CARRIERS,
  }));
};

export const resetBasketAction: IBasketStoreActions['resetBasketAction'] = () => {
  basketStore.setState({ basket: null });
};

export const resetPaymentInfoAction: IBasketStoreActions['resetPaymentInfoAction'] = () => {
  basketStore.setState({
    step: 0,
    carrier: CARRIERS[0],
    promoCode: null,
    isFastDelivery: false,
    shippingDetails: null,
  });
};

export const setCarrierAction: IBasketStoreActions['setCarrierAction'] = (carrier) => {
  if (!carrier) {
    setFastDelivery(false);
  }

  basketStore.setState((state) => ({
    carrier,
    isFastDelivery: !carrier ? false : state.isFastDelivery,
    shippingDetails: !carrier ? null : state.shippingDetails,
  }));
};

export const setPromoCodeAction: IBasketStoreActions['setPromoCodeAction'] = (promoCode) => {
  const promo = PROMO_CODES.find(({ code }) => code === promoCode);

  if (!promo) {
    return;
  }

  basketStore.setState({ promoCode: promo });
};

export const resetPromoCodeAction: IBasketStoreActions['resetPromoCodeAction'] = () => {
  basketStore.setState({ promoCode: null });
};
