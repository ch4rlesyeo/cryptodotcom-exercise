import { create } from 'zustand';

import { EHomeMainTabIndex } from '@/types/components/home/tabs';
import {
  IHomeMainTab,
  IHomeMainTabsState,
  THomeMainTabsKey,
} from '@/types/store/use-home-main-tabs';

export const MAIN_TABS: Record<THomeMainTabsKey, IHomeMainTab> = {
  Favourites: {
    label: 'Favourites',
    value: EHomeMainTabIndex.FAVOURITES.toString(),
    pageIndex: EHomeMainTabIndex.FAVOURITES,
  },
  Market: {
    label: 'Market',
    value: EHomeMainTabIndex.MARKET.toString(),
    pageIndex: EHomeMainTabIndex.MARKET,
  },
};

export const useHomeMainTabsStore = create<IHomeMainTabsState>((set) => ({
  pageIndex: EHomeMainTabIndex.FAVOURITES,
  setPageIndex: (nextPageIndex: number) => {
    set({ pageIndex: nextPageIndex });
  },
}));
