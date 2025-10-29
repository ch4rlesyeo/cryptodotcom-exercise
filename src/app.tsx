import '../global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from '@/screens/home';
import { useCustomFonts } from '@/utils/hooks/use-custom-fonts';
import { useSplashScreen } from '@/utils/hooks/use-splash-screen';

const Stack = createNativeStackNavigator();

// Keep the splash screen visible while fetching essential resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, fontError } = useCustomFonts();

  useSplashScreen({
    fontsLoaded,
    fontError,
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
