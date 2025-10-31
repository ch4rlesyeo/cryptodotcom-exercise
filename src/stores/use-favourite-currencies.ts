import { create } from 'zustand';

import type { ICurrency } from '@/types/data/currencies';
import type { IFavouriteCurrenciesState } from '@/types/store/use-favourite-currencies';

export const useFavouriteCurrencies = create<IFavouriteCurrenciesState>(
  (set) => ({
    favouriteCurrencies: [],
    addFavouriteCurrency: (newCurrency: ICurrency) =>
      set((state) => {
        const favouriteCurrencies = state.favouriteCurrencies;

        if (favouriteCurrencies.some((item) => item.id === newCurrency.id)) {
          return {
            favouriteCurrencies,
          };
        }

        return {
          favouriteCurrencies: [newCurrency, ...state.favouriteCurrencies],
        };
      }),
    removeFavouriteCurrency: (newCurrency: ICurrency) =>
      set((state) => {
        const updatedCurrencies = state.favouriteCurrencies.filter(
          (item) => item.id !== newCurrency.id
        );

        return {
          favouriteCurrencies: updatedCurrencies,
        };
      }),
  })
);
