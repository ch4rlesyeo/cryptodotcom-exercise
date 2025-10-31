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
    </Block>
  );
};

export default HomeHeader;
