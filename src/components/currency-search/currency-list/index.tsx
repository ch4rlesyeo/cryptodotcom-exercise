import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { MarketCurrencyListFavouriteMarker } from '@/components/home/tabs/market/currency-list/favourite-marker';
import { CurrencySelector } from '@/components/ui/currency/selector';
import { cryptoCurrencies, fiatCurrencies } from '@/data/currencies';
import type { ICurrencySearchCurrencyListProps } from '@/types/components/currency-search/currency-list';
import type { ICurrency } from '@/types/data/currencies';
import { searchCurrencyWithKeyword } from '@/utils/helpers/search/currency';

const CurrencySearchCurrencyList: FC<ICurrencySearchCurrencyListProps> = (
  props
) => {
  const { keyword } = props;

  const renderItem: ListRenderItem<ICurrency> = useCallback(({ item }) => {
    return (
      <CurrencySelector
        currency={item}
        prefix={<MarketCurrencyListFavouriteMarker currency={item} />}
      />
    );
  }, []);

  const allCurrencies = [...cryptoCurrencies, ...fiatCurrencies]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((currency) => searchCurrencyWithKeyword(keyword, currency));

  return (
    <FlatList
      data={keyword === '' ? [] : allCurrencies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CurrencySearchCurrencyList;
