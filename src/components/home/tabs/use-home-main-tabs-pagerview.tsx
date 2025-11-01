import { createRef } from 'react';
import PagerView from 'react-native-pager-view';

import { useHomeMainTabsStore } from '@/stores/use-home-main-tabs';

export const homeMainTabsPagerRef = createRef<PagerView>();

export const useHomeMainTabsPagerView = () => {
  const pageIndex = useHomeMainTabsStore((state) => state.pageIndex);
  const setPageIndex = useHomeMainTabsStore((state) => state.setPageIndex);

  const setHomeMainTabsPage = (nextPage: number) => {
    homeMainTabsPagerRef?.current?.setPage(nextPage);

    setPageIndex(nextPage);
  };

  return {
    homeMainTabsPageIndex: pageIndex,
    setHomeMainTabsPage,
    setHomeMainTabsPageIndex: setPageIndex,
  };
};
