import { IBasketResponse } from '../basket';
import { TPromoCodes } from '../common';

export interface IBasketStore {
  step: number;
  basket: IBasketResponse | null;
  orderId: number | null;
  carrier: ICarrier | null;
  carriers: ICarrier[];
  promoCode: IPromoCode | null;
  isFastDelivery: boolean;
  isBasketLoading: boolean;
  shippingDetails: IShippingDetails | null;
}

export interface ICarrier {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IPromoCode {
  id: number;
  code: TPromoCodes;
  discountValue?: number;
  discountPercent?: number;
}

export interface IShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additional?: string;
  postalCode?: string;
  city?: string;
  street?: string;
  apNumber?: string;
  streetNumber?: string;
}

export interface IBasketStoreActions {
  incrStepAction: () => void;
  decrStepAction: () => void;
  resetBasketAction: () => void;
  resetPromoCodeAction: () => void;
  resetPaymentInfoAction: () => void;
  resetPaymentStoreAction: () => void;
  setFastDelivery: (isFastDelivery: boolean) => void;
  setOrderIdAction: (orderId: number) => void;
  setCarrierAction: (carrier: ICarrier | null) => void;
  setPromoCodeAction: (promoCode: TPromoCodes) => void;
  initBasketSuccessAction: (data: IBasketResponse) => void;
  setShippingDetailsAction: (details: IShippingDetails) => void;
}
