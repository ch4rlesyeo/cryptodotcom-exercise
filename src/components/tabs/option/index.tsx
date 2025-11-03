import { clsx } from 'clsx';
import { useMemo } from 'react';
import { Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Text } from '@/components/text';

export type TTabOptionSize = 'small' | 'default';

export interface ITabOption {
  label: string;
  value: string;
}

export interface ITabOptionInternalProps extends ITabOption {
  size?: TTabOptionSize;
  selected?: boolean;
  onPress?: (nextValue: string) => void;
}

export enum ETabOptionTestID {
  PRESSABLE = 'tab-option-pressable',
  TEXT = 'tab-option-text',
}

const TabOption: FC<ITabOptionInternalProps> = (props) => {
  const { size, selected, label, value, onPress } = props;

  const handleOptionPress = () => {
    onPress?.(value);
  };

  const pressableClassName = useMemo(() => {
    switch (size) {
      case 'small':
        return clsx('mr-5 h-8', 'justify-center');
      default:
        return clsx(
          'mr-6 h-10',
          'justify-center',
          'border-b-2',
          selected ? 'border-slate-800' : 'border-transparent'
        );
    }
  }, [selected, size]);

  const textClassName = useMemo(() => {
    switch (size) {
      case 'small':
        return clsx('text-base');
      default:
        return clsx('text-lg');
    }
  }, [size]);

  return (
    <Pressable
      testID={ETabOptionTestID.PRESSABLE}
      onPress={handleOptionPress}
      className={pressableClassName}
    >
      <Text
        testID={ETabOptionTestID.TEXT}
        className={twMerge(
          'font-medium',
          selected ? 'text-slate-800' : 'text-slate-400',
          textClassName
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export { TabOption };
