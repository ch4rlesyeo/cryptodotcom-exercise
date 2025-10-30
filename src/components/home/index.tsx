import { View } from 'react-native';

import HomeHeader from './header';
import HomeTabs from './tabs';

export default function Home() {
  return (
    <View className="flex-1">
      <HomeHeader />
      <HomeTabs />
    </View>
  );
}
