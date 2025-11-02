import { createRef } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { usePagerViewEvents } from '@/utils/pagerview/use-pagerview-events';

import { useHomeMarketCategoryTabs } from '../category-tabs/hooks/use-category-tabs';
import { HOME_MARKET_CATEGORY_TABS } from '../category-tabs/store/category-tabs';

import AllCurrenciesView from './views/all';
import CrytoCurrenciesView from './views/crypto';
import FiatCurrenciesView from './views/fiat';

export const homeMarketCategoryContentsPagerRef = createRef<PagerView>();

const HomeMarketCategoryContentsView: FC = () => {
  const { pageIndex, setPageIndex } = useHomeMarketCategoryTabs();

  const { handlePageScroll, handlePageScrollStateChanged } = usePagerViewEvents(
    {
      currentPageIndex: pageIndex,
      onPageScroll: setPageIndex,
    }
  );

  return (
    <PagerView
      ref={homeMarketCategoryContentsPagerRef}
      className="flex-1"
      initialPage={0}
      onPageScroll={handlePageScroll}
      onPageScrollStateChanged={handlePageScrollStateChanged}
    >
      <View key={HOME_MARKET_CATEGORY_TABS.All.value} className="flex-1">
        <AllCurrenciesView />
      </View>
      <View key={HOME_MARKET_CATEGORY_TABS.Crypto.value} className="flex-1">
        <CrytoCurrenciesView />
      </View>
      <View key={HOME_MARKET_CATEGORY_TABS.Fiat.value} className="flex-1">
        <FiatCurrenciesView />
      </View>
    </PagerView>
  );
};

export default HomeMarketCategoryContentsView;
