import { useNavigation as useNavigationNative } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TRootStackParams = {
  Home: undefined;
};

export type TRootNavigationParams = NativeStackNavigationProp<TRootStackParams>;

export const useRootNavigation = () => {
  return useNavigationNative<TRootNavigationParams>();
};
