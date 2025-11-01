import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { clsx } from 'clsx';
import { Pressable } from 'react-native';

import { EmptyView } from '@/components/ui/empty-view';
import { Text } from '@/components/ui/text';
import { MAIN_TABS } from '@/stores/use-home-main-tabs';

import { useHomeMainTabsPagerView } from '../tabs/use-home-main-tabs-pagerview';

const HomeFavouritesEmptyView: FC = () => {
  const { setHomeMainTabsPage } = useHomeMainTabsPagerView();

  const handleGoToMarketTab = () => {
    setHomeMainTabsPage(MAIN_TABS.Market.pageIndex);
  };

  return (
    <EmptyView
      primaryText="Nothing here yet"
      secondaryText="Add some favourites to get started."
      icon={
        <Ionicons
          name="telescope-outline"
          size={36}
          className="text-slate-400"
        />
      }
      footer={
        <Pressable
          onPress={handleGoToMarketTab}
          className="flex-row items-center"
        >
          <Text
            className={clsx(
              'font-medium',
              'text-blue-500',
              'text-sm',
              'py-1',
              'mr-1'
            )}
          >
            Explore Market
          </Text>
          <Feather name="arrow-right" size={16} className="text-blue-500" />
        </Pressable>
      }
    />
  );
};

export default HomeFavouritesEmptyView;
