import { Dispatch } from 'react';

export interface IValueChange {
  value: string;
  onChange: Dispatch<string>;
}

export type TLanguages = 'es' | 'en';
