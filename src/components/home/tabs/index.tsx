import { useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { Block } from '@/components/ui/block';
import { Tabs } from '@/components/ui/tabs';
import type { ITabOption } from '@/types/components/ui/tabs/option';

import FavouritesTab from './favourites';
import MarketTab from './market';

const mainTabOptions: ITabOption[] = [
  {
    label: 'Favourites',
    value: 'favourites',
    pageIndex: 0,
  },
  {
    label: 'Market',
    value: 'market',
    pageIndex: 1,
  },
];

const HomeTabs: FC = () => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleTabOptionChange = (_value: string, pageIndex: number) => {
    setCurrentPage(pageIndex);
    pagerRef?.current?.setPage(pageIndex);
  };

  const handleGoToMarketPress = () => {
    setCurrentPage(mainTabOptions[1].pageIndex);
    pagerRef?.current?.setPage(mainTabOptions[1].pageIndex);
  };

  return (
    <View className="flex-1">
      <Block className="mt-3 border-b border-slate-200">
        <Tabs
          value={mainTabOptions[currentPage].value}
          options={mainTabOptions}
          onChangeTab={handleTabOptionChange}
        />
      </Block>
      <PagerView
        ref={pagerRef}
        className="flex-1"
        initialPage={0}
        overdrag={false}
        scrollEnabled={false}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        <View key={mainTabOptions[0].value} className="flex-1">
          <FavouritesTab onGoToMarketPress={handleGoToMarketPress} />
        </View>
        <View key={mainTabOptions[1].value} className="flex-1">
          <MarketTab />
        </View>
      </PagerView>
    </View>
  );
};

export default HomeTabs;
