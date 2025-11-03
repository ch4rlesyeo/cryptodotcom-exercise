import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';

export interface ICurrencyFavouriteMarkerProps {
  className?: string;
  isFavourite?: boolean;
  onPress: () => void;
}

export enum ECurrencyFavouriteMarker {
  ICON = 'marker-icon',
}

const CurrencyFavouriteMarker: FC<ICurrencyFavouriteMarkerProps> = (props) => {
  const { className, isFavourite, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons
        testID={ECurrencyFavouriteMarker.ICON}
        name={isFavourite ? 'pin-off-outline' : 'pin-outline'}
        size={20}
        className={twMerge('text-slate-400', className)}
      />
    </Pressable>
  );
};

export { CurrencyFavouriteMarker };
