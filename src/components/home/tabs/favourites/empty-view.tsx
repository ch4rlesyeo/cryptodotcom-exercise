import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { clsx } from 'clsx';
import { Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';
import type { IFavouritesEmptyViewProps } from '@/types/components/home/tabs/favourites/empty-view';

const FavouritesEmptyView: FC<IFavouritesEmptyViewProps> = (props) => {
  const { onGoToMarketPress } = props;

  return (
    <View className={clsx('h-1/2', 'items-center justify-center')}>
      <Ionicons name="telescope-outline" size={32} className="text-slate-400" />
      <Text className="pt-4 text-slate-400">Nothing here yet</Text>
      <Text className={clsx('px-14', 'py-2', 'text-center', 'text-slate-400')}>
        Add some favourites to get started.
      </Text>
      <Pressable onPress={onGoToMarketPress} className="flex-row items-center">
        <Text
          className={clsx(
            'font-rubik-medium',
            'text-blue-500',
            'text-sm',
            'mr-1 mt-1'
          )}
        >
          Explore Market
        </Text>
        <Feather name="arrow-right" size={16} className="text-blue-500" />
      </Pressable>
    </View>
  );
};

export default FavouritesEmptyView;
