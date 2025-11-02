import { Pressable, View } from 'react-native';

import { Block } from '@/components/block';
import { Text } from '@/components/text';
import { SearchTextInput } from '@/components/text-input/search';
import { useHomeNavigation } from '@/navigation/home/use-home-navigation';

interface ICurrencySearchInputProps {
  keyword: string;
  onKeywordChange: (keyword: string) => void;
}

const CurrencySearchInput: FC<ICurrencySearchInputProps> = (props) => {
  const { keyword, onKeywordChange } = props;

  const navigation = useHomeNavigation();

  const handleDonePress = () => {
    navigation.goBack();
  };

  return (
    <Block className="flex-row pb-4">
      <SearchTextInput
        autoFocus={true}
        placeholder="Search currency here"
        defaultValue={keyword}
        onChangeText={onKeywordChange}
      />
      <View className="justify-center pl-4">
        <Pressable onPress={handleDonePress}>
          <Text className="font-semibold text-blue-600">Done</Text>
        </Pressable>
      </View>
    </Block>
  );
};

export default CurrencySearchInput;
