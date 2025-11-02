import { CurrencyFavouriteMarker } from '@/components/currency/favourite-marker';
import { ICurrency } from '@/models/currency';

import { useFavouriteCurrenciesStore } from '../../../store/use-favourite-currencies';

export interface IFavouriteCurrencyListFavouriteMarkerProps {
  currency: ICurrency;
}

const HomeFavouritesCurrencyListFavouriteMarker: FC<
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

export { HomeFavouritesCurrencyListFavouriteMarker };
