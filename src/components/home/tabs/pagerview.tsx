import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { MAIN_TABS } from '@/stores/use-home-main-tabs';
import { usePagerViewEvents } from '@/utils/pagerview/use-pagerview-events';

import FavouritesTab from '../favourites';
import MarketTab from '../market';

import {
  homeMainTabsPagerRef,
  useHomeMainTabsPagerView,
} from './use-home-main-tabs-pagerview';

const HomeMainTabsPageView: FC = () => {
  const { homeMainTabsPageIndex, setHomeMainTabsPageIndex } =
    useHomeMainTabsPagerView();

  const { handlePageScroll, handlePageScrollStateChanged } = usePagerViewEvents(
    {
      currentPageIndex: homeMainTabsPageIndex,
      onPageScroll: setHomeMainTabsPageIndex,
    }
  );

  return (
    <PagerView
      ref={homeMainTabsPagerRef}
      className="flex-1"
      initialPage={homeMainTabsPageIndex}
      onPageScroll={handlePageScroll}
      onPageScrollStateChanged={handlePageScrollStateChanged}
    >
      <View key={MAIN_TABS.Favourites.value} className="flex-1">
        <FavouritesTab />
      </View>
      <View key={MAIN_TABS.Market.value} className="flex-1">
        <MarketTab />
      </View>
    </PagerView>
  );
};

export default HomeMainTabsPageView;
