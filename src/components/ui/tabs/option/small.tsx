import { clsx } from 'clsx';
import { Pressable } from 'react-native';

import { Text } from '@/components/ui/text';
import { ITabOptionInternalProps } from '@/types/components/ui/tabs/option';

const SmallTabOption: FC<ITabOptionInternalProps> = (props) => {
  const { selected, label, value, onPress } = props;

  const handleOptionPress = () => {
    onPress?.(value);
  };

  return (
    <Pressable
      onPress={handleOptionPress}
      className={clsx('mr-5 h-8', 'justify-center')}
    >
      <Text
        className={clsx(
          'font-medium',
          selected ? 'text-slate-800' : 'text-slate-400'
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export { SmallTabOption };
