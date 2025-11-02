import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { CurrencySelector } from '@/components/currency/selector';
import { ICurrency } from '@/models/currency';

import { HomeMarketCurrencyListFavouriteMarker } from './favourite-marker';

export interface IHomeMarketCurrencyListProps {
  currencies: ICurrency[];
}

const HomeMarketCurrencyList: FC<IHomeMarketCurrencyListProps> = (props) => {
  const { currencies } = props;

  const renderItem: ListRenderItem<ICurrency> = useCallback(({ item }) => {
    return (
      <CurrencySelector
        currency={item}
        suffix={<HomeMarketCurrencyListFavouriteMarker currency={item} />}
      />
    );
  }, []);

  return (
    <FlatList
      data={currencies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeMarketCurrencyList;
