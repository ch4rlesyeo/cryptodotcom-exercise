import { CurrencyFavouriteMarker } from '@/components/ui/currency/favourite-marker';
import { useFavouriteCurrenciesStore } from '@/stores/use-favourite-currencies';
import { IFavouriteCurrencyListFavouriteMarkerProps } from '@/types/components/home/favourites/currency-list/favourite-marker';

const FavouriteCurrencyListFavouriteMarker: FC<
  IFavouriteCurrencyListFavouriteMarkerProps
> = (props) => {
  const { currency } = props;

  const removeFavouriteCurrency = useFavouriteCurrenciesStore(
    (state) => state.removeFavouriteCurrency
  );

  const handleFavouriteMarkerPress = () => {
    removeFavouriteCurrency(currency);
  };

  return (
    <CurrencyFavouriteMarker
      isFavourite={true}
      onPress={handleFavouriteMarkerPress}
    />
  );
};

export { FavouriteCurrencyListFavouriteMarker };
