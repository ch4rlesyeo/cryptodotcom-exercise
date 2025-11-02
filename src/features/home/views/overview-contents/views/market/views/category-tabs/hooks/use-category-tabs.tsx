import { createRef } from 'react';
import PagerView from 'react-native-pager-view';

import { useHomeMarketCategoryTabsStore } from '../store/category-tabs';

export const homeMarketCategoryContentsPagerRef = createRef<PagerView>();

export const useHomeMarketCategoryTabs = () => {
  const pageIndex = useHomeMarketCategoryTabsStore((state) => state.pageIndex);
  const setPageIndex = useHomeMarketCategoryTabsStore(
    (state) => state.setPageIndex
  );

  const setPage = (nextPage: number) => {
    homeMarketCategoryContentsPagerRef?.current?.setPage(nextPage);

    setPageIndex(nextPage);
  };

  return {
    pageIndex,
    setPage,
    setPageIndex,
  };
};
