import { CurrencyFavouriteMarker } from '@/components/currency/favourite-marker';
import { ICurrency } from '@/models/currency';

import { useFavouriteCurrenciesStore } from '../../../../../favourites/store/use-favourite-currencies';

export interface IHomeMarketCurrencyListFavouriteMarkerProps {
  currency: ICurrency;
}

const HomeMarketCurrencyListFavouriteMarker: FC<
  IHomeMarketCurrencyListFavouriteMarkerProps
> = (props) => {
  const { currency } = props;
  const { id } = currency;

  const addFavouriteCurrency = useFavouriteCurrenciesStore(
    (state) => state.addFavouriteCurrency
  );

  const isFavourite = useFavouriteCurrenciesStore((state) =>
    state.favouriteCurrencies.some((favCurrency) => favCurrency.id === id)
  );

  const handleFavouriteMarkerPress = () => {
    addFavouriteCurrency(currency);
  };

  if (isFavourite) {
    return null;
  }

  return <CurrencyFavouriteMarker onPress={handleFavouriteMarkerPress} />;
};

export { HomeMarketCurrencyListFavouriteMarker };
