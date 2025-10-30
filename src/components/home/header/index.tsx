import Feather from '@expo/vector-icons/Feather';
import { Pressable, View } from 'react-native';

import { Block } from '@/components/ui/block';
import { SearchTextInput } from '@/components/ui/text-input/search';
import { useNavigation } from '@/utils/hooks/use-navigation';

const HomeHeader: FC = () => {
  const navigation = useNavigation();

  const handleInputPanelPress = () => {
    navigation.navigate('CurrencySearch');
  };

  return (
    <Block className="flex-row">
      <SearchTextInput
        onPressPanel={handleInputPanelPress}
        editable={false}
        placeholder="Search currency here"
      />
      <View className="justify-center pl-4">
        <Pressable>
          <Feather name="menu" size={22} className="text-slate-700" />
        </Pressable>
      </View>
    </Block>
  );
};

export default HomeHeader;
