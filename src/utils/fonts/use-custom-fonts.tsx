import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  useFonts,
} from '@expo-google-fonts/rubik';

export const useCustomFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });

  return {
    fontError,
    fontsLoaded,
  };
};
