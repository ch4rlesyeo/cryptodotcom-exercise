import { CurrencyFavouriteMarker } from '@/components/ui/currency/favourite-marker';
import { useFavouriteCurrencies } from '@/stores/use-favourite-currencies';
import type { ICurrency } from '@/types/data/currencies';

export interface IFavouriteCurrencyListFavouriteMarkerProps {
  currency: ICurrency;
}

const FavouriteCurrencyListFavouriteMarker: FC<
  IFavouriteCurrencyListFavouriteMarkerProps
> = (props) => {
  const { currency } = props;

  const removeFavouriteCurrency = useFavouriteCurrencies(
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
