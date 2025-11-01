import { createRef } from 'react';
import PagerView from 'react-native-pager-view';

import { useHomeMarketTabsStore } from '@/stores/use-home-market-tabs';

export const homeMarketTabsPagerRef = createRef<PagerView>();

export const useHomeMarketTabsPagerView = () => {
  const pageIndex = useHomeMarketTabsStore((state) => state.pageIndex);
  const setPageIndex = useHomeMarketTabsStore((state) => state.setPageIndex);

  const setHomeMarketTabsPage = (nextPage: number) => {
    homeMarketTabsPagerRef?.current?.setPage(nextPage);

    setPageIndex(nextPage);
  };

  return {
    homeMarketTabsPageIndex: pageIndex,
    setHomeMarketTabsPage,
    setHomeMarketTabsPageIndex: setPageIndex,
  };
};
