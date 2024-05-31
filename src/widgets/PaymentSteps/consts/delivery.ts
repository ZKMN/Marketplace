import { IFieldProps } from '@/shared/types';

import { ICarrier } from '../types';

export const ADDITIONAL_FIELD: IFieldProps = {
  type: IFieldProps.type.TEXT,
  name: 'additional',
  size: 'small',
  intl: { label: 'labels.additionalInformation' },
  multiline: true,
  maxRows: 3,
};

export const CUSTOMER_FIELDS: IFieldProps[] = [{
  type: IFieldProps.type.TEXT,
  name: 'firstName',
  intl: { label: 'labels.firstName' },
  required: true,
  md: 6,
}, {
  type: IFieldProps.type.TEXT,
  name: 'lastName',
  intl: { label: 'labels.lastName' },
  required: true,
  md: 6,
}, {
  type: IFieldProps.type.TEXT,
  name: 'email',
  intl: { label: 'labels.email' },
  required: true,
}, {
  type: IFieldProps.type.PHONE_NUMBER,
  name: 'phoneNumber',
  intl: { label: 'labels.phoneNumber' },
  required: true,
}];

export const ADDRESS_FIELDS: IFieldProps[] = [{
  type: IFieldProps.type.TEXT,
  name: 'postalCode',
  intl: { label: 'labels.postalCode' },
  required: true,
  xs: 4,
}, {
  type: IFieldProps.type.TEXT,
  name: 'city',
  intl: { label: 'labels.city' },
  required: true,
  xs: 8,
}, {
  type: IFieldProps.type.TEXT,
  name: 'street',
  intl: { label: 'labels.street' },
  required: true,
  md: 8,
  xs: 9,
}, {
  type: IFieldProps.type.TEXT,
  name: 'streetNumber',
  intl: { label: 'labels.streetNumber' },
  required: true,
  xs: 3,
  md: 4,
}];

export const PICKUP_INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  additional: '',
};

export const DELIVERY_INITIAL_VALUES = {
  ...PICKUP_INITIAL_VALUES,
  postalCode: '',
  city: '',
  street: '',
  streetNumber: '',
};

export const CARRIERS: ICarrier[] = [{
  id: 1,
  name: 'Correos',
  price: 5,
  image: '/images/correos-logo.jpeg',
}, {
  id: 2,
  name: 'MRW',
  price: 5,
  image: '/images/mrw-logo.png',
}];
