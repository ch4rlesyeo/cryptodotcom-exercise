import '../global.css';

import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useSplashScreen } from '@/utils/splash-screen/use-splash-screen';

import RootNavigation from './navigation';
import { applyCssInterops } from './utils/helpers/styling';

SplashScreen.preventAutoHideAsync();
applyCssInterops();

export default function App() {
  useSplashScreen();

  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}
