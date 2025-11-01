import { ICurrency } from '@/types/data/currencies';

export enum EStorageKey {
  FAVOURITE_CURRENCIES = 'favouriteCurrencies',
}

export interface IStorageSchema {
  [EStorageKey.FAVOURITE_CURRENCIES]: ICurrency[];
}
