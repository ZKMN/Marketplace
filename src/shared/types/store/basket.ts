import { IBasketResponse } from '../basket';

export interface IBasketStore {
  basket: IBasketResponse | null;
  isBasketLoading: boolean;
}

export interface IBasketStoreActions {
  initBasketSuccessAction: (data: IBasketResponse) => void;
}
