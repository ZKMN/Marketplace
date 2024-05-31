import { ILocalBasketStoreActions } from '@/shared/types';

import { localBasketStore } from '.';

import { handleOverrideStorage } from '../../handlers';

export const addProductToLocalBasketAction: ILocalBasketStoreActions['addProductToLocalBasketAction'] = (product) => {
  localBasketStore.setState((state) => {
    const products = state.products || [];

    const productIndex = products.findIndex(({ productId }) => productId === product.productId);

    if (productIndex > -1) {
      products.splice(productIndex, 1, product);
    } else {
      products.push(product);
    }

    handleOverrideStorage({ products });

    return { products: [...products] };
  });
};

export const removeProductFromLocalBasketAction: ILocalBasketStoreActions['removeProductFromLocalBasketAction'] = (prodId) => {
  localBasketStore.setState((state) => {
    let products = state.products || [];

    products = products.filter(({ productId }) => productId !== prodId);

    handleOverrideStorage({ products });

    return { products: [...products] };
  });
};

export const increaseProductQuantityAction: ILocalBasketStoreActions['increaseProductQuantityAction'] = (prodId) => {
  localBasketStore.setState((state) => {
    const products = state.products || [];

    const productIndex = products.findIndex(({ productId }) => productId === prodId);

    if (productIndex > -1) {
      products.splice(productIndex, 1, { ...products[productIndex], quantity: products[productIndex].quantity += 1 });
    }

    handleOverrideStorage({ products });

    return { products: [...products] };
  });
};

export const decreaseProductQuantityAction: ILocalBasketStoreActions['decreaseProductQuantityAction'] = (prodId) => {
  localBasketStore.setState((state) => {
    const products = state.products || [];

    const productIndex = products.findIndex(({ productId }) => productId === prodId);

    if (productIndex > -1) {
      products.splice(productIndex, 1, { ...products[productIndex], quantity: products[productIndex].quantity -= 1 });
    }

    handleOverrideStorage({ products });

    return { products: [...products] };
  });
};

export const resetBasketProductsAction: ILocalBasketStoreActions['resetBasketProductsAction'] = () => {
  handleOverrideStorage({ products: undefined });

  localBasketStore.setState({ products: [] });
};
