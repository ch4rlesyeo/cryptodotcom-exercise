import { useFavouriteCurrencies } from '@/stores/use-favourite-currencies';
import type { IFavouritesTabProps } from '@/types/components/home/tabs/favourites';

import FavouriteCurrencyList from './currency-list';
import EmptyView from './empty-view';

const FavouritesTab: FC<IFavouritesTabProps> = (props) => {
  const { onGoToMarketPress } = props;

  const isEmptyList = useFavouriteCurrencies(
    (state) => state.favouriteCurrencies.length === 0
  );

  if (isEmptyList) {
    return <EmptyView onGoToMarketPress={onGoToMarketPress} />;
  }

  return <FavouriteCurrencyList />;
};

export default FavouritesTab;
