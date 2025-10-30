import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import type { ITabsProps } from '@/types/components/ui/tabs';

import { TabOption } from './option';

const Tabs: FC<ITabsProps> = (props) => {
  const { size = 'default', value, options, onChangeTab } = props;

  const [selectedTab, setSelectedTab] = useState(value);

  const handleTabOptionChange = (nextValue: string, nextPageNo: number) => {
    setSelectedTab(nextValue);
    onChangeTab?.(nextValue, nextPageNo);
  };

  useEffect(() => {
    setSelectedTab(value);
  }, [value]);

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
            selected={option.value === selectedTab}
            onPress={handleTabOptionChange}
            {...option}
          />
        );
      })}
    </ScrollView>
  );
};

export { Tabs };
