import { useNavigation as useNavigationRN } from '@react-navigation/native';

import type { TNavigationParams } from '@/types/navigation';

export const useNavigation = () => {
  return useNavigationRN<TNavigationParams>();
};
