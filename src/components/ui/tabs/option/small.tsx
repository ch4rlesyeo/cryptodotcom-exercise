import { clsx } from 'clsx';
import { Pressable } from 'react-native';

import { Text } from '@/components/ui/text';
import type { ITabOptionInternalProps } from '@/types/components/ui/tabs/option';

const SmallTabOption: FC<ITabOptionInternalProps> = (props) => {
  const { selected, label, value, pageIndex, onPress } = props;

  const handleOptionPress = () => {
    onPress?.(value, pageIndex);
  };

  return (
    <Pressable
      onPress={handleOptionPress}
      className={clsx('mr-5 h-8', 'justify-center')}
    >
      <Text
        className={clsx(
          'font-rubik-medium',
          selected ? 'text-slate-800' : 'text-slate-400'
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export { SmallTabOption };
