import { getPrice } from '@/shared/lib/helpers';

export const COLUMNS: { intl: { label: string; }; }[] = [
  { intl: { label: 'table.titles.shippingMethod' } },
  { intl: { label: 'table.titles.processingTime' } },
  { intl: { label: 'table.titles.shippingTime' } },
  { intl: { label: 'table.titles.shippingCost' } },
];

export const ROW_ONE: { intl: { label: string; values?: Record<string, unknown>; }; }[] = [
  { intl: { label: 'table.texts.spainDeliveryNormal' } },
  { intl: { label: 'table.texts.sameDay' } },
  { intl: { label: 'table.texts.workingDays', values: { days: '1-3' } } },
  { intl: { label: 'table.texts.shippingCost', values: { cost: `${getPrice(5)}-${getPrice(10)}` } } },
];
export const ROW_TWO: { intl: { label: string; values?: Record<string, unknown>; }; }[] = [
  { intl: { label: 'table.texts.spainDeliveryExpres' } },
  { intl: { label: 'table.texts.sameDay' } },
  { intl: { label: 'table.texts.workingDays', values: { days: '1-2' } } },
  { intl: { label: 'table.texts.shippingCost', values: { cost: `${getPrice(10)}-${getPrice(15)}` } } },
];
