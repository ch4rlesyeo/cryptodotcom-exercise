import { View } from 'react-native';

import HomeHeader from './header';
import HomeTabs from './tabs';
import HomeTabsPagerView from './tabs/pagerview';

export default function Home() {
  return (
    <View className="flex-1">
      <HomeHeader />
      <HomeTabs />
      <HomeTabsPagerView />
    </View>
  );
}
