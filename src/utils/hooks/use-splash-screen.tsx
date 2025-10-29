import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

interface IUseSplashScreenProps {
  fontsLoaded?: boolean;
  fontError?: Error | null;
}

export const useSplashScreen = (props: IUseSplashScreenProps) => {
  const { fontsLoaded, fontError } = props;

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
};
