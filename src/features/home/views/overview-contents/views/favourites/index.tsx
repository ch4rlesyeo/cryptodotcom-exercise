import { useFavouriteCurrenciesStore } from './store/use-favourite-currencies';
import CurrencyListView from './views/currency-list';
import EmptyView from './views/empty-list';

const HomeFavourites: FC = () => {
  const isEmptyList = useFavouriteCurrenciesStore(
    (state) => state.favouriteCurrencies.length === 0
  );

  if (isEmptyList) {
    return <EmptyView />;
  }

  return <CurrencyListView />;
};

export default HomeFavourites;
