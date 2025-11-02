import { View } from 'react-native';

import MarketCategoryContentsView from './views/category-contents';
import MarketCategoryTabsView from './views/category-tabs';

const HomeMarket: FC = () => {
  return (
    <View className="flex-1">
      <MarketCategoryTabsView />
      <MarketCategoryContentsView />
    </View>
  );
};

export default HomeMarket;
