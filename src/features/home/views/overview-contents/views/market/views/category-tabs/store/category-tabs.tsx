import { create } from 'zustand';

export enum EHomeMarketCategoryTabIndex {
  ALL = 0,
  CRYPTO = 1,
  FIAT = 2,
}

export type THomeMarketCategoryTabsKey = 'All' | 'Crypto' | 'Fiat';

export interface IHomeMarketCategoryTab {
  label: string;
  value: string;
  pageIndex: number;
}

export interface IHomeMarketCategoryTabsState {
  pageIndex: number;
  setPageIndex: (nextPageIndex: number) => void;
}

export const HOME_MARKET_CATEGORY_TABS: Record<
  THomeMarketCategoryTabsKey,
  IHomeMarketCategoryTab
> = {
  All: {
    label: 'All',
    value: EHomeMarketCategoryTabIndex.ALL.toString(),
    pageIndex: EHomeMarketCategoryTabIndex.ALL,
  },
  Crypto: {
    label: 'Crypto',
    value: EHomeMarketCategoryTabIndex.CRYPTO.toString(),
    pageIndex: EHomeMarketCategoryTabIndex.CRYPTO,
  },
  Fiat: {
    label: 'Fiat',
    value: EHomeMarketCategoryTabIndex.FIAT.toString(),
    pageIndex: EHomeMarketCategoryTabIndex.FIAT,
  },
};

export const useHomeMarketCategoryTabsStore =
  create<IHomeMarketCategoryTabsState>((set) => ({
    pageIndex: EHomeMarketCategoryTabIndex.ALL,
    setPageIndex: (nextPageIndex: number) => {
      set({ pageIndex: nextPageIndex });
    },
  }));
