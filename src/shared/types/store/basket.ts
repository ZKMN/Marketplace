import { IBasketResponse } from '../basket';

export interface IBasketStore {
  step: number;
  basket: IBasketResponse | null;
  orderId: number | null;
  carrier: ICarrier | null;
  carriers: ICarrier[];
  isBasketLoading: boolean;
  shippingDetails: IShippingDetails | null;
}

export interface ICarrier {
  id: number;
  name: string;
  price: number;
  image: string;
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
  resetPaymentInfoAction: () => void;
  resetPaymentStoreAction: () => void;
  setOrderIdAction: (orderId: number) => void;
  setCarrierAction: (carrier: ICarrier | null) => void;
  initBasketSuccessAction: (data: IBasketResponse) => void;
  setShippingDetailsAction: (details: IShippingDetails) => void;
}
