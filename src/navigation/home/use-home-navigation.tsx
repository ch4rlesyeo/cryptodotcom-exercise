import { useNavigation as useNavigationNative } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type THomeStackParams = {
  HomeDefault: undefined;
  HomeCurrencySearch: undefined;
};

export type THomeNavigationParams = NativeStackNavigationProp<THomeStackParams>;

export const useHomeNavigation = () => {
  return useNavigationNative<THomeNavigationParams>();
};
