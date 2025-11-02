import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { CurrencySelector } from '@/components/currency/selector';
import { ICurrency } from '@/models/currency';

import { useFavouriteCurrenciesStore } from '../../store/use-favourite-currencies';

import { HomeFavouritesCurrencyListFavouriteMarker } from './fragments/favourite-marker';

const HomeFavouritesCurrencyList: FC = () => {
  const favouriteCurrencies = useFavouriteCurrenciesStore(
    (state) => state.favouriteCurrencies
  );

  const renderItem: ListRenderItem<ICurrency> = useCallback(({ item }) => {
    return (
      <CurrencySelector
        currency={item}
        suffix={<HomeFavouritesCurrencyListFavouriteMarker currency={item} />}
      />
    );
  }, []);

  const setKeyExtractor = (item: ICurrency) => item.id;

  return (
    <FlatList
      data={favouriteCurrencies}
      renderItem={renderItem}
      keyExtractor={setKeyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeFavouritesCurrencyList;
