import { CurrencyFavouriteMarker } from '@/components/ui/currency/favourite-marker';
import { useFavouriteCurrenciesStore } from '@/stores/use-favourite-currencies';
import { IMarketCurrencyListFavouriteMarkerProps } from '@/types/components/home/market/currency-list/favourite-marker';

const MarketCurrencyListFavouriteMarker: FC<
  IMarketCurrencyListFavouriteMarkerProps
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

export { MarketCurrencyListFavouriteMarker };
