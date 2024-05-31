import { checkoutStore, checkoutStoreValues } from './checkoutStore';

import { ICheckoutStoreActions } from '../../types';

export const setCarrierAction: ICheckoutStoreActions['setCarrierAction'] = (carrier) => {
  checkoutStore.setState((state) => ({
    carrier,
    shippingDetails: !carrier ? null : state.shippingDetails,
  }));
};

export const setShippingDetailsAction: ICheckoutStoreActions['setShippingDetailsAction'] = (shippingDetails) => {
  checkoutStore.setState({ shippingDetails });
};
export const incrStepAction: ICheckoutStoreActions['incrStepAction'] = () => {
  checkoutStore.setState(({ step }) => ({ step: step + 1 }));
};
export const decrStepAction: ICheckoutStoreActions['decrStepAction'] = () => {
  checkoutStore.setState(({ step }) => ({ step: step - 1 }));
};
export const resetPaymentStoreAction: ICheckoutStoreActions['resetPaymentStoreAction'] = () => {
  checkoutStore.setState(checkoutStoreValues);
};
