import '../global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CurrencySearch from '@/screens/currency-search';
import Home from '@/screens/home';
import { TStackParams } from '@/types/navigation';
import { useSplashScreen } from '@/utils/splash-screen/use-splash-screen';

import { applyCssInterops } from './utils/helpers/styling';

export const Stack = createNativeStackNavigator<TStackParams>();

SplashScreen.preventAutoHideAsync();
applyCssInterops();

export default function App() {
  useSplashScreen();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CurrencySearch"
            component={CurrencySearch}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
