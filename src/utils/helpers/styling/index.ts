import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { cssInterop } from 'nativewind';
import PagerView from 'react-native-pager-view';

export const applyCssInterops = () => {
  cssInterop(Ionicons, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
      },
    },
  });

  cssInterop(Feather, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
      },
    },
  });

  cssInterop(PagerView, {
    className: 'style',
  });
};
