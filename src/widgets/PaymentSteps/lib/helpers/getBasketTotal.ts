import { IBasketStore } from '@/shared/types';

export const getBasketTotal = ({
  basket,
  carrier,
  promoCode,
}: {
  basket: IBasketStore['basket'];
  carrier: IBasketStore['carrier'];
  promoCode: IBasketStore['promoCode'];
}) => {
  if (!basket) {
    return 0;
  }

  let { total } = basket;

  if (promoCode?.discountPercent) {
    total = basket.total - (basket.total * (promoCode.discountPercent / 100));
  }

  if (promoCode?.discountValue && !promoCode?.discountPercent) {
    total = basket.total - promoCode.discountValue;
  }

  if (carrier?.price) {
    total += carrier.price;
  }

  const amount = total.toFixed(2);

  return Number(amount);
};
