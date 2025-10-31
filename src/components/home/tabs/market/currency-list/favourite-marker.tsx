import { CurrencyFavouriteMarker } from '@/components/ui/currency/favourite-marker';
import { useFavouriteCurrencies } from '@/stores/use-favourite-currencies';
import type { IMarketCurrencyListFavouriteMarkerProps } from '@/types/components/home/tabs/market/currency-list/favourite-marker';

const MarketCurrencyListFavouriteMarker: FC<
  IMarketCurrencyListFavouriteMarkerProps
> = (props) => {
  const { currency } = props;
  const { id } = currency;

  const addFavouriteCurrency = useFavouriteCurrencies(
    (state) => state.addFavouriteCurrency
  );

  const isFavourite = useFavouriteCurrencies((state) =>
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

export { MarketCurrencyListFavouriteMarker };
