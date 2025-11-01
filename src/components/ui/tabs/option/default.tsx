import { clsx } from 'clsx';
import { Pressable } from 'react-native';

import { Text } from '@/components/ui/text';
import { ITabOptionInternalProps } from '@/types/components/ui/tabs/option';

const DefaultTabOption: FC<ITabOptionInternalProps> = (props) => {
  const { selected, label, value, onPress } = props;

  const handleOptionPress = () => {
    onPress?.(value);
  };

  return (
    <Pressable
      onPress={handleOptionPress}
      className={clsx(
        'mr-6 h-10',
        'justify-center',
        'border-b-2',
        selected ? 'border-slate-800' : 'border-transparent'
      )}
    >
      <Text
        className={clsx(
          'font-medium',
          'text-lg',
          selected ? 'text-slate-800' : 'text-slate-400'
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export { DefaultTabOption };
