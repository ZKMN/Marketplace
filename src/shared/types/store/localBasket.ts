export interface ILocalBasketProduct {
  code: string;
  image: string;
  price: number;
  shoesType: string;
  priceInitial: number;
  discount: number;
  size?: { id: number; value: string; };
  color?: { id: number; value: string; };
  quantity: number;
  productId: string;
  available: number;
}

export interface ILocalBasketStore {
  products?: ILocalBasketProduct[];
}

export interface ILocalBasketStoreActions {
  resetBasketProductsAction: () => void;
  increaseProductQuantityAction: (id: string) => void;
  decreaseProductQuantityAction: (id: string) => void;
  addProductToLocalBasketAction: (data: ILocalBasketProduct) => void;
  editProductInLocalBasketAction: (data: ILocalBasketProduct) => void;
  removeProductFromLocalBasketAction: (id: string) => void;
}
