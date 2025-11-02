import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CurrencySearch from '@/features/currency-search';
import Home from '@/features/home';

import { THomeStackParams } from './use-home-navigation';

export const HomeStack = createNativeStackNavigator<THomeStackParams>();

const HomeNavigation: FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeDefault" component={Home} />
      <HomeStack.Screen name="HomeCurrencySearch" component={CurrencySearch} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
