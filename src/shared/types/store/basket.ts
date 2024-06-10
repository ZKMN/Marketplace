import { IBasketResponse } from '../basket';

export interface IBasketStore {
  basket: IBasketResponse | null;
  orderId: number | null;
  isBasketLoading: boolean;
}

export interface IBasketStoreActions {
  resetBasketAction: () => void;
  setOrderIdAction: (orderId: number) => void;
  initBasketSuccessAction: (data: IBasketResponse) => void;
}
