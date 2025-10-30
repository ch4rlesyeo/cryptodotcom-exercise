import { Pressable, View } from 'react-native';

import { Block } from '@/components/ui/block';
import { Text } from '@/components/ui/text';
import { SearchTextInput } from '@/components/ui/text-input/search';
import { useNavigation } from '@/utils/hooks/use-navigation';

export default function CurrencySearch() {
  const navigation = useNavigation();

  const handleCancelPress = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Block className="flex-row">
        <SearchTextInput placeholder="Search currency here" autoFocus={true} />
        <View className="justify-center pl-4">
          <Pressable onPress={handleCancelPress}>
            <Text className="font-rubik-medium text-blue-600">Cancel</Text>
          </Pressable>
        </View>
      </Block>
    </View>
  );
}
