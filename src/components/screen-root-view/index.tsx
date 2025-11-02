import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

const ScreenRootView: FC<SafeAreaViewProps> = (props) => {
  const { children, className } = props;

  return (
    <SafeAreaView className={twMerge(className, 'flex-1 pt-2')}>
      {children}
    </SafeAreaView>
  );
};

export { ScreenRootView };
