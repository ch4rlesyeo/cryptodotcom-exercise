import { Block } from '@/components/block';
import { SearchTextInput } from '@/components/text-input/search';
import { useHomeNavigation } from '@/navigation/home/use-home-navigation';

const HomeSearchView: FC = () => {
  const navigation = useHomeNavigation();

  const handleInputPanelPress = () => {
    navigation.navigate('HomeCurrencySearch');
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

export default HomeSearchView;
