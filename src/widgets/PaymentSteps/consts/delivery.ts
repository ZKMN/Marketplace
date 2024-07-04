import { IFieldProps } from '@/shared/types';

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
}, {
  type: IFieldProps.type.TEXT,
  name: 'streetNumber',
  intl: { label: 'labels.streetNumber' },
  required: true,
  xs: 6,
}, {
  type: IFieldProps.type.TEXT,
  name: 'apNumber',
  intl: { label: 'labels.apNumber' },
  xs: 6,
}];

export const PICKUP_INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  additional: '',
};

type TDELIVERY_INITIAL_VALUES = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additional?: string;
  postalCode?: string;
  city?: string;
  street?: string;
  streetNumber?: string;
  apNumber?: string | null;
};

export const DELIVERY_INITIAL_VALUES: TDELIVERY_INITIAL_VALUES = {
  ...PICKUP_INITIAL_VALUES,
  postalCode: '',
  city: '',
  street: '',
  streetNumber: '',
  apNumber: '',
};
