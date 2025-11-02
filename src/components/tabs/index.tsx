import { ScrollView } from 'react-native';

import { ITabOption, TabOption, TTabOptionSize } from './option';

export interface ITabsProps {
  size?: TTabOptionSize;
  value?: string;
  options: ITabOption[];
  onChangeTab?: (value: string) => void;
}

const Tabs: FC<ITabsProps> = (props) => {
  const { size = 'default', value, options, onChangeTab } = props;

  const handleTabOptionChange = (nextValue: string) => {
    onChangeTab?.(nextValue);
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="flex-row"
    >
      {options.map((option) => {
        return (
          <TabOption
            key={option.value}
            size={size}
            selected={option.value === value}
            onPress={handleTabOptionChange}
            {...option}
          />
        );
      })}
    </ScrollView>
  );
};

export { Tabs };
