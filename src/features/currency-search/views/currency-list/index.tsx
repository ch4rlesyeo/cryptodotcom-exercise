import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { CurrencySelector } from '@/components/currency/selector';
import { cryptoCurrencies, fiatCurrencies } from '@/constants/currencies';
import { HomeMarketCurrencyListFavouriteMarker } from '@/features/home/views/overview-contents/views/market/views/category-contents/views/fragments/favourite-marker';
import { ICurrency } from '@/models/currency';
import { searchCurrencyWithKeyword } from '@/utils/helpers/search/currency';

import CurrencySearchEmptyList from './views/empty-list';

export interface ICurrencySearchCurrencyListProps {
  keyword: string;
}

const CurrencySearchCurrencyList: FC<ICurrencySearchCurrencyListProps> = (
  props
) => {
  const { keyword } = props;

  const renderItem: ListRenderItem<ICurrency> = useCallback(({ item }) => {
    return (
      <CurrencySelector
        currency={item}
        suffix={<HomeMarketCurrencyListFavouriteMarker currency={item} />}
      />
    );
  }, []);

  const allCurrencies = [...cryptoCurrencies, ...fiatCurrencies]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((currency) => searchCurrencyWithKeyword(keyword, currency));

  if (keyword === '') {
    return null;
  }

  return (
    <FlatList
      data={keyword === '' ? [] : allCurrencies}
      renderItem={renderItem}
      contentContainerClassName="grow"
      ListEmptyComponent={<CurrencySearchEmptyList />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CurrencySearchCurrencyList;
