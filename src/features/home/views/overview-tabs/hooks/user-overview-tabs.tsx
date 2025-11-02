import { createRef } from 'react';
import PagerView from 'react-native-pager-view';

import { useHomeOverviewTabsStore } from '../stores/overview-tabs';

export const homeOverviewContentsPagerRef = createRef<PagerView>();

export const useHomeOverviewTabs = () => {
  const pageIndex = useHomeOverviewTabsStore((state) => state.pageIndex);
  const setPageIndex = useHomeOverviewTabsStore((state) => state.setPageIndex);

  const setPage = (nextPage: number) => {
    homeOverviewContentsPagerRef?.current?.setPage(nextPage);

    setPageIndex(nextPage);
  };

  return {
    pageIndex,
    setPage,
    setPageIndex,
  };
};
