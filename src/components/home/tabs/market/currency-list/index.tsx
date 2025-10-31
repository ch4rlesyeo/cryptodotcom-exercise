import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { CurrencySelector } from '@/components/ui/currency/selector';
import { ICurrency } from '@/types/data/currencies';

import { MarketCurrencyListFavouriteMarker } from './favourite-marker';

export interface IMarketTabCurrenciesProps {
  currencies: ICurrency[];
}

const MarketTabCurrencies: FC<IMarketTabCurrenciesProps> = (props) => {
  const { currencies } = props;

  const renderItem: ListRenderItem<ICurrency> = useCallback(({ item }) => {
    return (
      <CurrencySelector
        currency={item}
        prefix={<MarketCurrencyListFavouriteMarker currency={item} />}
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

export default MarketTabCurrencies;
