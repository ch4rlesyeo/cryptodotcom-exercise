import { SafeAreaView } from 'react-native-safe-area-context';

import Home from '@/components/home';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Home />
    </SafeAreaView>
  );
}
