import { homeOverviewContentsPagerRef } from '../../overview-contents';
import { useHomeOverviewTabsStore } from '../stores/overview-tabs';

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
