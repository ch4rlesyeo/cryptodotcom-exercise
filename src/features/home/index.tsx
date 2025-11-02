import { View } from 'react-native';

import { ScreenRootView } from '@/components/screen-root-view';

import OverviewContents from './views/overview-contents';
import OverviewTabs from './views/overview-tabs';
import SearchView from './views/search';

export default function Home() {
  return (
    <ScreenRootView>
      <View className="flex-1">
        <SearchView />
        <OverviewTabs />
        <OverviewContents />
      </View>
    </ScreenRootView>
  );
}
