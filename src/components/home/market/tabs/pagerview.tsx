import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { MARKET_TABS } from '@/stores/use-home-market-tabs';
import { usePagerViewEvents } from '@/utils/pagerview/use-pagerview-events';

import AllCurrencies from './all';
import CryptoCurrencies from './crypto';
import FiatCurrencies from './fiat';
import {
  homeMarketTabsPagerRef,
  useHomeMarketTabsPagerView,
} from './use-home-market-tabs-pagerview';

const HomeMainTabsPageView: FC = () => {
  const { homeMarketTabsPageIndex, setHomeMarketTabsPageIndex } =
    useHomeMarketTabsPagerView();

  const { handlePageScroll, handlePageScrollStateChanged } = usePagerViewEvents(
    {
      currentPageIndex: homeMarketTabsPageIndex,
      onPageScroll: setHomeMarketTabsPageIndex,
    }
  );

  return (
    <PagerView
      ref={homeMarketTabsPagerRef}
      className="flex-1"
      initialPage={0}
      onPageScroll={handlePageScroll}
      onPageScrollStateChanged={handlePageScrollStateChanged}
    >
      <View key={MARKET_TABS.All.value} className="flex-1">
        <AllCurrencies />
      </View>
      <View key={MARKET_TABS.Crypto.value} className="flex-1">
        <CryptoCurrencies />
      </View>
      <View key={MARKET_TABS.Fiat.value} className="flex-1">
        <FiatCurrencies />
      </View>
    </PagerView>
  );
};

export default HomeMainTabsPageView;
