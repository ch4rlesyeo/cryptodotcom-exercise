import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';

import type { ICurrencyFavouriteMarkerProps } from '@/types/components/ui/currency/favourite-marker';

const CurrencyFavouriteMarker: FC<ICurrencyFavouriteMarkerProps> = (props) => {
  const { className, isFavourite, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons
        name={isFavourite ? 'pin-off-outline' : 'pin-outline'}
        size={20}
        className={twMerge('text-slate-400', className)}
      />
    </Pressable>
  );
};

export { CurrencyFavouriteMarker };
