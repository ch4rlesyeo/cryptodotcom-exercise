import type { ICurrency } from '@/types/data/currencies';

export interface IFavouriteCurrenciesState {
  favouriteCurrencies: ICurrency[];
  addFavouriteCurrency: (newCurrency: ICurrency) => void;
  removeFavouriteCurrency: (newCurrency: ICurrency) => void;
}
