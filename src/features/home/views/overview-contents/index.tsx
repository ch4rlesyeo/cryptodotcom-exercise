import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { usePagerViewEvents } from '@/utils/pagerview/use-pagerview-events';

import {
  homeOverviewContentsPagerRef,
  useHomeOverviewTabs,
} from '../overview-tabs/hooks/user-overview-tabs';
import { HOME_OVERVIEW_TABS } from '../overview-tabs/stores/overview-tabs';

import FavouritesView from './views/favourites';
import MarketView from './views/market';

const HomeOverviewContents: FC = () => {
  const { pageIndex, setPageIndex } = useHomeOverviewTabs();

  const { handlePageScroll, handlePageScrollStateChanged } = usePagerViewEvents(
    {
      currentPageIndex: pageIndex,
      onPageScroll: setPageIndex,
    }
  );

  return (
    <PagerView
      ref={homeOverviewContentsPagerRef}
      className="flex-1"
      initialPage={pageIndex}
      onPageScroll={handlePageScroll}
      onPageScrollStateChanged={handlePageScrollStateChanged}
    >
      <View key={HOME_OVERVIEW_TABS.Favourites.value} className="flex-1">
        <FavouritesView />
      </View>
      <View key={HOME_OVERVIEW_TABS.Market.value} className="flex-1">
        <MarketView />
      </View>
    </PagerView>
  );
};

export default HomeOverviewContents;
