import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { ICurrency } from '@/models/currency';
import { EStorageKey, storage } from '@/utils/storage';

export interface IFavouriteCurrenciesState {
  favouriteCurrencies: ICurrency[];
  addFavouriteCurrency: (newCurrency: ICurrency) => void;
  removeFavouriteCurrency: (selectedCurrency: ICurrency) => void;
}

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
      removeFavouriteCurrency: (selectedCurrency: ICurrency) => {
        const updatedCurrencies = get().favouriteCurrencies.filter(
          (item) => item.id !== selectedCurrency.id
        );

        set({ favouriteCurrencies: updatedCurrencies });
      },
    }),
    {
      name: EStorageKey.FAVOURITE_CURRENCIES,
      storage: createJSONStorage(() => ({
        getItem: async (name) => {
          const data = await storage.get(name as EStorageKey);
          return data ? JSON.stringify(data) : null;
        },
        setItem: async (name, value) => {
          await storage.set(name as EStorageKey, JSON.parse(value));
        },
        removeItem: async (name: string) => {
          await storage.remove(name as EStorageKey);
        },
      })),
      partialize: (state) => ({
        favouriteCurrencies: state.favouriteCurrencies,
      }),
    }
  )
);
