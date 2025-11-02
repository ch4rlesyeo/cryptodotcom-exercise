import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { clsx } from 'clsx';
import { Pressable } from 'react-native';

import { EmptyView } from '@/components/empty-view';
import { Text } from '@/components/text';
import { useHomeOverviewTabs } from '@/features/home/views/overview-tabs/hooks/user-overview-tabs';
import { HOME_OVERVIEW_TABS } from '@/features/home/views/overview-tabs/stores/overview-tabs';

const HomeFavouritesEmptyList: FC = () => {
  const { setPage } = useHomeOverviewTabs();

  const handleGoToMarketTab = () => {
    setPage(HOME_OVERVIEW_TABS.Market.pageIndex);
  };

  return (
    <EmptyView
      primaryText="Nothing here yet"
      secondaryText="Add some favourites to get started."
      icon={
        <Ionicons
          name="telescope-outline"
          size={36}
          className="text-slate-300"
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

export default HomeFavouritesEmptyList;
