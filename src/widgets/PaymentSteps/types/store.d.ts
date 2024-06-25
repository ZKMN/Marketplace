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

export interface ICheckoutStore {
  step: number;
  carrier: ICarrier | null;
  shippingDetails: IShippingDetails | null;
}

export interface ICheckoutStoreActions {
  incrStepAction: () => void;
  decrStepAction: () => void;
  setCarrierAction: (carrier: ICarrier | null) => void;
  resetPaymentStoreAction: () => void;
  setShippingDetailsAction: (details: IShippingDetails) => void;
}
