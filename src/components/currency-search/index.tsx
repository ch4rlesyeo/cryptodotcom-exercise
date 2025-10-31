import { useState } from 'react';
import { Pressable, View } from 'react-native';

import { Block } from '@/components/ui/block';
import { Text } from '@/components/ui/text';
import { SearchTextInput } from '@/components/ui/text-input/search';
import { useNavigation } from '@/utils/hooks/use-navigation';

import CurrencySearchCurrencyList from './currency-list';

export default function CurrencySearch() {
  const navigation = useNavigation();

  const [keyword, setKeyword] = useState('');

  const handleCancelPress = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Block className="flex-row">
        <SearchTextInput
          autoFocus={true}
          placeholder="Search currency here"
          defaultValue={keyword}
          onChangeText={setKeyword}
        />
        <View className="justify-center pl-4">
          <Pressable onPress={handleCancelPress}>
            <Text className="font-rubik-medium text-blue-600">Cancel</Text>
          </Pressable>
        </View>
      </Block>
      <CurrencySearchCurrencyList keyword={keyword} />
    </View>
  );
}
