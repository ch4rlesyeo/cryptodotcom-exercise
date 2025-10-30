import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const ScreenRootView: FC<SafeAreaViewProps> = (props) => {
  const { children, className } = props;

  return (
    <SafeAreaView className={`flex-1 pt-2 ${className}`}>
      {children}
    </SafeAreaView>
  );
};

export { ScreenRootView };
