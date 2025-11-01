import { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { CurrencySelector } from '@/components/ui/currency/selector';
import { useFavouriteCurrenciesStore } from '@/stores/use-favourite-currencies';
import { ICurrency } from '@/types/data/currencies';

import { FavouriteCurrencyListFavouriteMarker } from './favourite-marker';

const FavouritesTabCurrencyList: FC = () => {
  const favouriteCurrencies = useFavouriteCurrenciesStore(
    (state) => state.favouriteCurrencies
  );

  const renderItem: ListRenderItem<ICurrency> = useCallback(({ item }) => {
    return (
      <CurrencySelector
        currency={item}
        suffix={<FavouriteCurrencyListFavouriteMarker currency={item} />}
      />
    );
  }, []);

  return (
    <FlatList
      data={favouriteCurrencies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FavouritesTabCurrencyList;
