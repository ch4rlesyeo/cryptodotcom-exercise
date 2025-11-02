import { create } from 'zustand';

export enum EHomeOverviewTabs {
  FAVOURITES = 0,
  MARKET = 1,
}

export type THomeOverviewTabsKey = 'Favourites' | 'Market';

export interface IHomeOverviewTab {
  label: string;
  value: string;
  pageIndex: number;
}

export interface IHomeOverviewTabsState {
  pageIndex: number;
  setPageIndex: (nextPageIndex: number) => void;
}

export const HOME_OVERVIEW_TABS: Record<
  THomeOverviewTabsKey,
  IHomeOverviewTab
> = {
  Favourites: {
    label: 'Favourites',
    value: EHomeOverviewTabs.FAVOURITES.toString(),
    pageIndex: EHomeOverviewTabs.FAVOURITES,
  },
  Market: {
    label: 'Market',
    value: EHomeOverviewTabs.MARKET.toString(),
    pageIndex: EHomeOverviewTabs.MARKET,
  },
};

export const useHomeOverviewTabsStore = create<IHomeOverviewTabsState>(
  (set) => ({
    pageIndex: EHomeOverviewTabs.FAVOURITES,
    setPageIndex: (nextPageIndex: number) => {
      set({ pageIndex: nextPageIndex });
    },
  })
);
