import { useNavigation as useNavigationNative } from '@react-navigation/native';

import { TNavigationParams } from '@/types/navigation';

export const useNavigation = () => {
  return useNavigationNative<TNavigationParams>();
};
