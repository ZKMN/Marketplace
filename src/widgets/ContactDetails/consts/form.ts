import { IFieldProps } from '@/shared/types';

export const FIELDS: IFieldProps[] = [{
  type: IFieldProps.type.TEXT,
  name: 'subject',
  intl: { label: 'labels.subject' },
  required: true,
}, {
  type: IFieldProps.type.TEXT,
  name: 'email',
  intl: { label: 'labels.email' },
  required: true,
}, {
  type: IFieldProps.type.TEXT,
  name: 'message',
  intl: { label: 'labels.message' },
  required: true,
  multiline: true,
  maxRows: 3,
}];
