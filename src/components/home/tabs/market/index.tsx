import { useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

import { Block } from '@/components/ui/block';
import { Tabs } from '@/components/ui/tabs';
import type { ITabOption } from '@/types/components/ui/tabs/option';

import AllCurrencies from './all';
import CryptoCurrencies from './crypto';
import FiatCurrencies from './fiat';

const currencyGroupTabOptions: ITabOption[] = [
  {
    label: 'All',
    value: 'all',
    pageIndex: 0,
  },
  {
    label: 'Crypto',
    value: 'crypto',
    pageIndex: 1,
  },
  {
    label: 'Fiat',
    value: 'fiat',
    pageIndex: 2,
  },
];

const MarketTab: FC = () => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleTabOptionChange = (_value: string, pageIndex: number) => {
    setCurrentPage(pageIndex);
    pagerRef?.current?.setPage(pageIndex);
  };

  return (
    <View className="flex-1">
      <Block className="my-2">
        <Tabs
          size="small"
          value={currencyGroupTabOptions[currentPage].value}
          options={currencyGroupTabOptions}
          onChangeTab={handleTabOptionChange}
        />
      </Block>
      <PagerView
        ref={pagerRef}
        className="flex-1"
        initialPage={0}
        overdrag={false}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        <View key={currencyGroupTabOptions[0].value} className="flex-1">
          <AllCurrencies />
        </View>
        <View key={currencyGroupTabOptions[1].value} className="flex-1">
          <CryptoCurrencies />
        </View>
        <View key={currencyGroupTabOptions[2].value} className="flex-1">
          <FiatCurrencies />
        </View>
      </PagerView>
    </View>
  );
};

export default MarketTab;
