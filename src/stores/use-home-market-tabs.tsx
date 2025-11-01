import { create } from 'zustand';

import { EHomeMarketTabIndex } from '@/types/components/home/market/tabs';
import {
  IHomeMarketTab,
  IHomeMarketTabsState,
  THomeMarketTabsKey,
} from '@/types/store/use-home-market-tabs';

export const MARKET_TABS: Record<THomeMarketTabsKey, IHomeMarketTab> = {
  All: {
    label: 'All',
    value: EHomeMarketTabIndex.ALL.toString(),
    pageIndex: EHomeMarketTabIndex.ALL,
  },
  Crypto: {
    label: 'Crypto',
    value: EHomeMarketTabIndex.CRYPTO.toString(),
    pageIndex: EHomeMarketTabIndex.CRYPTO,
  },
  Fiat: {
    label: 'Fiat',
    value: EHomeMarketTabIndex.FIAT.toString(),
    pageIndex: EHomeMarketTabIndex.FIAT,
  },
};

export const useHomeMarketTabsStore = create<IHomeMarketTabsState>((set) => ({
  pageIndex: EHomeMarketTabIndex.ALL,
  setPageIndex: (nextPageIndex: number) => {
    set({ pageIndex: nextPageIndex });
  },
}));
