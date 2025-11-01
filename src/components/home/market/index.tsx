import { View } from 'react-native';

import MarketTabs from './tabs';
import MarketTabsPagerView from './tabs/pagerview';

const HomeMarket: FC = () => {
  return (
    <View className="flex-1">
      <MarketTabs />
      <MarketTabsPagerView />
    </View>
  );
};

export default HomeMarket;
