import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useCustomFonts } from '../fonts/use-custom-fonts';
import { useStorageHydration } from '../storage/use-storage-hydration';

export const useSplashScreen = () => {
  const { fontsLoaded, fontError } = useCustomFonts();
  const { hasHydrated } = useStorageHydration();

  useEffect(() => {
    const fontsOpsFinished = fontsLoaded || fontError;
    const storageOpsFinished = hasHydrated;

    if (fontsOpsFinished && storageOpsFinished) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError, hasHydrated]);
};
