import { getPrice } from '@/shared/lib/helpers';
import { IIntlProps } from '@/shared/types';

export const COLUMNS: { intl: IIntlProps<`${'titles.'}${string}`>['intl']; }[] = [
  { intl: { label: 'titles.shippingMethod' } },
  { intl: { label: 'titles.processingTime' } },
  { intl: { label: 'titles.shippingTime' } },
  { intl: { label: 'titles.shippingCost' } },
];

export const DATA: { intl: IIntlProps<`${'texts.'}${string}`>['intl']; }[] = [
  { intl: { label: 'texts.spainDelivery' } },
  { intl: { label: 'texts.workingDays', values: { days: '1-2' } } },
  { intl: { label: 'texts.workingDays', values: { days: '2-4' } } },
  { intl: { label: 'texts.shippingCost', values: { cost: getPrice(5) } } },
];
