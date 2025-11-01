import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ICurrency } from '@/types/data/currencies';
import { type IFavouriteCurrenciesState } from '@/types/store/use-favourite-currencies';
import { EStorageKey } from '@/types/utils/storage';
import { storage } from '@/utils/storage';

export const useFavouriteCurrenciesStore = create<IFavouriteCurrenciesState>()(
  persist(
    (set, get) => ({
      favouriteCurrencies: [],
      addFavouriteCurrency: (newCurrency: ICurrency) => {
        const favouriteCurrencies = get().favouriteCurrencies;

        if (favouriteCurrencies.some((item) => item.id === newCurrency.id)) {
          return;
        }

        const updatedCurrencies = [newCurrency, ...favouriteCurrencies];

        set({ favouriteCurrencies: updatedCurrencies });
      },
      removeFavouriteCurrency: (newCurrency: ICurrency) => {
        const updatedCurrencies = get().favouriteCurrencies.filter(
          (item) => item.id !== newCurrency.id
        );

        set({ favouriteCurrencies: updatedCurrencies });
      },
    }),
    {
      name: EStorageKey.FAVOURITE_CURRENCIES,
      storage: createJSONStorage(() => ({
        getItem: (name) => {
          const data = storage.get(name as EStorageKey);

          return data ? JSON.stringify(data) : null;
        },
        setItem: (name, value) => {
          storage.set(name as EStorageKey, JSON.parse(value));
        },
        removeItem: (name: string) => {
          storage.remove(name as EStorageKey);
        },
      })),
      partialize: (state) => ({
        favouriteCurrencies: state.favouriteCurrencies,
      }),
    }
  )
);
