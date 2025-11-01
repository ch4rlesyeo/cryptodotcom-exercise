import { useFavouriteCurrenciesStore } from '@/stores/use-favourite-currencies';

import FavouriteCurrencyList from './currency-list';
import EmptyView from './empty-view';

const HomeFavourites: FC = () => {
  const isEmptyList = useFavouriteCurrenciesStore(
    (state) => state.favouriteCurrencies.length === 0
  );

  if (isEmptyList) {
    return <EmptyView />;
  }

  return <FavouriteCurrencyList />;
};

export default HomeFavourites;
